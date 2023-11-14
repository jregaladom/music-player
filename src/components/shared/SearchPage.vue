<template>
    <Transition name="move">
        <div class="flex flex-col items-center">
            <player-view />
        </div>
    </Transition>
    <Transition name="move">
        <alert-message v-if="isAlertMessage">
            <template #content>
                {{ messageError }}
            </template>
        </alert-message>
    </Transition>


    <div class="flex-1 p-4">
        <div class="relative mx-4 my-2">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type="search" id="search" autocomplete="off"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                v-model="searchQuery" @keyup.enter="searchSong" placeholder="Buscar canciones" required>
            <button type="submit" @click="searchSong"
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
        </div>
        <div class="mx-auto max-w-2xl text-center mt-5">
            <h2 class="text-base font-semibold leading-7 text-blue-600">Canciones encontradas: <span
                    class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{{
                        tracksFound }}</span>
            </h2>
        </div>
        <div class="w-full m-3">

            <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-2">
                <track-item v-for="track in tracks" :key="track.id" :track="track" />
            </div>
        </div>
    </div>
    <loading-page v-if="isLoading" />
</template>
<script>
import trackService from '@/services/trackService';
import TrackItem from '@/components/TrackItem.vue';
import LoadingPage from '@/components/shared/LoadingPage.vue';
import AlertMessage from '@/components/shared/AlertMessage.vue';
import PlayerView from '@/components/PlayerView.vue';
import { useTrackStore } from '@/store/track.store';

export default {
    name: 'App',
    components: {
        TrackItem,
        LoadingPage,
        AlertMessage,
        PlayerView
    },
    data() {
        return {
            searchQuery: '',
            tracks: [],
            isLoading: false,
            messageError: 'Ocurrio un problema',
            isAlertMessage: false,
            selectedTrack: useTrackStore().track,
        }
    },
    computed: {
        tracksFound() {
            return this.tracks.length;
        }
    },
    watch: {
        isAlertMessage(value) {
            if (value) {
                setTimeout(() => {
                    this.isAlertMessage = false
                }, 3000);
            }
        }
    },
    methods: {
        searchSong() {
            this.isLoading = true
            trackService.search(this.searchQuery)
                .then(response => {
                    this.tracks = response.data;
                    this.isLoading = false
                })
                .catch(error => {
                    this.isAlertMessage = true
                    this.isLoading = false
                    this.messageError = error
                });
        },
    },
}
</script>
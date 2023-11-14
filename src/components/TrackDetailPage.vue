<template>
    <div class="flex justify-center w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl m-4"
        :class="isLoading ? 'animate-pulse' : ''">
        <div
            class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
            <img :src="track?.album?.cover_medium" loading="lazy" decoding="async" alt=""
                class="object-cover w-full h-full" />
        </div>
        <div class="p-6">
            <h6
                class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                {{ track?.artist?.name }}
            </h6>
            <h4
                class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {{ track?.title }}
            </h4>
            <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                Album: {{ track?.album?.title }}
            </p>
            <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                Rleased: {{ track?.album?.release_date }}
            </p>

        </div>
    </div>
    <loading-page v-if="isLoading" />
</template>
<script>
import { useRoute } from 'vue-router';
// import trackService from '@/services/trackService';
import LoadingPage from '@/components/shared/LoadingPage.vue';

import { useTrackStore } from '@/store/track.store';

export default {
    name: 'TrackDetailPage',
    components: {
        LoadingPage,
    },
    data() {
        return {
            //track: useTrackStore().track,
            isLoading: true
        }
    },
    computed: {
        track() {
            return useTrackStore().track;
        }
    },
    watch: {},
    created() {
        const trackStore = useTrackStore();
        const route = useRoute();
        if (!trackStore.track?.id) {
            console.log('No hay track');
            trackStore.setTrackById(route.params.id).then(() => {
                //this.isLoading = false;
                this.changeLoading()
            }).catch(() => {
                //this.isLoading = false;
                this.changeLoading()
            });
        } else {
            console.log('Si hay track');
            this.isLoading = false;
        }
    },
    methods: {
        changeLoading() {
            setTimeout(() => {
                this.isLoading = false;
            }, 1000);
        }
        // async fetchDetailTrack() {
        //     this.isLoading = true;
        //     const route = useRoute();
        //     trackService.getById(route.params.id)
        //         .then(response => {
        //             this.track = response;
        //             this.isLoading = false;
        //         })
        //         .catch(error => {
        //             this.isLoading = false;
        //             console.log(error);
        //         });
        // }
    },
}
</script>
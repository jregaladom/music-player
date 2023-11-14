<script>
import { useTrackStore } from '@/store/track.store';

export default {
    name: 'PlayerView',
    data() {
        return {
            isPlaying: true,
            currentTime: 0,
            duration: 0
        }
    },
    computed: {
        track() {
            return useTrackStore().getTrack;
        },
        isSelectedTrack() {
            return this.track?.id ? true : false;
        },
    },
    watch: {
        track(newValue, OldValue) {
            if (newValue?.id != OldValue?.id) {
                this.isPlaying = true;
            }
        },
    },
    unmounted() {
        if (this.$refs.audio) {
            this.$refs.audio.removeEventListener('timeupdate', this.updateProgressBar);
        }
    },
    methods: {
        toggleAudio() {
            const audioElement = this.$refs.audio;

            if (this.isPlaying) {
                audioElement.pause();
            } else {
                audioElement.play();
            }

            this.isPlaying = !this.isPlaying;
        },
        updateProgressBar() {
            if (this.$refs.audio) {
                this.currentTime = this.$refs.audio.currentTime;
                this.duration = this.$refs.audio.duration;
            }
        },
        seekTo(event) {
            const audioElement = this.$refs.audio;
            audioElement.currentTime = event.target.value;
        },
    },
}
</script>
<template>
    <div class="mt-6 sm:mt-10 relative z-10 rounded-xl shadow-xl w-full md:w-6/12 xl:w-3/12 px-4">
        <div
            class="bg-white border-slate-100 transition-all duration-500 dark:bg-slate-800 transition-all duration-500 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
            <div class="flex items-center space-x-4">
                <img :src="track?.album?.cover_small" loading="lazy" decoding="async" alt=""
                    class="flex-none rounded-lg bg-slate-100" width="88" height="88">
                <div class="min-w-0 flex-auto space-y-1 font-semibold">
                    <h2 class="text-slate-500 transition-all duration-500 dark:text-slate-400 text-sm leading-6 truncate">
                        {{ track?.artist?.name }}
                    </h2>
                    <p class="text-slate-900 transition-all duration-500 dark:text-slate-50 text-lg">
                        {{ track?.title }}
                    </p>
                </div>
            </div>
            <div class="space-y-2">
                <div class="relative">
                    <input id="default-range" type="range" :value="currentTime" :max="duration" @input="seekTo"
                        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                </div>
            </div>
        </div>
        <div
            class="bg-slate-50 text-slate-500 transition-all duration-500 dark:bg-slate-600 transition-all duration-500 dark:text-slate-200 rounded-b-xl flex items-center">
            <div class="flex-auto flex items-center justify-evenly">
            </div>
            <button @click="toggleAudio" type="button"
                class="bg-white text-slate-900 transition-all duration-500 dark:bg-slate-100 transition-all duration-500 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center"
                aria-label="Pause" :disabled="!isSelectedTrack">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-10 h-10" v-if="isPlaying">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-10 h-10" v-if="!isPlaying">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
            </button>
            <audio ref="audio" :src="track?.preview" @timeupdate="updateProgressBar" autoplay></audio>
            <div class="flex-auto flex items-center justify-evenly">
            </div>
        </div>
    </div>
</template>
<script>
import { useTrackStore } from '@/store/track.store';
export default {
    name: 'TrackItem',
    props: {
        // isSelected: {
        //     type: Boolean,
        //     required: false,
        //     default: false
        // },
        track: {
            type: Object,
            required: true,
            default: () => ({
                id: 0,
                title: 'Unknow Track',
                artist: {
                    name: 'Unknow Artist Name'
                },
                album: {
                    cover_medium: 'https://via.placeholder.com/300',
                    title: 'Unknow Album Title'
                }
            })
        }
    },
    setup: () => {
        const trackStore = useTrackStore();
        const setTrack = (track) => {
            trackStore.setTrack(track);
        }
        return {
            setTrack,
        }
    },
    data() {
        return {
            trackSelected: useTrackStore()
        }
    },
    computed: {
        secondsToMinutes() {
            const template = "00";
            const minutes = Math.floor(this.track.duration / 60);
            const secondsRemainder = Math.floor(this.track.duration % 60);
            return `${(template + minutes).slice(-template.length)}:${(template + secondsRemainder).slice(-template.length)} minutes`;
        },
        isSelected() {
            const idTrack = this.trackSelected.track?.id ? this.trackSelected.track.id : 0;
            return idTrack === this.track.id;
        }
    },
    methods: {
        playTrack() {
            this.setTrack(this.track);
        },
        detailTrack() {
            this.setTrack(this.track);
            this.$router.push(`/track/${this.track.id}/`);
        }
    }
}
</script>
<template>
    <div class=" shadow-md rounded-md overflow-hidden m-4" :class="isSelected ? 'bg-green-600' : 'bg-zinc-600'">
        <img :src="track.album.cover_medium" alt="Track Image" class="w-full h-40 object-cover" />
        <div class="p-4">
            <div class="flex flex-col items-center justify-center">
                <h3 class="text-lg font-semibold mb-2 text-white">{{ track.title }}</h3>
                <p class="text-sm mb-4 text-white">Artista: {{ track.artist.name }}</p>
                <p class="text-xs mb-4 text-white">{{ secondsToMinutes }}</p>
            </div>
            <div class="flex justify-between">
                <button @click="playTrack" class="bg-transparent text-white p-2 rounded-md">
                    <svg class="w-12 h-12" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"
                        fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <polygon style="fill:#FFFFFF;" points="187.368,146.928 187.368,355.8 382.992,251.368 ">
                            </polygon>
                            <path style="fill:#4db238;"
                                d="M256,0.376C114.616,0.376,0,114.824,0,256s114.616,255.624,256,255.624S512,397.176,512,256 S397.384,0.376,256,0.376z M184.496,146.928l195.624,104.44L184.496,355.8V146.928z">
                            </path>
                        </g>
                    </svg>
                </button>
                <button @click="detailTrack" class="bg-transparent text-white p-2 rounded-md">
                    <svg class="w-6 h-6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        fill="#FFFFFF">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M320 89.6h640v76.8H320V89.6z m0 768h640v76.8H320v-76.8z m-256-768h128v76.8H64V89.6z m256 384h640v76.8H320V473.6z m-256 0h128v76.8H64V473.6z m0 384h128v76.8H64v-76.8z"
                                fill="#4db238"></path>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
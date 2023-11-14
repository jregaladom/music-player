import { defineStore } from 'pinia'
import trackService from '@/services/trackService';
const STORE_NAME = 'track'
const _default = {
    id: 0,
    title: 'Unknow Track',
    artist: {
        name: 'Unknow Artist Name'
    },
    album: {
        cover_small: 'https://via.placeholder.com/300',
        cover_medium: 'https://via.placeholder.com/300',
        title: 'Unknow Album Title'
    }
}
export const useTrackStore = defineStore(STORE_NAME, {
    state: () => ({
        track: _default
    }),
    getters: {
        getTrack() {
            return this.track
        },
        getTrackId() {
            return this.track?.id
        },
    },
    actions: {
        setTrack(track) {
            this.track = track
        },
        togglePlaying() {
            this.playing = !this.playing
        },
        async setTrackById(id) {
            trackService.getById(id)
                .then(response => {
                    this.track = response;
                })
                .catch(error => {
                    console.log(error);
                    this.track = _default;
                });
        }
    },
})
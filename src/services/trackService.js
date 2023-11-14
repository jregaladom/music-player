import musicService from "./musicService";

const trackService = {

};

trackService.search = function (q) {
    return musicService.get('/search', { params: { q } })
        .then(res => res.data);
}

trackService.getById = function (id) {
    return musicService.get(`/track/${id}`)
        .then(res => res.data);
}

export default trackService;
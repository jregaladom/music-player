import { createWebHistory, createRouter } from "vue-router";
import SearchPage from "@/components/shared/SearchPage.vue";
import AboutPage from "@/components/AboutPage.vue";
import TrackDetailPage from "@/components/TrackDetailPage.vue";

const routes = [
    {
        path: "/",
        name: "search",
        component: SearchPage,
    },
    {
        path: "/about",
        name: "about",
        component: AboutPage,
    },
    {
        path: "/track/:id",
        name: "track",
        component: TrackDetailPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
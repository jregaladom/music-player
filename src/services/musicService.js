import axios from "axios";
import configService from "./config";

const musicService = axios.create({
    baseURL: configService.apiUrl,
    timeout: 1000,
    headers: {
        'X-RapidAPI-Key': configService.apiKey,
        'X-RapidAPI-Host': configService.apiHost
    }
});

export default musicService;
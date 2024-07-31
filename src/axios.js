import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.jvirag.sk/api',
    withCredentials: true,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const STORAGE_URL = 'https://api.jvirag.sk/storage/app/public/';

export const getCsrfCookie = async () => {
    try {
        await axiosInstance.get('https://api.jvirag.sk/sanctum/csrf-cookie');
    } catch (error) {
        return null;
    }
};

export default axiosInstance;

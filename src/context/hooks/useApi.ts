import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            'content-type': 'application/json',
        };

        const response = await api.get('/profile/', { headers });
        return response.data;
    },

    signin: async (email: string, password: string) => {
        const response = await api.post('/tokens/', {email, password});
        return response.data;
    },

    logout: async () => {
        const response = await api.post('/logout/');
    }
})
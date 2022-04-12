import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'bf0a45fd-7838-4bec-9b72-3f203f5ee23d'
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    follow(userId) {
        return axiosInstance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return axiosInstance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
}
export const profileAPI = {
    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        return axiosInstance.put(`profile/status`, { status: status })
            .then(response => response.data);
    }

}
export const authAPI = {
    me() {
        return axiosInstance.get(`auth/me`).then(response => response.data);
    },
    logIn(email, password, rememberMe = false) {
        return  axiosInstance.post('auth/login', {email, password, rememberMe}).then(response => response.data);
    },
    logOut() {
        return axiosInstance.delete('auth/login').then(response => response.data);
    }
}
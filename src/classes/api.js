import axios from "axios";
const BASEURL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
    baseURL: BASEURL + 'api/'
})

export default class API {
    static async getTags(){
        const response = await axiosInstance.get("tags/");
        return response.data;
    }

    static async getEquipment(){
        const response = await axiosInstance.get("equipment/")
    }

    static async getExercises(){
        const response = await axiosInstance.get("exercises/");
        return response.data;
    }

    static async getSingleExercise(id){
        const response = await axiosInstance.get(`exercises/${id}`);
        return response.data;
    }

    static async deleteExercise(id){
        const response = await axiosInstance.delete(`exercises/${id}`);
        return response.data;
    }

    static async getGuides(){
        const response = await axiosInstance.get("guides/");
        return response.data;
    }

    static async getSingleGuide(id){
        const response = await axiosInstance.get(`guides/${id}/`);
        return response.data;
    }

    static async updateGuide(id){
        const response = await axiosInstance.put(`guides/${id}/`)
        return response.data;
    }

    static async deleteGuide(id){
        const response = await axiosInstance.delete(`guides/${id}/`)
        return response.data;
    }

    static async getAuthors(){
        const response = await axiosInstance.get(`authors/`)
        return response.data;
    }

    static async postGuide(data){
        const response = await axiosInstance.post(`guides/`,data)
        return response;
    }

}

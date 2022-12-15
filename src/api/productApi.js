import axiosClient from "./axiosClient";

const productApi = {
    getAll(params){
        const url = '/products'
        return axiosClient.get(url, {params})
    },
    getBestSeller(params){
        const url = '/products/best-seller'
        return axiosClient.get(url, {params})
    },
    getLatest(params){
        const url = '/products/latest'
        return axiosClient.get(url, {params})
    },
    get(id){
        const url = `/products/${id}`
        return axiosClient.get(url);
    },
    add(data){
        const url = '/products'
        return axiosClient.post(url, data);
    },
    update(data){
        const url = `/products/${data.id}`
        return axiosClient.patch(url, data);
    },
    remove(id){
        const url = `/products/${id}`
        return axiosClient.delete(url);
    },
    getByProductId(id){
        const url = `/pictures/productPic/${id}`
        return axiosClient.get(url);
    }
};

export default productApi;
import { defineStore } from "pinia";
import axios from "axios";

export const useProduct = defineStore('product', {
    state:()=>({
        products:[],
        singleProduct:{},
    }),

    getters: {


    },

    actions: {

        //get product

        async getData(type ) {
            try {
                const res = await axios.get('https://dummyjson.com/products');

                if (res.status === 200) {
                        this.products =res.data.products

                    return new Promise((resolve) => {
                        resolve(res.data.products);
                    });
                }
            } catch (error) {
                if (error.response.data) {
                    return new Promise((reject) => {
                        reject(error.response.data.message);
                    });
                }
            }
        },


        async getSingleProductDetails(productId ) {
            console.log("OurID",productId);

            try {
                const res = await axios.get(`https://dummyjson.com/products/${productId}`);
                if (res.status === 200) {

                  this.singleProduct =res.data
                    return new Promise((resolve) => {
                        resolve(res.data);
                    });
                }
            } catch (error) {
                if (error.response.data) {
                    return new Promise((reject) => {
                        reject(error.response.data.message);
                    });
                }
            }
        },


    }
})
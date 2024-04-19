/* eslint-disable no-useless-catch */
import axios from "axios";
import config from "../config/config";
const baseLink = config.baseUrl;

export default class API {
    static async getuserIdcartId (userData) {
         try {
            const response =  await axios.post(`${baseLink}/user-Info`,{
                  email: userData.email
              })
              return response.data
         } catch (error) {
             console.log(error);
         }
    }

    static async createUserCart ({ name, email }) {
        try {
            const response = await axios.post(`${baseLink}/create-user-cart`, {
                name,
                email
            });
            return response.data.userId;
        } catch (error) {
            console.log(error);
        }
    }

    static async getProducts () {
        try {
            const response = await axios.get(`${baseLink}/products`);
            return response.data;
        } catch (error) {
            console.log("error in getProducts::",error);
            throw error;
        }
    }

    static async addToCart (userId, productId, quantity) {
        try {
            const response = await axios.post(`${baseLink}/add-to-cart`, {
                userId,
                productId,
                quantity
            });
            return response.data;
        } catch (error) {
            console.log("error in addToCart::",error);
            throw error;
        }
        
    }

    static async getCartItems (userId) {
        try {
            const response = await axios.post(`${baseLink}/cart-items`, {
                userId
            });
            return response.data;
        } catch (error) {
            console.log("error in getCartItems::",error);
            throw error;
        }
    }

    static async updateCartItems (cartId, productId, quantity) {
    try {
        const response = await axios.put(`${baseLink}/update-cart-item`, {
            cartId,
            productId,
            quantity
        });
        return response.data;

    } catch (error) {
        console.log("error in updateCartItems::",error);
    } 
    }

    static async deleteCartItem (cartId, productId) {
        try {
            const response = await axios.delete(`${baseLink}/remove-from-cart`, {
                data: {
                    cartId,
                    productId
                }
            });
            return response.data;
        } catch (error) {
            console.log("error in deleteCartItem::",error);
            throw error;
        }
    }
}

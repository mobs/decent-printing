import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000" });
const API = axios.create({ baseURL: "https://decent-printing.onrender.com" });


API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});


// Product related APIs
export const fetchProducts = () => API.get("/product/getProducts");

export const addProduct = (newProduct) => API.post("/product/addProduct", newProduct);
export const fetchProductsByCategory = (category) => API.get("/product/productsByCategory", {
  params: {category}
});

export const deleteProduct = (id) => API.delete(`/product/deleteProduct/${id}`);
export const outOfStock = (id) => API.patch(`/product/outOfStock/${id}`);


// User related APIs
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);

// Gallery related Api
export const getData = () => API.get("/gallery/getData");
export const addData = (newData) => API.post("/gallery/addData", newData);
export const deleteData = (id) => API.delete(`/gallery/deleteData/${id}`)

// Banner related APIs
export const addBanner = (formData) => API.post("/banner/addBanner", formData);
export const getBanner = () => API.get("/banner/getBanner");
export const deleteBanner = (id) => API.delete(`/banner/deleteBanner/${id}`);
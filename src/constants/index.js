const API_URL = import.meta.env.VITE_API_URL

export const getRecommendations = `${API_URL}/api/v1/product?limit=8`
export const getSingleProduct = `${API_URL}/api/v1/product`
export const getProducts = `${API_URL}/api/v1/product/search?limit=12`

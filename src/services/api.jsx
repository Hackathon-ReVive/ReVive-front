import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al buscar usuario:", error);
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/${id}`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al borrar usuario", error);
    throw error;
  }
};

// Productos
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error al buscar productos:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al buscar producto:", error);
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/products`, productData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/products/${id}`,
      productData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al borrar producto:", error);
    throw error;
  }
};

// Órdenes
export const getOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders`);
    return response.data;
  } catch (error) {
    console.error("Error al buscar pedidos:", error);
    throw error;
  }
};

export const getOrderById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al buscar pedido:", error);
    throw error;
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/orders`, orderData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear pedido:", error);
    throw error;
  }
};

export const updateOrder = async (id, orderData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/orders/${id}`,
      orderData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al actualizar pedido:", error);
    throw error;
  }
};

export const deleteOrder = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al borrar pedido:", error);
    throw error;
  }
};

// Carrito
export const getCart = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}/cart`);
    return response.data;
  } catch (error) {
    console.error("Error al buscar el carro:", error);
    throw error;
  }
};

export const addToCart = async (userId, product) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/${userId}/cart`,
      product,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al añadir al carro:", error);
    throw error;
  }
};

export const removeFromCart = async (userId, productId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/users/${userId}/cart/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al revmover del carro:", error);
    throw error;
  }
};

import axios from "axios";

const API_URL = "http://localhost:5000/users";


export const getAllUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
};

export const addUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (error) {
    console.error("Error while adding user data:", error);
    throw error;
  }
};

export const addToInterest = async (userId, bike) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    const userData = response.data;

    const updatedInterest = [...userData.interest];
    if (!updatedInterest.some((b) => b.id === bike.id)) {
      updatedInterest.push(bike);
    }

    await axios.put(`${API_URL}/${userId}`, {
      ...userData,
      interest: updatedInterest,
    });

    return { success: true, message: "Bike added to interest!" };
  } catch (error) {
    console.error("Error updating interest:", error);
    return { success: false, message: "Failed to update interest!" };
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};


export const addToSell = async (userId, bike) => {
  try {
    const userData = await getUserById(userId);
    if (!userData) throw new Error("User not found");

    
    const updatedSellList = Array.isArray(userData.sell) ? [...userData.sell, bike] : [bike];

    
    await axios.put(`${API_URL}/${userId}`, {
      ...userData,
      sell: updatedSellList,
    });

    return { success: true, message: "Bike listed for sale!" };
  } catch (error) {
    console.error("Error adding bike for sale:", error);
    return { success: false, message: "Failed to add bike for sale!" };
  }
};

export const addToServices = async (userId, user, service) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    const userData = response.data;

    const updatedServices = [...userData.servicesAndModifications, service];

    await axios.put(`${API_URL}/${userId}`, {
      ...userData,
      servicesAndModifications: updatedServices,
    });

    return { success: true, message: "Service added successfully!" };
  } catch (error) {
    console.error("Error adding service:", error);
    return { success: false, message: "Failed to add service!" };
  }
};


export const addToMyPurchase = async (userId, order) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    const userData = response.data;

    const isOrderExists = userData.myPurchase.some(
      (p) => p.orderNumber === order.orderNumber
    );

    if (isOrderExists) {
      return { success: false, message: "Order already exists in My Purchases!" };
    }

    const updatedMyPurchase = [...userData.myPurchase, order];

    await axios.put(`${API_URL}/${userId}`, {
      ...userData,
      myPurchase: updatedMyPurchase,
    });

    return { success: true, message: "Purchase added successfully!" };
  } catch (error) {
    console.error("Error adding Purchase:", error);
    return { success: false, message: "Failed to add Purchase!" };
  }
};

export const fetchUserDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return null;
  }
};






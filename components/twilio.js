import axios from 'axios';

// Replace with your Mac's IP address if getting a Network Error
const BACKEND_URL = 'http://10.128.208.144:3000';

export const sendOtp = async (phoneNumber) => {
  try {
    console.log("in send OTP");
    const response = await axios.post(`${BACKEND_URL}/send-otp`, { phoneNumber });
    return response.data;
  } catch (error) {
    console.error('Failed to send OTP:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const verifyOtp = async (code) => {
  try {
    console.log("in verify 1");
    const response = await axios.post(`${BACKEND_URL}/verify-otp`, { code });
    console.log("in verify 2");
    return response.data;
  } catch (error) {
    console.error('Failed to verify OTP:', error.response ? error.response.data : error.message);
    throw error;
  }
};

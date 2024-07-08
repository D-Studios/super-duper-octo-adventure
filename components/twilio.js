import axios from 'axios';

// Replace with your Mac's IP address assigned by the phone hotspot
const BACKEND_URL = 'http://localhost:3000';

export const sendOtp = async (phoneNumber) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/send-otp`, { phoneNumber });
    return response.data;
  } catch (error) {
    console.error('Failed to send OTP:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const verifyOtp = async (phoneNumber, code) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/verify-otp`, { phoneNumber, code });
    return response.data;
  } catch (error) {
    console.error('Failed to verify OTP:', error.response ? error.response.data : error.message);
    throw error;
  }
};

import axios from 'axios';

const API_URL = 'http://localhost:5000';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json', // Corrected content-type
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // Stop global loader here
    return processResponse(response);
  },
  function (error) {
    // Stop global loader here
    return Promise.reject(processError(error)); // Corrected function name
  }
);

const processResponse = (response) => {
  if (response?.status === 200) {
    return {
      isSuccess: true,
      data: response.data,
    };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.data?.msg, // Corrected property name to access msg
      code: response?.data?.code, // Corrected property name to access code
    };
  }
};

const processError = async (error) => {
  if (error.response) {
    console.log('ERROR IN RESPONSE: ', error);
    return {
      isError: true,
      code: error.response.status,
    };
  } else if (error.request) {
    // The request was made but no response was received
    console.log('ERROR IN REQUEST: ', error);
    return {
      isError: true,
      code: '',
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('ERROR IN REQUEST SETUP: ', error);
    return {
      isError: true,
      code: '',
    };
  }
};

// Signup API
export const Signupuser = async (data) => {
  return await axiosInstance.post('/signup', data);
};

// Login API
export const Loginuser = async (data) => {
  return await axiosInstance.post('/login', data);
};

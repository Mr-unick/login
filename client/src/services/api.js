

import axios from 'axios';


const API_URL = 'https://login-avwl9n9hc-mr-unick.vercel.app';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000, 
    headers: {
        "content-type": "application/json"
    }
});

axiosInstance.interceptors.request.use(
    function(config) {
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function(response) {
        // Stop global loader here
        return processResponse(response);
    },
    function(error) {
        // Stop global loader here
        return Promise.reject(ProcessError(error));
    }
)

const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, 
            data: response.data }
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}

const ProcessError = async (error) => {
    if (error.response) {
            console.log("ERROR IN RESPONSE: ", error);
            return {
                isError: true,
                code: error.response.status
            }
        }
    else if (error.request) { 
        // The request was made but no response was received
        console.log("ERROR IN RESPONSE: ", error);
        return {
            isError: true,
            code: ""
        }
    } else { 
        // Something happened in setting up the request that triggered an Error
        console.log("ERROR IN RESPONSE: ", error);
        return {
            isError: true,
            code: ""
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//singup API
export const Signupuser=async(data)=>{
        return await axiosInstance.post('/signup',data)
    }

// Login APi
export const Loginuser=async(data)=>{
    return await axiosInstance.post('/login',data)
}
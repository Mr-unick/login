const API_URL = 'http://localhost:5000';

const fetchOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  // You can add other options like credentials, headers, etc., here if needed
};

const processResponse = async (response) => {
  if (response.status === 200) {
    return {
      isSuccess: true,
      data: await response.json(),
    };
  } else {
    const errorData = await response.json();
    return {
      isFailure: true,
      status: response.status,
      msg: errorData.msg,
      code: errorData.code,
    };
  }
};

const processError = (error) => {
  console.error('ERROR: ', error);
  return {
    isError: true,
    code: '',
  };
};

// Signup API
export const Signupuser = async (data) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      ...fetchOptions,
      body: JSON.stringify(data),
    });
    return await processResponse(response);
  } catch (error) {
    return processError(error);
  }
};

// Login API
export const Loginuser = async (data) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      ...fetchOptions,
      body: JSON.stringify(data),
    });
    return await processResponse(response);
  } catch (error) {
    return processError(error);
  }
};

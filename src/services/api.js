// src/services/api.js
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export default api;





// // src/services/api.js
// import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_API_URL;

// const api = axios.create({
//   baseURL: BASE_URL,
//   timeout: 10000,
// });

// export default api;

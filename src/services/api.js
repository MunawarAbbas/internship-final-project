// src/services/api.js
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'https://bookish-journey-w54qg7g4xqrf9x47-5000.app.github.dev/api';

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

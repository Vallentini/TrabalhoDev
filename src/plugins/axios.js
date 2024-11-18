import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWFlNWQ1YzUxNjk0M2UxMmQzNzQyZGI2ODNmNWI2MCIsIm5iZiI6MTczMTk0OTk2OS4zNjY0OTg1LCJzdWIiOiI2NzMyNDEyNjYxNjI2YWMxMDZiZTdmZTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5ztCAUSfUMDsfY7Kxv33qe8cDp3y3wKs6m5z-Z-JFV0`,
  },
});

export default api;
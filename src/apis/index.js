import axios from 'axios';
export const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users?_limit=2');
export const getUser = (id) => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

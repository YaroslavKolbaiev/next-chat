import { io } from 'socket.io-client';

const ENDPOINT = 'https://chatic.herokuapp.com';
// const ENDPOINT_DEVELOP = 'http://localhost:5000';

export const socket = io(ENDPOINT);

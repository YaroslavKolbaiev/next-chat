import { io } from 'socket.io-client';

const ENDPOINT = 'http://localhost:5000';
const ENDPOINT_DEVELOP = 'https://chatic.herokuapp.com';

export const socket = io(ENDPOINT);

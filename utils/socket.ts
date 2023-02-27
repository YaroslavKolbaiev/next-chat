import { io } from 'socket.io-client';

const ENDPOINT = 'https://chatic.herokuapp.com/';

export const socket = io(ENDPOINT);

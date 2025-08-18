import api from './api';

export const getRoomHistory = () => api.get('/room_history');
export const getHistoryItem = (id) => api.get(`/room_history/${id}`);
export const createHistoryItem = (data) => api.post('/room_history', data);
export const updateHistoryItem = (id, data) => api.put(`/room_history/${id}`, data);
export const deleteHistoryItem = (id) => api.delete(`/room_history/${id}`);

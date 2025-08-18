import React from 'react';
import { createHistoryItem } from '../services/roomHistoryService';
import CreateItem from './CreateItem';

export default function CreateRoomHistoryPage() {
  const fields = [
    { name: 'roomId', label: 'Room ID' },
    { name: 'userId', label: 'User ID' },
    { name: 'date', label: 'Date', type: 'date' },
  ];

  return <CreateItem createFunc={createHistoryItem} fields={fields} redirectTo="/room_history" />;
}

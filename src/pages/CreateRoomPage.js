import React from 'react';
import { createRoom } from '../services/roomsService';
import CreateItem from './CreateItem';

export default function CreateRoomPage() {
  const fields = [
    { name: 'name', label: 'Room Name' },
    { name: 'capacity', label: 'Capacity', type: 'number' },
  ];

  return <CreateItem createFunc={createRoom} fields={fields} redirectTo="/rooms" />;
}

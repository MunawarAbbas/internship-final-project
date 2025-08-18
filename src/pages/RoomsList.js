import React, { useEffect, useState } from 'react';
import { getRooms, deleteRoom } from '../services/roomsService';

export default function RoomsList() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const res = await getRooms();
        setRooms(res.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch');
      } finally {
        setLoading(false);
      }
    }
    fetchRooms();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this room?')) return;
    try {
      await deleteRoom(id);
      setRooms(prev => prev.filter(r => r.id !== id));
    } catch (err) {
      alert('Delete failed');
    }
  };

  if (loading) return <div>Loading rooms...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Rooms</h2>
      <ul>
        {rooms.map(r => (
          <li key={r.id}>
            {r.name} (Capacity: {r.capacity})
            <button onClick={() => handleDelete(r.id)} style={{ marginLeft: 8 }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

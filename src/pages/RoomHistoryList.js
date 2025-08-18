import React, { useEffect, useState } from 'react';
import { getRoomHistory, deleteHistoryItem } from '../services/roomHistoryService';

export default function RoomHistoryList() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const res = await getRoomHistory();
        setHistory(res.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch');
      } finally {
        setLoading(false);
      }
    }
    fetchHistory();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this item?')) return;
    try {
      await deleteHistoryItem(id);
      setHistory(prev => prev.filter(h => h.id !== id));
    } catch (err) {
      alert('Delete failed');
    }
  };

  if (loading) return <div>Loading room history...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Room History</h2>
      <ul>
        {history.map(h => (
          <li key={h.id}>
            Room ID: {h.roomId}, User ID: {h.userId}, Date: {h.date}
            <button onClick={() => handleDelete(h.id)} style={{ marginLeft: 8 }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

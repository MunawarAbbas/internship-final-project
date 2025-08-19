import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/usersService';

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users on mount
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await getUsers();
        setUsers(res.data); // backend returns array of users
      } catch (err) {
        setError(err.response?.data?.error || err.message || 'Failed to fetch');
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  // Handle user delete
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this user?')) return;
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.user_id !== id));
    } catch (err) {
      alert('Delete failed: ' + (err.response?.data?.error || err.message));
    }
  };

  if (loading) return <div>Loading users...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div>
      <h2>Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.user_id}>
              <strong>{u.name}</strong> ({u.email}) – {u.role}
              <button
                onClick={() => handleDelete(u.user_id)}
                style={{ marginLeft: 8, color: 'red' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

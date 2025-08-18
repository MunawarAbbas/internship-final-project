// src/pages/CreateItem.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateItem({ createFunc, fields, redirectTo }) {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await createFunc(form);
      alert('Created successfully!');
      navigate(redirectTo);
    } catch (err) {
      console.error(err);
      alert('Create failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Item</h2>
      {fields.map(f => (
        <div key={f.name} style={{ marginBottom: 8 }}>
          <input
            name={f.name}
            placeholder={f.label}
            type={f.type || 'text'}
            onChange={handleChange}
            required={f.required !== false}
            style={{ padding: 8, width: 300 }}
          />
        </div>
      ))}
      <button type="submit" disabled={loading}>{loading ? 'Saving…' : 'Create'}</button>
    </form>
  );
}

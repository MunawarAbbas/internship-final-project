import React from 'react';
import { createBook } from '../services/booksService';
import CreateItem from './CreateItem';

export default function CreateBookPage() {
  const fields = [
    { name: 'title', label: 'Title' },
    { name: 'author', label: 'Author' },
    { name: 'price', label: 'Price', type: 'number' },
  ];

  return <CreateItem createFunc={createBook} fields={fields} redirectTo="/books" />;
}

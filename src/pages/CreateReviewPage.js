import React from 'react';
import { createReview } from '../services/reviewsService';
import CreateItem from './CreateItem';

export default function CreateReviewPage() {
  const fields = [
    { name: 'comment', label: 'Comment' },
    { name: 'rating', label: 'Rating', type: 'number' },
    { name: 'userId', label: 'User ID' },
    { name: 'bookId', label: 'Book ID' },
  ];

  return <CreateItem createFunc={createReview} fields={fields} redirectTo="/reviews" />;
}

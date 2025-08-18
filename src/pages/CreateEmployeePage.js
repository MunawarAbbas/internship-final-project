import React from 'react';
import { createEmployee } from '../services/employeesService';
import CreateItem from './CreateItem';

export default function CreateEmployeePage() {
  const fields = [
    { name: 'name', label: 'Name' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'position', label: 'Position' },
  ];

  return <CreateItem createFunc={createEmployee} fields={fields} redirectTo="/employees" />;
}

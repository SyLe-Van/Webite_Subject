import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: 'John', age: 20 },
        { name: 'Jane', age: 21 },
      ]);
    }, 1000);
  });
}

export default function App() {
  const [id, setId] = useState(0);
  const [name, setName] = useState([]);
  useEffect(() => {
    fetchUsers().then((users) => {
      setId(users.id)
      setName(users.name);
    });
  })
  return (
    <>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
    </>
  );
}


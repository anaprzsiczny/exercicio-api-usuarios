import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Post, Usuario } from './types/types';

function App() {

  const [usuarios, setUsuarios] = useState([])

  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/")
        .then(resposta => setUsuarios(resposta.data))
  }, [])

  const getPost = (id: number) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(resposta => setPost(resposta.data))
  }

  return (
    <div className="App">
      <ul>
      {
        usuarios !== null && 
        usuarios.map((usuario: Usuario) => (
          <>
            <li key={usuario.id}>
              <p>ID: {usuario.id}</p>
              <p onClick={() => getPost(usuario.id)}>Nome: {usuario.name}</p>
            </li>
            <br />
          </>
        ))
      }
    </ul>
    <br />
    <ul>
      {
        post !== null && 
        post.map((postItem: Post) => (
          <li key={postItem.id}>
            <p>{postItem.userId}</p>
            <p>{postItem.id}</p>
            <p>{postItem.title}</p>
            <p>{postItem.body}</p>
          </li>
        ))
      }
    </ul>
        
    </div>
  );
}

export default App;

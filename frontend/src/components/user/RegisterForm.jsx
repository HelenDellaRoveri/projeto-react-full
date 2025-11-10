import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css'; // se quiser usar algum estilo específico

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/auth/register', {
        name,
        email,
        password
      });
      alert('Usuário cadastrado com sucesso!');
      navigate('/login'); // redireciona para login
    } catch (err) {
      alert('Erro ao cadastrar. Tente novamente!');
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
          className="form-control mb-2"
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="form-control mb-2"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="form-control mb-3"
          required
        />
        <button className="btn btn-primary">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterForm;

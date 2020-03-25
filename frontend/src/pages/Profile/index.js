import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
  return (
    <div className="profile-content">
      <header>
        <img src={logoImg} alt="Heros" />
        <span>Bem Vinda, ARCA</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>Caso</strong>
          <p>Teste</p>

          <strong>Descrição</strong>
          <p>Teste</p>

          <strong>valor</strong>
          <p>Valor</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
        <li>
          <strong>Caso</strong>
          <p>Teste</p>

          <strong>Descrição</strong>
          <p>Teste</p>

          <strong>valor</strong>
          <p>Valor</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
        <li>
          <strong>Caso</strong>
          <p>Teste</p>

          <strong>Descrição</strong>
          <p>Teste</p>

          <strong>valor</strong>
          <p>Valor</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
        <li>
          <strong>Caso</strong>
          <p>Teste</p>

          <strong>Descrição</strong>
          <p>Teste</p>

          <strong>valor</strong>
          <p>Valor</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
      </ul>

    </div>
  );
}

import React from 'react';

import './styles.css';

import herosImg from '../../assets/heroes.png'

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form"> 
        <img src={herosImg} alt="be the hero"/>

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua Id"/>
          <button type="submit">Entrar</button>

          <a href="/register">
            não tenho cadastro
          </a>
        </form>
      </section>
    </div>

    );
}

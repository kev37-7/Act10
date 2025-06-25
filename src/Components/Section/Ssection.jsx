import React from 'react';
import './Ssection.css';
import { UserCard } from '../UserCard/UserCard';
import user1img from '../../assets/usuario.png';
import user2img from '../../assets/usuario1.png';
import user3img from '../../assets/usuario2.png';

const users = [
  { id: 1, name: 'Juan',  descripcion: 'Desarrollador Frontend',  image: user1img },
  { id: 2, name: 'Pedro', descripcion: 'Diseñador UI/UX',        image: user2img },
  { id: 3, name: 'Maria', descripcion: 'Desarrolladora Backend', image: user3img },
];

export const Ssection = () => (
  <section className="section">
    {users.map(user => (
      <UserCard key={user.id} user={user} />
    ))}
  </section>
);



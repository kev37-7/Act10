import { useState, useEffect } from 'react';
import './UserCard.css';

export const UserCard = ({ user }) => {
  const { name, descripcion, image } = user;
  const [isContacted, setIsContacted] = useState(false);

  const handleClick = () => setIsContacted(prev => !prev);

  useEffect(() => {
    if (isContacted) {
      alert(`Esta usted contactando a: ${name}`);
    }
  }, [isContacted, name]);

  return (
    <div className={`card ${isContacted ? 'contacted' : ''}`}>
      <img src={image} alt={`${name} avatar`} className="image" />
      <h2 className="name">{name}</h2>
      <p className="description">{descripcion}</p>

      <button
        className="button"
        aria-pressed={isContacted}
        onClick={handleClick}
      >
        {isContacted ? 'Deshacer' : 'Contactar'}
      </button>

      {isContacted && <span className="badge">Contactado</span>}
    </div>
  );
};

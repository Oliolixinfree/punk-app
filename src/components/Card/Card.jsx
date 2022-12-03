import React from 'react';

import styles from './Card.module.scss';

const Card = ({ img, name, description, tagline, info = [], onClick }) => {
  return (
    <article className={styles.wrapper} onClick={onClick}>
      <h3 className={styles.title}>{name}</h3>
      <img src={img} alt={name} className={styles.img} />
      <div className={styles.cardBody}>
        <p>{tagline}</p>
        <ul className={styles.cardList}>
          {info.map((el) => (
            <li key={el.title} className={styles.cardListItem}>
              <span>{el.title}: </span> {el.description}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Card;

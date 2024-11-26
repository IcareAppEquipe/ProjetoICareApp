import React from 'react';

const CardBemVindo = () => {
  return (
    <div style={styles.card}>
      <div style={styles.cardContent}>
        <h2 style={styles.cardTitle}>Bem Vindo ao ICare</h2>
      </div>
    </div>
  );
};

export default CardBemVindo;

const styles = {
  card: {
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  },
  cardImg: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '16px',
  },
  cardTitle: {
    fontSize: '1.5em',
    margin: 0,
  },
};

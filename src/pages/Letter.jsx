import React from 'react';

const Letter = () => {
  return (
    <div style={styles.container}>
      <h1>❤️ My Love Letter to You ❤️</h1>
      <p>
        Dear Love,  
        You make my world brighter every single day.  
        I promise to always be there for you, with love and care! 💖  
      </p>
    </div>
  );
};

// Styles for Letter Page
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#ffe6f2',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
};

export default Letter;

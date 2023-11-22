import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>
        This is a Custom React Redux Toolkit Project
      </h2>
      <nav style={{ textAlign: 'center' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>
          Home Page
        </Link>
        <Link to="counter">Counter Page</Link>
        <Link to="query" style={{ margin: '0 1rem' }}>
          Query Page
        </Link>
        <Link to="mutation">Mutation Page</Link>
        <Link to="queries" style={{ margin: '1rem' }}>
          Queries Page
        </Link>
      </nav>
    </>
  );
};

export default Navigation;

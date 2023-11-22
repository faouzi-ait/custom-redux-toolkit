import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import FirstPage from './pages/FirstPage';
import ThirdPage from './pages/ThirdPage';
import SecondPage from './pages/SecondPage';

import { Navigation } from './components';

import styles from './styles.module.scss';

const App = () => {
  return (
    <main data-testid="app-component" className={styles.app}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="counter" element={<FirstPage />} />
          <Route path="query" element={<SecondPage />} />
          <Route path="mutation" element={<ThirdPage />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;

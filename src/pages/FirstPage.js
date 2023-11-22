import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment, incrementByAmount } from '../redux/counterSlice';

const FirstPage = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <main data-testid="app-component">
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <h3>Counter Page Component</h3>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(35))}>
          By 35
        </button>{' '}
        <span>{count}</span>
      </div>
    </main>
  );
};

export default FirstPage;

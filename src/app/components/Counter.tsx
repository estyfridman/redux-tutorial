'use client'

import { useDispatch } from "react-redux";
import { AppDispatch } from '@/store/counterStore';
import {
  decrement,
  incrementAsync,
} from '@/store/counter/counterSlice';

const Counter = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div className="h-8 w-full bg-blue-400 rounded-full ">
        <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
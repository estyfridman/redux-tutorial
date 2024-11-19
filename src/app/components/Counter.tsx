'use client'

import { useDispatch } from "react-redux";
import { AppDispatch } from '@/store/counterStore';
import { increment, decrement, incrementAsync } from '@/store/counter/counterSlice';

const Counter = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div className="h-8 w-full">
        <button onClick={() => dispatch(decrement())} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Decrement</button>
        <button onClick={() => dispatch(increment())} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Decrement</button>
        <button onClick={() => dispatch(incrementAsync(10))} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Async Increment 10</button>

      </div>
    </div>
  );
};

export default Counter;
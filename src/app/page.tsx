'use client'

import Counter from '@/app/components/Counter';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '@/store/counterStore';


export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
   <div className=''>
          <h2> Count from Home: {count}</h2>

    <Counter/>
   </div>
  );
}

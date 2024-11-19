'use client'

import Counter from '@/app/components/Counter';
import { useSelector } from "react-redux";
import { RootState } from '@/store/counterStore';


export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
   <div className='flex flex-col justify-center items-center h-screen space-y-8'>
    <h2> Count : {count}</h2>
    <Counter/>
   </div>
  );
}

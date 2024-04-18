"use client";
import React from 'react'
import type { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { changeDummyValue, statusToogle } from '@/redux/slices';


export default function Home() {
  const dummyValue = useSelector((state: RootState) => state.data.dummyValue);
  const status = useSelector((state: RootState) => state.data.status);
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => {
        dispatch(changeDummyValue({
          dummyValue: "New value"
        }))
      }} className='text-black p-2 bg-white'>{dummyValue}</button>
      <button onClick={() => {
        dispatch(statusToogle({
          status: !status
        }))
      }} className='text-black p-2 bg-white'>{status? "Yes": "No"}</button>
    </div>
  );
}

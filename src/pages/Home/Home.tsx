import React, { useEffect, useState } from 'react';
import { People } from '@/data/people';
import { useDispatch } from 'react-redux';
import {  addPeople } from '@/redux/states';
import { PeopleTable } from './components';

export interface HomeInterface {}

const Home: React.FC = () => {

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(addPeople(People))
  }, [])
  
  return (
    <div >
      <PeopleTable/>
    </div>
  )
}

export default Home
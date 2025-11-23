import { useState } from 'react';
import CardsTab from '../components/Cards/CardsTab';
import Navbar from '../components/Navbar/Navbar';

function Home() {
  const [searchTerm, setSearchTerm] = useState('avengers');
  const [type, setType] = useState('movie');
  return (
    <>
      <Navbar setSearchTerm ={setSearchTerm} setType = {setType}/>
      <CardsTab searchTerm={searchTerm} type ={type}/>
    </>
  )
}

export default Home;

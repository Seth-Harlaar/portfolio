import React, {useState} from 'react';
import Layout from '../components/Layout';






const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Layout/>
    </>
  )
}

export default Home

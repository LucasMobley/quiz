import React from 'react';
import { PageProps } from 'gatsby';
import DataContainer from '@/components/DataContainer';
import './index.css';


const Home: React.FC<PageProps> = () => (
  <main>  
    <DataContainer />
  </main>
);

export default Home;

import React from 'react';
import { PageProps } from 'gatsby';
import DataContainer from '@/components/DataContainer';
import './index.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";


const Home: React.FC<PageProps> = () => (
  <main>
    <Router>
      <DataContainer />
    </Router>  
  </main>
);

export default Home;

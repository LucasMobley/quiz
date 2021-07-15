import React from 'react';
import { PageProps } from 'gatsby';
import DataContainer from '@/components/DataContainer';
import './index.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

/*
This is my main container that renders all of my other components.
It is wrapped in React Router to enable routing between my pages.
My styling is also imported here to enable css on my components.
More detailed notes will continue starting with the DataContainer component.
*/
const Home: React.FC<PageProps> = () => (
  <main>
    <Router>
      <DataContainer />
    </Router>  
  </main>
);

export default Home;

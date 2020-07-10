import React from 'react';
import Header from './Header';
import Hero from './Hero';
import TitleList from './TitleList';

class Home extends React.Component{
    render() {
      return (
        <div>
          <Header />
          <Hero />
          <TitleList title="Personalized RSVP Website" url='discover/tv?sort_by=popularity.desc&page=1' />
          <TitleList title="How it Works" />
        </div>
      )
    }
};

export default Home;
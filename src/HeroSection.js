import React from 'react';


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">The Legend of Zelda Universe</h1>
        <p className='hero-p'>Rate and review your favorite Zelda games!</p>
      </div>
      <div className="hero-image-container">
        <img className='hero-image' src="https://cdn.donmai.us/sample/9e/ed/__link_toon_link_young_link_wolf_link_ezlo_and_1_more_the_legend_of_zelda_and_7_more_drawn_by_oim8n__sample-9eed71cf5867b93082765a553d730736.jpg"></img>
      </div>
    </section>
  );
};

export default HeroSection;
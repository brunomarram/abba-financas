import React from 'react';

import Logo from '../base/Logo';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <Logo testId="hero-logo" />

    <p className="lead" data-testid="hero-lead">
      Aqui você gerencia suas finanças gratuitamente
    </p>
  </div>
);

export default Hero;

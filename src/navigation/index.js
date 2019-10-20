import React from 'react';
import Portfolio from '../screens/Portfolio';
import About from '../screens/About';
import { BrowserRouter, Route } from "react-router-dom";
import { spring, AnimatedSwitch } from 'react-router-transition';
import './styles.css';

const Navigation = () => {
// to the transform style property
const mapStyles = (styles) => {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
const bounce = (val) => {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: 0,
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: 1,
  },
};

	return (
		<BrowserRouter>
			<AnimatedSwitch
				atEnter={bounceTransition.atEnter}
				atLeave={bounceTransition.atLeave}
				atActive={bounceTransition.atActive}
				mapStyles={mapStyles}
				className="route-wrapper"
			>
				<Route exact path="/" component={Portfolio} />
				<Route exact path="/about" component={About} />
			</AnimatedSwitch>
		</BrowserRouter>
	)
}

export default Navigation;

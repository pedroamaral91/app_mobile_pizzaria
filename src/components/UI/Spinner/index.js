import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

import { Container, Spinner as SpinnerIcon } from './styles';

function Spinner() {
  const spinValue = new Animated.Value(0);
  function spin() {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
    }).start(() => spin());
  }
  useEffect(() => {
    spin();
  }, []);

  const spinn = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const AnimatedComponent = Animated.createAnimatedComponent(SpinnerIcon);
  return (
    <Container>
      <AnimatedComponent
        style={{
          color: '#ffff',
          transform: [{ rotate: spinn }],
        }}
      />
    </Container>
  );
}

export default Spinner;

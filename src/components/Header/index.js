import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ImageHeader,
  StatusBarColor,
  ButtomHeader,
  IconHeader,
  HeaderTitle,
  ButtomCart,
  IconBadge,
  CountItems,
  Title,
} from './styles';

function Header({
  title, icon, cartItems, showButtomCart, price, navigation,
}) {
  function handleNavigation() {
    console.tron.log(navigation.state.routeName)
    if (navigation.state.routeName !== 'Home') {
      navigation.goBack();
    }
  }
  return (
    <Container showButtomCart={showButtomCart} price={price}>
      <ImageHeader />
      <StatusBarColor />
      <ButtomHeader onPress={handleNavigation}>
        <IconHeader icon={icon} />
      </ButtomHeader>
      <HeaderTitle>{title}</HeaderTitle>
      {!!price && <Title>{price}</Title>}
      {showButtomCart && (
        <ButtomCart>
          <IconHeader icon="shopping-bag" />
          <IconBadge>
            <CountItems>{cartItems}</CountItems>
          </IconBadge>
        </ButtomCart>
      )}
    </Container>
  );
}

Header.defaultProps = {
  showButtomCart: false,
  cartItems: 0,
  price: '',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  showButtomCart: PropTypes.bool,
  cartItems: PropTypes.number,
  price: PropTypes.string,
};

export default Header;

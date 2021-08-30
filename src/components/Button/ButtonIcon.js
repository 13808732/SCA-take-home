import { Flex } from '@rebass/grid';
import CTA from 'components/Typography/CallToAction';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import screen from 'styles/helpers/media';

const ButtonIcon = ({ text, mobileText, icon, highlighted }) => {
  if (text) {
    return (
      <Flex css={{ height: 'inherit' }}>
        <>
          <IconWrapper alignItems="center">
            <StyledIcon highlighted={highlighted}>
              {icon}
            </StyledIcon>
          </IconWrapper>
          <Flex justifyContent="center" alignItems="center" flex="1 1 100%" css={{ 'flex-basis': 'auto' }}>
            <CTA text={text} mobileText={mobileText} />
          </Flex>
        </>
      </Flex>
    );
  }
  return (
    <Flex css={{ height: 'inherit' }}>
      <IconWrapper alignItems="center" justifyContent="center" width="100%">
        <StyledIconOnly highlighted={highlighted}>
          {icon}
        </StyledIconOnly>
      </IconWrapper>
    </Flex>
  );
};

const IconWrapper = styled(Flex)`
  position: relative;
`;

const IconStyle = css`
  border-radius: 20px;
  background-color: ${props => (props.highlighted ? props.theme.primary : 'transparent')};
  height: 100%;
  display: flex;
  & svg {
    margin: 0 auto;
    height: 100%;
  }
`;

const StyledIcon = styled.div`
  ${IconStyle};
  width: 36px;
  height: 36px;
  ${screen.md} {
    position:absolute;
    width: 40px;
    height: 40px;
  }
`;

const StyledIconOnly = styled.div`
  ${IconStyle};
  width: 100%;
`;

ButtonIcon.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.element,
    PropTypes.symbol,
  ]),
  text: PropTypes.string,
  mobileText: PropTypes.string,
  highlighted: PropTypes.bool,
};

ButtonIcon.defaultProps = {
  icon: null,
  text: null,
  mobileText: null,
  highlighted: false,
};

ButtonIcon.displayName = 'ButtonIcon';

export default ButtonIcon;
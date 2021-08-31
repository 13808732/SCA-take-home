import Button from 'shared-components/Button';
import DropdownButton from 'shared-components/DropdownButton';
import FilterIcon from 'shared-components/Icons/filter-list.svg';
import React from 'react';
import styled from 'styled-components';
import { arrayOf, shape, string, func, oneOf } from 'prop-types';

const DropDownIcon = styled(FilterIcon)`
    width: 24px;
`;

const StyledButton = styled.div`
  width: inherit;
  
  button {
      border :none;
      border-radius: 0;
      background: transparent;
  }
`;

function FilterButton({ onOptionClick, side, options }) {
  const offsetX = side === 'left' ? '16px' : '-130px';
  return (
    <DropdownButton
      variant="secondary"
      icon={<DropDownIcon />}
      id="category-filter-button"
      minWidthDesktop="40px"
      minWidthMobile="40px"
      offsetX={offsetX}
      offsetY="-86px"
      boxWidth="150px"
      width="40px"
      setIconRight
    >
      {options.map(item => (
        <StyledButton key={item.key}>
          <Button
            as="button"
            variant="secondary"
            text={item.value}
            minWidthDesktop="0"
            key={item.key}
            onClick={() => onOptionClick(item.key)}
          />
        </StyledButton>
      ))}
    </DropdownButton>
  );
}

FilterButton.propTypes = {
  onOptionClick: func.isRequired,
  side: oneOf(['left', 'right']),
  options: arrayOf(
    shape({
      key: string,
      value: string,
    }),
  ).isRequired,
};

FilterButton.defaultProps = {
  side: 'left',
};

export default FilterButton;
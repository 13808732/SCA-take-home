import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledBox, StyledCategoryShows } from './styled';
import CategoryCard from '../CategoryCard';


function CategoryShows({ shows }) {
  return (
    <StyledCategoryShows>
      <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <StyledBox>
          {shows.map((show) => (
            // eslint-disable-next-line react/jsx-key
            <CategoryCard show={show} />
          ))}
        </StyledBox>
      </Flex>
    </StyledCategoryShows> 
  );
}

CategoryShows.propTypes = {
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.shape({
        squareLarge: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    })
  ),
  description: PropTypes.string,
};

CategoryShows.defaultProps = {
  shows: [],
  description: null,
};

export default CategoryShows;

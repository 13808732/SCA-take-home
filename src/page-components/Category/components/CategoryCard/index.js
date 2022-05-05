import React from 'react';
import styled from 'styled-components';
import { Box } from '@rebass/grid';
import Paragraph from 'shared-components/Typography/Paragraph';
import { TextWrapper } from '../CategoryShows/styled';



function CategoryCard(show) {
  if (!show) {
    return <div>none files</div>;
  }
  const { url } = show.show.images.squareLarge;
  const { name } = show.show;
  const { description } = show.show.description;
  return (
    <Box>
      <img src={url} alt="" style={{width: '200px'}}/>
      <p>{name}</p>
      {description && (
        <TextWrapper>
          <Paragraph text={description} variant="l" transparent />
        </TextWrapper>
      )}
    </Box>
  );
}

export default CategoryCard;

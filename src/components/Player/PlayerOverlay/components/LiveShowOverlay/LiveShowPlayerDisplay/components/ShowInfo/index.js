import { Box, Flex } from 'components/Grid';
import Header from 'components/Typography/Header';
import Paragraph from 'components/Typography/Paragraph';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import styled from 'styled-components';
import screen from 'styles/helpers/media';
import spacing from 'styles/helpers/spacing';

function ShowInfo() {
  const showLogoImageUrl = useSelector(state => state?.liveShow?.liveShowImage, shallowEqual);
  const liveShowInfo = useSelector(state => state?.liveShow?.liveShowInfo, shallowEqual);
  const showName = useSelector(state => state?.liveShow?.liveShowName, shallowEqual);

  return (
    <Box mt={[spacing.m]} mb={[spacing.l, spacing.xl, spacing.xl]}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex flexDirection="column" justifyContent="flex-end" mr={spacing.m}>
          <Paragraph as="span" variant="m" text="Now Playing" mb="m" />
          <Header as="h2" variant="m" text={showName} linesToShow={1} mb="l" />
          <Paragraph as="span" variant="m" text={liveShowInfo} />
        </Flex>
        <Box>
          <StyledArtwork imageUrl={showLogoImageUrl} />
        </Box>
      </Flex>
    </Box>
  );
}

const StyledArtwork = styled(Box)`
  width: 70px;
  height: 70px;
  min-width: 70px;
  background-image: ${props => (props.imageUrl ? `url(${props.imageUrl})` : 'none')};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);

  ${screen.sm} {
    margin-bottom: 0;
    margin-left: ${spacing.xl};
    width: 140px;
    height: 140px;
    min-width: 140px;
  }
`;

export default ShowInfo;
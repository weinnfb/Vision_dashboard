import React from 'react';
import { styled } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => (
  <Wrapper>
    {children}
  </Wrapper>
);

const Wrapper = styled('div')({
  width: '100%',
  maxWidth: 1440,
  margin: '0 auto',
  padding: 10,
});

export default Container;
import { styled } from '@pigment-css/react';

import random from '@/helpers/random';

export default async function Home() {
  return <Wrapper>{random(0, 100)}</Wrapper>;
}

const Wrapper = styled.div`
  font-weight: bold;
`;

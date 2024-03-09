import { styled } from '@pigment-css/react';

export default function Home() {
  return (
    <>
      <Wrapper>
        <Button>Inside</Button>
      </Wrapper>

      <Button>Outside</Button>
    </>
  );
}

const Wrapper = styled('div')``;

const Button = styled('button')({
  color: 'red',

  [`${Wrapper} &`]: {
    color: 'blue',
  },
});

'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  align-items: center;
  max-width: 46rem;

  justify-content: center;
  gap: 3rem;
  margin: 0 auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 600px) {
    display: block;

    position: relative;
    top: 0;
    left: 0;
    transform: translate(0, 0);
  }
`

export const Logo = styled.div`
  width: 400px;
  height: 350px;

  background-color: ${(props) => props.theme['orange-dark']};

  @media screen and (max-width: 600px) {
    margin: 1rem auto 1rem;

    width: 300px;
    height: 250px;
  }
`

export const LoginContainer = styled.div`
  width: 26.5rem;
  height: 22.6rem;

  padding: 2rem;

  border: 6px;
  background-color: ${(props) => props.theme['orange-light']};
  border-radius: 15px;

  input {
    display: block;
    margin-bottom: 1rem;
    padding: 0.4rem;
    text-align: center;
    width: 100%;
    height: 15%;

    margin-top: 2rem;

    border: solid 2px ${(props) => props.theme['orange-medium']};
    border-radius: 4px;

    outline: none;

    &[type='submit'] {
      background-color: ${(props) => props.theme['orange-dark']};
      border: none;
      color: white;
      width: 100%;
      height: 15%;
      cursor: pointer;
    }
  }
`

export const CreateAccount = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme['orange-dark']};

  span {
    font-size: 1.5rem;
  }
`

'use client'

import styled from 'styled-components'

export const UsersContainer = styled.div`
  margin: 2rem 0 1.5rem;
  border-radius: 10px;

  display: flex;
  padding: 0 1rem;

  border: solid 3px ${(props) => props.theme['orange-medium']};
`

export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;

    color: ${(props) => props.theme['orange-dark']};
    font-size: 1.5rem;

    gap: 1rem;

    p {
      color: ${(props) => props.theme.black};
    }
  }

  button {
    padding: 1.5rem 2.3rem;
    border: none;
    cursor: pointer;
    transition: 0.5s ease;

    background-color: ${(props) => props.theme['orange-light']};
    border-radius: 6px;
    font-size: 1.2rem;
    font-weight: bolder;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      transform: scale(1.1);
    }
  }
`

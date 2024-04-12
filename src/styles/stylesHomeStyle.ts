'use client'

import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: baseline;

  padding: 4rem;
  gap: 1.5rem;

  border: solid 1px ${(props) => props.theme['orange-light']};
  border-radius: 10px;

  button {
    padding: 0.7rem;
    font-size: 1.5rem;

    border: solid 3px ${(props) => props.theme['orange-dark']};
    background-color: transparent;
    border-radius: 8px;

    cursor: pointer;
    transition: 0.5s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`

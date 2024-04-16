'use client'

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3rem;

  height: 8rem;
  background-color: ${(props) => props.theme['orange-light']};

  margin-bottom: 0.5rem;

  border-radius: 6px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    width: 8rem;
    height: 3rem;

    border: solid 1px ${(props) => props.theme['orange-dark-medium']};
    border-radius: 5px;
    cursor: pointer;

    font-weight: bold;

    background-color: ${(props) => props.theme['base-background']};
  }
`

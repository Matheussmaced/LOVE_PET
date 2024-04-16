'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  align-items: center;

  gap: 2rem;
  padding: 1rem;

  border-bottom: 1px solid ${(props) => props.theme['orange-dark-medium']};

  @media (max-width: 950px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const IconsContainer = styled.div`
  background-color: transparent;
  width: 10rem;
  height: 9rem;
  border-radius: 5px;
  border: 3px solid ${(props) => props.theme['orange-light']};

  cursor: pointer;

  text-align: center;
  transition: 0.5s ease;

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
    line-height: 1em;
  }

  &:hover {
    transform: scale(1.2);
  }
`

export const Icon = styled.div`
  margin-top: 1rem;
`

export const LinkContainer = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.black};
`

'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  align-items: center;

  gap: 2rem;
  padding: 1rem;
  cursor: pointer;

  border-bottom: 1px solid ${(props) => props.theme['orange-dark-medium']};
`

export const IconsContainer = styled.div`
  background-color: ${(props) => props.theme['orange-medium']};
  width: 10rem;
  height: 9rem;
  border-radius: 5px;
  border: transparent solid;

  text-align: center;

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
    line-height: 1em;
  }
`

export const Icon = styled.div`
  margin-top: 1rem;
`

export const LinkContainer = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.black};
`

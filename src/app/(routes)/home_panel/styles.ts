'use client'

import styled from 'styled-components'

export const Main = styled.main`
  background-color: ${(props) => props.theme['orange-light']};
  width: 80%;
  padding: 1rem 1rem 4rem 1rem;
  border-radius: 1rem;

  margin: 2rem auto 2rem;
`

export const SpanContainer = styled.span`
  position: relative;
  top: 0.5rem;

  padding: 1rem;
  background-color: ${(props) => props.theme['base-background']};
  border-radius: 10px;
`

export const Activitys = styled.div`
  margin-top: 4rem;

  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  gap: 2rem;

  align-items: center;
`

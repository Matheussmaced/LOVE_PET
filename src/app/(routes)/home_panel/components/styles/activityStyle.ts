'use client'

import styled from 'styled-components'

export const Main = styled.main`
  background-color: ${(props) => props.theme['base-background']};

  border-radius: 1rem;

  text-align: center;
  align-items: center;
`

export const BathAndGroomingContainer = styled.div`
  display: flex;
  gap: 1rem;

  border-bottom: 2px solid ${(props) => props.theme.black};
  background-color: ${(props) => props.theme['orange-medium']};

  margin-bottom: 1rem;
  padding: 1rem;

  border-radius: 1rem 1rem 0 0;
`

export const UserInformationContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
  justify-content: center;

  padding: 0 1rem 2rem 1rem;
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  justify-content: center;
`

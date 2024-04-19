'use client'

import { Search } from 'lucide-react'
import styled from 'styled-components'

export const Main = styled.main`
  width: 80%;

  margin: 2rem auto 2rem;
  line-height: 8rem;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;
  }

  input {
    padding: 0.45rem;

    border: 2px solid ${(props) => props.theme['orange-medium']};
    background-color: transparent;

    border-radius: 0 5px 5px 0;
  }
`

export const SearchIcon = styled(Search)`
  padding: 0.3rem;
  background-color: ${(props) => props.theme['orange-light']};

  border-radius: 5px 0 0 5px;
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: end;
`

export const AddButton = styled.button`
  padding: 1.5rem 2.5rem;
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
`

import { PawPrint, UserCircle2 } from 'lucide-react'
import { Body, Header, Main } from './styles/containerInformations'
import { IconsContainer } from '../../home_panel/components/styles/activityStyle'

export default function ContainerInformations() {
  return (
    <Main>
      <Header>
        <span>Banho e tosa</span>
        <span>xx/xx</span>
        <span>8:00</span>
      </Header>

      <Body>
        <IconsContainer>
          <UserCircle2 />
          <span>Fulano S.</span>
        </IconsContainer>

        <IconsContainer>
          <PawPrint />
          <span>Animal/nome</span>
        </IconsContainer>
      </Body>
    </Main>
  )
}

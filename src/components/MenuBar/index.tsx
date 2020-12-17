import React from 'react';
import Button from '../Button'

import { 
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    Botside,
    Avatar,
    ProfileData,
    ExitIcon,
 } from './styles';

const MenuBar: React.FC = () => {
  return (
      <Container>
          <Topside>
              <Logo />
              <MenuButton>
                  <HomeIcon>
                      <span>Página Inicial</span>
                  </HomeIcon>
              </MenuButton>
              <MenuButton>
                  <BellIcon>
                      <span>Notificações</span>
                  </BellIcon>
              </MenuButton>
              <MenuButton>
                  <EmailIcon>
                      <span>Mensagens</span>
                  </EmailIcon>
              </MenuButton>
              <MenuButton>
                  <FavoriteIcon>
                      <span>Favoritados</span>
                  </FavoriteIcon>
              </MenuButton>
              <MenuButton className="active">
                  <ProfileIcon>
                      <span>Perfil</span>
                  </ProfileIcon>
              </MenuButton>
              <Button>
                  <span>Tweetar</span>
              </Button>
          </Topside>
          <Botside>
              <Avatar/>
              <ProfileData>
                  <strong>Rogerio Bastos</strong>
                  <span>@rogerplis</span>
              </ProfileData>
              <ExitIcon/>
          </Botside>
      </Container>
  );
}

export default MenuBar;
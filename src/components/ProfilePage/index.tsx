import React from 'react';
import Feed from '../Feed';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CackeIcon,
    Followage,
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar/>
          </Banner>
          <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>
              <h1> Rogerio Bastos</h1>
              <h2> @Rogerplis</h2>
              <p>
                  Owner at <a href="">@Devopus</a>
              </p>
              <ul>
                  <li>
                      <LocationIcon/>
                      Santo André, Brasil
                  </li>
                  <li>
                      <CackeIcon/>
                      Nascido em 05 de julho de 1975
                  </li>
              </ul>
              <Followage>
                  <span>
                      Seguindo <strong>94</strong>
                  </span>
                  <span>
                      Seguidores <strong>672</strong>
                  </span>
              </Followage>

          </ProfileData>
          <Feed />
      </Container>
  );
}

export default ProfilePage;

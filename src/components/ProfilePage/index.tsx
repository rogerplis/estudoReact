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
              <EditButton >Editar perfil</EditButton>
              <h1> Rogerio Bastos</h1>
              <h2> @Rogerplis</h2>
          </ProfileData>
      </Container>
  );
}

export default ProfilePage;

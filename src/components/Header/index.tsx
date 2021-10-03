import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

// import Notifications from '../Notifications';
// import { signOut } from '../../store/modules/auth/actions';
import { useAuth } from '../../hooks/auth';
import logo from '../../assets/logo.png';
// import defaulAvatar from '../../assets/avatar.jpg';

import { Container, Headerc, HeaderContent, Profile } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();
  // const dispatch = useDispatch();
  // const profile = useSelector(state => state.user.profile);

  const handleSignOut = (): void => {
    signOut();
  };

  return (
    <Container>
      <Headerc>
        <HeaderContent>
          <Link to="/dashboard">
            <img src={logo} alt="Trademark" />
          </Link>

          <Profile>
            <img
              src="https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat4&accessoriesType=Sunglasses&hatColor=Heather&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=Overall&clotheColor=Red&eyeType=Wink&eyebrowType=DefaultNatural&mouthType=Disbelief&skinColor=Tanned"
              alt="avatar"
            />
            <div>
              <span>Welcome,</span>
              <strong>Paulo Wayner</strong>
            </div>
          </Profile>

          <button type="button" onClick={handleSignOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Headerc>
    </Container>
  );
};

export default Header;

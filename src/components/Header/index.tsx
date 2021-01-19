import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  active?: 'home' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  active = 'home',
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <>
          <Link className={active === 'home' ? 'active' : undefined} to="/">
            Listagem
          </Link>
          <Link
            className={active === 'import' ? 'active' : undefined}
            to="/import"
          >
            Importar
          </Link>
        </>
      </nav>
    </header>
  </Container>
);

export default Header;

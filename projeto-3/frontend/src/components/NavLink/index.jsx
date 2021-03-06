import P from 'prop-types';
import { MenuLink } from '../MenuLink';
import * as Styled from './styles';

export const NavLink = ({ links = [] }) => {
  return (
    <Styled.Container>
      {links.map((link) => {
        return <MenuLink key={link.link} {...link} />;
      })}
    </Styled.Container>
  );
};

NavLink.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};

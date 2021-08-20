import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';
import { LogoLink } from '../LogoLink';
import { NavLink } from '../NavLink';

export const Menu = ({ links, logoData }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <Styled.Menu>
          <LogoLink {...logoData} />
          <NavLink links={links} />
        </Styled.Menu>
      </SectionContainer>
    </Styled.Container>
  );
};

Menu.propTypes = {
  ...NavLink.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};

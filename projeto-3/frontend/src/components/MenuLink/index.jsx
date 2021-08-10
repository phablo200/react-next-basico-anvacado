import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = (props) => {
  const target = props.newTab ? '_blank' : '_self';
  return (
    <Styled.Container href={props.link} target={target}>
      {props.children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};

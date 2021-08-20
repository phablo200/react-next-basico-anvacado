import P from 'prop-types';
import * as Styled from './styles';

export const SectionContainer = (props) => {
  return <Styled.Container>{props.children}</Styled.Container>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};

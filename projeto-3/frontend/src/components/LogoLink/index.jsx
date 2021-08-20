import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';

export const LogoLink = (props) => {
  return (
    <Heading>
      <Styled.Container href={props.link}>
        {props.srcImg && <img src={props.srcImg} alt={props.text} />}
        {!props.srcImg && props.text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};

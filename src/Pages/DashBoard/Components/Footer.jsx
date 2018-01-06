import styled from 'styled-components';

const Footer = styled.footer`
  grid-area: ${props => props.gridarea || 'footer'};
  background-color: magenta;
`;

export default Footer;

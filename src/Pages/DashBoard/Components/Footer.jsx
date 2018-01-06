import styled from 'styled-components';

const Footer = styled.footer.attrs({
  gridarea: props => props.gridarea || 'footer',
})`
  grid-area: ${props => props.gridarea};
  background-color: magenta;
`;

export default Footer;

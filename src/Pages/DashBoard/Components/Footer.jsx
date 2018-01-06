import styled from 'styled-components';

const Footer = styled.footer`
  grid-area: ${props => props.gridarea || 'footer'};
  display: flex;
  align-items: flex-center;
  background-color: ${({ theme }) => theme.colorDark};
  color: ${({ theme }) => theme.textColorLight};
  fill: ${({ theme }) => theme.textColorLight};
  padding: ${({ theme }) => theme.paddingSmall};
`;

export default Footer;

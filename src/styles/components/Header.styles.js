import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 30px;
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
`;

export const Titulo = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 2rem;
`;

export const BotaoTema = styled.button`
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
    transform: scale(1.05);
  }
`;
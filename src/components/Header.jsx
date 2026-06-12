import { HeaderContainer, Titulo, BotaoTema } from '../styles/components/Header.styles';

function Header({ isLightMode, alternarTema }) {
  return (
    <HeaderContainer>
      <Titulo>Minhas Tarefas</Titulo>
      <BotaoTema onClick={alternarTema}>
        {isLightMode ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
      </BotaoTema>
    </HeaderContainer>
  );
}

export default Header;
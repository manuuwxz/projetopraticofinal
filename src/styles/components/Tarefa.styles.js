import styled from 'styled-components';

// Estilos do Formulário
export const FormContainer = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  flex: 1; /* Faz o input crescer para ocupar o espaço disponível */
  padding: 12px 16px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export const BotaoAdicionar = styled.button`
  padding: 12px 24px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.2s;

  &:hover {
    filter: brightness(1.1);
  }
`;

// Estilos do Item da Lista
export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  margin-bottom: 10px;
  transition: all 0.2s;

  &:hover {
    transform: translateX(5px); /* Dá um efeitinho legal ao passar o mouse */
  }
`;

export const TextoTarefa = styled.span`
  /* Se a prop 'concluida' for verdadeira, risca o texto. Se não, deixa normal */
  text-decoration: ${(props) => (props.concluida ? 'line-through' : 'none')};
  color: ${(props) => (props.concluida ? props.theme.colors.textSecondary : props.theme.colors.text)};
  font-size: 16px;
  flex: 1;
`;

export const BotaoAcao = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  margin-left: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

// Estilos dos Filtros
export const FiltrosContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const BotaoFiltro = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.2s;
  
  /* Se a prop 'ativo' for verdadeira, a cor fica primária e negrito */
  color: ${(props) => (props.ativo ? props.theme.colors.primary : props.theme.colors.textSecondary)};
  font-weight: ${(props) => (props.ativo ? 'bold' : 'normal')};
  border-bottom: 2px solid ${(props) => (props.ativo ? props.theme.colors.primary : 'transparent')};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
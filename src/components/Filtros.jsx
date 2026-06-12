import { FiltrosContainer, BotaoFiltro } from '../styles/components/Tarefa.styles';

function Filtros({ filtroAtual, setFiltro }) {
  return (
    <FiltrosContainer>
      <BotaoFiltro 
        ativo={filtroAtual === 'todas'} 
        onClick={() => setFiltro('todas')}
      >
        Todas
      </BotaoFiltro>
      
      <BotaoFiltro 
        ativo={filtroAtual === 'ativas'} 
        onClick={() => setFiltro('ativas')}
      >
        Ativas
      </BotaoFiltro>
      
      <BotaoFiltro 
        ativo={filtroAtual === 'concluidas'} 
        onClick={() => setFiltro('concluidas')}
      >
        Concluídas
      </BotaoFiltro>
    </FiltrosContainer>
  );
}

export default Filtros;
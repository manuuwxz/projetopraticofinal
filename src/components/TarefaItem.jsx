import { ItemContainer, TextoTarefa, BotaoAcao } from '../styles/components/Tarefa.styles';

function TarefaItem({ tarefa, alternarStatus, removerTarefa }) {
  return (
    <ItemContainer>
      <TextoTarefa concluida={tarefa.concluida}>
        {tarefa.texto}
      </TextoTarefa>
      
      <div>
        <BotaoAcao onClick={() => alternarStatus(tarefa.id)}>
          {tarefa.concluida ? '↩️' : '✅'}
        </BotaoAcao>
        
        <BotaoAcao onClick={() => removerTarefa(tarefa.id)}>
          🗑️
        </BotaoAcao>
      </div>
    </ItemContainer>
  );
}

export default TarefaItem;
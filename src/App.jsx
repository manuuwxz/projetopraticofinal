import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import { GlobalStyle } from './styles/GlobalStyle';

import Header from './components/Header';
import FormularioTarefa from './components/FormularioTarefa';
import TarefaItem from './components/TarefaItem';
import Filtros from './components/Filtros'; 

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [tarefas, setTarefas] = useState([]);
  
  const [filtro, setFiltro] = useState('todas');

  const temaAtual = isLightMode ? lightTheme : darkTheme;

  const alternarTema = () => {
    setIsLightMode(!isLightMode);
  };

  const adicionarTarefa = (textoDaTarefa) => {
    const novaTarefa = {
      id: Date.now(),
      texto: textoDaTarefa,
      concluida: false
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const alternarStatusTarefa = (id) => {
    const novasTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });
    setTarefas(novasTarefas);
  };

  const removerTarefa = (id) => {
    const tarefasFiltradas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasFiltradas);
  };

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === 'ativas') return !tarefa.concluida; 
    if (filtro === 'concluidas') return tarefa.concluida; 
    return true; 
  });

  return (
    <ThemeProvider theme={temaAtual}>
      <GlobalStyle />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        
        <Header isLightMode={isLightMode} alternarTema={alternarTema} />
        <FormularioTarefa adicionarTarefa={adicionarTarefa} />
        
        <Filtros filtroAtual={filtro} setFiltro={setFiltro} />
        
        <div style={{ marginTop: '20px' }}>
          {tarefasFiltradas.length === 0 ? (
            <p style={{ textAlign: 'center', opacity: 0.6 }}>Nenhuma tarefa encontrada.</p>
          ) : (
            tarefasFiltradas.map((tarefa) => (
              <TarefaItem 
                key={tarefa.id} 
                tarefa={tarefa} 
                alternarStatus={alternarStatusTarefa}
                removerTarefa={removerTarefa}
              />
            ))
          )}
        </div>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
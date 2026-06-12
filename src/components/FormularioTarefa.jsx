import { useState } from 'react';
import { FormContainer, Input, BotaoAdicionar } from '../styles/components/Tarefa.styles';

function FormularioTarefa({ adicionarTarefa }) {
  // guarda o texto que o usuario digita
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (!texto.trim()) return;
    
    adicionarTarefa(texto); 
    setTexto(''); 
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input 
        type="text" 
        placeholder="O que precisa ser feito?" 
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <BotaoAdicionar type="submit">Adicionar</BotaoAdicionar>
    </FormContainer>
  );
}

export default FormularioTarefa;
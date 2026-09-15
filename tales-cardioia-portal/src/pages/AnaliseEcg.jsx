import { useState } from 'react';

export default function AnaliseEcg() {
  // Já deixei preenchido com os dados do paciente de teste do nosso script Python
  const [bpm, setBpm] = useState('135');
  const [pr, setPr] = useState('0.26');
  const [qrs, setQrs] = useState('0.15');
  const [resultado, setResultado] = useState(null);

  const simularAnalise = (e) => {
    e.preventDefault();
    
    // Simulando o retorno que a nossa Rede Neural (MLP) deu no terminal
    setResultado({
      risco: '53.3%',
      diagnostico: 'ANOMALIA DETECTADA',
      cor: '#ef4444' // Vermelho alerta
    });
  };

  return (
    <div style={{ color: '#e0e0e0', fontFamily: 'sans-serif' }}>
      
      {/* Cabeçalho */}
      <header style={{ borderBottom: '2px solid #8b5cf6', paddingBottom: '15px', marginBottom: '30px' }}>
        <h2 style={{ color: '#c4b5fd', margin: 0, fontSize: '28px' }}>💓 Análise de Eletrocardiograma (ECG)</h2>
        <p style={{ color: '#a1a1aa', marginTop: '8px', fontSize: '15px' }}>Rede Neural - Perceptron Multicamadas (Keras/TensorFlow)</p>
      </header>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        
        {/* Formulário de Entrada dos Dados Médicos */}
        <div style={{ flex: '1 1 300px', backgroundColor: '#202024', padding: '20px', borderRadius: '10px', border: '1px solid #3f3f46', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          <h3 style={{ marginTop: 0, color: '#e4e4e7', marginBottom: '20px' }}>Inserir Dados do Exame</h3>
          <form onSubmit={simularAnalise} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            
            <div>
              <label style={{ display: 'block', marginBottom: '5px', color: '#a1a1aa', fontSize: '14px' }}>Batimentos (BPM)</label>
              <input type="number" value={bpm} onChange={(e) => setBpm(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #3f3f46', backgroundColor: '#18181b', color: '#fff', boxSizing: 'border-box' }} />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '5px', color: '#a1a1aa', fontSize: '14px' }}>Intervalo PR (segundos)</label>
              <input type="number" step="0.01" value={pr} onChange={(e) => setPr(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #3f3f46', backgroundColor: '#18181b', color: '#fff', boxSizing: 'border-box' }} />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '5px', color: '#a1a1aa', fontSize: '14px' }}>Duração QRS (segundos)</label>
              <input type="number" step="0.01" value={qrs} onChange={(e) => setQrs(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #3f3f46', backgroundColor: '#18181b', color: '#fff', boxSizing: 'border-box' }} />
            </div>
            
            <button type="submit" style={{ padding: '14px', backgroundColor: '#8b5cf6', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px', fontSize: '16px' }}>
              Rodar Inferência (IA)
            </button>
          </form>
        </div>

        {/* Painel do Resultado */}
        <div style={{ flex: '1 1 300px', backgroundColor: '#202024', padding: '20px', borderRadius: '10px', border: '1px solid #3f3f46', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          {!resultado ? (
            <div style={{ color: '#a1a1aa' }}>
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '15px' }}>⚙️</span>
              <p>Aguardando dados para processamento...</p>
            </div>
          ) : (
            <div style={{ width: '100%', animation: 'fadeIn 0.5s ease-in' }}>
              <h3 style={{ color: '#a1a1aa', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px' }}>Laudo da Rede Neural</h3>
              
              <div style={{ margin: '20px 0', padding: '30px', backgroundColor: '#18181b', border: `2px solid ${resultado.cor}`, borderRadius: '10px', boxShadow: '0 0 15px rgba(239, 68, 68, 0.2)' }}>
                <h2 style={{ color: resultado.cor, margin: '0 0 15px 0', fontSize: '26px' }}>{resultado.diagnostico}</h2>
                <p style={{ margin: 0, color: '#e4e4e7', fontSize: '18px' }}>
                  Probabilidade de Risco: <strong style={{ color: resultado.cor }}>{resultado.risco}</strong>
                </p>
              </div>
              
              <p style={{ fontSize: '13px', color: '#71717a' }}>*Baseado no modelo Keras treinado com acurácia de 83.33%</p>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
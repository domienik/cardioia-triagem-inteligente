export default function Dashboard() {
  return (
    <div style={{ padding: '30px', minHeight: '100vh', backgroundColor: '#161618', color: '#e0e0e0', fontFamily: 'sans-serif', boxSizing: 'border-box' }}>
      
      {/* Cabeçalho com detalhe em Roxo */}
      <header style={{ borderBottom: '2px solid #8b5cf6', paddingBottom: '15px', marginBottom: '30px' }}>
        <h2 style={{ color: '#c4b5fd', margin: 0, fontSize: '28px' }}>🩺 Portal Médico - CardioIA</h2>
        <p style={{ color: '#a1a1aa', marginTop: '8px', fontSize: '15px' }}>Visão Geral do Sistema de Triagem</p>
      </header>

      {/* Cards de Métricas */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        <div style={{ padding: '20px', backgroundColor: '#202024', border: '1px solid #3f3f46', borderRadius: '10px', flex: 1, boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#a1a1aa', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Total de Triagens</h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', margin: 0, color: '#c4b5fd' }}>124</p>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#202024', border: '1px solid #7f1d1d', borderRadius: '10px', flex: 1, boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#fca5a5', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Alto Risco (Emergência)</h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', margin: 0, color: '#ef4444' }}>12</p>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#202024', border: '1px solid #14532d', borderRadius: '10px', flex: 1, boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#86efac', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Baixo Risco (Rotina)</h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', margin: 0, color: '#22c55e' }}>112</p>
        </div>
      </div>

      {/* Tabela de Pacientes */}
      <h3 style={{ color: '#c4b5fd', marginBottom: '15px', fontSize: '20px' }}>Últimas Avaliações da IA</h3>
      <div style={{ backgroundColor: '#202024', borderRadius: '10px', overflow: 'hidden', border: '1px solid #3f3f46', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#18181b', borderBottom: '1px solid #3f3f46' }}>
              <th style={{ padding: '16px', color: '#a1a1aa', fontWeight: '600' }}>Paciente</th>
              <th style={{ padding: '16px', color: '#a1a1aa', fontWeight: '600' }}>Sintoma Relatado</th>
              <th style={{ padding: '16px', color: '#a1a1aa', fontWeight: '600' }}>Classificação (TF-IDF)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #3f3f46' }}>
              <td style={{ padding: '16px', color: '#e4e4e7' }}>João Silva</td>
              <td style={{ padding: '16px', fontStyle: 'italic', color: '#a1a1aa' }}>"Estou com uma dor esmagadora no peito"</td>
              <td style={{ padding: '16px', color: '#ef4444', fontWeight: 'bold' }}>ALTO RISCO</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #3f3f46' }}>
              <td style={{ padding: '16px', color: '#e4e4e7' }}>Maria Souza</td>
              <td style={{ padding: '16px', fontStyle: 'italic', color: '#a1a1aa' }}>"Pequena fisgada no dedo da mão"</td>
              <td style={{ padding: '16px', color: '#22c55e', fontWeight: 'bold' }}>BAIXO RISCO</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #3f3f46' }}>
              <td style={{ padding: '16px', color: '#e4e4e7' }}>Carlos Mendes</td>
              <td style={{ padding: '16px', fontStyle: 'italic', color: '#a1a1aa' }}>"Coração acelerado e suor frio do nada"</td>
              <td style={{ padding: '16px', color: '#ef4444', fontWeight: 'bold' }}>ALTO RISCO</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
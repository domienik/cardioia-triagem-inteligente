import { Link } from 'react-router-dom';
import iconeMedico from '../assets/medical.png';
import barchart from '../assets/bar-chart.png';

export default function Layout({ children }) {
  const handleLogout = () => {
    window.location.href = '/'; 
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#161618' }}>
      {/* Menu Lateral (Sidebar) */}
      <aside style={{ width: '250px', backgroundColor: '#202024', borderRight: '1px solid #3f3f46', padding: '20px', display: 'flex', flexDirection: 'column' }}>
        
        {/* Título e Logo Lateral Atualizados */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
          <img src={iconeMedico} alt="Logo CardioIA" style={{ width: '32px', height: '32px' }} />
          <h2 style={{ color: '#c4b5fd', fontSize: '20px', margin: 0 }}>CardioIA</h2>
        </div>
        
<nav style={{ display: 'flex', flexDirection: 'column', gap: '15px', flexGrow: 1 }}>
  <Link to="/dashboard" style={{ color: '#e4e4e7', textDecoration: 'none', padding: '10px', borderRadius: '5px', backgroundColor: '#18181b', border: '1px solid #3f3f46', display: 'flex', alignItems: 'center' }}>
     <img src={barchart} alt="Ícone Gráfico" style={{ width: '24px', height: '24px', marginRight: '6px', marginTop: '4px' }} />
     <span>Triagem NLP</span>
  </Link>
  
  <Link to="/ecg" style={{ color: '#e4e4e7', textDecoration: 'none', padding: '10px', borderRadius: '5px', backgroundColor: '#18181b', border: '1px solid #3f3f46', display: 'flex', alignItems: 'center' }}>
     <img src={barchart} alt="Ícone Gráfico" style={{ width: '24px', height: '24px', marginRight: '6px', marginTop: '4px' }} />
     <span>Análise ECG (IA)</span>
  </Link>
</nav>

        <button onClick={handleLogout} style={{ padding: '10px', backgroundColor: '#7f1d1d', color: '#fca5a5', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Sair
        </button>
      </aside>

      {/* Conteúdo Principal */}
      <main style={{ flexGrow: 1, padding: '30px', boxSizing: 'border-box', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
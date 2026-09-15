import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function Layout({ children }) {
  const { fazerLogin } = useContext(AuthContext); // Reutilizando para simular logout
  const navigate = useNavigate();

  const handleLogout = () => {
    // Para simplificar, recarregamos a página para limpar o estado
    window.location.href = '/'; 
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#161618' }}>
      {/* Menu Lateral (Sidebar) */}
      <aside style={{ width: '250px', backgroundColor: '#202024', borderRight: '1px solid #3f3f46', padding: '20px', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ color: '#c4b5fd', fontSize: '20px', marginBottom: '30px' }}>🩺 CardioIA</h2>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px', flexGrow: 1 }}>
          <Link to="/dashboard" style={{ color: '#e4e4e7', textDecoration: 'none', padding: '10px', borderRadius: '5px', backgroundColor: '#18181b', border: '1px solid #3f3f46' }}>
            📊 Triagem NLP
          </Link>
          <Link to="/ecg" style={{ color: '#e4e4e7', textDecoration: 'none', padding: '10px', borderRadius: '5px', backgroundColor: '#18181b', border: '1px solid #3f3f46' }}>
            🔎 Análise ECG (Rede Neural)
          </Link>
        </nav>

        <button onClick={handleLogout} style={{ padding: '10px', backgroundColor: '#7f1d1d', color: '#fca5a5', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Sair
        </button>
      </aside>

      {/* Conteúdo Principal (Onde as páginas vão renderizar) */}
      <main style={{ flexGrow: 1, padding: '30px', boxSizing: 'border-box', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
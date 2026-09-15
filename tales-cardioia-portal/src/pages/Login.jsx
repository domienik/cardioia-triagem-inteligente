import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function Login() {
  const [crm, setCrm] = useState('');
  const [senha, setSenha] = useState('');
  const { fazerLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fazerLogin(crm, senha);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#161618' }}>
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#202024', padding: '40px', borderRadius: '10px', border: '1px solid #3f3f46', width: '350px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
        <h2 style={{ color: '#c4b5fd', marginBottom: '20px' }}>🩺 Acesso Médico</h2>
        
        <input 
          type="text" 
          placeholder="Digite seu CRM" 
          value={crm}
          onChange={(e) => setCrm(e.target.value)}
          style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #3f3f46', backgroundColor: '#18181b', color: '#fff', boxSizing: 'border-box' }}
        />
        
        <input 
          type="password" 
          placeholder="Senha" 
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #3f3f46', backgroundColor: '#18181b', color: '#fff', boxSizing: 'border-box' }}
        />
        
        <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#8b5cf6', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
          Entrar no Sistema
        </button>
      </form>
    </div>
  );
}
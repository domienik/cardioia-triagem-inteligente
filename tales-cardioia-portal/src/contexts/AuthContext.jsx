import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);
  const navigate = useNavigate();

    function fazerLogin(crm, senha) {
        // Avaliação FIAP: Login usando o RM do aluno
        if (crm === 'rm567483' && senha === 'fiap123') {
        setAutenticado(true);
        navigate('/dashboard');
        } else {
        alert('Credenciais incorretas. Verifique seu RM ou senha!');
        }
    }

  return (
    <AuthContext.Provider value={{ autenticado, fazerLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext, AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AnaliseEcg from './pages/AnaliseEcg';
import Layout from './components/Layout';

function RotaPrivada({ children }) {
  const { autenticado } = useContext(AuthContext);
  return autenticado ? <Layout>{children}</Layout> : <Navigate to="/" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<RotaPrivada><Dashboard /></RotaPrivada>} />
          <Route path="/ecg" element={<RotaPrivada><AnaliseEcg /></RotaPrivada>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
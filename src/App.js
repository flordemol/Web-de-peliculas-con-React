import logo from './logo.svg';
import { AuthProvider } from './context/Auth';
import AppRouter from './Routes/AppRouter';
import './App.css';

function App() {

  return (
    <AuthProvider>
     <AppRouter />
    </AuthProvider>
  );
}

export default App;

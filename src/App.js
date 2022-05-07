import './App.css';
import { useAuth } from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const { currentUser } = useAuth();

  return (
    <>
      {!currentUser ? (
        <>
          <Login />
          <SignUp />
        </>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;

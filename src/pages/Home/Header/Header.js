import { useAuth } from '../../../contexts/AuthContext';

function Header() {
  const { signOut } = useAuth();

  return (
    <header>
      <nav>
        <h1>Dhuro</h1>
        <ul>
          <li>
            <a>Hyr</a>
          </li>
          <li>
            <a>Regjistrohu</a>
          </li>
          <li>
            <button onClick={() => signOut()}>Dil</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

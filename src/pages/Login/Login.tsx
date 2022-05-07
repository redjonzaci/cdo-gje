import Input from '../../components/Input';
import { useAuth } from '../../contexts/AuthContext';

function Login() {
  const { signIn } = useAuth();

  function handleSubmit(event: any) {
    event.preventDefault();
    const { email, password } = event.target;

    signIn(email.value, password.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input id="email" label="Email" type="email" />
        <Input id="password" label="Fjalekalimi" type="password" />
        <button>Hyr</button>
      </form>
    </>
  );
}

export default Login;

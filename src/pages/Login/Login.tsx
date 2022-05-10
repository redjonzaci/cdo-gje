import Input from '../../components/Input';

function Login() {
  function handleSubmit(event: any) {
    event.preventDefault();
    const { email, password } = event.target;
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

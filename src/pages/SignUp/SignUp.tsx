import Input from '../../components/Input';
import { useAuth } from '../../contexts/AuthContext';

function SignUp() {
  const { signUp } = useAuth();

  function handleSubmit(event: any) {
    event.preventDefault();
    const { email, password, confirmPassword, firstName, lastName } =
      event.target;
    if (password.value === confirmPassword.value) {
      try {
        signUp(email.value, password.value);
        fetch('http://localhost:3001/users', {
          method: 'POST',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.value,
            firstName: firstName.value,
            lastName: lastName.value,
          }),
        }).then((response) =>
          response.json().then((value) => console.log(value))
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('Passwords do not match');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input id="firstName" label="Emri" />
      <Input id="lastName" label="Mbiemri" />
      <Input id="email" label="Email" type="email" />
      <Input id="password" label="Fjalekalimi" type="password" />
      <Input
        id="confirmPassword"
        label="Konfirmo Fjalekalimin"
        type="password"
      />
      <button type="submit">Regjistrohu</button>
    </form>
  );
}

export default SignUp;

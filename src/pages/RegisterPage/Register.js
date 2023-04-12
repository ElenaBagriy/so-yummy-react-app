import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div>
      <RegisterForm />
      {/* <Link to="/signin">Sign in</Link> */}
    </div>
  );
}

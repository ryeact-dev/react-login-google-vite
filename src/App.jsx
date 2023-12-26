import { useState } from 'react';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Buttons from './components/Buttons';
import SignUp from './components/SignUp';

import styles from './App.module.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = (evt) => {
    evt.preventDefault(); // prevent from refreshing the page when a submit button is clicked!
    alert(`Login Details: email: ${email}, password: ${password} `);
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.form_container}>
      <Header />
      <Inputs setEmail={setEmail} setPassword={setPassword} />
      <Buttons />
      <SignUp />
    </form>
  );
}
export default App;

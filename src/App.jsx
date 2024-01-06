import { useState } from 'react';
import Inputs from './components/Inputs';
import styles from './App.module.css';
import OAuth from './components/Buttons/OAuth';
import { resolveAfterPromise } from './utils/MockPromise';

const imgURL =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = async (evt) => {
    evt.preventDefault(); // prevent from refreshing the page when a submit button is clicked!
    setIsLoading(true);
    await resolveAfterPromise(3000);
    setIsLoading(false);
    setUser({ email, password, imgURL });
  };

  const onLogout = () => {
    setUser(null);
  };

  const height = !isLoading && !user ? '500px' : '400px';

  return (
    <form
      onSubmit={!user ? onSubmitHandler : onLogout}
      className={styles.form_container}
      style={{ height }}
    >
      {isLoading && <span className={styles.loader}></span>}
      <div className={styles.login_header}>
        {user && (
          <>
            <img src={user.imgURL} />
            <h1 className={styles.welcome_message}>Welcome Back!</h1>
            <p>{user?.email}</p>
          </>
        )}
        {!user && !isLoading && (
          <>
            <h1 className={styles.welcome_message}>Login as</h1>
            <p>Please enter your details!</p>
          </>
        )}
      </div>
      {!isLoading && !user && (
        <Inputs setEmail={setEmail} setPassword={setPassword} />
      )}
      <button type='submit' className={styles.form_button} disabled={isLoading}>
        {user ? 'Logout' : isLoading ? 'Loading...' : 'Login'}
      </button>
      {!user && !isLoading && (
        <>
          <div className={styles.google_row}>
            <OAuth setUser={setUser} setIsLoading={setIsLoading} />
          </div>
          <div className={styles.form_actions}>
            <div className={styles.form_row}>
              <span>Dont have an account?</span>
              <a href='#' title='Create Account'>
                Sign Up
              </a>
            </div>
          </div>
        </>
      )}
    </form>
  );
}

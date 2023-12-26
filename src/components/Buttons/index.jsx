import { useState } from 'react';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import googleIcon from '../../assets/google.png';
import styles from './styles.module.css';

export default function Buttons() {
  const [user, setUser] = useState(null);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    },
  });

  const logout = () => {
    window.location.reload();
  };

  return (
    <>
      <button type='submit' className={styles.form_button}>
        Login
      </button>
      <div className={styles.google_row}>
        <button type='button' onClick={() => (user ? logout() : login())}>
          <img src={user ? user.picture : googleIcon} alt='Google' />
          {user ? user.email : '  Log in with Google'}
        </button>
      </div>
    </>
  );
}

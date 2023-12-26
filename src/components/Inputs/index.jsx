import { useState } from 'react';
import styles from './styles.module.css';

export default function Inputs({ setEmail, setPassword }) {
  const [openPassword, setOpenPassword] = useState(false);

  return (
    <>
      <div className={styles.input_wrapper}>
        <input
          type='email'
          id='email'
          name='email'
          className={styles.input_field}
          placeholder='Your Email'
          onChange={(evt) => setEmail(evt.target.value)}
          required
        />
        <label htmlFor='email' className={styles.input_label}>
          Email
        </label>
        <svg
          className={styles.input_icon}
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25'
          />
        </svg>
      </div>
      <div className={styles.input_wrapper}>
        <input
          id='password'
          type={openPassword ? 'text' : 'password'}
          className={styles.input_field}
          placeholder='Your Password'
          title='Minimum 6 characters at least 1 Alphabet and 1 Number'
          pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$'
          onChange={(evt) => setPassword(evt.target.value)}
          required
        />
        <label htmlFor='password' className={styles.input_label}>
          Password
        </label>
        {!openPassword ? (
          <svg
            className={styles.input_icon}
            onClick={() => setOpenPassword(!openPassword)}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88'
            />
          </svg>
        ) : (
          <svg
            className={styles.input_icon}
            onClick={() => setOpenPassword(!openPassword)}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
            />
          </svg>
        )}
      </div>
    </>
  );
}

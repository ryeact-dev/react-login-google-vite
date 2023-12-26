import styles from './styles.module.css';

export default function SignUp() {
  return (
    <div className={styles.form_actions}>
      <div className={styles.form_row}>
        <span>Dont have an account?</span>
        <a href='#' title='Create Account'>
          Sign Up
        </a>
      </div>
    </div>
  );
}

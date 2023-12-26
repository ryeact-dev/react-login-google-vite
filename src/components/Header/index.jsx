import styles from './styles.module.css';

export default function Header() {
  return (
    <div className={styles.login_header}>
      <a href='#' title='Logo'>
        <img src='../logo.png' alt='Logo' className={styles.logo} />
      </a>
      <h1 className={styles.welcome_message}>Login as</h1>
      <p>Please enter your details!</p>
    </div>
  );
}

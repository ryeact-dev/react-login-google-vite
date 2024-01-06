import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase';
import googleIcon from '../../assets/google.png';
import { resolveAfterPromise } from '../../utils/MockPromise';

export default function OAuth({ setIsLoading, setUser }) {
  const onGoogleClickHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const googleUserData = {
        email: result.user.email,
        imgURL: result.user.photoURL,
      };

      setIsLoading(true);
      await resolveAfterPromise(3000);
      setIsLoading(false);
      setUser(googleUserData);
    } catch (err) {
      console.log('Could not sign in with google', err);
    }
  };

  return (
    <button onClick={onGoogleClickHandler} type='button'>
      <img src={googleIcon} /> Continue with Google
    </button>
  );
}

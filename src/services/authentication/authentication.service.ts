import { signInWithEmailAndPassword, UserCredential } from "firebase/auth/react-native";
import { auth } from "../../config/firebase";


export const loginRequest = (
  email: string,
  password: string,
): Promise<UserCredential> =>
  signInWithEmailAndPassword(auth, email, password);

import { auth, googleProvider } from "@/app/utils/firebase";
import { signInWithPopup } from "firebase/auth";

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("Google User:", user);
    return user;
  } catch (error) {
    console.error("Google login error:", error);
    throw error;
  }
};

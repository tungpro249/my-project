import { auth, googleProvider } from "@/utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { api } from "../api";

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    const idToken = await user.getIdToken();

    const res = await api.post("/auth/google-login", { idToken });
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Google login error:", error);
    throw error;
  }
};

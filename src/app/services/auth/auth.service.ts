import { auth, googleProvider } from "@/app/utils/firebase";
import { signInWithPopup } from "firebase/auth";

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // 👇 Lấy ID token Firebase để gửi về backend
    const idToken = await user.getIdToken();

    // Gửi token lên backend
    const res = await fetch("http://localhost:5000/api/v1/auth/google-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
    });

    const data = await res.json();
    console.log("Server response:", data);

    return data;
  } catch (error) {
    console.error("Google login error:", error);
    throw error;
  }
};

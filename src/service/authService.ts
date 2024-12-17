import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/service/firebaseConfig";
import router from "next/router";

// Registro
export const registerUser = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Usuário registrado:", userCredential.user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro ao registrar:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Erro desconhecido ao registrar.");
      throw new Error("Erro desconhecido.");
    }
  }
};

// Login
export const loginUser = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Usuário logado:", userCredential.user);

    // Armazenar token ou userUid no localStorage para manter o estado de login
    localStorage.setItem("userToken", userCredential.user.uid);

    // Redireciona para a página inicial
    router.push('/');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro ao logar:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Erro desconhecido ao logar.");
      throw new Error("Erro desconhecido.");
    }
  }
};

// Logout
export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log("Usuário deslogado.");

    // Limpar o token do localStorage
    localStorage.removeItem("userToken");

    // Redireciona para a página de login
    router.push('/entrar');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro ao deslogar:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Erro desconhecido ao deslogar.");
      throw new Error("Erro desconhecido.");
    }
  }
};


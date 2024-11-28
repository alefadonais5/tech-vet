import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/app/firebase/firebaseconfig";

// Registro
export const registerUser = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Usuário registrado:", userCredential.user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro ao registrar:", error.message);
      throw new Error(error.message); // Retorna o erro para o componente ou serviço chamar
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
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro ao logar:", error.message);
      throw new Error(error.message); // Retorna o erro para tratamento no componente
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



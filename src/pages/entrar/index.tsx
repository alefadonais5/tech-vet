'use client';
import React, { useState, useEffect } from "react";
import {
  LoginContainer,
  LeftColumn,
  RightColumn,
  FormContainer,
  FooterText,
  Title,
  Divider,
  Input,
  StyledLink,
  BackgroundImageContainer,
  StyledLink1,
} from "@/ui/styles/Components/entrar/styles";
import { PrimaryButton } from "@/components/Elements/Buttons";
import { loginUser, registerUser, logoutUser } from "@/service/authService";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await loginUser(email, password);
      alert("Login realizado com sucesso!");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    setError(null);
    try {
      await registerUser(email, password);
      alert("Registro realizado com sucesso!");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logoutUser();
      alert("Logout realizado com sucesso!");
    } catch (err: unknown) {
      console.error(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LeftColumn>
        <p>Macosts</p>
        <BackgroundImageContainer>
        </BackgroundImageContainer>
      </LeftColumn>
      <RightColumn>
        <Title>Entre na sua conta</Title>
        <FormContainer >
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <PrimaryButton onClick={handleLogin}>ENTRAR</PrimaryButton>
        </FormContainer>

        <StyledLink href="#">Esqueceu a senha?</StyledLink>
        <FooterText>
          <p>
            <StyledLink1 href="/regis">
              Não possui conta? Registre-se
            </StyledLink1>
          </p>
          <p>
            Ao entrar, você concorda com todos os termos e condições de uso.
          </p>
        </FooterText>
      </RightColumn>
    </LoginContainer>
  );
}

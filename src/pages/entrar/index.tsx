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
  TitleLogin,
  Subtitle,
  Paragrafh,
} from "@/ui/styles/Components/entrar/styles";
import { PrimaryButton } from "@/components/Elements/Buttons";
import { loginUser, registerUser, logoutUser } from "@/service/authService";
import router, { Router } from "next/router";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    loginUser(email, password);
  };

  const handleRegister = async () => {
    setLoading(true);
    setError(null);
    try {
      await registerUser(email, password);
      alert("Registro realizado com sucesso!");
      Router
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };


  return (
    <LoginContainer>
      <LeftColumn>
        <TitleLogin>TechVet</TitleLogin>
        <Subtitle>Sistemas Gerenciamento para Clínica Veterinária</Subtitle>
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
            <StyledLink1 href="/regis">
              Não possui conta? Registre-se
            </StyledLink1>
          <Paragrafh>
            Ao entrar, você concorda com todos os termos e condições de uso.
          </Paragrafh>
        </FooterText>
      </RightColumn>
    </LoginContainer>
  );
}

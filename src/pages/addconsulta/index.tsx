import React, { useState } from "react";
import {
  Alert,
  Container,
  Containerdiv,
  Form,
  FormGroup,
  FormGroupButton,
  Heading,
  Input,
  Label,
  TitleName,
} from "@/ui/styles/Components/AddConsulta/styles";
import { SecondaryButtonStyle } from "@/ui/styles/Components/Elements/Buttons/styles";
import router from "next/router";
import { Header } from "@/components/Header";

export type VetconsultationType = {
  animalName: string;
  date: string;
  hour: string;
  description: string;
};

interface VetconsultationProps {
  onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Vetconsultation({ onCancel }: VetconsultationProps) {
  const [formData, setFormData] = useState<VetconsultationType>({
    animalName: "",
    date: "",
    hour: "",
    description: "",
  });
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [isError, setError] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.animalName || !formData.date || !formData.hour || !formData.description) {
      setAlertMessage("Todos os campos devem ser preenchidos corretamente!");
      setError(true);
      setTimeout(() => setAlertMessage(null), 3000);
      return;
    }

    try {
      const existingData = localStorage.getItem("vetConsultations");
      const consultations = existingData ? JSON.parse(existingData) : [];

      consultations.push(formData);

      localStorage.setItem("vetConsultations", JSON.stringify(consultations));

      setAlertMessage("Consulta salva com sucesso!");
      setError(false);

      setFormData({
        animalName: "",
        date: "",
        hour: "",
        description: "",
      });

      setTimeout(() => setAlertMessage(null), 3000);
      router.push("/"); // Redirecionando para a página principal após salvar a consulta

    } catch (error) {
      console.error("Erro ao salvar consulta no localStorage:", error);
      setAlertMessage("Erro ao salvar consulta.");
      setError(true);
    }
  };

  return (
    <Containerdiv>
    <Header />
    <TitleName>Consultas</TitleName>
      <Container>
        <Heading>Criar Consulta</Heading>
        <Form>
          <FormGroup>
            <Label htmlFor="animal-name">Nome do animal:</Label>
            <Input
              type="text"
              id="animal-name"
              name="animalName"
              value={formData.animalName}
              onChange={handleChange}
              placeholder="digite o nome do animal"
              />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="date">Data:</Label>
            <Input
              type="text"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="hour">Hora:</Label>
            <Input
              type="time"
              id="hour"
              name="hour"
              value={formData.hour}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="description">Descrição:</Label>
            <Input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Descrição da consulta"
              />
          </FormGroup>

          <FormGroupButton>
            <SecondaryButtonStyle type="submit" onClick={handleSubmit}>
              Agendar Consulta
            </SecondaryButtonStyle>
          </FormGroupButton>
        </Form>
        {alertMessage && <Alert isError={isError}>{alertMessage}</Alert>}
      </Container>
    </Containerdiv>
  );
}

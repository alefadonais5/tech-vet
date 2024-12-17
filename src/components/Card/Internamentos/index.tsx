import {
  ImageWrapper,
  Container,
  Header,
  DateTimeGroup,
} from "@/ui/styles/Components/Card/Internamentos/styles";
import Image from "next/image";
import React from "react";
import { SecundaryButton } from "@/components/Elements/Buttons";

// Ajuste no tipo de healthStatus para português
interface InternamentoCardProps {
  image: string;
  animalName: string;
  tutorName: string;
  admissionDate: string;
  dischargeDate?: string;
  reason: string;
  healthStatus: "crítico" | "grave" | "estável" | "recuperado"; // Usando os valores em português
  notes: string;
}

export const InternamentoCard: React.FC<InternamentoCardProps> = ({
  image,
  animalName,
  tutorName,
  admissionDate,
  dischargeDate,
  reason,
  healthStatus,
  notes,
}) => {
  return (
    <Container>
      <Header>
        <ImageWrapper>
          <Image
            src={image}
            alt={animalName || "Animal"}
            layout="fill"
            objectFit="cover"
          />
        </ImageWrapper>
        <div>{animalName}</div>
      </Header>

      <DateTimeGroup>
        <div>Data de Admissão: {admissionDate}</div>
        {dischargeDate && <div>Data de Alta: {dischargeDate}</div>}
        <div>Status de Saúde: {healthStatus}</div>
      </DateTimeGroup>

      <div>Motivo do Internamento: {reason}</div>
      <div>Observações: {notes}</div>

      <SecundaryButton>Ver mais</SecundaryButton>
    </Container>
  );
};

  
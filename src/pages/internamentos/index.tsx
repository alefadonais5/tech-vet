import React from "react";
import { ContainerDiv, GroupCards, Title } from "@/ui/styles/Pages/home/styles";
import { InternamentoCard } from "@/components/Card/Internamentos/index"; // Certifique-se de que este seja o componente adequado para internamentos
import internamentos  from "@/service/mocks/cardInternamentos"; // Caminho para o mock de internamentos
import imgExample from "@/ui/assets/images/Logo.svg"; // Imagem padrão
import { Header } from "@/components/Header/index";

export default function InternamentoList () {
  return (
    <ContainerDiv>
    <Header />
      <Title>Internamentos Atuais</Title>
        <GroupCards>
          {internamentos.map((internamento) => (
            <InternamentoCard
            key={internamento.id}
            image={imgExample.src} // Usando imagem padrão se não houver imagem no mock
            animalName={internamento.nomeAnimal}
            tutorName={internamento.nomeTutor}
            admissionDate={internamento.dataInternamento}
            dischargeDate={internamento.dataAlta}
            reason={internamento.motivo} // Corrigido para 'motivo'
            healthStatus={internamento.estadoSaude} // Corrigido para 'estadoSaude'
            notes={internamento.observacoes} // Corrigido para 'observacoes'
            />
          ))}
        </GroupCards>
    </ContainerDiv>
  );
};




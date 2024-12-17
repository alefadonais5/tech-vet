// InternamentoList.tsx
import React, { useState } from "react";
import { ContainerDiv, GroupCards, Title } from "@/ui/styles/Pages/internamentos/styles";
import { InternamentoCard } from "@/components/Card/Internamentos/index"; 
import internamentos from "@/service/mocks/cardInternamentos"; 
import imgExample from "@/ui/assets/images/Logo.svg"; 
import { Header } from "@/components/Header/index";

export default function InternamentoList () {
  const [navBarVisible, setNavBarVisible] = useState(true);

  return (
    <ContainerDiv navBarVisible={navBarVisible}>
      <Header />
      <Title>Internamentos Atuais</Title>
      <GroupCards>
        {internamentos.map((internamento) => (
          <InternamentoCard
            key={internamento.id}
            image={imgExample.src}
            animalName={internamento.nomeAnimal}
            tutorName={internamento.nomeTutor}
            admissionDate={internamento.dataInternamento}
            dischargeDate={internamento.dataAlta}
            reason={internamento.motivo}
            healthStatus={internamento.estadoSaude}
            notes={internamento.observacoes}
          />
        ))}
      </GroupCards>
    </ContainerDiv>
  );
};





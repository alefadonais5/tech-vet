import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/Card";
import imgExample from "@/ui/assets/images/Logo.svg";
import cardItems from "@/service/mocks/cardItens";
import {
  Container,
  Title,
  ButtonContainer,
  GroupCards,
} from "@/ui/styles/Pages/home/styles";
import { SecundaryButton } from "@/components/Elements/Buttons";
import { useRouter } from "next/router";
import { useHeader } from "@/contexts/HeaderContext";
import { Vetconsultation } from "@/components/AddConsulta";
import { VetconsultationType } from "@/components/AddConsulta/index"; // Certifique-se de que o tipo está sendo exportado corretamente
import { AnimalName, DateTimeGroup, Heade, ImageWrapper, Lista } from "@/ui/styles/Components/consultas/styles";
import { Header } from "@/components/Header/index";


export default function VetQueries() {
  const [consultationsVet, setConsultationsVet] = useState<VetconsultationType[] | null>(null);
  const router = useRouter();
  const navBarIsVisible = useHeader();
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

    useEffect(() => {
      const storedData = localStorage.getItem("vetConsultations");
      if (storedData) {
        setConsultationsVet(JSON.parse(storedData));
      }
    }, []);
  

  const handleCreateConsultationClick = () => {
    setIsFormVisible(true);
  };

  const handleCancelForm = () => {
    setIsFormVisible(false);
  };

  return (
    <Container>
  
      {!isFormVisible ? (
        <ButtonContainer navBarVisible={navBarIsVisible.isNavbarVisible}>
          <Title>Consultas</Title>
          <div>
            <SecundaryButton onClick={() => router.push("historico")}>
              Histórico
            </SecundaryButton>
            <SecundaryButton onClick={handleCreateConsultationClick}>
              Criar Consulta
            </SecundaryButton>
          </div>
        </ButtonContainer>
      ) : (
        <Vetconsultation onCancel={handleCancelForm} />
      )}
  
      {!isFormVisible && (
        <GroupCards>
          {consultationsVet?.map((consultation, index) => (
            <Lista key={index}>
              <Heade>
                <ImageWrapper>
                  <Image
                    src={imgExample} // Usando a imagem da consulta ou a padrão
                    alt={consultation.animalName}
                    width={48}
                    height={48}
                    objectFit="cover"
                  />
                </ImageWrapper>
                <AnimalName>{consultation.animalName}</AnimalName>
              </Heade>
              <DateTimeGroup>
                <p>Data: {consultation.date}</p>
                <p>Hora: {consultation.hour}</p>
              </DateTimeGroup>
                <p>Descrição: {consultation.description}</p>
              <SecundaryButton>Ver mais</SecundaryButton>
            </Lista>
          ))}
          {cardItems.map((card) => (
            <Card
              key={card.id}
              image={card.imageUrl || imgExample.src}
              animalName={card.animalName}
              date={card.date}
              hour={card.hour}
              description={card.description}
            />
          ))}
        </GroupCards>
      )}
    </Container>
  );
}
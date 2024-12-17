import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SEO from "@/components/SEO";
import { HomePageTextsSEO } from "@/components/SEO/seoTexts";
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
import { useHeader } from "@/contexts/HeaderContext";
import { Vetconsultation } from "@/components/AddConsulta";
import { VetconsultationType } from "@/components/AddConsulta/index"; // Certifique-se de que o tipo está sendo exportado corretamente
import { AnimalName, DateTimeGroup, Heade, ImageWrapper, Lista } from "@/ui/styles/Components/consultas/styles";


export default function Home() {
  const [consultationsVet, setConsultationsVet] = useState<VetconsultationType[] | null>(null);
  const router = useRouter();
  const navBarIsVisible = useHeader();
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);


  const handleCreateConsultationClick = () => {
    setIsFormVisible(true);
  };

  const handleCancelForm = () => {
    setIsFormVisible(false);
  };

  return (
    <Container>
      <SEO
        title={HomePageTextsSEO.title}
        description={HomePageTextsSEO.description}
        keywords={HomePageTextsSEO.keywords}
        author={HomePageTextsSEO.author}
        url={HomePageTextsSEO.url}
        image={HomePageTextsSEO.image}
      />

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


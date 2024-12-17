import styled from "styled-components";

export const Title = styled.h2`
  display: flex;
  font-size: ${({ theme }) => theme.sizes.font.terciary};
  color: ${({ theme }) => theme.colors.text.primary};
  align-items: center; /* Alinha verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
  height: 100%;
  gap: 1.625rem;
  padding: 6rem 0;
`;

export const MainContent = styled.main`
  gap: 1.625rem;
  padding: 1.625rem 0;
`;

export const Lista = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.backgrounds.secondary};
  padding: 2rem;
  gap: 2rem;
`;

export const ImageWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.backgrounds.secondary};
  overflow: hidden;
  position: relative;
`;

export const AnimalName = styled.div`
  font-size: ${({ theme }) => theme.sizes.font.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-left: 1rem; /* Espaçamento entre a imagem e o nome */
`;

export const Heade = styled.div`
  display: flex;
  width: 100%;
  gap: 1.68rem;
  align-items: center;
`;


export const DateTimeGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const P = styled.p``;


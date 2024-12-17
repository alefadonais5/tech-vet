import styled from "styled-components";

export const Container = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;  // Alinha todos os itens à esquerda
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.backgrounds.secondary};
  padding: 2rem;
  gap: 2rem; // Ajuste o espaço entre os campos
`;

export const ImageWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.backgrounds.secondary};
  overflow: hidden;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem; // Adiciona um espaçamento abaixo do header
`;

export const DateTimeGroup = styled.div`
  display: flex;
  flex-direction: column;  // Garante que cada dado de data/hora fique em uma linha
  gap: 0.5rem; // Ajuste o espaço entre data e hora
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;  // Espaço entre os itens de informações
`;

export const Label = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const Value = styled.p`
  margin: 0;
`;

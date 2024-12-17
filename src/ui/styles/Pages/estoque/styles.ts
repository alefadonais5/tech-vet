import styled from "styled-components";

// Container principal da tabela
export const Container = styled.div``;

export const TableContainer = styled.div`
  align-items: center; /* Centraliza horizontalmente */
  justify-content: flex-start; /* Evita interferência com o Header */
  min-height: 100vh; /* Garante altura total da tela */
`;

// Estilização da tabela
export const StyledTable = styled.table`
  width: 90%; /* Ajusta para 90% da largura, tornando mais responsivo */
  max-width: 1200px; /* Limita a largura máxima para não ficar muito larga */
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.backgrounds.quinary};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.sizes.border.radius.primary};
  overflow: hidden;
  margin: 2rem 0; /* Espaçamento superior e inferior */

  th, td {
    padding: 1rem;
    text-align: center; /* Alinha o texto das células ao centro */
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.colors.primary};
  }

  th {
    background-color: ${({ theme }) => theme.colors.backgrounds.secondary};
    color: ${({ theme }) => theme.colors.text.secondary};
    text-transform: uppercase;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.backgrounds.quaternary};
  }

  tr:hover {
    background-color: ${({ theme }) => theme.colors.backgrounds.tertiary};
    transition: background-color 0.3s ease;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

// Título da página ou seção
export const TableTitle = styled.h1`
  font-size: ${({ theme }) => theme.sizes.font.terciary};
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

// Div envolvente da tabela
export const Tablediv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 6rem; /* Espaço para o Header */
`;



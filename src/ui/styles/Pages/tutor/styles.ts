import styled from "styled-components";

export const Container = styled.div`
    margin: 0;
    padding: 0;
`;

export const Title = styled.h1`
    display: flex;
    font-size: ${({ theme }) => theme.sizes.font.terciary};
    color: ${({ theme }) => theme.colors.text.primary};
    align-content: center;
    justify-content: center;
    height: 100%;
    gap: 1.625rem;
    padding: 1.625rem 0;
`;



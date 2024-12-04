import styled from "styled-components";

export const Container = styled.div`
    padding-top: 5rem;
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


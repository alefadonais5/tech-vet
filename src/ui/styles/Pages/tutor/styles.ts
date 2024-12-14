import styled from "styled-components";

export const Container = styled.div`
    margin: 0;
    padding: 0;
`;

export const Title = styled.h2`
    display: flex;
    font-size: ${({ theme }) => theme.sizes.font.terciary};
    color: ${({ theme }) => theme.colors.text.primary};
    align-content: center;
    justify-content: center;
    height: 100%;
    gap: 0.5rem;
    padding: 6rem 0 0 0;
`;



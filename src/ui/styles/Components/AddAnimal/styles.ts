import styled from "styled-components";

export const ContainerAddAnimal = styled.div`
    width: 100%;
    max-width: 66.8125rem;
    height: auto;
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.backgrounds.sextinary};
    border-radius: 1.25rem;
    padding: 2.5rem;
    gap: 2rem;
    box-shadow: 0px 4px 20px 0px rgba(${({ theme }) => theme.colors.backgrounds.sextinary},0 0.2);
`;

export const TitleAddAnimal = styled.h2`
    text-align: center;
    align-items: center;
`;

export const FormAnimal = styled.form`
    width: 100%;
    max-width: 70rem;
    height: auto;
    border: 1px solid ${({ theme }) => theme.colors.border.colors.primary};
    background-color: ${({ theme }) => theme.colors.backgrounds.quinary};
    border-radius: 1.25rem;
    padding: 2rem;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: normal;
`;

export const LabelTitlePet = styled.label`
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 400;
    font-size: ${({ theme }) => theme.sizes.font.primary};
    margin-right: 0;
    white-space: nowrap; /* Garante que o texto do label não quebre */
`;


export const InputAnimal = styled.input`
    flex: 1;
    min-width: 15rem;
    max-width: 25rem;
    font-weight: 400;
    font-size: ${({ theme }) => theme.sizes.font.primary};
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.backgrounds.quinary};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.colors.tertiary};
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    margin-left: 0;

    &:focus {
        border-bottom-color: ${({ theme }) => theme.colors.border.colors.tertiary};
        box-shadow: 0 0 5px ${({ theme }) => theme.colors.border.colors.tertiary};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.text.tertiary};
    }
`;


export const Select = styled.select`
    flex: 1;
    min-width: 15rem;
    max-width: 25rem;
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 400;
    font-size: ${({ theme }) => theme.sizes.font.primary};
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.backgrounds.quinary};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.colors.tertiary}; /* Define a borda */
    border-radius: none;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-bottom-color: ${({ theme }) =>
        theme.colors.border.colors.tertiary}; /* Cor ao focar no campo */
        box-shadow: 0 0 5px ${({ theme }) => theme.colors.border.colors.tertiary}; /* Sombra ao focar */
    }

    &::placeholder {
        color: ${({ theme }) =>
        theme.colors.text.tertiary}; /* Cor do placeholder */
    }

    option {
        background-color: ${({ theme }) => theme.colors.backgrounds.quinary}; /* Cor de fundo do option */
        color: ${({ theme }) => theme.colors.text.primary}; /* Cor do texto do option */
    }

    option:hover {
        background-color: ${({ theme }) => theme.colors.backgrounds.primary}; /* Cor de fundo do option ao passar o mouse */
        color: ${({ theme }) => theme.colors.text.secondary}; /* Cor do texto do option ao passar o mouse */
    }
`;

export const InputItem = styled.div`
    display: flex;
    flex-direction: row; /* Alinha os itens horizontalmente */
    align-items: center; /* Alinha verticalmente no centro */
    gap: 0.5rem; /* Espaço entre o label e o input */
    min-width: 45%;
    margin-bottom: 1rem;
`;


export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;

export const FormGroupRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: space-between;
    width: 100%;
`;
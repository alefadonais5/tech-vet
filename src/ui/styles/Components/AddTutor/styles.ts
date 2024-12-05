import styled from "styled-components";

export const ContainerAddTutor = styled.div`
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
  padding: 2rem;
  gap: 2rem;
  box-shadow: 0px 4px 20px 0px rgba(${({ theme }) => theme.colors.backgrounds.sextinary}, 0.2);
`;

export const TitleAddTutor = styled.div`
  text-align: center;
  align-items: center;
`;

export const FormTutor = styled.form`
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

export const LabelTitle = styled.label`
  white-space: nowrap;
  flex-shrink: 0;
  width: 9rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.sizes.font.primary};
  margin-right: 0;
`;

export const InputTutor = styled.input`
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

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const FormGroupRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;
`;

export const InputItem = styled.div`
  flex: 1;
  min-width: 45%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

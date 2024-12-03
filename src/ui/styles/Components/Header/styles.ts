import Image from "next/image";
import styled from "styled-components";

export const StyledInput = styled.input`
  align-items: center;
  border: none;
  width: 34rem;
  height: 1.875rem;
  outline: none;
  border-radius: 1.563rem;
`;

export const TitleName = styled.h1`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.sizes.font.terciary};
  cursor: pointer;
`;

export const IconSearch = styled(Image)`
  width: 2rem;
  height: 2rem;
`;

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgrounds.primary};
  width: 100%;
  height: 4.75rem;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  position: fixed;
  z-index: 1;
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  img {
    cursor: pointer;
  }
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const Icons = styled.div`
  cursor: pointer;
`;

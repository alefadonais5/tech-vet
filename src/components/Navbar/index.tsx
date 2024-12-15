import React from "react";
import { Itens, LayoutContainer } from "@/ui/styles/Components/Navbar/styles";
import { itens } from "./itens";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import LogoutIcon from "@/ui/assets/icons/Logout ";
import { logoutUser } from "@/service/authService";

interface NavbarProps {
  $isVisible: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ $isVisible }) => {
  const router = useRouter();

  const handleNavigation = (path: string) => () => router.push(path);

  const handleLogoutClick = () => {
    // Chama a função handleLogout passando o router e setLoading
    logoutUser();
  };


  return (
    <LayoutContainer $isVisible={$isVisible}>
      {itens.map((item) => (
        <Itens key={item.id} onClick={handleNavigation(item.path)}>
          <div>{item.icon}</div>
          <div>{item.title}</div>
        </Itens>
      ))}

      <Itens onClick={handleLogoutClick}>
        <div>
          <LogoutIcon />
        </div>
        <div>Sair</div>
      </Itens>
    </LayoutContainer>
  );
};

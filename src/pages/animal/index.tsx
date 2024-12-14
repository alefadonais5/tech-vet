import AddAnimal from "@/components/AddAnimal/index";
import { Header } from "@/components/Header/index";
import React from "react";
import {ContainerAnimal, TitlePet} from "@/ui/styles/Pages/animal/styles";

export default function AnimalVet(){

    return(
        <ContainerAnimal>
            <Header />
            <TitlePet>Animais</TitlePet>
            <AddAnimal />
        </ContainerAnimal>

    )
}
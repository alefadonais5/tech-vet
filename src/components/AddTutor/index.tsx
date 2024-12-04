import React, { useEffect, useState } from "react";
import {ContainerAddTutor, TitleAddTutor, FormTutor, LabelTitle, InputTutor} from "@/ui/styles/Components/AddTutor/styles";

export default function AddTutor(){
return(
    <ContainerAddTutor>
        <TitleAddTutor>Cadastrar Novo Tutor</TitleAddTutor>

        <FormTutor action="">
            <LabelTitle htmlFor="tutor-name">Nome:</LabelTitle>
            <InputTutor type="text" id="tutor-name" name="tutorName"/>

            <LabelTitle htmlFor="cpf-tutor">CPF:</LabelTitle>
            <InputTutor type="number" id="cpf-tutor" name="cpf-tutor"/>

            <LabelTitle htmlFor="rg-tutor">RG:</LabelTitle>
            <InputTutor type="text" id="rg-tutor" name="rg-tutor"/>

            <LabelTitle htmlFor="date-tutor">Data de Nascimento:</LabelTitle>
            <InputTutor type="date" id="date-tutor" name="date-tutor"/>

            <LabelTitle htmlFor="sexo-tutor">Sexo:</LabelTitle>
            <InputTutor type="text" id="sexo-tutor" name="sexo-tutor"/>

            <TitleAddTutor>Dados para contato:</TitleAddTutor>

            <LabelTitle htmlFor="cep-tutor">CEP:</LabelTitle>
            <InputTutor type="number" id="cep-tutor" name="cep-tutor"/>

            <LabelTitle htmlFor="address-tutor">Endereço:</LabelTitle>
            <InputTutor type="text" id="address-tutor" name="address-tutor"/>

            <LabelTitle htmlFor="number-tutor">Número:</LabelTitle>
            <InputTutor type="number" id="number-tutor" name="number-tutor"/>

            <LabelTitle htmlFor="bairro-tutor">Bairro:</LabelTitle>
            <InputTutor type="text" id="bairro-tutor" name="bairro-tutor"/>
            
            <LabelTitle htmlFor="city-tutor">Cidade:</LabelTitle>
            <InputTutor type="text" id="city-tutor" name="city-tutor"/>

            <LabelTitle htmlFor="state-tutor">Estado:</LabelTitle>
            <InputTutor type="text" id="state-tutor" name="state-tutor"/>
            
            <LabelTitle htmlFor="tel-tutor">Telefone:</LabelTitle>
            <InputTutor type="tel" id="tel-tutor" name="tel-tutor"/>

            <LabelTitle htmlFor="email-tutor">Email:</LabelTitle>
            <InputTutor type="text" id="email-tutor" name="email-tutor"/>
            
            <button type="submit"> Cadastrar tutor</button>
        </FormTutor>
    </ContainerAddTutor>
)
    
}
import React, { useEffect, useState } from "react";
import {Div1} from "@/ui/styles/Components/AddTutor/styles";

export default function AddTutor(){
return(
    <Div1>
        <h1>Cadastrar Novo Tutor</h1>

        <form action="">
            <label htmlFor="tutor-name">Nome:</label>
            <input type="text" id="tutor-name" name="tutorName"/>

            <label htmlFor="cpf-tutor">CPF:</label>
            <input type="number" id="cpf-tutor" name="cpf-tutor"/>

            <label htmlFor="rg-tutor">RG:</label>
            <input type="text" id="rg-tutor" name="rg-tutor"/>

            <label htmlFor="date-tutor">Data de Nascimento:</label>
            <input type="date" id="date-tutor" name="date-tutor"/>

            <label htmlFor="sexo-tutor">Sexo:</label>
            <input type="text" id="sexo-tutor" name="sexo-tutor"/>

            <h2>Dados para contato:</h2>

            <label htmlFor="cep-tutor">CEP:</label>
            <input type="number" id="cep-tutor" name="cep-tutor"/>

            <label htmlFor="address-tutor">Endereço:</label>
            <input type="text" id="address-tutor" name="address-tutor"/>

            <label htmlFor="number-tutor">Número:</label>
            <input type="number" id="number-tutor" name="number-tutor"/>

            <label htmlFor="bairro-tutor">Bairro:</label>
            <input type="text" id="bairro-tutor" name="bairro-tutor"/>
            
            <label htmlFor="city-tutor">Cidade:</label>
            <input type="text" id="city-tutor" name="city-tutor"/>

            <label htmlFor="state-tutor">Estado:</label>
            <input type="text" id="state-tutor" name="state-tutor"/>
            
            <label htmlFor="tel-tutor">Telefone:</label>
            <input type="tel" id="tel-tutor" name="tel-tutor"/>

            <label htmlFor="email-tutor">Email:</label>
            <input type="text" id="email-tutor" name="email-tutor"/>
            
            <button type="submit"> Cadastrar tutor</button>
        </form>
    </Div1>
)
    
}
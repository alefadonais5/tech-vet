import React from "react";
import { 
  ContainerAddTutor, 
  TitleAddTutor, 
  FormTutor, 
  LabelTitle, 
  InputTutor, 
  FormGroup, 
  FormGroupRow, 
  InputItem, 
  SubTitleTutor
} from "@/ui/styles/Components/AddTutor/styles";
import { SecundaryButton } from "../Elements/Buttons";

export default function AddTutor() {
  return (
    <ContainerAddTutor>
      <TitleAddTutor>Cadastrar Novo Tutor</TitleAddTutor>

      <FormTutor action="submit">
        <FormGroup>
          <FormGroupRow>
            <InputItem>
              <LabelTitle htmlFor="tutor-name">Nome:</LabelTitle>
              <InputTutor type="text" id="tutor-name" name="tutorName" />
            </InputItem>
            <InputItem>
              <LabelTitle htmlFor="cpf-tutor">CPF:</LabelTitle>
              <InputTutor type="number" id="cpf-tutor" name="cpf-tutor" />
            </InputItem>
          </FormGroupRow>

          <FormGroupRow>
            <InputItem>
              <LabelTitle htmlFor="rg-tutor">RG:</LabelTitle>
              <InputTutor type="text" id="rg-tutor" name="rg-tutor" />
            </InputItem>
            <InputItem>
              <LabelTitle htmlFor="date-tutor">Data de Nascimento:</LabelTitle>
              <InputTutor type="date" id="date-tutor" name="date-tutor" />
            </InputItem>
          </FormGroupRow>

          <FormGroupRow>
            <InputItem>
              <LabelTitle htmlFor="sexo-tutor">Sexo:</LabelTitle>
              <InputTutor type="text" id="sexo-tutor" name="sexo-tutor" />
            </InputItem>
          </FormGroupRow>
        </FormGroup>

        <SubTitleTutor>Dados para contato:</SubTitleTutor>

        <FormGroup>
          <FormGroupRow>
            <InputItem>
              <LabelTitle htmlFor="cep-tutor">CEP:</LabelTitle>
              <InputTutor type="number" id="cep-tutor" name="cep-tutor" />
            </InputItem>
            <InputItem>
              <LabelTitle htmlFor="address-tutor">Endereço:</LabelTitle>
              <InputTutor type="text" id="address-tutor" name="address-tutor" />
            </InputItem>
          </FormGroupRow>

          <FormGroupRow>
            <InputItem>
              <LabelTitle htmlFor="number-tutor">Número:</LabelTitle>
              <InputTutor type="number" id="number-tutor" name="number-tutor" />
            </InputItem>
            <InputItem>
              <LabelTitle htmlFor="bairro-tutor">Bairro:</LabelTitle>
              <InputTutor type="text" id="bairro-tutor" name="bairro-tutor" />
            </InputItem>
          </FormGroupRow>

          <FormGroupRow>
            <InputItem>
              <LabelTitle htmlFor="city-tutor">Cidade:</LabelTitle>
              <InputTutor type="text" id="city-tutor" name="city-tutor" />
            </InputItem>
            <InputItem>
              <LabelTitle htmlFor="state-tutor">Estado:</LabelTitle>
              <InputTutor type="text" id="state-tutor" name="state-tutor" />
            </InputItem>
          </FormGroupRow>

          <FormGroupRow>
            <InputItem>
              <LabelTitle htmlFor="tel-tutor">Telefone:</LabelTitle>
              <InputTutor type="tel" id="tel-tutor" name="tel-tutor" />
            </InputItem>
            <InputItem>
              <LabelTitle htmlFor="email-tutor">Email:</LabelTitle>
              <InputTutor type="email" id="email-tutor" name="email-tutor" />
            </InputItem>
          </FormGroupRow>
        </FormGroup>
        
        <SecundaryButton>Cadastrar tutor</SecundaryButton>
      </FormTutor>
    </ContainerAddTutor>
  );
}


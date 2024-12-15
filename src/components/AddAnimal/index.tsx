import { ContainerAddAnimal, FormAnimal, FormGroup, FormGroupRow, InputAnimal, InputItem, LabelTitlePet, Select, TitleAddAnimal } from "@/ui/styles/Components/AddAnimal/styles";
import React from "react";
import { SecundaryButton } from "../Elements/Buttons";


export default function AddAnimal(){

    return(
        <ContainerAddAnimal>
            <TitleAddAnimal>Cadastrar Animal</TitleAddAnimal>
            <FormAnimal action="">
                <FormGroup>
                    <FormGroupRow>
                        <InputItem>
                            <LabelTitlePet htmlFor="animal-name">Nome: </LabelTitlePet>
                            <InputAnimal type="text" id="animal-name" name="animal-name"/>
                        </InputItem>
                        
                        <InputItem>
                            <LabelTitlePet htmlFor="tutor-name">Tutor: </LabelTitlePet>
                            <InputAnimal type="text" id="tutor-name" name="tutor-name"/>
                        </InputItem>

                        <InputItem>
                            <LabelTitlePet htmlFor="species">Espécie: </LabelTitlePet>
                            <InputAnimal type="text" id="species" name="species"/>
                        </InputItem>

                        <InputItem>
                            <LabelTitlePet htmlFor="race">Raça: </LabelTitlePet>
                            <InputAnimal type="text" id="race" name="race"/>
                        </InputItem>

                        <InputItem>
                            <LabelTitlePet htmlFor="pelo">Pêlo: </LabelTitlePet>
                            <Select name="pelo" id="pelo">
                                <option value="" hidden>--selecionar--</option>
                                <option value="short">Curto</option>
                                <option value="soon">Longo</option>
                            </Select>
                        </InputItem>

                        <InputItem>
                            <LabelTitlePet htmlFor="color-animal">Cor: </LabelTitlePet>
                            <InputAnimal type="text" id="color-animal" name="color-animal"/>
                        </InputItem>
                    </FormGroupRow>
                </FormGroup>

                <FormGroup>
                    <FormGroupRow>
                        <InputItem>
                            <LabelTitlePet htmlFor="sex">Sexo: </LabelTitlePet>
                            <Select name="sex-animal" id="sex-animal">
                                <option value="" hidden>--selecionar--</option>
                                <option value="male">Macho</option>
                                <option value="female">Fêmea</option>
                            </Select>
                        </InputItem>

                        <InputItem>
                            <LabelTitlePet htmlFor="animal-birth">Nascimento: </LabelTitlePet>
                            <InputAnimal type="date" id="animal-birth" name="animal-birth"/>
                        </InputItem>

                        <InputItem>
                            <LabelTitlePet htmlFor="castrated">Castrado: </LabelTitlePet>
                            <Select name="sex-castrated" id="castrated">
                                <option value="" hidden>--selecionar--</option>
                                <option value="yes">Sim</option>
                                <option value="not">Não</option>
                            </Select>
                        </InputItem>

                        <InputItem>
                            <LabelTitlePet htmlFor="weight-animal">Peso: </LabelTitlePet>
                            <InputAnimal type="number" id="weight-animal" name="weight-animal"/>
                        </InputItem>

                        <InputItem>
                            <LabelTitlePet htmlFor="restrictions">Restrições: </LabelTitlePet>
                            <InputAnimal type="text" name="restrictions" id="restrictions" />
                        </InputItem>
                    </FormGroupRow>
                </FormGroup>
                <SecundaryButton>Cadastrar animal</SecundaryButton>
            </FormAnimal>
        </ContainerAddAnimal>
    )
}
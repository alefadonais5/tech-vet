import React from "react";


export default function AddAnimal(){

    return(
        <div>
            <h2>Cadastrar Animal</h2>
            <form action="">
                <label htmlFor="animal-name">Nome: </label>
                <input type="text" id="animal-name" name="animal-name"/>

                <label htmlFor="tutor-name">Tutor: </label>
                <input type="text" id="tutor-name" name="tutor-name"/>

                <label htmlFor="species">Espécie: </label>
                <input type="text" id="species" name="species"/>

                <label htmlFor="race">Raça: </label>
                <input type="text" id="race" name="race"/>

                <label htmlFor="pelo">Pêlo: </label>
                <select name="pelo" id="pelo">
                    <option value="" hidden>--selecionar--</option>
                    <option value="short">Curto</option>
                    <option value="soon">Longo</option>
                </select>

                <label htmlFor="color-animal">Cor: </label>
                <input type="text" id="color-animal" name="color-animal"/>

                <label htmlFor="sex">Sexo: </label>
                <select name="sex-animal" id="sex-animal">
                    <option value="" hidden>--selecionar--</option>
                    <option value="male">Macho</option>
                    <option value="female">Fêmea</option>
                </select>

                <label htmlFor="animal-birth">Nascimento: </label>
                <input type="date" id="animal-birth" name="animal-birth"/>

                <label htmlFor="castrated">Castrado: </label>
                <select name="sex-castrated" id="castrated">
                    <option value="" hidden>--selecionar--</option>
                    <option value="yes">Sim</option>
                    <option value="not">Não</option>
                </select>
                
                <label htmlFor="weight-animal">Peso: </label>
                <input type="number" id="weight-animal" name="weight-animal"/>

                <label htmlFor="restrictions">Restrições: </label>
                <input type="text" name="restrictions" id="restrictions" />

                <button type="submit">Cadastrar animal</button>
            </form>

        </div>
    )
}
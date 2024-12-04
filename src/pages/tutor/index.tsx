import AddTutor from "@/components/AddTutor";
import { Header } from "@/components/Header";
import React, { useEffect, useState } from "react";
import { Container } from "@/ui/styles/Pages/tutor/styles";
import { Title } from "@/ui/styles/Pages/tutor/styles";
import { SecundaryButton } from "@/components/Elements/Buttons";
import { useRouter } from "next/router";


export default function TutorVet(){

    const [loading, setloading] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setloading(true)
    }
    return(
        <Container>
            <Header />
            <div>
                <Title>Tutores</Title>
            </div>

            {loading ? (
                <AddTutor />  //onCancel={handleCancel} />
            ) : (
                <SecundaryButton onClick={handleClick}>Cadastrar tutor</SecundaryButton>
            )};
            
        </Container>
    );
}


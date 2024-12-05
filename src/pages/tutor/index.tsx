import AddTutor from "@/components/AddTutor";
import { Header } from "@/components/Header";
import React, { useState } from "react";
import { Container, Title } from "@/ui/styles/Pages/tutor/styles";
import { useRouter } from "next/router";

export default function TutorVet() {
    const [loading, setloading] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setloading(true);
    };

    return (
        <Container>
            <Header />
                <Title>Tutores</Title>
                <AddTutor />
        </Container>
    );
}




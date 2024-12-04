import AddTutor from "@/components/AddTutor";
import { Header } from "@/components/Header";
import React, { useEffect, useState } from "react";
import { Container } from "@/ui/styles/Pages/tutor/styles";


export default function TutorVet(){
    return(
        <Container>
            <Header />
                <AddTutor />
        
        </Container>
    );
}


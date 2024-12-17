import React from "react";
import { StyledTable, TableContainer, TableTitle, Tablediv, Container} from "@/ui/styles/Pages/estoque/styles"
import { Header } from "@/components/Header";
import stockItems from "@/service/mocks/estoque"

export default function Estoque(){
    return(
        <Container>
            <Header />
            <TableContainer>
                <Tablediv>
                <TableTitle>Estoque da Clínica Veterinária</TableTitle>
                <StyledTable>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Quantidade</th>
                        <th>Unidade</th>
                        <th>Validade</th>
                        <th>Fornecedor</th>
                    </tr>
                    </thead>
                    <tbody>
                    {stockItems.map((item) => (
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.categoria}</td>
                        <td>{item.quantidade}</td>
                        <td>{item.unidade}</td>
                        <td>{item.validade}</td>
                        <td>{item.fornecedor}</td>
                        </tr>
                    ))}
                    </tbody>
                </StyledTable>
                </Tablediv>
            </TableContainer>
        </Container>
    );
};
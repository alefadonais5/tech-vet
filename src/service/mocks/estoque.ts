interface StockItem {
    id: string;
    nome: string;
    categoria: string;
    quantidade: number;
    unidade: string;
    validade: string;
    fornecedor: string;
  }
  
  const stockItems: StockItem[] = [
    {
      id: "1",
      nome: "Vacina Antirrábica",
      categoria: "Vacinas",
      quantidade: 50,
      unidade: "doses",
      validade: "30/06/2025",
      fornecedor: "BioVet Farmacêutica",
    },
    {
      id: "2",
      nome: "Ração Seca para Cães (10kg)",
      categoria: "Alimentos",
      quantidade: 20,
      unidade: "sacos",
      validade: "15/12/2024",
      fornecedor: "PetFood Distribuidora",
    },
    {
      id: "3",
      nome: "Antibiótico Amoxicilina 500mg",
      categoria: "Medicamentos",
      quantidade: 75,
      unidade: "comprimidos",
      validade: "01/09/2024",
      fornecedor: "SaúdeVet Pharma",
    },
    {
      id: "4",
      nome: "Solução de Limpeza Desinfetante 1L",
      categoria: "Limpeza",
      quantidade: 30,
      unidade: "frascos",
      validade: "10/02/2025",
      fornecedor: "CleanPet Produtos",
    },
    {
      id: "5",
      nome: "Coleira Antipulgas",
      categoria: "Acessórios",
      quantidade: 15,
      unidade: "unidades",
      validade: "20/04/2025",
      fornecedor: "PetSafe Equipamentos",
    },
    {
      id: "6",
      nome: "Seringa 3ml Descartável",
      categoria: "Materiais Hospitalares",
      quantidade: 200,
      unidade: "unidades",
      validade: "15/03/2027",
      fornecedor: "MedVet Suprimentos",
    },
  ];
  
  export default stockItems;
  
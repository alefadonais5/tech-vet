type Internamento = {
    id: number;
    nomeAnimal: string;
    nomeTutor: string;
    dataInternamento: string;
    dataAlta?: string; // Caso o animal já tenha alta
    motivo: string;
    estadoSaude: "crítico" | "grave" | "estável" | "recuperado";
    observacoes: string;
  };
  
  export const internamentos: Internamento[] = [
    {
      id: 1,
      nomeAnimal: "Bella",
      nomeTutor: "Lucas Silva",
      dataInternamento: "01/12/2024", // Data no formato brasileiro
      dataAlta: "10/12/2024",
      motivo: "Cirurgia ortopédica devido a fratura",
      estadoSaude: "estável",
      observacoes: "Recuperação bem-sucedida, seguirá acompanhamento fisioterápico.",
    },
    {
      id: 2,
      nomeAnimal: "Max",
      nomeTutor: "Carla Souza",
      dataInternamento: "03/12/2024",
      motivo: "Tratamento de intoxicação alimentar",
      estadoSaude: "grave",
      observacoes: "Animal está em observação, aguarda melhoria para liberação.",
    },
    {
      id: 3,
      nomeAnimal: "Luna",
      nomeTutor: "Júlia Oliveira",
      dataInternamento: "05/12/2024",
      dataAlta: "07/12/2024",
      motivo: "Infecção urinária grave",
      estadoSaude: "recuperado",
      observacoes: "Alta dada com sucesso, recomenda-se tratamento preventivo.",
    },
    {
      id: 4,
      nomeAnimal: "Thor",
      nomeTutor: "Ricardo Lima",
      dataInternamento: "10/12/2024",
      motivo: "Monitoramento pós-operatório de cirurgia abdominal",
      estadoSaude: "crítico",
      observacoes: "Estado crítico, requer cuidados intensivos.",
    },
    {
      id: 5,
      nomeAnimal: "Mel",
      nomeTutor: "Amanda Costa",
      dataInternamento: "12/12/2024",
      dataAlta: "14/12/2024",
      motivo: "Acidente de carro - Fraturas múltiplas",
      estadoSaude: "grave",
      observacoes: "Passou por cirurgia, estável, mas com recuperação prolongada.",
    },
    {
      id: 6,
      nomeAnimal: "Rocky",
      nomeTutor: "José Pereira",
      dataInternamento: "14/12/2024",
      motivo: "Acompanhamento pós-traumático de lesão muscular",
      estadoSaude: "estável",
      observacoes: "Já está em recuperação, mas necessita de mais tempo de internação.",
    },
  ];
  
  export default internamentos;
  
  
import ExamsIcon from "@/ui/assets/icons/Exams";
import ForecastIcon from "@/ui/assets/icons/Forecast";
import HospitalIcon from "@/ui/assets/icons/Hospital";
import IconPaw from "@/ui/assets/icons/IconPaw";
import LogoutIcon from "@/ui/assets/icons/Logout ";
import PersonIcon from "@/ui/assets/icons/Person";
import ServiceIcon from "@/ui/assets/icons/Service";
import StockIcon from "@/ui/assets/icons/Stock";



export const itens = [
  {
    id: "1",
    icon: <ServiceIcon />,
    title: "Consultas",
    path: "/consultas",
  },
  {
    id: "2",
    icon: <PersonIcon />,
    title: "Tutores",
    path: "/tutor",
  },
  {
    id: "3",
    icon: <IconPaw />,
    title: "Animais",
    path: "/animal",
  },
  {
    id:"4",
    icon: <ExamsIcon />,
    title: "Exames",
    path: "/exames",
  },
  {
    id: "5",
    icon: <HospitalIcon />,
    title: "Internamentos",
    path: "/internamentos",
  },
  {
    id: "6",
    icon: <StockIcon />,
    title: "Estoque",
    path: "/estoque",
  },
  {
    id: "7",
    icon: <ForecastIcon />,
    title: "Previsão de estoque",
    path: "/previsao-de-estoque",
  },
];

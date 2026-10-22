import { Text } from "react-native";

type SaudacaoProps = {
  nome: string;
};

export default function Saudacao(props: SaudacaoProps) {
  return <Text>Olá, {props.nome}!</Text>;
}
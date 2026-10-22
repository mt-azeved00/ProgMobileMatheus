import { View, Text, StyleSheet } from "react-native";

type CartaoAlunoProps = {
  nome: string;
  idade: number;
};

export default function CartaoAluno(props: CartaoAlunoProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Cartão do Aluno</Text>
      <Text>Nome: {props.nome}</Text>
      <Text>Idade: {props.idade} anos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eeeeee",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

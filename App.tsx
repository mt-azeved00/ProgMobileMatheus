
import { View } from "react-native";
import CartaoAluno from "./app/component/cartaoAluno";


export default function Index() {
  return (
    <View>
      <CartaoAluno nome="matheus" idade={17} />
      <CartaoAluno nome="murilo" idade={17} />
      <CartaoAluno nome="arthur" idade={17} />
    </View>
  );
}

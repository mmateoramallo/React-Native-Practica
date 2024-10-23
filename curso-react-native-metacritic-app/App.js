import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

const icon = require("./assets/icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={{ width: 100, height: 100, resizeMode: "contain" }}
      />
      <Text style={{ color: "white" }}>Mi primer texto</Text>
      <Image
        source={{
          uri: "https://img.redbull.com/images/c_crop,x_1070,y_0,h_2160,w_1620/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/3/10/azhatbn9ucwnd9vi94g0/valorant",
        }}
        style={{ width: 215, height: 250 }}
      />
      <Text style={{ color: "white" }}>
        Open up App.js to start working on your app!
      </Text>
      {/* Poner un boton nativo del disp, no se puede estilar el boton nativo del dispositivo */}
      <Button
        color="red"
        title="Pulsa aqui"
        onPress={() => alert("Hola desde un boton nativo")}
      />
      <TouchableHighlight
        onPress={() => alert("Hola desde un TouchableHighlight")}
        underlayColor={"#09f"}
        style={{
          backgroundColor: "red",
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white" }}>Boton personalizado</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});

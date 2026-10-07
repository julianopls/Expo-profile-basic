import { Image, Linking, Pressable, ScrollView, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../assets/images/julianopls.png")}
        style={styles.imagem}
        resizeMode="cover"
      />
      <Text style={styles.titulo}>julianopls</Text>
      <Text style={styles.subtitulo}>Cursando SENAI-DS</Text>
      <Pressable
        style={styles.botao}
        onPress={() => Linking.openURL("https://github.com/julianopls")}
      >
        <Text style={styles.textoBotao}>Meu GitHub</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  imagem: {
    width: 180,
    height: 320,
    borderRadius: 16,
    marginBottom: 20,
  },
  titulo: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitulo: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#4da6ff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
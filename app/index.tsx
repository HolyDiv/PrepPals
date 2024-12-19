import { Text, View, StyleSheet, ImageBackground, Pressable } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello</Text>
      <Link href ="/DummyScreen" style={{ marginHorizontal: 'auto'}} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>DummyScreen</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
  button: {
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6,
  }
})
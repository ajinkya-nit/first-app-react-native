import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default function AgeCheck() {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const checkAge = () => {
    const numAge = parseInt(age);

    if (!numAge) {
      setMessage("Please enter valid age");
    }
    else {
      setMessage(`Your Age is ${age}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Age Match</Text>

      <TextInput
        value={age}
        onChangeText={setAge}
        placeholder="Enter your age"
        keyboardType="numeric"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={checkAge}>
        <Text style={styles.buttonText}>Check</Text>
      </TouchableOpacity>

      {message !== "" && (
        <Text style={styles.message}>{message}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f2f2f2"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#007bff"
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff"
  },
  button: {
    marginTop: 15,
    width: "100%",
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600"
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "500"
  }
});
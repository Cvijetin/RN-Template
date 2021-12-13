import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export function HomeScreen({ route, navigation }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  
  const sendRequest = async () => {
    try {
      await fetch("https://webhook.site/496823ca-e5e7-4bf8-a371-2d94fed89ebf", {
      method: "post",
      mode: "no-core",
      headers:{
        Accept: "application/json",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
        password: password
      })
    })
    setName("");
    setSurname("");
    setPassword("");
    } catch (error) {
      
    }
  }
  
  
  function handleSettingsPress() {
    navigation.navigate("Settings");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputWrapper}>
        <Text>Unesi ime</Text>
        <TextInput
        style={styles.input} 
        onChangeText={setName}
        value={name}
        />
        </View>
        <View>
        <Text>Unesi prezime</Text>
        <TextInput
        style={styles.input} 
        onChangeText={setSurname}
        value={surname}
        />
      </View>
      <View>
        <Text>Unesi lozinku</Text>
        <TextInput
        style={styles.input} 
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        />
      </View>
      
      <Button title="Pošalji" onPress={sendRequest} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input:{
    height: 40,
    width: 250,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10
  },
  inputWrapper:{

  }
});

import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import * as Google from "expo-google-app-auth"
export function HomeScreen({ route, navigation }) {

  const handleGoogleSignIn = () => {
    const config = {
      iosClientId: "421591619646-h9ogh6jodh2q2fot8s7bj4ngrg169pu5.apps.googleusercontent.com",
      scopes: ["profile", "email"]
    }
    Google.logInAsync(config).then((result) => {
      const {type, user} = result;
      if (type == "success") {
        const {email, name} = user;
        console.log("Sign in successfull")
        setTimeout(
          () => navigation.navigate("Settings", {email, name}), 1000
        ) 
      } else {
        console.log("Sign in failed")
      }
    }).catch((error) => {
      console.log("error")
    })
  }



  return (
    <View style={styles.screen}>
      <Text>The Home Screen!</Text>
      <Button
        title="Signup"
        onPress={handleGoogleSignIn}
      />
      {/* iOS client ID
       421591619646-h9ogh6jodh2q2fot8s7bj4ngrg169pu5.apps.googleusercontent.com */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

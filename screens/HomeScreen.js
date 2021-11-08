import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export function HomeScreen({ route, navigation }) {
  function handleSettingsPress() {
    navigation.navigate("Settings");
  }

  return (
    <View style={styles.screen}>
      <Text>The Home Screen!</Text>
      <Button
        title="Go to the Settings screen!"
        onPress={handleSettingsPress}
      />
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

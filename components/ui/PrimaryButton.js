import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    console.log("Pressed!");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <LinearGradient colors={["#4e0329", "#ddb52f"]}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.buttonInnerContainer, styles.pressed]
              : styles.buttonInnerContainer
          }
          onPress={onPress}
          android_ripple={{ color: Colors.primary600 }}
        >
          <Text style={styles.buttonText}> {children} </Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 30,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

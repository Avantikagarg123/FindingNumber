import { Text, StyleSheet } from "react-native";

function InstructionText({ children,style }) {
  return <Text style={[styles.intructionText,style]}>{children}</Text>;
}
export default InstructionText;

const styles = StyleSheet.create({
  intructionText: {
    fontWeight:"bold",
    color: "#ddb52f",
    fontSize: 24,
  },
});

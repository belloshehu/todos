import { Text, View, StyleSheet, Pressable } from "react-native";

function Goal({ text, onDelete, index }) {
  return (
    <Pressable
      style={styles.goalItem}
      onPress={onDelete}
      android_ripple={{ color: "#643fdc" }}>
      <Text style={styles.indexWrapper}>{index}</Text>
      <Text style={{ color: "#fff" }}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    backgroundColor: "#603740",
    margin: 5,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  indexWrapper: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
    padding: 5,
    width: 30,
    textAlign: "center",
    color: "white",
    marginRight: 10,
  },
});
export default Goal;

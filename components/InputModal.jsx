import {
  StyleSheet,
  View,
  Image,
  Button,
  TextInput,
  Modal,
  Text,
} from "react-native";

export const InputModal = ({
  textChangeHandler,
  addGoalHandler,
  cancelHandler,
  visible,
  text,
  goals,
}) => {
  return (
    <Modal visible={visible} animationType="slide" style={styles.modal}>
      <View style={styles.textInputWrapper}>
        <Image
          source={require("../assets/images/goals.jpg")}
          style={styles.icon}
        />
        <Text style={styles.goalCount}>{goals.length} Goals</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a goal"
          onChangeText={(newText) => textChangeHandler(newText)}
          value={text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button
              title="Add item"
              onPress={addGoalHandler}
              color={"#603740"}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="Cancel" onPress={cancelHandler} color={"#603740"} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#bcbac4",
    borderWidth: 1,
    width: "90%",
    padding: 10,
  },
  textInputWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: "#cbacaa",
  },
  buttonWrapper: {
    width: "43%",
    marginHorizontal: 5,
  },
  buttonContainer: {
    marginTop: 15,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  modal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  goalCount: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#603140",
    marginVertical: 10,
    textAlign: "center",
  },
  icon: {
    width: 200,
    height: 200,
  },
});

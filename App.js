import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import GoalItems from "./components/GoalItems";
import { InputModal } from "./components/InputModal";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState([]);
  const [isVisible, setIsvisible] = useState(true);

  const handTextChange = (text) => {
    setGoalText(text);
  };
  const handleAddGoal = () => {
    if (goalText !== "" && goalText.length > 2) {
      setGoals((prev) => [
        ...prev,
        { id: new Date().getMilliseconds().toString(), text: goalText },
      ]);
      setGoalText("");
    }
  };

  const closeModal = () => {
    setIsvisible(false);
  };
  const handleDeleteGoal = (id) => {
    setGoals((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <InputModal
          textChangeHandler={handTextChange}
          addGoalHandler={handleAddGoal}
          cancelHandler={closeModal}
          visible={isVisible}
          text={goalText}
          goals={goals}
        />
        <View style={styles.goalsWrapper}>
          <Button
            title="Add new goal"
            onPress={() => setIsvisible(true)}
            color={"#603740"}
          />
          {goals.length > 0 ? (
            <GoalItems goals={goals} deleteHandler={handleDeleteGoal} />
          ) : (
            <Text
              style={{
                textAlign: "center",
                marginTop: "auto",
                marginBottom: "auto",
              }}>
              You have no goals
            </Text>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#cbacaa",
    paddingTop: 50,
    padding: 10,
    width: "100%",
  },
  textItem: {
    color: "#fff",
  },
  goalsWrapper: {
    flex: 6,
    padding: 10,
    width: "100%",
  },
});

import { FlatList, View, StyleSheet } from "react-native";
import Goal from "./Goal";

function GoalItems({ goals, deleteHandler }) {
  return (
    <FlatList
      data={goals}
      renderItem={(itemData) => (
        <Goal
          index={itemData.index + 1}
          text={itemData.item.text}
          onDelete={() => deleteHandler(itemData.item.id)}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  goalItemsWrapper: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default GoalItems;

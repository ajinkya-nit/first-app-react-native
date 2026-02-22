import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

const data = [
  { id: 1, title: "Item 1" },
  { id: 2, title: "Item 2" },
  { id: 3, title: "Item 3" },
  { id: 4, title: "Item 4" },
  { id: 5, title: "Item 5" },
  { id: 6, title: "Item 6" },
  { id: 7, title: "Item 7" },
  { id: 8, title: "Item 8" },
  { id: 9, title: "Item 9" },
  { id: 10, title: "Item 10" },
  { id: 11, title: "Item 1" },
  { id: 12, title: "Item 2" },
  { id: 13, title: "Item 3" },
  { id: 14, title: "Item 4" },
  { id: 15, title: "Item 5" },
  { id: 16, title: "Item 6" },
  { id: 17, title: "Item 7" },
  { id: 18, title: "Item 8" },
  { id: 19, title: "Item 9" },
  { id: 20, title: "Item 10" }
];

const Grid = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.heading}>Grid</Text>

      <ScrollView contentContainerStyle={styles.container}>
        {data.map((item) => (
          <View key={item.id} style={styles.box}>
            <Text>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  box: {
    width: "45%",
    height: 100,
    backgroundColor: "#ddd",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});

export default Grid;

import React from "react";
import QuestionOutput from "./QuestionOutput";

import {
  FlatList,
  StyleSheet,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  data: string;
  id: number;
};

const QuestionList = ({ data }) => {
  const handleCardPress = (link) => {
    console.log(link);
    Linking.openURL(link);
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handleCardPress(item.link)}
          style={styles.cardContainer}
        >
          <View style={styles.card}>
            <Text style={styles.title}>Title: {item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = {
  cardContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    elevation: 2, // Add shadow on Android
    shadowColor: "rgba(0, 0, 0, 0.2)", // Add shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  card: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
};

export default QuestionList;

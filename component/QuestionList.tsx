import React, { useState } from "react";
import { FlatList, Linking, Text, TouchableOpacity, View } from "react-native";

type Props = {
  data: Array<object>;
};

const QuestionList: React.FC<Props> = ({ data }) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleCardPress = (link) => {
    Linking.openURL(link);
  };

  const loadMoreData = () => {
    if (!loading) {
      setLoading(true);

      setTimeout(() => {
        setPage(page + 1);
        setLoading(false);
      }, 1000);
    }
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
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.1}
    />
  );
};

const styles = {
  cardContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowColor: "rgba(0, 0, 0, 0.2)",
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

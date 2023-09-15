import React from "react";
import { Text, View } from "react-native";
import useFetch from "../services/apiService";
import QuestionList from "../component/QuestionList";

const NodeTab = () => {
  const query = {
    site: "stackoverflow",
    order: "desc",
    sort: "activity",
    tagged: "node.js",
    filter: "default",
  };

  const [data, isLoading, error] = useFetch({
    endpoint: "2.3/questions",
    query,
  });

  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Loading ...</Text>
    </View>;
  }

  if (error) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Data fetching failed</Text>
    </View>;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <QuestionList data={data?.data?.items} />
    </View>
  );
};

export default NodeTab;

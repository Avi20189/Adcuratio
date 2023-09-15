import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useFetch from "../apiService";
import QuestionList from "./QuestionList";

const tag = "node.js";

const query = {
  site: "stackoverflow",
  order: "desc",
  sort: "activity",
  tagged: tag,
  filter: "default",
};

const NodeTab = () => {
  // useFetch({ endpoint, query }: Props): readonly [void | AxiosResponse<any, any> | null, any, boolean, () => void]
  const [data, isLoading, error, reFetch] = useFetch({
    endpoint: "2.3/questions",
    query,
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <QuestionList data={data?.data?.items} />
    </View>
  );
};
export default NodeTab;

//We are getting data from apiService and we have to process it and show it on frontend .
// we have to build a page to show it on front end,
// We are getting data but in console so we have to shift it from console to front end.

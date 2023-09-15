import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useFetch from "../apiService";
import QuestionList from "./QuestionList";

const tag = "native";

const query = {
  site: "stackoverflow",
  order: "desc",
  sort: "activity",
  tagged: tag,
  filter: "default",
};

const React_NativeTab = () => {
  // useFetch({ endpoint, query }: Props): readonly [void | AxiosResponse<any, any> | null, any, boolean, () => void]
  const [data, isLoading, error, reFetch] = useFetch({
    endpoint: "2.3/questions",
    query,
  });
  console.log(data);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <QuestionList data={data?.data?.items} />
    </View>
  );
};
export default React_NativeTab;

import { Text, View } from "react-native";
import RecipeController from "./RecipeController";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RecipeController searchQuery={"chicken"} />
    </View>
  );
}

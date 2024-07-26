import { View } from "react-native";
import { Text } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";

function Performance() {
  const { id } = useLocalSearchParams();
  return (
    <>
      <View>
        <Text>Performance: {id}</Text>
      </View>
    </>
  );
}

export default Performance;

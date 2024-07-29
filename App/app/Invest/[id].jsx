import { View } from "react-native";
import { Text } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";

function InvestPage() {
  const { id } = useLocalSearchParams();
  return (
    <>
      <View>
        <Text>InvestPage: {id}</Text>
      </View>
    </>
  );
}

export default InvestPage;

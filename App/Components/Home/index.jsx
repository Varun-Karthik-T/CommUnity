import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import BottomNavBar from "./BottomNavBar";

function Home() {
  return (
    <>
      <View>
        <Text>Home sweet home</Text>
        <Button mode="outlined"> Don't stop me now </Button>
      </View>
      <BottomNavBar />
    </>
  );
}

export default Home;

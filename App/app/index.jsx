import { Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Main() {
  const router = useRouter();
  return (
    <>
      <View style={styles.pageLayout}>
        <Button mode="outlined" onPress={() => router.push("/Home")}>
          Proceed as normal user
        </Button>
        <Button mode="outlined" onPress={() => router.push("/Home")}>
          Login as SHG member
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pageLayout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    gap: 20,
  },
});

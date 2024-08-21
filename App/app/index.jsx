import { Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export default function Main() {
  const { role, setRole, isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);

  const userRouting = () => {
    setRole("User");
    setIsAuthenticated(true);
    router.push("/Home");
  };
  const SHGRouting = () => {
    setRole("SHG");
    setIsAuthenticated(true);
    router.push("/Home");
  };
  const SHGHeadRouting = () => {
    setRole("SHG-Head");
    setIsAuthenticated(true);
    router.push("/Home");
  };

  const VORouting = () => {
    setRole("VO");
    setIsAuthenticated(true);
    router.push("/VO");
  }

  const router = useRouter();
  return (
    <>
      <View style={styles.pageLayout}>
        <Button mode="outlined" onPress={userRouting}>
          Proceed as normal user
        </Button>
        <Button mode="outlined" onPress={SHGRouting}>
          Login as SHG member
        </Button>
        <Button mode="outlined" onPress={SHGHeadRouting}>
          Login as SHG head
        </Button>
        <Button mode="outlined" onPress={VORouting}>
          Login as VO
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

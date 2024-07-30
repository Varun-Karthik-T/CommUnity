import ShgBottomNavBar from "@/Components/Home/ShgBottomNavBar";
import { AuthContext } from "@/contexts/AuthContext";
import { Text } from "react-native-paper";
import { useContext } from "react";

function Home() {
  const { role, isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {isAuthenticated ? (
        role === "SHG" ? (
          <ShgBottomNavBar/>
        ) : (
          <UserBottomNavBar />
        )
      ) : (
        <Text> Error 404</Text>
      )}
    </>
  );
}

export default Home;
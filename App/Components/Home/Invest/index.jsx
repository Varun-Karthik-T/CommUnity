import { View, StyleSheet, Image } from "react-native";
import { Text, Button, Searchbar } from "react-native-paper";

function Invest() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            Small Investment, Big Impact: Empower Communities through SHGs
          </Text>
          <Image
            style={styles.bannerImage}
            source={require("@/assets/images/invest-banner.png")}
          />
        </View>
        <View>
          <Searchbar />
        </View>
        <Text variant="titleLarge"> Popular: </Text>
      </View>
    </>
  );
}

export default Invest;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    height: "100%",
  },
  banner: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  bannerText: {
    flex: 2,
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  bannerImage: {
    flex: 1,
    height: "100%",
  },
  searchBar: {
    
  }
});

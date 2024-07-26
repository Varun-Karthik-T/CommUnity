import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Text, Button, Searchbar, Divider} from "react-native-paper";
import InvestCard from "./InvestCards";

function Invest() {
  return (
    <>
      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
            <View style={styles.searchBar}>
              <Searchbar placeholder="Search for SHGs" />
            </View>
            <Divider />
            <View style={styles.cardContainer}>
              <Text variant="headlineSmall" style={{fontWeight: "bold"}} > SHGs around you </Text>
              {shgData.map((shg, index) => (
                <InvestCard
                  key={index}
                  title={shg.title}
                  subtitle={shg.subtitle}
                  description={shg.description}
                  imageUri={shg.imageUri}
                  id={index}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default Invest;

const shgData = [
  {
    title: "UPTOWN GIRLS",
    subtitle: "Pudukkottai",
    description: "We make the best Laddoos in town",
    imageUri: "https://picsum.photos/700",
  },
  {
    title: "UPTOWN GIRLS",
    subtitle: "Pudukkottai",
    description: "We make the best Laddoos in town",
    imageUri: "https://picsum.photos/700",
  },
];

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    height: "100%",
    marginBottom: 20,
  },
  banner: {
    width: "100%",
    height: 180,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  bannerText: {
    flex: 1,
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
    marginHorizontal: 10,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginHorizontal: 20,
  }
});

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
    imageUri: "https://th.bing.com/th/id/R.3cef5299a9fb84b64f846b564f4e895e?rik=JU9vcW0%2bi%2brRMw&riu=http%3a%2f%2fe3az4yc7762.exactdn.com%2fwp-content%2fuploads%2f2022%2f08%2fPCI-India_Womens-SHG.jpg&ehk=1%2fYxsWbcVnPpHDw1YTul18O2zgunEC1POyr7oWvHmpM%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    title: "TSI SHG",
    subtitle: "Tenkasi",
    description: "We make the best baskets in town",
    imageUri: "https://images.pexels.com/photos/1875480/pexels-photo-1875480.jpeg?auto=compress&cs=tinysrgb&w=600",
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

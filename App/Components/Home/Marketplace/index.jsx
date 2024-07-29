import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Searchbar, FAB, Divider, Chip } from "react-native-paper";
import HorizontalScrollView from "@/Components/UI/MarketScroll";
export default function MarketPlace() {
  const data = [
    {
      name: "Thirunelveli Alwa",
      price: 100,
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Handicraft",
      price: 200,
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Onion",
      price: 300,
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Carrot",
      price: 400,
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Cabbage",
      price: 500,
      image: "https://picsum.photos/200/300",
    },
  ];

  return (
    <>
      <ScrollView>
        <View style={styles.pageLayout}>
          <View style={styles.Searchbar}>
            <Searchbar placeholder="Search for products near you" />
          </View>
          <Divider />
          <View style={styles.banner}>
            <Image
              style={styles.bannerImage}
              source={require("@/assets/images/marketplace-banner.png")}
            />
            <Text style={styles.bannerText}>
              Your wallet has power, support local businesses
            </Text>
          </View>
          <Divider />
          <Text style={styles.heading2}>Top selling Products</Text>
          <HorizontalScrollView data={data} />
          <Divider />
          <Text style={styles.heading2}> Shop by category</Text>
          <View>
            <Chip icon="fruit-cherries">Fruits</Chip>
          </View>
          <Divider />
          <Text style={styles.heading2}>Suggested for you</Text>
          <HorizontalScrollView data={data} />
        </View>
      </ScrollView>
      <FAB
        icon="cart-variant"
        style={styles.cartFAB}
        onPress={() => console.log("Pressed")}
      />
    </>
  );
}

const styles = StyleSheet.create({
  Searchbar: {
    margin: 10,
  },
  heading2: {
    fontSize: 20,
    textAlign: "left",
    marginHorizontal: 15,
    marginTop: 10,
  },
  cartFAB: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
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
  pageLayout: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    height: "100%",
    marginBottom: 20,
  },
});

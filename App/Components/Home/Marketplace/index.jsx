import { View, Text, StyleSheet, ScrollView, Image, FlatList } from "react-native";
import { Searchbar, FAB, Divider, Chip } from "react-native-paper";
import HorizontalScrollView from "@/Components/UI/MarketScroll";
export default function MarketPlace() {
  const data = [
    {
      name: "Thirunelveli Alwa",
      price: 100,
      image: "https://images.pexels.com/photos/20446403/pexels-photo-20446403/free-photo-of-top-view-of-gajorer-halwa-dessert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Basket",
      price: 200,
      image: "https://images.pexels.com/photos/2113125/pexels-photo-2113125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Candle",
      price: 300,
      image: "https://images.pexels.com/photos/783200/pexels-photo-783200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Handbag",
      price: 400,
      image: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Pot",
      price: 500,
      image: "https://images.pexels.com/photos/3692083/pexels-photo-3692083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const categories = [
    { key: '1', name: 'Pot', icon: 'pot' },
    { key: '2', name: 'Clothing', icon: 'tshirt-crew' },
    { key: '3', name: 'Baskets', icon: 'basket' },
    { key: '4', name: 'Spices', icon: 'spoon-sugar' },
    { key: '5', name: 'Herbal Tea', icon: 'tea' },
    { key: '6', name: 'Pickle', icon: 'food-variant' },
    { key: '7', name: 'Honey', icon: 'bee-flower' },
    { key: '8', name: 'Candles', icon: 'candle' },
    { key: '9', name: 'Shoes', icon: 'shoe-formal' },
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
          <FlatList
          data={categories}
          renderItem={({ item }) => (
            <Chip icon={item.icon} style={styles.chip}>{item.name}</Chip>
          )}
          keyExtractor={item => item.key}
          numColumns={3}
          columnWrapperStyle={styles.row}
        />
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
  chip: {
    margin: 5,
  },
  row: {
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
});

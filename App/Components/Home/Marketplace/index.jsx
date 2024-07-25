import { View, Text, Image, ScrollView } from "react-native";
import { Card, Searchbar } from "react-native-paper";

export default function MarketPlace() {
  const data = [
    {
      name: "Bag",
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
    <View>
      <View style={styles.Searchbar}>
        <Searchbar />
      </View>
      <Text style={styles.heading2}>Top selling Products</Text>
      <ScrollView horizontal style={styles.scroll}>
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            <Card>
              <Card.Content>
                <Image source={{ uri: item.image }} style={styles.img} />
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
              </Card.Content>
            </Card>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.heading2}>Suggested for you</Text>
      <ScrollView horizontal>
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            <Card>
              <Card.Content>
                <Image source={{ uri: item.image }} style={styles.img} />
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
              </Card.Content>
            </Card>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = {
    Searchbar: {
        margin: 10,
    },
  img: {
    width: 150,
    height: 150,
  },
  card: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  scroll: {
    height: "fit-content",
  },
  heading2: {
    fontSize: 20,
    textAlign: "left",
    marginHorizontal: 15,
    marginTop: 10,
  },
};

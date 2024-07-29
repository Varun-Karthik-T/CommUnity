import { View, Image, ScrollView, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";

const HorizontalScrollView = ({ data }) => {
  return (
    <ScrollView horizontal style={styles.scroll}>
      {data.map((item, index) => (
        <View key={index} style={styles.card}>
          <Card>
            <Card.Content style={styles.shopCard}>
              <Image source={{ uri: item.image }} style={styles.img} />
              <Text style={styles.caption}>{item.name}</Text>
            </Card.Content>
            <Card.Actions>
              <Button> View product </Button>
            </Card.Actions>
          </Card>
        </View>
      ))}
    </ScrollView>
  );
};

export default HorizontalScrollView;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  card: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  scroll: {
    height: "fit-content",
  },
  caption: {
    fontSize: 12,
  },
  shopCard: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: 5,
  }
});
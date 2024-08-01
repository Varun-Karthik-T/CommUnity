import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Text, Surface, Button } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import axios from "axios";

function Performance() {
  const { id } = useLocalSearchParams();
  const [expanded, setExpanded] = useState(true);
  const [shgData, setShgData] = useState([]);
  const [profitData, setProfitData] = useState([]);

  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("http://10.11.50.21:5000/fetchSHG");
        setShgData(response.data);
        console.log(response.data);
        response = await axios.get("http://10.11.50.21:5000/fetchProfit");
        setProfitData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Surface style={styles.surfaceContainer}>
          <Text variant="displaySmall" style={styles.heading}>
            {dummy.title}
          </Text>
          <Text variant="titleLarge" style={styles.origin}>
            from {dummy.origin}
          </Text>
        </Surface>

        <Image source={{ uri: dummy.imageUri }} style={styles.cover} />
        <Surface style={styles.surfaceContainer}>
          <Button
            onPress={handlePress}
            icon={expanded ? "chevron-up" : "chevron-down"}
          >
            Read More
          </Button>
        </Surface>
        <View>
          {expanded && <Text variant="bodyLarge">{dummy.description}</Text>}
        </View>
      </ScrollView>
    </>
  );
}

export default Performance;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    margin: 20,
    gap: 20,
  },
  heading: {
    fontWeight: "bold",
  },
  cover: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  surfaceContainer: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 200,
  },
  origin: {
    width: "100%",
  },
});

const dummy = {
  title: "UPTOWN GIRLS",
  origin: "Pudukkottai",
  description:
    "In the serene town of Pudukkottai, a story of resilience and hope began with five widows who dared to dream beyond their circumstances. These remarkable women came together to form the Self-Help Group (SHG) known as Uptown Girls. With the small capital they received, they started crafting delicious laddoos, infusing them with love and tradition. Their laddoos quickly became beloved in the local community, and the group found not just financial stability but a renewed sense of purpose. Through the platform provided by our app, Uptown Girls transformed their humble beginnings into a thriving business. They expanded their reach, utilized the extra capital to grow, and upskilled themselves along the way. Our app became a bridge to new opportunities, empowering them to take control of their future. Today, Uptown Girls is not just a symbol of delicious sweets but a testament to the strength and potential of women when given a chance. They are an inspiration to all, showing that with courage and unity, even the smallest beginnings can lead to great success.",
  imageUri: "https://picsum.photos/700",
};

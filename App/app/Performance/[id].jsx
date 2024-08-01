import { View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { Text, Surface, Button, Chip, useTheme } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { LineChart } from "react-native-chart-kit";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios from "axios";

const screenWidth = Dimensions.get("window").width - 40;

function Performance() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams();
  const [expanded, setExpanded] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [shgData, setShgData] = useState();
  const [profitData, setProfitData] = useState();

  const handlePress = () => setExpanded(!expanded);
  const toggleGraph = () => setShowGraph(!showGraph);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("http://10.16.49.41:5000/fetchSHG");
        setShgData(response.data);
        console.log(response.data);
        response = await axios.get("http://10.16.49.41:5000/fetchProfit");
        setProfitData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const chartConfig = {
    backgroundColor: theme.colors.surface,
    backgroundGradientFrom: theme.colors.surface,
    backgroundGradientTo: theme.colors.surface,
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(151, 72, 16, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: "#e3e3e3",
      strokeDasharray: "0",
    },
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: profitData ? Object.values(profitData[0]) : [],
      },
    ],
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Surface style={styles.surfaceContainer}>
          <Text variant="displaySmall" style={styles.heading}>
            {dummy.title}
          </Text>
          <View style={styles.chipContainer}>
            <Chip variant="titleSmall">from {dummy.origin}</Chip>
            {shgData && (
              <>
                <Chip variant="titleSmall">
                  on {shgData[0].Date_Of_Establishment}
                </Chip>
                <Chip variant="titleSmall">
                  {shgData[0].SHG_Members + " members"}
                </Chip>
                <Chip variant="titleSmall">
                  Specializes in {shgData[0].Sector}
                </Chip>
              </>
            )}
          </View>
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
        <Surface style={styles.surfaceContainer}>
          <Button
            onPress={toggleGraph}
            icon={showGraph ? "chevron-up" : "chevron-down"}
          >
            Performance Analytics
          </Button>
        </Surface>
        <View style={{ marginBottom: 50 }}>
          {showGraph && profitData &&  (
            <LineChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
            />
          )}
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
  chipContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
});

const dummy = {
  title: "UPTOWN GIRLS",
  origin: "Pudukkottai",
  description:
    "In the serene town of Pudukkottai, a story of resilience and hope began with five widows who dared to dream beyond their circumstances. These remarkable women came together to form the Self-Help Group (SHG) known as Uptown Girls. With the small capital they received, they started crafting delicious laddoos, infusing them with love and tradition. Their laddoos quickly became beloved in the local community, and the group found not just financial stability but a renewed sense of purpose. Through the platform provided by our app, Uptown Girls transformed their humble beginnings into a thriving business. They expanded their reach, utilized the extra capital to grow, and upskilled themselves along the way. Our app became a bridge to new opportunities, empowering them to take control of their future. Today, Uptown Girls is not just a symbol of delicious sweets but a testament to the strength and potential of women when given a chance. They are an inspiration to all, showing that with courage and unity, even the smallest beginnings can lead to great success.",
  imageUri: "https://picsum.photos/700",
};

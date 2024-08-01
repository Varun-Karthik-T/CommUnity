import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Searchbar, FAB, Divider, Button, Card, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default function ShgMarket() {
  const theme = useTheme();

  const data = [
    {
      name: 'Thirunelveli Alwa',
      price: 100,
      image: 'https://picsum.photos/200/300',
      sale: 30,
    },
    {
      name: 'Handicraft',
      price: 200,
      image: 'https://picsum.photos/200/300',
      sale: 40,
    },
    {
      name: 'Onion',
      price: 300,
      image: 'https://picsum.photos/200/300',
      sale: 20,
    },
    {
      name: 'Carrot',
      price: 400,
      image: 'https://picsum.photos/200/300',
      sale: 10,
    },
    {
      name: 'Cabbage',
      price: 500,
      image: 'https://picsum.photos/200/300',
      sale: 50,
    },
  ];

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.sale),
      },
    ],
  };

  const screenWidth = Dimensions.get('window').width;

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
              source={require('@/assets/images/marketplace-banner.png')}
            />
            <Text style={styles.bannerText}>
              Take your products to the next level
            </Text>
          </View>
          <Divider />

          <Text style={styles.heading2}>Sales Chart</Text>
          <BarChart
            data={chartData}
            width={screenWidth - 30} // from react-native
            height={220}
            yAxisLabel=""
            chartConfig={{
              backgroundColor: theme.colors.primary,
              backgroundGradientFrom: theme.colors.primaryContainer,
              backgroundGradientTo: theme.colors.secondaryContainer,
              decimalPlaces: 2,
              color: (opacity = 1) => theme.colors.onPrimary,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
              alignSelf: 'center',
            }}
          />
          
          <Text style={styles.heading2}>Your Products</Text>
          <ScrollView style={styles.scroll}>
            {data.map((item, index) => (
              <View key={index} style={styles.card}>
                <Card>
                  <Card.Content style={styles.shopCard}>
                    <Image source={{ uri: item.image }} style={styles.img} />
                    <View style={styles.textContent}>
                      <Text style={styles.caption}>{item.name}</Text>
                      <View style={styles.salesInfo}>
                        <MaterialCommunityIcons name="sale" size={20} color="red" />
                        <Text style={styles.salesText}>{item.sale}</Text>
                      </View>
                    </View>
                  </Card.Content>
                  <Card.Actions>
                    <Button> View product </Button>
                  </Card.Actions>
                </Card>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <FAB
        icon="plus"
        label="Add Product"
        style={styles.cartFAB}
        onPress={() => console.log('Pressed')}
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
    textAlign: 'left',
    marginHorizontal: 15,
    marginTop: 10,
  },
  cartFAB: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  banner: {
    width: '100%',
    height: 180,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerText: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  bannerImage: {
    flex: 1,
    height: '100%',
  },
  pageLayout: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    marginBottom: 20,
  },
  scroll: {
    paddingHorizontal: 15,
  },
  card: {
    marginBottom: 15,
  },
  shopCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  textContent: {
    flex: 1,
  },
  caption: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  salesInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  salesText: {
    marginLeft: 5,
    fontSize: 16,
    color: 'red',
  },
});

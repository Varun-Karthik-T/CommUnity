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
      name: 'Alwa',
      price: 100,
      image: 'https://images.pexels.com/photos/20446403/pexels-photo-20446403/free-photo-of-top-view-of-gajorer-halwa-dessert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      sale: 30,
    },
    {
      name: 'Basket',
      price: 200,
      image: 'https://images.pexels.com/photos/2113125/pexels-photo-2113125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      sale: 40,
    },
    {
      name: 'Candle',
      price: 300,
      image: 'https://images.pexels.com/photos/783200/pexels-photo-783200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      sale: 20,
    },
    {
      name: 'Handbag',
      price: 400,
      image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      sale: 10,
    },
    {
      name: 'Pot',
      price: 500,
      image: 'https://images.pexels.com/photos/3692083/pexels-photo-3692083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
            width={screenWidth - 30} 
            height={220}
            yAxisLabel=""
            chartConfig={{
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
                stroke: '#e3e3e3', 
                strokeDasharray: '0',
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
                        <MaterialCommunityIcons name="chart-line" size={20} color="green" />
                        <Text style={styles.salesText}>{item.sale}</Text>
                      </View>
                    </View>
                  </Card.Content>
                  <Card.Actions>
                    <Button> Change availability</Button>
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
  },
});

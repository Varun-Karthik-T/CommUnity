import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Searchbar, FAB, Divider, Button, Card, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default function ShgMarket() {
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updatedPrice, setUpdatedPrice] = useState('');
  const [updatedAvailability, setUpdatedAvailability] = useState('');

  const data = [
    {
      name: 'Alwa',
      price: 100,
      image: 'https://images.pexels.com/photos/20446403/pexels-photo-20446403/free-photo-of-top-view-of-gajorer-halwa-dessert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      sale: 30,
      availability: 50,
    },
    {
      name: 'Basket',
      price: 200,
      image: 'https://images.pexels.com/photos/2113125/pexels-photo-2113125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      sale: 40,
      availability: 20,
    },
    {
      name: 'Candle',
      price: 300,
      image: 'https://images.pexels.com/photos/783200/pexels-photo-783200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      sale: 20,
      availability: 10,
    },
    {
      name: 'Handbag',
      price: 400,
      image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      sale: 10,
      availability: 15,
    },
    {
      name: 'Pot',
      price: 500,
      image: 'https://images.pexels.com/photos/3692083/pexels-photo-3692083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      sale: 50,
      availability: 30,
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

  const openModal = (item) => {
    setSelectedProduct(item);
    setUpdatedPrice(item.price.toString());
    setUpdatedAvailability(item.availability.toString());
    setModalVisible(true);
  };

  const saveChanges = () => {
    // Save the updated product details here
    if (selectedProduct) {
      selectedProduct.price = updatedPrice;
      selectedProduct.availability = updatedAvailability;
    }
    setModalVisible(false);
  };

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
                        <Text style={styles.salesText}>Sold: {item.sale}</Text>
                      </View>
                      <Text style={styles.priceText}>Price: ₹{item.price}</Text>
                      <Text style={styles.availabilityText}>Availability: {item.availability} items</Text>
                    </View>
                  </Card.Content>
                  <Card.Actions>
                    <Button onPress={() => openModal(item)}>Change Availability</Button>
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

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Product Details</Text>

            <Text style={styles.modalLabel}>Product Name: {selectedProduct?.name}</Text>
            <Text style={styles.modalLabel}>Update Price:</Text>
            <TextInput
              style={styles.input}
              value={updatedPrice}
              onChangeText={setUpdatedPrice}
              keyboardType="numeric"
            />

            <Text style={styles.modalLabel}>Update Availability:</Text>
            <TextInput
              style={styles.input}
              value={updatedAvailability}
              onChangeText={setUpdatedAvailability}
              keyboardType="numeric"
            />

            <View style={styles.modalButtons}>
              <Button mode="contained" onPress={saveChanges}>
                Save
              </Button>
              <Button mode="outlined" onPress={() => setModalVisible(false)}>
                Cancel
              </Button>
            </View>
          </View>
        </View>
      </Modal>
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
  priceText: {
    fontSize: 14,
    marginTop: 5,
  },
  availabilityText: {
    fontSize: 14,
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});


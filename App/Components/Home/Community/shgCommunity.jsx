import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Searchbar, Divider, Button, Card} from 'react-native-paper';

export default function ShgCommunity()
{

const data = [
  {
    name: 'Halwa Makers',
    location: 'Thirunelveli',
    image: 'https://picsum.photos/200/300',
    sale: 30,
  },
  {
    name: 'Craft crackers',
    location: 'Sivakasi',
    image: 'https://picsum.photos/200/300',
    sale: 40,
  },
  {
    name: 'The Match Makers',
    location: 'Theni',
    image: 'https://picsum.photos/200/300',
    sale: 20,
  },
  {
    name: 'Candle Creators',
    location: 'Madurai',
    image: 'https://picsum.photos/200/300',
    sale: 10,
  },
];


return (
  <>
    <ScrollView>
      <View style={styles.pageLayout}>
        <View style={styles.Searchbar}>
          <Searchbar placeholder="Search for SHGs near you" />
        </View>
        <Divider />
        <View style={styles.banner}>
          <Image
            style={styles.bannerImage}
            source={require('@/assets/images/candle.jpeg')}
          />
          <Text style={styles.bannerText}>
            Form a community
          </Text>
        </View>
        <Divider />      
        <Text style={styles.heading2}>Similar SHGs</Text>
        <ScrollView style={styles.scroll}>
          {data.map((item, index) => (
            <View key={index} style={styles.card}>
              <Card>
                <Card.Content style={styles.shopCard}>
                  <Image source={{ uri: item.image }} style={styles.img} />
                  <View style={styles.textContent}>
                    <Text style={styles.caption}>{item.name}</Text>
                    <View style={styles.communityInfo}>
                      <Text style={styles.communityText}>{item.location}</Text>
                    </View>
                  </View>
                </Card.Content>
                <Card.Actions>
                    <Button style={styles.button}>Contact</Button>
                    <Button style={styles.button}> Visit </Button>
                </Card.Actions>
              </Card>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
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
communityInfo: {
  flexDirection: 'row',
  alignItems: 'center',
},
communityText: {
  marginLeft: 5,
  fontSize: 16,
  color: 'red',
},

button: {
    width: 100,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    },
});

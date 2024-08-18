import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView, Modal, TouchableOpacity } from "react-native";
import { Card, Paragraph, Button } from 'react-native-paper';
import { Linking } from 'react-native';

export default function SHGDevelopment() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState(null);

  const openURL = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const govt_schemes = [
    {
      title: "DAY-NRLM",
      subtitle: "Deendayal Antyodaya Yojana – National Rural Livelihoods Mission",
      url: "https://nrlm.gov.in/outerReportAction.do?methodName=showIndex#gsc.tab=0",
      desc: "The Deendayal Antyodaya Yojana – National Rural Livelihoods Mission (DAY-NRLM) is making a difference in the lives of over 6.9 crore rural households across 698 districts, 6000 blocks, 2.5 lakh Gram Panchayats, and 6 lakh villages in the country.",
    },
    {
      title: "PMGDISHA",
      subtitle: "Pradhan Mantri Gramin Digital Saksharta Abhiyan",
      url: "https://www.pmgdisha.in/",
      desc: "Pradhan Mantri Gramin Digital Saksharta Abhiyan (PMGDISHA) aims to make six crore persons in rural areas, across States/UTs, digitally literate, reaching around 40% of rural households by covering one member from every eligible household.",
    },
    {
      title: "PMAY",
      subtitle: "Pradhan Mantri Awas Yojana",
      url: "https://pmaymis.gov.in/",
      desc: "Pradhan Mantri Awas Yojana (PMAY) aims to provide affordable housing to the urban poor with a target of building 20 million affordable houses by 31 March 2022.",
    },
  ];


  const LearningProgramme = [{
    title: "Learning Programme",
    subtitle: "Government Schemes",
    url: "https://www.nrlm.gov.in/outerReportAction.do?methodName=showIndex#gsc.tab=0",
    desc: "The Deendayal Antyodaya Yojana – National Rural Livelihoods Mission (DAY-NRLM) is making a difference in the lives of over 6.9 crore rural households across 698 districts, 6000 blocks, 2.5 lakh Gram Panchayats, and 6 lakh villages in the country.",

  },
  {
    title: "Learning Programme",
    subtitle: "Government Schemes",
    url: "https://www.pmgdisha.in/",
      desc: "Pradhan Mantri Gramin Digital Saksharta Abhiyan (PMGDISHA) aims to make six crore persons in rural areas, across States/UTs, digitally literate, reaching around 40% of rural households by covering one member from every eligible household.",
  }
]
  const handleViewDetails = (scheme) => {
    setSelectedScheme(scheme);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedScheme(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head1}>
       Upcoming Learning Programme
      </Text>

      <ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.learncontainer}>
        {LearningProgramme.map((scheme, index) => (
          <Card key={index} style={styles.card}>
            <Card.Title
              title={scheme.title}
              subtitle={scheme.subtitle}
            />
            <Card.Content>
              <Button

                mode='outlined'
                onPress={() => handleViewDetails(scheme)}
              >
                View Details
              </Button>
            </Card.Content>
          </Card>
          
        ))}
        </View>
      </ScrollView>
   
            

      <Text style={styles.head1}>
        Government Schemes 
      </Text>

        {govt_schemes.map((scheme, index) => (
          <Card key={index} style={styles.card}>
            <Card.Title
              title={scheme.title}
              subtitle={scheme.subtitle}
            />
            <Card.Content>
              <Button
              style={styles.cardButton}
                mode='contained'
                onPress={() => handleViewDetails(scheme)}
              >
                View Details
              </Button>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
      {selectedScheme && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedScheme.title}</Text>
              <Text style={styles.modalSubtitle}>{selectedScheme.subtitle}</Text>
              <Paragraph style={styles.modalDescription}>{selectedScheme.desc}</Paragraph>
              <Button
                mode='contained'
                onPress={() => openURL(selectedScheme.url)}
                style={styles.modalButton}
              >
                Visit Site
              </Button>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  learncontainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  head1: {  
    color: 'black',  
    fontSize: 20,  
    textAlign: 'left',  
    paddingBottom: 10,  
    fontWeight: 'bold',
  },
  card: {
    marginVertical: 10,
  },
  cardButton: {
    width:'65%',
    alignSelf: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 18,
    marginBottom: 15,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButton: {
    width:'65%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  closeButton: {
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'brown',
    textDecorationLine: 'underline',
  },
});

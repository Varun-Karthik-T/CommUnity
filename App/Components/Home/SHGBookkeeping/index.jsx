import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { Surface, Button, FAB, Modal, Portal, Provider as PaperProvider } from 'react-native-paper';
import Form from '../Form';

export default function SHGBookkeeping() {
  const [shgData, setShgData] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [isFormVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get('http://10.16.49.244:5000/fetchSHG');
        setShgData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const toggleExpand = (month) => {
    setExpanded((prev) => ({ ...prev, [month]: !prev[month] }));
  };

  const months = [
    { label: 'January', value: 'jan' },
    { label: 'February', value: 'feb' },
    { label: 'March', value: 'mar' },
    { label: 'April', value: 'apr' },
    { label: 'May', value: 'may' },
  ];

  const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 8 };

  return (
      <View style={styles.container}>
        {months.map((month) => (
          <View key={month.value}>
            <Surface style={styles.surfaceContainer}>
              <Button
                onPress={() => toggleExpand(month.value)}
                icon={expanded[month.value] ? 'chevron-up' : 'chevron-down'}
              >
                {month.label}
              </Button>
            </Surface>
            {expanded[month.value] && (
              <View style={styles.dataContainer}>
                {shgData.length > 0 ? (
                  <>
                    <Text style={styles.dataText}>
                      Selected Month: {months.find((m) => m.value === month.value).label}
                    </Text>
                    <Text style={styles.dataText}>Expenses: {shgData[0].Expenses[month.value]}</Text>
                    <Text style={styles.dataText}>Profit: {shgData[0].Monthly_Profit[month.value]}</Text>
                    <Text style={styles.dataText}>
                      Training Programs: {shgData[0].Training_Programs_Attended[month.value]}
                    </Text>
                  </>
                ) : (
                  <Text style={styles.dataText}>No data available for {month.label}</Text>
                )}
              </View>
            )}
          </View>
        ))}
        <FAB
          icon="plus"
          label="Add monthly data"
          style={styles.cartFAB}
          onPress={() => setFormVisible(true)}
        />
        <Portal>
          <Modal visible={isFormVisible} onDismiss={() => setFormVisible(false)} contentContainerStyle={containerStyle}>
            <Form />
            <Button onPress={() => setFormVisible(false)}>Close</Button>
          </Modal>
        </Portal>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  surfaceContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    elevation: 2,
    backgroundColor: '#f5f5f5',
  },
  dataContainer: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
    elevation: 1,
  },
  dataText: {
    fontSize: 16,
    marginVertical: 2,
    color: '#333',
  },
  cartFAB: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    elevation: 5,
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 4,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});


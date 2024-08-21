import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import { Card, Button, SegmentedButtons, TextInput } from 'react-native-paper';
import i from '@/Translations';

const Loan = ({ onBack }) => {
  const [selectedTab, setSelectedTab] = React.useState('ActiveLoans');
  const [expandedLoanId, setExpandedLoanId] = React.useState(null);

  // Sample data for active loans
  const activeLoans = [
    { id: '1', amount: '₹10,000', purpose: 'Education', date: '2024-07-15' },
    { id: '2', amount: '₹5,000', purpose: 'Health', date: '2024-06-10' },
    // Add more loans as needed
  ];

  const renderActiveLoans = () => (
    <FlatList
      data={activeLoans}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Content>
            {expandedLoanId === item.id ? (
              <>
                <Text style={styles.loanTitle}>{i.t('LoanAmount')}: {item.amount}</Text>
                <Text>{i.t('purpose')}: {item.purpose}</Text>
                <Text>{i.t('date')}: {item.date}</Text>
                <Button
                  mode="contained"
                  style={styles.repayButton}
                  onPress={() => console.log('Repay loan')}
                >
                  {i.t('repayLoan')}
                </Button>
                <Button
                  mode="text"
                  style={styles.collapseButton}
                  onPress={() => setExpandedLoanId(null)}
                >
                  {i.t('collapse')}
                </Button>
              </>
            ) : (
              <>
                <Text style={styles.loanTitle}>{item.amount}</Text>
                <Button
                  mode="text"
                  style={styles.viewDetailsButton}
                  onPress={() => setExpandedLoanId(item.id)}
                >
                  {i.t('viewDetails')}
                </Button>
              </>
            )}
          </Card.Content>
        </Card>
      )}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text>No active loans.</Text>}
    />
  );

  const renderApplyLoans = () => (
    <View style={styles.applyContainer}>
      <Text style={styles.title}>{i.t('applyLoans')}</Text>
      <TextInput
        mode="outlined"
        label={i.t('amount')}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        mode="outlined"
        label={i.t('purpose')}
        style={styles.input}
      />
      <Button
        mode="contained"
        style={styles.submitButton}
        onPress={() => console.log('Loan application submitted')}
      >
        {i.t('submitApplication')}
      </Button>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <SegmentedButtons
          value={selectedTab}
          onValueChange={setSelectedTab}
          buttons={[
            { label: i.t('activeLoans'), value: 'ActiveLoans' },
            { label: i.t('applyLoans'), value: 'ApplyLoans' },
          ]}
        />
      </View>
      <ScrollView>
        {selectedTab === 'ActiveLoans' ? renderActiveLoans() : renderApplyLoans()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  topBar: {
    marginBottom: 8,
  },
  card: {
    marginBottom: 20,
    borderRadius: 8,
  },
  loanTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewDetailsButton: {
    marginTop: 10,
  },
  repayButton: {
    marginTop: 10,
  },
  collapseButton: {
    marginTop: 10,
  },
  applyContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    marginBottom: 15,
  },
  submitButton: {
    marginTop: 20,
  },
});

export default Loan;

import { useRouter } from 'expo-router';
import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import { Card, Button, DataTable, Divider, Avatar } from 'react-native-paper';

const SHGManagement = ({ navigation }) => {
  const [showAllTransactions, setShowAllTransactions] = React.useState(false);
  const router = useRouter();

  const transactions = [
    { date: '2024-08-01', type: 'Deposit', amount: '₹13,000', isCredit: true },
    { date: '2024-08-02', type: 'Withdrawal', amount: '₹7,000', isCredit: false },
    { date: '2024-08-03', type: 'Deposit', amount: '₹10,000', isCredit: true },
    { date: '2024-08-01', type: 'Withdrawal', amount: '₹12,000', isCredit: false },
    { date: '2024-08-04', type: 'Deposit', amount: '₹17,000', isCredit: true },
    { date: '2024-08-05', type: 'Withdrawal', amount: '₹15,000', isCredit: false },
    { date: '2024-08-02', type: 'Deposit', amount: '₹2,000', isCredit: true },
    // Add more transactions here
  ];

  const sortedTransactions = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Group transactions by date
  const groupedTransactions = sortedTransactions.reduce((acc, transaction) => {
    if (!acc[transaction.date]) {
      acc[transaction.date] = [];
    }
    acc[transaction.date].push(transaction);
    return acc;
  }, {});

  // Get the two most recent transactions for display
  const recentTransactions = sortedTransactions.slice(0, 2);

  const renderGroupedTransactions = () => (
    <FlatList
      data={Object.keys(groupedTransactions)}
      renderItem={({ item: date }) => (
        <View style={styles.dateSection}>
          <Text style={styles.dateTitle}>{date}</Text>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Type</DataTable.Title>
              <DataTable.Title numeric>Amount</DataTable.Title>
            </DataTable.Header>
            {groupedTransactions[date].map((t, index) => (
              <DataTable.Row
                key={index}
                style={{ backgroundColor: t.isCredit ? '#e8f5e9' : '#ffebee' }}
              >
                <DataTable.Cell>{t.type}</DataTable.Cell>
                <DataTable.Cell numeric>{t.amount}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </View>
      )}
      keyExtractor={(item) => item} // Ensure each item has a unique key
      ListFooterComponent={
        <Button
          mode="contained"
          onPress={() => setShowAllTransactions(false)}
          style={styles.backButton}
        >
          Back to Recent Transactions
        </Button>
      }
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {showAllTransactions ? (
          renderGroupedTransactions()
        ) : (
          <>
            {/* Finance Overview Section */}
            <Card style={styles.card}>
              <Card.Content>
                <View style={styles.overviewHeader}>
                  <Text style={styles.title}>Finance Overview</Text>
                </View>
                <View style={styles.overview}>
                  <View style={styles.overviewItem}>
                    <Avatar.Icon size={48} icon="bank" />
                    <View style={styles.overviewText}>
                      <Text>Total SHG Funds: ₹1,00,000</Text>
                    </View>
                  </View>
                  <View style={styles.overviewItem}>
                    <Avatar.Icon size={48} icon="account" />
                    <View style={styles.overviewText}>
                      <Text>Your Contribution: ₹10,000</Text>
                    </View>
                  </View>
                  <View style={styles.overviewItem}>
                    <Avatar.Icon size={48} icon="handshake" />
                    <View style={styles.overviewText}>
                      <Text>Total Loans Given: ₹50,000</Text>
                    </View>
                  </View>
                  <View style={styles.overviewItem}>
                    <Avatar.Icon size={48} icon="cash" />
                    <View style={styles.overviewText}>
                      <Text>Your Loan: ₹5,000</Text>
                    </View>
                  </View>
                </View>
              </Card.Content>
            </Card>

            <Divider />

            {/* Recent Transactions Section */}
            <Card style={styles.card}>
              <Card.Content>
                <View style={styles.overviewHeader}>
                  <Text style={styles.title}>Recent Transactions</Text>
                  <Button mode="text" onPress={() => setShowAllTransactions(true)}>
                    View All
                  </Button>
                </View>
                <DataTable>
                  <DataTable.Header>
                    <DataTable.Title>Date</DataTable.Title>
                    <DataTable.Title>Type</DataTable.Title>
                    <DataTable.Title numeric>Amount</DataTable.Title>
                  </DataTable.Header>

                  {recentTransactions.map((t, index) => (
                    <DataTable.Row
                      key={index}
                      style={{ backgroundColor: t.isCredit ? '#e8f5e9' : '#ffebee' }}
                    >
                      <DataTable.Cell>{t.date}</DataTable.Cell>
                      <DataTable.Cell>{t.type}</DataTable.Cell>
                      <DataTable.Cell numeric>{t.amount}</DataTable.Cell>
                    </DataTable.Row>
                  ))}
                </DataTable>
              </Card.Content>
            </Card>

            <Divider />

            {/* Loan Management Section */}
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.title}>Loan Management</Text>
                <Button
                  mode="contained"
                  onPress={() => router.navigate(`/Loan`)}
                  style={{ 
                    alignSelf: 'center',  // Centers the button horizontally
                    paddingVertical: 5,   // Reduces the vertical padding
                    paddingHorizontal: 20 // Reduces the horizontal padding
                  }}
                >
                  Manage Loans
                </Button>
              </Card.Content>
            </Card>

            <Divider />
          </>
        )}
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
  card: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  overviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  overview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  overviewItem: {
    alignItems: 'center',
    marginBottom: 15,
    width: '48%',
  },
  overviewText: {
    marginLeft: 10,
    flex: 1,
  },
  backButton: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  dateSection: {
    marginBottom: 15,
  },
  dateTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SHGManagement;

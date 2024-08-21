import { View, ScrollView } from "react-native";
import { DataTable, Text, Surface, MD3Colors } from "react-native-paper";

function CashBook() {
  const records = [
    {
      date: "05/08/2024",
      credit: [{ from: "CIF", transaction_id: "1243155", Amount: 12000 }],
      debit: [
        {
          to: "Dr.Sharmila",
          transaction_id: "253112",
          amount: 9000,
          purpose: "Invited the doctor for the medical camp",
        },
      ],
      expenditures: [
        { project_id: "124", project_name: "Laddoo ingredients", amount: 3700 },
      ],
      revenue: [
        { project_id: "124", project_name: "Laddoo sale", amount: 5000 },
      ],
      CurrentBalance: 10000,
    },
    {
      date: "12/08/2024",
      credit: [{ from: "Donation", transaction_id: "1243156", Amount: 15000 }],
      debit: [
        {
          to: "Supplier",
          transaction_id: "253113",
          amount: 5000,
          purpose: "Purchased medical supplies",
        },
      ],
      expenditures: [
        { project_id: "125", project_name: "Event setup", amount: 2000 },
      ],
      revenue: [
        { project_id: "125", project_name: "Ticket sales", amount: 7000 },
      ],
      CurrentBalance: 13000,
    },
  ];

  return (
    <>
      <ScrollView>
        {records.map((record, index) => (
          <View key={index}>
            <Text>{record.date}</Text>
            {record.credit.map((credit, creditIndex) => (
              <Surface key={creditIndex} style={styles.creditContainer}>
                <Text>From: {credit.from}</Text>
                <Text>Transaction ID: {credit.transaction_id}</Text>
                <Text>Amount: {credit.Amount}</Text>
              </Surface>
            ))}
            {record.debit.map((debit, debitIndex) => (
              <Surface key={debitIndex} style={styles.debitContainer}>
                <Text>To: {debit.to}</Text>
                <Text>Transaction ID: {debit.transaction_id}</Text>
                <Text>Amount: {debit.amount}</Text>
                <Text>Purpose: {debit.purpose}</Text>
              </Surface>
            ))}
            {record.expenditures.map((expenditure, expenditureIndex) => (
              <Surface
                key={expenditureIndex}
                style={styles.expenditureContainer}
              >
                <Text>Project ID: {expenditure.project_id}</Text>
                <Text>Project Name: {expenditure.project_name}</Text>
                <Text>Amount: {expenditure.amount}</Text>
              </Surface>
            ))}
            {record.revenue.map((revenue, revenueIndex) => (
              <Surface key={revenueIndex} style={styles.revenueContainer}>
                <Text>Project ID: {revenue.project_id}</Text>
                <Text>Project Name: {revenue.project_name}</Text>
                <Text>Amount: {revenue.amount}</Text>
              </Surface>
            ))}
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = {
  creditContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    elevation: 2,
    backgroundColor: "#d3f2db",
  },
  debitContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    elevation: 2,
    backgroundColor: "#f2d3d3",
  },
  expenditureContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    elevation: 2,
    backgroundColor: "#d3f2db",
  },
  revenueContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    elevation: 2,
    backgroundColor: "#f2d3d3",
  },
};

export default CashBook;

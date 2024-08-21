import { View, ScrollView } from "react-native";
import { useState } from "react";
import { Text, Surface, Button } from "react-native-paper";

function CashBook({ records }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <View>
        <ScrollView>
          {Object.keys(records).map((date, index) => (
            <View key={index}>
              <Button
                onPress={() => {
                  expanded === index ? setExpanded(null) : setExpanded(index);
                }}
                icon={expanded === index ? "chevron-up" : "chevron-down"}
              >
                {date}
              </Button>
              <View style={styles.cardContainer}>
                {expanded === index && (
                  <>
                    {records[date].credit.map((credit, creditIndex) => (
                      <Surface key={creditIndex} style={styles.creditContainer}>
                        <Text>From: {credit.from}</Text>
                        <Text>Transaction ID: {credit.transaction_id}</Text>
                        <Text>Amount: {credit.amount}</Text>
                      </Surface>
                    ))}
                    {records[date].debit.map((debit, debitIndex) => (
                      <Surface key={debitIndex} style={styles.debitContainer}>
                        <Text>To: {debit.to}</Text>
                        <Text>Transaction ID: {debit.transaction_id}</Text>
                        <Text>Amount: {debit.amount}</Text>
                      </Surface>
                    ))}
                    {records[date].expenditures.map(
                      (expenditure, expenditureIndex) => (
                        <Surface
                          key={expenditureIndex}
                          style={styles.debitContainer}
                        >
                          <Text>Project ID: {expenditure.project_id}</Text>
                          <Text>Project Name: {expenditure.project_name}</Text>
                          <Text>Amount: {expenditure.amount}</Text>
                        </Surface>
                      )
                    )}
                    {records[date].revenue.map((revenue, revenueIndex) => (
                      <Surface
                        key={revenueIndex}
                        style={styles.creditContainer}
                      >
                        <Text>Project ID: {revenue.project_id}</Text>
                        <Text>Project Name: {revenue.project_name}</Text>
                        <Text>Amount: {revenue.amount}</Text>
                      </Surface>
                    ))}
                  </>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
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
  cardContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
};

export default CashBook;

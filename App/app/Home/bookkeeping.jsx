import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Button as RNButton, TouchableOpacity } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const Card = ({ children, onAdd, onRemove }) => (
  <View style={styles.card}>
    {children}
    {onAdd && (
      <TouchableOpacity onPress={onAdd} style={styles.cardAction}>
        <Text style={styles.cardActionText}>+ Add</Text>
      </TouchableOpacity>
    )}
    {onRemove && (
      <TouchableOpacity onPress={onRemove} style={styles.cardAction}>
        <Text style={styles.cardActionText}>- Remove</Text>
      </TouchableOpacity>
    )}
  </View>
);

function Bookkeeping() {
  const [todayDate, setTodayDate] = useState("");
  
  const [credits, setCredits] = useState([
    { from: "", transaction_id: "", amount: "" }
  ]);

  const [debits, setDebits] = useState([
    { to: "", transaction_id: "", amount: "", purpose: "" }
  ]);

  const [expenditures, setExpenditures] = useState([
    { project_id: "", project_name: "", amount: "" }
  ]);

  const [revenues, setRevenues] = useState([
    { project_id: "", project_name: "", amount: "" }
  ]);

  const [minutes, setMinutes] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  const [attendance, setAttendance] = useState("");
  const [initialCapital, setInitialCapital] = useState("");
  const [attendancePercentage, setAttendancePercentage] = useState("");
  const [loanRepayments, setLoanRepayments] = useState("");
  const [totalRevenue, setTotalRevenue] = useState("");

  useEffect(() => {
    const date = new Date();
    setTodayDate(date.toDateString());
  }, []);

  const handleSubmit = () => {
    const bookkeepingRecord = {
      date: todayDate,
      credit: credits,
      debit: debits,
      purpose: debits[0].purpose,  
      expenditures,
      revenue: revenues,
      currentBalance: parseFloat(currentBalance),
      attendance: attendance.split(",").map((member) => member.trim()),
      minutes_book: minutes,
      initial_capital: parseFloat(initialCapital),
      attendance_percentage: parseFloat(attendancePercentage),
      loan_repayments: parseFloat(loanRepayments),
      performance: parseFloat(performance),
      total_revenue: parseFloat(totalRevenue),
    };

    console.log(bookkeepingRecord);
  };

  const addCard = (category) => {
    switch (category) {
      case 'credit':
        setCredits([...credits, { from: "", transaction_id: "", amount: "" }]);
        break;
      case 'debit':
        setDebits([...debits, { to: "", transaction_id: "", amount: "", purpose: "" }]);
        break;
      case 'expenditure':
        setExpenditures([...expenditures, { project_id: "", project_name: "", amount: "" }]);
        break;
      case 'revenue':
        setRevenues([...revenues, { project_id: "", project_name: "", amount: "" }]);
        break;
      default:
        break;
    }
  };

  const removeCard = (category, index) => {
    switch (category) {
      case 'credit':
        setCredits(credits.filter((_, i) => i !== index));
        break;
      case 'debit':
        setDebits(debits.filter((_, i) => i !== index));
        break;
      case 'expenditure':
        setExpenditures(expenditures.filter((_, i) => i !== index));
        break;
      case 'revenue':
        setRevenues(revenues.filter((_, i) => i !== index));
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.pageLayout}>
      <ScrollView contentContainerStyle={styles.formContainer}>
        <Text variant="headlineSmall">Bookkeeping Entry for</Text>
        <Text>{todayDate}</Text>

        {credits.map((credit, index) => (
          <Card
            key={index}
            onAdd={() => addCard('credit')}
            onRemove={credits.length > 1 ? () => removeCard('credit', index) : null}
          >
            <TextInput
              label="Credit From"
              value={credit.from}
              onChangeText={(text) => {
                const newCredits = [...credits];
                newCredits[index].from = text;
                setCredits(newCredits);
              }}
              style={styles.textInput}
            />
            <TextInput
              label="Credit Transaction ID"
              value={credit.transaction_id}
              onChangeText={(text) => {
                const newCredits = [...credits];
                newCredits[index].transaction_id = text;
                setCredits(newCredits);
              }}
              style={styles.textInput}
            />
            <TextInput
              label="Credit Amount"
              value={credit.amount}
              onChangeText={(text) => {
                const newCredits = [...credits];
                newCredits[index].amount = text;
                setCredits(newCredits);
              }}
              style={styles.textInput}
              keyboardType="numeric"
            />
          </Card>
        ))}

        {/* Debit Card Section */}
        {debits.map((debit, index) => (
          <Card
            key={index}
            onAdd={() => addCard('debit')}
            onRemove={debits.length > 1 ? () => removeCard('debit', index) : null}
          >
            <TextInput
              label="Debit To"
              value={debit.to}
              onChangeText={(text) => {
                const newDebits = [...debits];
                newDebits[index].to = text;
                setDebits(newDebits);
              }}
              style={styles.textInput}
            />
            <TextInput
              label="Debit Transaction ID"
              value={debit.transaction_id}
              onChangeText={(text) => {
                const newDebits = [...debits];
                newDebits[index].transaction_id = text;
                setDebits(newDebits);
              }}
              style={styles.textInput}
            />
            <TextInput
              label="Debit Amount"
              value={debit.amount}
              onChangeText={(text) => {
                const newDebits = [...debits];
                newDebits[index].amount = text;
                setDebits(newDebits);
              }}
              style={styles.textInput}
              keyboardType="numeric"
            />
            <TextInput
              label="Purpose"
              value={debit.purpose}
              onChangeText={(text) => {
                const newDebits = [...debits];
                newDebits[index].purpose = text;
                setDebits(newDebits);
              }}
              style={styles.textInput}
            />
          </Card>
        ))}

        {/* Expenditure Card Section */}
        {expenditures.map((expenditure, index) => (
          <Card
            key={index}
            onAdd={() => addCard('expenditure')}
            onRemove={expenditures.length > 1 ? () => removeCard('expenditure', index) : null}
          >
            <TextInput
              label="Expenditure Project ID"
              value={expenditure.project_id}
              onChangeText={(text) => {
                const newExpenditures = [...expenditures];
                newExpenditures[index].project_id = text;
                setExpenditures(newExpenditures);
              }}
              style={styles.textInput}
            />
            <TextInput
              label="Expenditure Project Name"
              value={expenditure.project_name}
              onChangeText={(text) => {
                const newExpenditures = [...expenditures];
                newExpenditures[index].project_name = text;
                setExpenditures(newExpenditures);
              }}
              style={styles.textInput}
            />
            <TextInput
              label="Expenditure Amount"
              value={expenditure.amount}
              onChangeText={(text) => {
                const newExpenditures = [...expenditures];
                newExpenditures[index].amount = text;
                setExpenditures(newExpenditures);
              }}
              style={styles.textInput}
              keyboardType="numeric"
            />
          </Card>
        ))}

        {/* Revenue Card Section */}
        {revenues.map((revenue, index) => (
          <Card
            key={index}
            onAdd={() => addCard('revenue')}
            onRemove={revenues.length > 1 ? () => removeCard('revenue', index) : null}
          >
            <TextInput
              label="Revenue Project ID"
              value={revenue.project_id}
              onChangeText={(text) => {
                const newRevenues = [...revenues];
                newRevenues[index].project_id = text;
                setRevenues(newRevenues);
              }}
              style={styles.textInput}
            />
            <TextInput
              label="Revenue Project Name"
              value={revenue.project_name}
              onChangeText={(text) => {
                const newRevenues = [...revenues];
                newRevenues[index].project_name = text;
                setRevenues(newRevenues);
              }}
              style={styles.textInput}
            />
            <TextInput
              label="Revenue Amount"
              value={revenue.amount}
              onChangeText={(text) => {
                const newRevenues = [...revenues];
                newRevenues[index].amount = text;
                setRevenues(newRevenues);
              }}
              style={styles.textInput}
              keyboardType="numeric"
            />
          </Card>
        ))}

        {/* Remaining Fields */}
        <TextInput
          label="Minutes of the meeting"
          value={minutes}
          onChangeText={setMinutes}
          style={styles.textInput}
          multiline={true}
        />
        <TextInput
          label="Current Balance"
          value={currentBalance}
          onChangeText={setCurrentBalance}
          style={styles.textInput}
          keyboardType="numeric"
        />
        <TextInput
          label="Attendance (comma-separated IDs)"
          value={attendance}
          onChangeText={setAttendance}
          style={styles.textInput}
        />
        <TextInput
          label="Initial Capital"
          value={initialCapital}
          onChangeText={setInitialCapital}
          style={styles.textInput}
          keyboardType="numeric"
        />
        <TextInput
          label="Attendance Percentage"
          value={attendancePercentage}
          onChangeText={setAttendancePercentage}
          style={styles.textInput}
          keyboardType="numeric"
        />
        <TextInput
          label="Loan Repayments"
          value={loanRepayments}
          onChangeText={setLoanRepayments}
          style={styles.textInput}
          keyboardType="numeric"
        />
      
        <TextInput
          label="Total Revenue"
          value={totalRevenue}
          onChangeText={setTotalRevenue}
          style={styles.textInput}
          keyboardType="numeric"
        />

        <Button mode="contained" onPress={handleSubmit} style={styles.submitButton}>
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageLayout: {
    flex: 1,
  },
  formContainer: {
    alignItems: "center",
    paddingVertical: 20,
    gap: 20,
  },
  textInput: {
    width: "80%",
    margin: 10,
    borderRadius: 5,
  },
  submitButton: {
    marginTop: 20,
    width: "60%",
  },
  card: {
    width: "80%",
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#f8f8f8",
    marginVertical: 10,
    elevation: 3,
  },
  cardAction: {
    marginTop: 10,
    alignItems: "center",
  },
  cardActionText: {
    color: "#000",
    fontWeight: "bold",
  },
});

export default Bookkeeping;

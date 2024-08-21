import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

function Bookkeeping() {
  const [todayDate, setTodayDate] = useState("");
  const [minutes, setMinutes] = useState("");
  const [creditFrom, setCreditFrom] = useState("");
  const [creditTransactionId, setCreditTransactionId] = useState("");
  const [creditAmount, setCreditAmount] = useState("");
  const [debitTo, setDebitTo] = useState("");
  const [debitTransactionId, setDebitTransactionId] = useState("");
  const [debitAmount, setDebitAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [expenditureProjectId, setExpenditureProjectId] = useState("");
  const [expenditureProjectName, setExpenditureProjectName] = useState("");
  const [expenditureAmount, setExpenditureAmount] = useState("");
  const [revenueProjectId, setRevenueProjectId] = useState("");
  const [revenueProjectName, setRevenueProjectName] = useState("");
  const [revenueAmount, setRevenueAmount] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  const [attendance, setAttendance] = useState("");
  const [initialCapital, setInitialCapital] = useState("");
  const [attendancePercentage, setAttendancePercentage] = useState("");
  const [loanRepayments, setLoanRepayments] = useState("");
  const [performance, setPerformance] = useState("");
  const [totalRevenue, setTotalRevenue] = useState("");

  useEffect(() => {
    const date = new Date();
    setTodayDate(date.toDateString());
  }, []);

  const handleSubmit = () => {
    const bookkeepingRecord = {
      date: todayDate,
      credit: [
        {
          from: creditFrom,
          transaction_id: creditTransactionId,
          amount: parseFloat(creditAmount),
        },
      ],
      debit: [
        {
          to: debitTo,
          transaction_id: debitTransactionId,
          amount: parseFloat(debitAmount),
        },
      ],
      purpose: purpose,
      expenditures: [
        {
          project_id: expenditureProjectId,
          project_name: expenditureProjectName,
          amount: parseFloat(expenditureAmount),
        },
      ],
      revenue: [
        {
          project_id: revenueProjectId,
          project_name: revenueProjectName,
          amount: parseFloat(revenueAmount),
        },
      ],
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
    // Here you would send `bookkeepingRecord` to your backend or database
  };

  return (
    <SafeAreaView style={styles.pageLayout}>
      <ScrollView contentContainerStyle={styles.formContainer}>
        <Text variant="headlineSmall">Bookkeeping entry for {todayDate}</Text>
        
        <TextInput
          label="Credit From"
          value={creditFrom}
          onChangeText={setCreditFrom}
          style={styles.textInput}
        />
        <TextInput
          label="Credit Transaction ID"
          value={creditTransactionId}
          onChangeText={setCreditTransactionId}
          style={styles.textInput}
        />
        <TextInput
          label="Credit Amount"
          value={creditAmount}
          onChangeText={setCreditAmount}
          style={styles.textInput}
          keyboardType="numeric"
        />
        <TextInput
          label="Debit To"
          value={debitTo}
          onChangeText={setDebitTo}
          style={styles.textInput}
        />
        <TextInput
          label="Debit Transaction ID"
          value={debitTransactionId}
          onChangeText={setDebitTransactionId}
          style={styles.textInput}
        />
        <TextInput
          label="Debit Amount"
          value={debitAmount}
          onChangeText={setDebitAmount}
          style={styles.textInput}
          keyboardType="numeric"
        />
        <TextInput
          label="Purpose"
          value={purpose}
          onChangeText={setPurpose}
          style={styles.textInput}
        />
        <TextInput
          label="Expenditure Project ID"
          value={expenditureProjectId}
          onChangeText={setExpenditureProjectId}
          style={styles.textInput}
        />
        <TextInput
          label="Expenditure Project Name"
          value={expenditureProjectName}
          onChangeText={setExpenditureProjectName}
          style={styles.textInput}
        />
        <TextInput
          label="Expenditure Amount"
          value={expenditureAmount}
          onChangeText={setExpenditureAmount}
          style={styles.textInput}
          keyboardType="numeric"
        />
        <TextInput
          label="Revenue Project ID"
          value={revenueProjectId}
          onChangeText={setRevenueProjectId}
          style={styles.textInput}
        />
        <TextInput
          label="Revenue Project Name"
          value={revenueProjectName}
          onChangeText={setRevenueProjectName}
          style={styles.textInput}
        />
        <TextInput
          label="Revenue Amount"
          value={revenueAmount}
          onChangeText={setRevenueAmount}
          style={styles.textInput}
          keyboardType="numeric"
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
          label="Minutes of the meeting"
          value={minutes}
          onChangeText={setMinutes}
          style={styles.textInput}
          multiline={true}
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
          label="Performance"
          value={performance}
          onChangeText={setPerformance}
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
  },
  submitButton: {
    marginTop: 20,
    width: "60%",
  },
});

export default Bookkeeping;

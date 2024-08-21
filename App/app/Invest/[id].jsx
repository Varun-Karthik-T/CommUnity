import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import {
  Text,
  Card,
  Button,
  Divider,
  Avatar,
  TextInput,
} from "react-native-paper";
import { Dropdown } from "react-native-paper-dropdown";
import UpiPayment from "react-native-upi-payment";

const data = {
  Name: "UPTOWN Girls",
  score: 9.3,
  Location: "Pudukkottai",
  "Already Invested": 10000,
};

const InvestmentOptions = [
  { label: "Donation", value: "donation" },
  { label: "Fund Cycle", value: "fundcycle" },
  { label: "Interest Returns", value: "interest" },
];

const frequencyOptions = [
  { label: "One Time", value: "onetime" },
  { label: "Monthly", value: "monthly" },
  { label: "Yearly", value: "yearly" },
];

function InvestPage() {
  const [type, setType] = useState("");
  const [freq, setFreq] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = () => {
    if (!amount) {
      Alert.alert("Error", "Please enter an amount to proceed.");
      return;
    }

    UpiPayment.initializePayment(
      {
        vpa: "7708656066@ybl", // Replace with the correct UPI ID of the recipient
        payeeName: "UPTOWN Girls",
        amount: amount,
        transactionRef: `${Math.random()}`,
      },
      successCallback,
      failureCallback
    );
  };

  const successCallback = (data) => {
    Alert.alert("Success", "Payment Successful", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
    console.log(data);
  };

  const failureCallback = (data) => {
    Alert.alert("Error", "Payment Failed", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.header}>
            <Avatar.Text
              size={56}
              label={data.Name.charAt(0)}
              style={styles.avatar}
            />
            <View style={styles.headerText}>
              <Text style={styles.title}>{data.Name}</Text>
              <Text style={styles.subtitle}>{data.Location}</Text>
            </View>
            <Text style={styles.score}>{data.score}</Text>
          </View>
          <Divider style={styles.divider} />
          <Text style={styles.investedText}>
            Already Invested: ₹
            {data["Already Invested"].toLocaleString("en-IN")}
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Dropdown
            label="Investment Type"
            placeholder="Select Investment Type"
            options={InvestmentOptions}
            value={type}
            onSelect={setType}
          />
          {type && (
            <View style={styles.note}>
              {type === "donation" ? (
                <Text>Donations are without returns.</Text>
              ) : type === "fundcycle" ? (
                <Text>
                  Fund Cycle is a new investment type where you get back the
                  amount without any interest after a fixed period.
                </Text>
              ) : type === "interest" ? (
                <Text>
                  In this , you get back the amount with 2% interest after a
                  fixed period.
                </Text>
              ) : null}
            </View>
          )}

          <Dropdown
            label="Frequency"
            placeholder="Select Frequency"
            options={frequencyOptions}
            value={freq}
            onSelect={setFreq}
            style={styles.dropdown}
          />

          {freq && (
            <View style={styles.note}>
              {freq === "onetime" ? (
                <Text>You can invest any amount you wish.</Text>
              ) : freq === "monthly" ? (
                <Text>
                  Monthly investment is a recurring investment. You can invest a
                  fixed amount every month. A reminder will be sent to you every
                  month. On acceptance of the reminder, the amount will be
                  deducted from your account.
                </Text>
              ) : freq === "yearly" ? (
                <Text>
                  Yearly investment is a recurring investment. You can invest a
                  fixed amount every year. A reminder will be sent to you every
                  year. On acceptance of the reminder, the amount will be
                  deducted from your account.
                </Text>
              ) : null}
            </View>
          )}

          <TextInput
            label="Enter Amount"
            value={amount}
            onChangeText={(text) => setAmount(text)}
            keyboardType="numeric"
            style={styles.input}
          />

          <Button
            mode="contained"
            onPress={handlePayment}
            style={styles.investButton}
          >
            Proceed to Pay
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
    gap: 16,
  },
  note: {
    marginTop: 16,
  },
  card: {
    padding: 16,
    marginVertical: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  score: {
    fontSize: 28,
    fontWeight: "bold",
  },
  divider: {
    marginVertical: 16,
  },
  investedText: {
    fontSize: 18,
    marginBottom: 16,
  },
  dropdown: {
    marginVertical: 8,
  },
  input: {
    marginTop: 16,
  },
  investButton: {
    marginTop: 24,
  },
});

export default InvestPage;

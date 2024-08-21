import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Chip, Icon, FAB } from "react-native-paper";
import api from "@/api/api";
import Attendance from "./Attendance";
import Minutes from "./Minutes";
import CashBook from "./CashBook";
import { useRouter } from "expo-router";

export default function SHGBookkeeping() {
  const [records, setRecords] = useState([]);

  const router = useRouter();

  fetchExpenses = async () => {
    try {
      const response = await api.get("/fetchExpenses/shg_001");
      setRecords(response.data[0].records);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const [currentTab, setTab] = useState("");

  const tabs = [
    {
      label: "Minutes book",
      value: "minutes",
      component: <Minutes records={records} />,
    },
    {
      label: "Attendance book",
      value: "attendance",
      component: <Attendance records={records} />,
    },
    {
      label: "Cash book",
      value: "cash",
      component: <CashBook records={records} />,
    },
  ];

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.tabContainer}>
          {tabs.map((tab) => (
            <Chip
              key={tab.value}
              onPress={() => setTab(tab.value)}
              style={styles.chipp}
            >
              {currentTab == tab.value && <Icon source="check" />} {tab.label}
            </Chip>
          ))}
        </View>
        <View>{tabs.find((tab) => tab.value === currentTab)?.component}</View>
      </SafeAreaView>
      <FAB
        icon="plus"
        label="Add new entry"
        style={styles.fab}
        onPress={() => router.push("Home/bookkeeping")}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  tabContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    gap: 10,
  },
  chipp: {
    width: 150,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

import { View } from "react-native";
import { Text, DataTable, Button } from "react-native-paper";
import DialogBox from "../UI/DialogBox";

function Attendance() {
  const members = [
    { name: "Poornima", id: 1 },
    { name: "Dharani", id: 2 },
    { name: "Nadia", id: 3 },
    { name: "Christina", id: 4 },
  ];

  const records = [
    { date: "05/08/2024", present: [1, 2, 3], absent: [4] },
    { date: "06/08/2024", present: [1, 2, 3, 4], absent: [] },
    { date: "07/08/2024", present: [1, 2, 3], absent: [4] },
  ];

  return (
    <>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title>Present (%)</DataTable.Title>
            <DataTable.Title>Absentees</DataTable.Title>
          </DataTable.Header>
          {records.map((record) => (
            <DataTable.Row key={record.date}>
              <DataTable.Cell>{record.date}</DataTable.Cell>
              <DataTable.Cell>{((record.present.length / members.length) * 100).toFixed(2)}%</DataTable.Cell>
              <DataTable.Cell>
                <DialogBox content={record.absent.map((id) => members.find((member) => member.id === id).name).join(", ")} trigger="View" title="Absentees" />
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </View>
    </>
  );
}

export default Attendance;

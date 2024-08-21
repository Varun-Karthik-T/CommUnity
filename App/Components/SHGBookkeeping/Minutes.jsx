import { View } from "react-native";
import { DataTable } from "react-native-paper";
import DialogBox from "../UI/DialogBox";

function Minutes() {
  const records = [
    {
      date: "05/08/2024",
      content:
        "Conducted a meet on organizing a women health camp.\nDiscussed the budget and the roles of each member.\nFunds requested through the app.\nLedger updated",
    },
    {
      date: "12/08/2024",
      content:
        "The health camp was organized successfully.\nTalked about the poor attendance of Christina.\nLedger updated",
    },
    {
      date: "19/08/2024",
      content:
        "Christina did not attend the meeting.\nWe called her and found out her son was sick.\nShe took a loan of 12000 INR.\nLedger updated",
    },
  ];

  return (
    <>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title>Minutes of meeting</DataTable.Title>
          </DataTable.Header>
          {records.map((record) => (
            <DataTable.Row key={record.date}>
              <DataTable.Cell>{record.date}</DataTable.Cell>
              <DataTable.Cell>
                <DialogBox
                  content={record.content}
                  trigger="View"
                  title="Minutes of meeting"
                />
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </View>
    </>
  );
}

export default Minutes;

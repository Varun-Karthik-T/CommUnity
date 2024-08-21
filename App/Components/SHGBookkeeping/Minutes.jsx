import { View } from "react-native";
import { DataTable } from "react-native-paper";
import DialogBox from "../UI/DialogBox";

function Minutes({ records }) {
    return (
      <>
        <View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Date</DataTable.Title>
              <DataTable.Title>Minutes of meeting</DataTable.Title>
            </DataTable.Header>
            {Object.keys(records).map((date) => (
              <DataTable.Row key={date}>
                <DataTable.Cell>{date}</DataTable.Cell>
                <DataTable.Cell>
                  <DialogBox
                    content={records[date].minutes_book}
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

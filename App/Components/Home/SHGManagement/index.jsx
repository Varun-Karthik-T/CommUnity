import * as React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

const SHGManagement = () => {
  const [value, setValue] = React.useState('Attendance');

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'Attendance',
            label: 'Attendance',
          },
          {
            value: 'Records',
            label: 'Records',
          },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default SHGManagement;
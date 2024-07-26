import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { Card, Button } from 'react-native-paper';
import * as Yup from 'yup';

// Define the validation schema
const validationSchema = Yup.object().shape({
  SHG_Name: Yup.string().required('Required'),
  Date_of_Establishment: Yup.date().required('Required'),
  Number_of_Members: Yup.number().required('Required').positive().integer(),
  Sector: Yup.string().required('Required'),
  Annual_Revenue: Yup.number().required('Required').positive(),
  Annual_Profit: Yup.number().required('Required').positive(),
  Expenses: Yup.number().required('Required').positive(),
  Loan_Amount: Yup.number().required('Required').positive(),
  Loan_Repayment_Status: Yup.string().required('Required'),
  Projects_Completed: Yup.number().required('Required').positive().integer(),
  Success_Rate: Yup.number().required('Required').positive(),
  Geographical_Area: Yup.string().required('Required'),
  Market_Reach: Yup.string().required('Required'),
  Training_Programs_Attended: Yup.number().required('Required').positive().integer(),
  Community_Impact: Yup.string().required('Required'),
  Awards_Recognitions: Yup.string().required('Required'),
  Economic_Conditions: Yup.string().required('Required'),
  Government_Support: Yup.string().required('Required'),
  Market_Trends: Yup.string().required('Required'),
});

const Form = ({ onSubmit }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Formik
          initialValues={{
            SHG_Name: '',
            Date_of_Establishment: '',
            Number_of_Members: '',
            Sector: '',
            Annual_Revenue: '',
            Annual_Profit: '',
            Expenses: '',
            Loan_Amount: '',
            Loan_Repayment_Status: '',
            Projects_Completed: '',
            Success_Rate: '',
            Geographical_Area: '',
            Market_Reach: '',
            Training_Programs_Attended: '',
            Community_Impact: '',
            Awards_Recognitions: '',
            Economic_Conditions: '',
            Government_Support: '',
            Market_Trends: '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => onSubmit(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <ScrollView>
              <View style={styles.container}>
                <Text style={styles.label}>SHG Name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('SHG_Name')}
                  onBlur={handleBlur('SHG_Name')}
                  value={values.SHG_Name}
                />
                {touched.SHG_Name && errors.SHG_Name ? (
                  <Text style={styles.errorText}>{errors.SHG_Name}</Text>
                ) : null}

                <Text style={styles.label}>Date of Establishment</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('Date_of_Establishment')}
                  onBlur={handleBlur('Date_of_Establishment')}
                  value={values.Date_of_Establishment}
                />
                {touched.Date_of_Establishment && errors.Date_of_Establishment ? (
                  <Text style={styles.errorText}>{errors.Date_of_Establishment}</Text>
                ) : null}

                <Text style={styles.label}>Number of Members</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={handleChange('Number_of_Members')}
                  onBlur={handleBlur('Number_of_Members')}
                  value={values.Number_of_Members}
                />
                {touched.Number_of_Members && errors.Number_of_Members ? (
                  <Text style={styles.errorText}>{errors.Number_of_Members}</Text>
                ) : null}

                <Text style={styles.label}>Sector</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('Sector')}
                  onBlur={handleBlur('Sector')}
                  value={values.Sector}
                />
                {touched.Sector && errors.Sector ? (
                  <Text style={styles.errorText}>{errors.Sector}</Text>
                ) : null}

                <Text style={styles.label}>Annual Revenue</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={handleChange('Annual_Revenue')}
                  onBlur={handleBlur('Annual_Revenue')}
                  value={values.Annual_Revenue}
                />
                {touched.Annual_Revenue && errors.Annual_Revenue ? (
                  <Text style={styles.errorText}>{errors.Annual_Revenue}</Text>
                ) : null}

                <Text style={styles.label}>Annual Profit</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={handleChange('Annual_Profit')}
                  onBlur={handleBlur('Annual_Profit')}
                  value={values.Annual_Profit}
                />
                {touched.Annual_Profit && errors.Annual_Profit ? (
                  <Text style={styles.errorText}>{errors.Annual_Profit}</Text>
                ) : null}

                <Text style={styles.label}>Expenses</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={handleChange('Expenses')}
                  onBlur={handleBlur('Expenses')}
                  value={values.Expenses}
                />
                {touched.Expenses && errors.Expenses ? (
                  <Text style={styles.errorText}>{errors.Expenses}</Text>
                ) : null}

                <Text style={styles.label}>Loan Amount</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={handleChange('Loan_Amount')}
                  onBlur={handleBlur('Loan_Amount')}
                  value={values.Loan_Amount}
                />
                {touched.Loan_Amount && errors.Loan_Amount ? (
                  <Text style={styles.errorText}>{errors.Loan_Amount}</Text>
                ) : null}

                <Text style={styles.label}>Loan Repayment Status</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('Loan_Repayment_Status')}
                  onBlur={handleBlur('Loan_Repayment_Status')}
                  value={values.Loan_Repayment_Status}
                />
                {touched.Loan_Repayment_Status && errors.Loan_Repayment_Status ? (
                  <Text style={styles.errorText}>{errors.Loan_Repayment_Status}</Text>
                ) : null}

                <Text style={styles.label}>Projects Completed</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={handleChange('Projects_Completed')}
                  onBlur={handleBlur('Projects_Completed')}
                  value={values.Projects_Completed}
                />
                {touched.Projects_Completed && errors.Projects_Completed ? (
                  <Text style={styles.errorText}>{errors.Projects_Completed}</Text>
                ) : null}

                <Text style={styles.label}>Success Rate</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={handleChange('Success_Rate')}
                  onBlur={handleBlur('Success_Rate')}
                  value={values.Success_Rate}
                />
                {touched.Success_Rate && errors.Success_Rate ? (
                  <Text style={styles.errorText}>{errors.Success_Rate}</Text>
                ) : null}

                <Text style={styles.label}>Geographical Area</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('Geographical_Area')}
                  onBlur={handleBlur('Geographical_Area')}
                  value={values.Geographical_Area}
                />
                {touched.Geographical_Area && errors.Geographical_Area ? (
                  <Text style={styles.errorText}>{errors.Geographical_Area}</Text>
                ) : null}

                <Text style={styles.label}>Market Reach</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('Market_Reach')}
                  onBlur={handleBlur('Market_Reach')}
                  value={values.Market_Reach}
                />
                {touched.Market_Reach && errors.Market_Reach ? (
                  <Text style={styles.errorText}>{errors.Market_Reach}</Text>
                ) : null}

                <Text style={styles.label}>Training Programs Attended</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={handleChange('Training_Programs_Attended')}
                  onBlur={handleBlur('Training_Programs_Attended')}
                  value={values.Training_Programs_Attended}
                />
                {touched.Training_Programs_Attended && errors.Training_Programs_Attended ? (
                  <Text style={styles.errorText}>{errors.Training_Programs_Attended}</Text>
                ) : null}

                <Text style={styles.label}>Community Impact</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('Community_Impact')}
                  onBlur={handleBlur('Community_Impact')}
                  value={values.Community_Impact}
                />
                {touched.Community_Impact && errors.Community_Impact ? (
                  <Text style={styles.errorText}>{errors.Community_Impact}</Text>
                ) : null}

                <Text style={styles.label}>Awards Recognitions</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('Awards_Recognitions')}
                  onBlur={handleBlur('Awards_Recognitions')}
                  value={values.Awards_Recognitions}
                />
                {touched.Awards_Recognitions && errors.Awards_Recognitions ? (
                  <Text style={styles.errorText}>{errors.Awards_Recognitions}</Text>
                ) : null}

                <Text style={styles.label}>Economic Conditions</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('Economic_Conditions')}
                  onBlur={handleBlur('Economic_Conditions')}
                  value={values.Economic_Conditions}
                />
                {touched.Economic_Conditions && errors.Economic_Conditions ? (
                  <Text style={styles.errorText}>{errors.Economic_Conditions}</Text>
                ) : null}

                <Text style={styles.label}>Government Support</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('Government_Support')}
                  onBlur={handleBlur('Government_Support')}
                  value={values.Government_Support}
                />
                {touched.Government_Support && errors.Government_Support ? (
                  <Text style={styles.errorText}>{errors.Government_Support}</Text>
                ) : null}

                <Text style={styles.label}>Market Trends</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('Market_Trends')}
                  onBlur={handleBlur('Market_Trends')}
                  value={values.Market_Trends}
                />
                {touched.Market_Trends && errors.Market_Trends ? (
                  <Text style={styles.errorText}>{errors.Market_Trends}</Text>
                ) : null}

                <Button onPress={handleSubmit} title="Submit"  >Submit </Button>
              </View>
            </ScrollView>
          )}
        </Formik>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    margin: 16,
    borderRadius: 10,
  },
  label: {
    marginTop: 16,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    paddingLeft: 8,
    borderRadius: 4,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

export default Form;

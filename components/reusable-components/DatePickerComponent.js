// // components/DatePickerComponent.js

// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, Platform } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import formatDate from './FormatDate';

// const DatePickerComponent = ({ selectedDate, onDateChange }) => {
//   const [show, setShow] = useState(false);

//   const handleChange = (event, date) => {
//     if (date) {
//       onDateChange(date);
//     }
//     setShow(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Selected Date: {formatDate(selectedDate)}</Text>
//       <Button title="Select Date" onPress={() => setShow(true)} />
//       {show && (
//         <DateTimePicker
//           value={selectedDate}
//           mode="date"
//           display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//           onChange={handleChange}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     margin: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
// });

// export default DatePickerComponent;

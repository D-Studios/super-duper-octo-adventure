import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import TextInputWithMask from '../TextInputMask';
import DatePickerModal from './DatePickerModal';

export default function DatePickerInput() {
  const [visible, setVisible] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, []);

  const onConfirm = React.useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <>
      <View style={styles.root}>
        <TextInputWithMask
          value={''}
          keyboardType={'numeric'}
          placeholder={'DD-MM-YYY'}
          mask={'DD-MM-YYY'}
          onChangeText={() => {}}
          style={styles.input}
        />
        <IconButton
          size={24}
          style={styles.calendarButton}
          icon="calendar"
          onPress={() => setVisible(true)}
        />
      </View>

      <DatePickerModal
        mode="single"
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
      />
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    flex: 1,
  },
  input: { flex: 1 },
  calendarButton: { position: 'absolute', right: 0 },
});

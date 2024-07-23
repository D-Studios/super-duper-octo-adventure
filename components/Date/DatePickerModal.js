import * as React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import DatePickerModalContent from './DatePickerModalContent';
import { useMemo } from 'react';
import Color from 'color';
import { useHeaderColorIsLight } from '../utils';

const supportedOrientations = [
  'portrait',
  'portrait-upside-down',
  'landscape',
  'landscape-left',
  'landscape-right',
];

function DatePickerModal({
  visible,
  animationType = 'slide',
  disableStatusBar = false,
  disableStatusBarPadding = false,
  onDismiss,
  onConfirm,
  mode,
  ...rest
}) {
  const theme = useTheme();
  const dimensions = useWindowDimensions();

  const animationTypeCalculated =
    animationType ||
    Platform.select({
      web: 'none',
      default: 'slide',
    });

  const isLight = useHeaderColorIsLight();

  const statusBarColor = useMemo(
    () => Color(theme.colors.primary).darken(0.2).hex(),
    [theme]
  );

  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  return (
    <View style={[StyleSheet.absoluteFill]} pointerEvents="box-none">
      <Modal
        animationType={animationTypeCalculated}
        transparent={true}
        visible={visible}
        onRequestClose={handleDismiss}
        presentationStyle="overFullScreen"
        supportedOrientations={supportedOrientations}
        statusBarTranslucent={true}>
        <>
          <TouchableWithoutFeedback onPress={handleDismiss}>
            <View
              style={[
                StyleSheet.absoluteFill,
                styles.modalBackground,
                { backgroundColor: theme.colors.backdrop },
              ]}
            />
          </TouchableWithoutFeedback>
          <View style={[StyleSheet.absoluteFill, styles.modalRoot]} pointerEvents="box-none">
            <View
              style={[
                styles.modalContent,
                { backgroundColor: theme.colors.surface },
                dimensions.width > 650 ? styles.modalContentBig : null,
              ]}>
              {!disableStatusBar && (
                <StatusBar
                  translucent={true}
                  barStyle={isLight ? 'dark-content' : 'light-content'}
                />
              )}
              {!disableStatusBarPadding && (
                <View
                  style={[
                    {
                      height: StatusBar.currentHeight,
                      backgroundColor: statusBarColor,
                    },
                  ]}
                />
              )}
              <DatePickerModalContent {...rest} disableSafeTop={disableStatusBar} />
            </View>
          </View>
        </>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalRoot: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalBackground: {
    flex: 1,
  },
  modalContent: {
    flex: 1,
    width: '100%',
  },
  modalContentBig: {
    maxWidth: 600,
    maxHeight: 800,
    borderRadius: 10,
    width: '100%',
    overflow: 'hidden',
  },
});

export default React.memo(DatePickerModal);

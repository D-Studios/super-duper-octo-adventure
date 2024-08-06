#!/bin/bash

# Define the backup directory
BACKUP_DIR="gradle_backups"

# List of directories containing build.gradle files to restore
GRADLE_FILES=(
  "android"
  "android/app"
  "node_modules/react-native-biometrics/android"
  "node_modules/@react-native-community/slider/android"
  "node_modules/react-native-gesture-handler/android"
  "node_modules/react-native-image-picker/android"
  "node_modules/react-native-pager-view/android"
  "node_modules/react-native-reanimated/android"
  "node_modules/react-native-safe-area-context/android"
  "node_modules/react-native-screens/android"
  "node_modules/react-native-svg/android"
  "node_modules/react-native-vector-icons/android"
  # Add other directories as needed
)

# Copy each backup build.gradle file to its original location
for dir in "${GRADLE_FILES[@]}"; do
  if [ -f "$BACKUP_DIR/${dir//\//_}_build.gradle" ]; then
    cp "$BACKUP_DIR/${dir//\//_}_build.gradle" "$dir/build.gradle"
    echo "Restored $BACKUP_DIR/${dir//\//_}_build.gradle to $dir/build.gradle"
  fi
done

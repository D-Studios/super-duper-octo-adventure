#!/bin/bash

# Define the backup directory
BACKUP_DIR="gradle_backups"

# Ensure the backup directory exists
mkdir -p "$BACKUP_DIR"

# List of directories containing build.gradle files to backup
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

# Copy each build.gradle file to the backup directory
for dir in "${GRADLE_FILES[@]}"; do
  if [ -f "$dir/build.gradle" ]; then
    cp "$dir/build.gradle" "$BACKUP_DIR/${dir//\//_}_build.gradle"
    echo "Backed up $dir/build.gradle to $BACKUP_DIR/${dir//\//_}_build.gradle"
  fi
done

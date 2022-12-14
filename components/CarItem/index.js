import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import styles from "./styles";

const Index = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}> Model S </Text>
        <Text style={styles.subtitle}> Starting at $69,420 </Text>
      </View>
    </View>
  );
};

export default Index;

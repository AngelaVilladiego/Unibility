import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
export default class RadioButton extends Component {
  state = {
    value: null,
  };

  componentDidUpdate() {
    this.props.parentCallback(this.state.value);
  }

  render() {
    const { PROP } = this.props;
    const { value } = this.state;
    return (
      <View>
        {PROP.map((res) => {
          return (
            <View key={res.key} style={styles.container}>
              <Text
                style={[
                  value === res.key
                    ? styles.selectedRadioText
                    : styles.radioText,
                ]}
              >
                {res.text}
              </Text>
              <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => {
                  this.setState({
                    value: res.key,
                  });
                }}
              >
                {value === res.key && <View style={styles.selectedRb} />}
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioText: {
    marginRight: 35,
    fontSize: 20,
    color: "#444",
    fontWeight: "600",
  },
  selectedRadioText: {
    marginRight: 35,
    fontSize: 23,
    color: "#000",
    fontWeight: "700",
  },
  radioCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#3740ff",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: "#3740ff",
  },
  result: {
    marginTop: 20,
    color: "white",
    fontWeight: "600",
    backgroundColor: "#F3FBFE",
  },
});

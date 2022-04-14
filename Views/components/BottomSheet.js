import {
  TouchableOpacity,
  Dimensions,
  Text,
  StyleSheet,
  View,
} from "react-native";
import React, {
  Component,
  useEffect,
  useState,
  useRef,
  useCallback,
  useImperativeHandle,
} from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("screen");

const BottomSheet = React.forwardRef(({}, ref) => {
  const [firstRender, setFirstRender] = useState(true);
  const translateY = useSharedValue(0);
  const [isUp, setIsUp] = useState(true);
  const active = useSharedValue(false);

  const setSheet = useCallback(
    (sheetUp) => {
      "worklet";
      setIsUp(sheetUp);
      console.log(isUp, "callback");
    },
    [isUp]
  );

  const isActive = useCallback(() => {
    return active.value;
  }, []);

  useImperativeHandle(ref, () => ({ setSheet, isActive }), [
    setSheet,
    isActive,
  ]);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  const onPress = () => {
    toggleBottomSheet();
  };

  const toggleBottomSheet = () => {
    var newIsUp = !isUp;
    setSheet(newIsUp);
  };

  useEffect(() => {
    if (!firstRender) {
      console.log(isUp, "- Has changed");
      translateY.value = withSpring(isUp ? 0 : (2 * SCREEN_HEIGHT) / 3 + 20, {
        damping: 16,
        stiffness: 175,
      });
    }
    active.value = isUp;
  }, [isUp]);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
      <View style={styles.line} />
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={onPress} />
      </View>
    </Animated.View>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: SCREEN_HEIGHT / 3,
    borderRadius: 25,
  },
  bottomSheetTO: {
    height: SCREEN_HEIGHT,
    width: "100%",
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: "grey",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 2,
  },
  content: {
    flex: 1,
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "blue",
    opacity: 0.6,
    alignSelf: "center",
  },
});

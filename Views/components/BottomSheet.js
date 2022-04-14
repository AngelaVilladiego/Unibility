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

const BottomSheet = React.forwardRef(({ children, bgColor }, ref) => {
  const sheetColor = bgColor || "white";

  const [firstRender, setFirstRender] = useState(true);
  const translateY = useSharedValue(0);
  const [isUp, setIsUp] = useState(false);
  const active = useSharedValue(false);

  const setSheet = useCallback(
    (sheetUp) => {
      "worklet";
      setIsUp(sheetUp);
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

  useEffect(() => {
    if (!firstRender) {
      console.log(isUp, "- Has changed");
      translateY.value = withSpring(
        isUp ? -((2 * SCREEN_HEIGHT) / 3 + 20) : 0,
        {
          damping: 16,
          stiffness: 175,
        }
      );
    }
    active.value = isUp;
  }, [isUp]);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View
      style={[
        styles.bottomSheetContainer,
        rBottomSheetStyle,
        { backgroundColor: sheetColor },
      ]}
    >
      <View style={styles.content}>
        {/* <TouchableOpacity style={styles.button} onPress={onPress} /> */}
        {children}
      </View>
    </Animated.View>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    position: "absolute",
    top: SCREEN_HEIGHT,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "hidden",
    justifyContent: "flex-start",
  },
  bottomSheetTO: {
    height: SCREEN_HEIGHT,
    width: "100%",
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

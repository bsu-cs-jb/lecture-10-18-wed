import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextProps,
  View,
  ViewProps,
} from "react-native";
import styles from "./styles";

export function LabelText(props: TextProps) {
  return (
    <RenderHighlightText style={styles.labelText}>
      {props.children}
    </RenderHighlightText>
  );
}

export function TitleText(props: TextProps) {
  return (
    <RenderHighlightText style={styles.titleText}>
      {props.children}
    </RenderHighlightText>
  );
}
export function SubtitleText(props: TextProps) {
  return (
    <RenderHighlightText style={styles.subTitleText}>
      {props.children}
    </RenderHighlightText>
  );
}

export function FlexFill() {
  return <View style={styles.flexFill} />;
}

export function LctHorzContainer({
  children,
  style,
  ...props
}: ViewProps) {
  return (
    <RenderHighlightView
      style={[style, styles.horzContainer]}
      {...props}
    >
      {children}
    </RenderHighlightView>
  );
}

export function LctAvoidingView({ children, ...props }: ViewProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.avoidingView}
    >
      <LctView {...props}>{children}</LctView>
    </KeyboardAvoidingView>
  );
}
export function LctView({ children, ...props }: ViewProps) {
  return (
    <RenderHighlightView {...props}>{children}</RenderHighlightView>
  );
}

export function RenderHighlightView({
  children,
  style,
  ...props
}: ViewProps) {
  const [showHighlight, setShowHighlight] = useState(true);
  const fromInterval = useRef(false);
  // console.log(
  //   `showHighlight: ${showHighlight} fromInterval: ${fromInterval.current}`,
  // );
  if (!fromInterval.current && !showHighlight) {
    // console.log("show highlight again");
    setShowHighlight(true);
  }
  fromInterval.current = false;
  const highlight = showHighlight
    ? {
        borderColor: "#f00f",
        backgroundColor: "#f001",
        borderWidth: 2,
      }
    : {
        borderColor: "#0000",
        backgroundColor: "#0000",
        borderWidth: 2,
      };
  useEffect(() => {
    if (showHighlight) {
      const id = setInterval(() => {
        // console.log(`setInterval(${ts()})`);
        fromInterval.current = true;
        setShowHighlight(false);
      }, 750);
      return () => {
        clearInterval(id);
      };
    }
  });
  return (
    <View style={[style, highlight, {}]} {...props}>
      {children}
    </View>
  );
}

export function RenderHighlightText({
  children,
  style,
  ...props
}: TextProps) {
  const [showHighlight, setShowHighlight] = useState(true);
  const fromInterval = useRef(false);
  // console.log(
  //   `showHighlight: ${showHighlight} fromInterval: ${fromInterval.current}`,
  // );
  if (!fromInterval.current && !showHighlight) {
    // console.log("show highlight again");
    setShowHighlight(true);
  }
  fromInterval.current = false;
  const highlight = showHighlight
    ? {
        borderColor: "#f00f",
        backgroundColor: "#f001",
        borderWidth: 2,
      }
    : {
        borderColor: "#0000",
        backgroundColor: "#0000",
        borderWidth: 2,
      };
  useEffect(() => {
    if (showHighlight) {
      const id = setInterval(() => {
        // console.log(`setInterval(${ts()})`);
        fromInterval.current = true;
        setShowHighlight(false);
      }, 750);
      return () => {
        clearInterval(id);
      };
    }
  });
  return (
    <Text style={[style, highlight]} {...props}>
      {children}
    </Text>
  );
}
// TODO: Add a BigButton class for lecture

import * as React from "react";
import { Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../providers/AuthProvider";

export function DeleteAccount() {
  const navigation = useNavigation();
  const { signOut } = useAuth();

  return (
    <Button
      title="Delete Your Account"
      color="#dc143c"
      onPress={() => {
        Alert.alert("Please don't go, deleting the account is permanent!", null, [
          {
            text: "Yes, Delete",
            style: "destructive",
            onPress: () => {
              signOut();
              navigation.navigate("WelcomeView");
            },
          },
          { text: "Cancel", style: "cancel" },
        ]);
      }}
    />
  );
}

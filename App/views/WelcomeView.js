import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useAuth } from "../providers/AuthProvider";
import styles from "../stylesheet";

const WelcomeView  = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp, signIn } = useAuth();

  useEffect(() => {
    // If there is a user logged in, go to the Dashboard page.
    if (user != null) {
      navigation.navigate("Dashboard");
    }
  }, [user]);

  // The onPressSignIn method calls AuthProvider.signIn with the
  // email/password in state.
  const onPressSignIn = async () => {
    console.log("Press Login ");
    try {
      await signIn(email, password);
    } catch (error) {
      Alert.alert(`Failed to Login: ${error.message}`);
    }
  };

  // The onPressSignUp method calls AuthProvider.signUp with the
  // email/password in state and then signs in.
  const onPressSignUp = async () => {
    navigation.navigate("Registration");
  };

  return (
    <View>
      {/* <Text>Signup or Sign in:</Text> */}
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="email"
          style={styles.inputStyle}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="password"
          style={styles.inputStyle}
          secureTextEntry
        />
      </View>
                <Text>
            {'\n'}
          </Text>
      <View >
        <Button 
        onPress={onPressSignIn} 
        title="Login"
        color="#6b8e23"
        />
            <Text>
              {'\n'}
            </Text>
        <Button 
        onPress={onPressSignUp} 
        title="Register"
        color="#6b8e23"
        />
      </View>
    </View>
  );
}

export default WelcomeView;
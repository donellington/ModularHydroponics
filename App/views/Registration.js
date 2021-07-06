import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useAuth } from "../providers/AuthProvider";
import styles from "../stylesheet";


const Registration  = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { user, signUp, signIn } = useAuth();

  useEffect(() => {
    // If there is a user logged in, go to the Welcome page.
    if (user != null) {
      navigation.navigate("WelcomeView");
    }
  }, [user]);

  // The onPressSignUp method calls AuthProvider.signUp with the
  // email/password in state and then signs in.
  const onPressSignUp = async () => {
    try {
      await signUp( email, password);
      signIn(email, password);
      // navigation.navigate("WelcomeView");
      Alert.alert('You have signed up');
    } catch (error) {
      Alert.alert(`Failed to sign up: ${error.message}`);
    }
  };

  return (
    <View>
      <Text>Registration:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setFirstName}
          value={firstName}
          placeholder="First Name"
          style={styles.inputStyle}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setLastName}
          value={lastName}
          placeholder="Last Name"
          style={styles.inputStyle}
          autoCapitalize="none"
        /> 
      </View>
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
        <Button 
          onPress={onPressSignUp} 
          title="Sign Up"
          color="#6b8e23"
        />
    </View>
  );
}

export default Registration;
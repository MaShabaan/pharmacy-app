import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  import { useLayoutEffect, useState } from 'react';
  import { useNavigation } from 'expo-router';
  import { AntDesign } from "@expo/vector-icons";
  
  export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    useLayoutEffect(() => {
      navigation.setOptions({
        title: 'Login',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
      });
    }, [navigation]);
  
    const handleLogin = () => {
      console.log("Login:", email, password);
    };
  
    const handleGoogleLogin = () => {
      console.log("Google login clicked");
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>
          Welcome back! Please enter your details.
        </Text>
  
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          style={styles.input}
        />
  
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
  
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
          <AntDesign
            name="google"
            size={20}
            color="#000"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.googleText}>Sign in with Google</Text>
        </TouchableOpacity>
  
        <Text style={styles.footer}>
          Don’t have an account?{" "}
          <Text style={styles.signup}>Sign up for free</Text>
        </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
    },
  
    title: {
      fontSize: 28,
      fontWeight: "700",
      marginBottom: 6,
      width: "100%",
      maxWidth: 400,
    },
    subtitle: {
      fontSize: 14,
      color: "#666",
      marginBottom: 24,
      width: "100%",
      maxWidth: 400,
    },
    label: {
      fontSize: 14,
      fontWeight: "500",
      marginBottom: 6,
      width: "100%",
      maxWidth: 400,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 8,
      padding: 12,
      marginBottom: 16,
      fontSize: 16,
      width: "100%",
      maxWidth: 400,
    },
    forgot: {
      color: "#007AFF",
      textAlign: "right",
      marginBottom: 24,
      fontSize: 14,
      width: "100%",
      maxWidth: 400,
    },
    loginButton: {
      backgroundColor: "#000",
      paddingVertical: 14,
      borderRadius: 8,
      marginBottom: 16,
      width: "100%",
      maxWidth: 400,
    },
    loginText: {
      color: "#fff",
      textAlign: "center",
      fontWeight: "600",
      fontSize: 16,
      width: "100%",
      maxWidth: 400,
    },
    googleButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderColor: "#ccc",
      borderWidth: 1,
      paddingVertical: 14,
      borderRadius: 8,
      marginBottom: 24,
      width: "100%",
      maxWidth: 400,
    },
    googleText: {
      fontSize: 16,
      fontWeight: "500",
    },
    footer: {
      textAlign: "center",
      fontSize: 14,
      color: "#666",
      width: "100%",
      maxWidth: 400,
    },
    signup: {
      fontWeight: "600",
      color: "#000",
      width: "100%",
      maxWidth: 400,
    },
  });
  
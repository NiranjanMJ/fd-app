import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "@/supabase/supabase";
import { Box } from "@/components/ui/box";

const loginTest = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  useEffect( () =>{

    setEmail("n@n.com");
    console.log(email);


  }, [] );

  return (
  <SafeAreaView >
  <Text className="text-7xl text-red-600">Hello </Text>

  </SafeAreaView>
  );
  
  
}


const login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const router = useRouter();
    useEffect(() => {
        const checkLogin = async () => {
            try{
                const token = await AsyncStorage.getItem("authToken");
                if(token){
                    router.replace("/(home)")
                }
            } catch(error){
                console.log(error)
            }
        }

        checkLogin();
    },[])
    async function signUpWithEmail(){

      const {data,error} = await supabase.auth.signInWithPassword({
        email:email,
        password:password
    })
        if(data){
            const token = data?.session?.access_token;
            const userID = data?.user?.id;
            const userName = data?.user?.user_metadata.display_name;
            AsyncStorage.setItem("authToken",token)
            AsyncStorage.setItem("userID",userID)
            AsyncStorage.setItem("userName",userName)

            router.replace("/(home)")
        }
    }
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <Box style={{ marginTop: 50 }}>
        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
          Food App Delivery
        </Text>
      </Box>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "red",
            }}
          >
            Log in to your account
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{ color: "gray", marginVertical: 10, width: 300 }}
              placeholder="enter your Email"
            />
          </View>
          
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <AntDesign
              style={{ marginLeft: 8 }}
              name="lock1"
              size={24}
              color="black"
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={{ color: "gray", marginVertical: 10, width: 300 }}
              placeholder="enter your password"
            />
          </View>
        </View>

        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <Text>Keep me Logged In</Text>
          <Text>Forgot Password</Text>
        </View> */}

        <Pressable
        onPress={signUpWithEmail}
          style={{
            width: 200,
            backgroundColor: "#8b0000",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
            marginTop:50
          }}
        >
          <Text style={{textAlign:"center",fontWeight:"bold",fontSize:16,color:"white"}}>Login</Text>
        </Pressable>

        <Pressable onPress={() => router.replace("/(auth)/register")} style={{marginTop:15}}>
            <Text style={{textAlign:"center",color:"gray",fontSize:16}}>Don't have an Account? Sign Up</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default login;
// export default loginTest;

const styles = StyleSheet.create({});

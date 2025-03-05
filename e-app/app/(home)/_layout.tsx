import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "@/store";


export default function RootLayout() {
  return (
    <GluestackUIProvider mode="dark"  >
      <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="hotel" options={{ headerShown: false }} />
        <Stack.Screen name="cart" options={{ headerShown: false }} />
        <Stack.Screen name="order" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
      </Provider>
    </GluestackUIProvider>
  );
}

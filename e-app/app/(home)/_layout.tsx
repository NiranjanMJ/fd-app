import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return <>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="hotel" options={{ headerShown: false }} />
      <Stack.Screen name="cart" options={{ headerShown: false }} />
      <Stack.Screen name="order" options={{ headerShown: false }} />
    </Stack>
  </>;
}

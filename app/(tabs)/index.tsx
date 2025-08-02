import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { theme } from "@/theme";
import { PlantCard } from "@/components/PlantCard";
import { usePlantStore } from "@/store/plantsStore";

export default function App() {
  const plants = usePlantStore((state) => state.plants);

  return (
    <FlatList
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
    />
  );
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    alignItems: "center",
    justifyContent: "center",
  },
});

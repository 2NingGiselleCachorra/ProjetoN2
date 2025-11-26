import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddScreen from "./screens/AddScreen";
import ContatoScreen from "./screens/ContatoScreen";
import DetalheScreen from "./screens/DetalheScreen";
import ConfigScreen from "./screens/ConfigScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Adicionar" component={AddScreen} />
      <Tab.Screen name="Contatos" component={ContatoScreen} />
      <Tab.Screen name="Configurações" component={ConfigScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTabs" component={Tabs} />
        <Stack.Screen name="Detalhes" component={DetalheScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

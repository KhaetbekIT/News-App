import Main from "./components/Main";
import Contacts from "./components/Contacts";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import FullInfo from "./components/FullInfo";

const Stack = createStackNavigator();

const Navigate = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{
                title: "Main",
                headerStyle: { backgroundColor: "#eb5d3d" },
                headerTitleStyle: {
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "300"
                }
            }}
            />
            <Stack.Screen name="Contacts" component={Contacts} options={{ title: "Conatacts" }} />

            <Stack.Screen name="FullInfo" component={FullInfo} options={{ title: "Full info" }} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default Navigate;
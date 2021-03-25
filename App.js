import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import IndexScreen from "./src/screens/indexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const Stack = new createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Index" component={IndexScreen} options={{title: "Blogs"}}/>
                <Stack.Screen name="Show" component={ShowScreen} options={{title: "Blogs"}}/>
                <Stack.Screen name="Create" component={CreateScreen} options={{title: "Blogs"}}/>
                <Stack.Screen name="Edit" component={EditScreen} options={{title: "Blogs"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default () => {
    return <Provider>
        <App />
    </Provider>
};
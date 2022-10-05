import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./src/navigation/tab";
import { NativeBaseProvider } from "native-base";

const App = () => {
  return(
      <NativeBaseProvider>
          <NavigationContainer>
                <Tabs />
            </NavigationContainer>
      </NativeBaseProvider>
  );
}
export default App;

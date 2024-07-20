import React, {createContext, useContext} from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});
// used so that there is some default value to begin with else some cases it will crash
// like no initial value of theme would make an issue for App to render in the beginning
// default value can be given at the time of initialisation

// for wrapper inside which we have global access to context
export const ThemeProvider = ThemeContext.Provider

// custom hook
export default function useTheme(){
    return useContext(ThemeContext);
}
// previously we imprted both useContext as well as ActualContext
// Here we just can import ActualContext by importing useTheme
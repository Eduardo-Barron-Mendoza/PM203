import {Stack} from "expo-router";

export default function RootLayout(){
    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="detalle" options={{headerShown:true, title:"Detalle"}}/>
            <Stack.Screen name="editar" options={{headerShown:true, title:"Editar"}}/>
        </Stack>
    );
}
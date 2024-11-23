import React from "react";
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { temas } from "../../global/temas";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";

import { useNavigation, NavigationProp } from "@react-navigation/native";


export default function Cadastro() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(true);
    const [confirmpassword, setconfirmPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    //função de login fake sem backend
    async function registerUser() {
        try {
            setLoading(true);

            setTimeout(() => {
                // if (!email || !password || !confirmpassword) {
                //     alert("Preencha todos os campos");
                //     console.log("Preencha todos os campos");
                // } else if (password !== confirmpassword) {
                //     alert("As senhas não coincidem");
                // } else {
                //     alert("Cadastro realizado com sucesso");
                // }
                navigation.reset({
                    index: 0,
                    routes: [{ name: "BottonRoutes" }],
                });
                setLoading(false);
            }, 100);
        } catch (error) {
            console.error("Error during registration:", error);
        }
    }

    async function getLogin() {
        navigation.navigate("Login");
    }
    //fim do teste de cadastro




    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain" />
                <Text style={style.text}>Crie sua conta</Text>
            </View>

            <View style={style.boxMid}>
                <Input
                    title="NOME COMPLETO"
                    IconRigth={MaterialIcons}
                    iconRightName="person"
                />
                <Input
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    title="ENDEREÇO DE E-MAIL"
                    IconRigth={MaterialIcons}
                    iconRightName="email"
                />

                <Input
                    title="NÚMERO DE CELULAR"
                    IconRigth={MaterialIcons}
                    iconRightName="phone"
                    keyboardType="phone-pad"
                />

                <Input
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    title="SENHA"
                    IconRigth={Octicons}
                    iconRightName={showPassword ? "eye" : "eye-closed"}
                    secureTextEntry={showPassword}
                    onIconRigthPress={() => setShowPassword(!showPassword)}
                />


                <Input
                    value={confirmpassword}
                    onChangeText={(text) => setconfirmPassword(text)}
                    title="CONFIRME SUA SENHA"
                    IconRigth={Octicons}
                    iconRightName={showPassword ? "eye" : "eye-closed"}
                    secureTextEntry={showPassword}
                    onIconRigthPress={() => setShowPassword(!showPassword)}
                />
            </View>

            <View style={style.boxBotton}>
                <Button
                    text="CADASTRAR- SE"
                    loading={loading}
                    onPress={registerUser}
                />

            </View>


            <Text style={style.textBotton}>Já tem uma conta? <Text onPress={getLogin} style={{ color: temas.cores.primaria }}>Entre agora!</Text> </Text>
        </View>

    )
}

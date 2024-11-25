import React from "react";
import { Text, View, Image, ActivityIndicator } from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { temas } from "../../global/temas";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation<NavigationProp<any>>();

    // Estado para armazenar email, senha, visibilidade da senha e status de carregamento
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    // Função simulada para login
    async function getLogin() {
        try {
            setLoading(true);
            setTimeout(() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: "BottonRoutes" }],
                });
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    // Redireciona para a tela de cadastro
    async function getRegister() {
        navigation.navigate("Cadastro");
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain" />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>

            <View style={style.boxMid}>
                {/* Input para o e-mail */}
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO DE E-MAIL"
                    IconRigth={MaterialIcons}
                    iconRightName="email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                {/* Input para a senha com alternância de visibilidade */}
                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA"
                    IconRigth={Octicons}
                    iconRightName={showPassword ? "eye" : "eye-closed"}
                    secureTextEntry={showPassword}
                    onIconRigthPress={() => setShowPassword(!showPassword)}
                />
            </View>

            <View style={style.boxBotton}>
                {/* Botão para login */}
                <Button text="ENTRAR" loading={loading} onPress={getLogin} />
            </View>

            {/* Link para cadastro */}
            <Text style={style.textBotton}>
                Ainda não tem uma conta?{" "}
                <Text onPress={getRegister} style={{ color: temas.cores.primaria }}>
                    Crie uma agora mesmo!
                </Text>
            </Text>
        </View>
    );
}

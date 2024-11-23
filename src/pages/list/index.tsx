import React from "react";
import { Text, View } from "react-native";
import { style } from "./styles";
import { Input } from "../../components/Input";
import { MaterialIcons } from "@expo/vector-icons";

const data: any = [
    {
        item: 1,
        title: "Supino Reto",
        description: "Exercício para peitoral",
        flag: true,
        muscleGroup: "Peitoral",
        equipment: "Barra e pesos",
        difficulty: "Intermediário",
        duration: "3 séries de 12 repetições",
        tips: "Mantenha a barra alinhada ao peitoral durante a execução.",
    },
    {
        item: 2,
        title: "Agachamento Livre",
        description: "Exercício para pernas",
        flag: false,
        muscleGroup: "Pernas e glúteos",
        equipment: "Barra com pesos ou peso corporal",
        difficulty: "Avançado",
        duration: "4 séries de 10 repetições",
        tips: "Mantenha as costas retas e os pés firmes no chão.",
    },
    {
        item: 3,
        title: "Rosca Direta",
        description: "Exercício para bíceps",
        flag: true,
        muscleGroup: "Bíceps",
        equipment: "Halteres ou barra",
        difficulty: "Iniciante",
        duration: "3 séries de 15 repetições",
        tips: "Evite balançar o corpo e foque no movimento dos braços.",
    },
    {
        item: 4,
        title: "Desenvolvimento com Halteres",
        description: "Exercício para ombros",
        flag: false,
        muscleGroup: "Ombros",
        equipment: "Halteres",
        difficulty: "Intermediário",
        duration: "3 séries de 12 repetições",
        tips: "Evite arquear as costas; mantenha os movimentos controlados.",
    }
];


export default function List() {
    return (
        <View style={style.container}>
            <View style={style.header}>

                <Text style={style.greeting}>Bom dia.<Text style={{ fontWeight: "bold" }}> Eltobrgs</Text> </Text>

                <View style={style.boxInput}>
                    <Input
                        IconLeft={MaterialIcons}
                        iconLeftName="search"
                        placeholder="Buscar"
                    />
                </View>

            </View>

            <View style={style.boxList}>
                {data?.length > 0 && (
                    data.map((item: any, index: number) => {
                        return <Text key={index}>{item.title}</Text>;
                    })
                )}
                    
                

            </View>
        </View>

    );
}
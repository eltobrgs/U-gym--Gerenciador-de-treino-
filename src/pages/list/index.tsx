import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { Input } from "../../components/Input";
import { Ball } from "../../components/ball";
import { Flag } from "../../components/flag";
import { MaterialIcons } from "@expo/vector-icons";
import { temas } from "../../global/temas";

type PropCard = {
    item: number,
    title: string,
    description: string,
    muscleGroup: string,
    equipment: string,
    difficulty: string,
    duration: string,
    tips: string
};


const data: Array<{
    item: number,
    title: string,
    description: string,
    muscleGroup: string,
    equipment: string,
    difficulty: string,
    duration: string,
    tips: string
}> = [
    {
        item: 1,
        title: "Supino Reto",
        description: "Exercício para peitoral",
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
        muscleGroup: "Pernas e Glúteos",
        equipment: "Barra e pesos",
        difficulty: "Avançado",
        duration: "4 séries de 10 repetições",
        tips: "Certifique-se de manter a coluna reta e os joelhos alinhados aos pés.",
    },
    {
        item: 3,
        title: "Remada Curvada",
        description: "Exercício para dorsais",
        
        muscleGroup: "Dorsais",
        equipment: "Barra ou halteres",
        difficulty: "Intermediário",
        duration: "3 séries de 10 repetições",
        tips: "Evite curvar a coluna durante o movimento; mantenha o core ativado.",
    },
    {
        item: 4,
        title: "Rosca Direta",
        description: "Exercício para bíceps",
        
        muscleGroup: "Bíceps",
        equipment: "Halteres ou barra",
        difficulty: "Iniciante",
        duration: "3 séries de 15 repetições",
        tips: "Controle o movimento tanto na subida quanto na descida do peso.",
    },
    
];


export default function List() {
    const _renderCard = (item:PropCard, index: number) => {
        return (
            <TouchableOpacity>
                <View style={style.card}>
                    <View style={style.rowCard}>
                        <View style={style.rowCardLeft}>
                            <Ball color={temas.cores.primaria} />
                            <View>
                                <Text style={style.titleCard}>{item.title}</Text>
                                <Text style={style.descriptionCard}>{item.description}</Text>
                                <Text style={style.descriptionCard}></Text>
                            </View>
                        </View>
                        <Flag 
                            caption={item.difficulty} 
                            color={temas.cores.primaria} 
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }



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
                {/* {data?.length > 0 && (
                    data.map((item: any, index: number) => {
                        return <Text key={index}>{item.title}</Text>;
                    })
                )}
                     */}
                
                <FlatList
                data={data}
                style={{marginTop: 40, paddingHorizontal: 30,}}
                keyExtractor={(item, index) => item.item.toString()}
                renderItem={({ item, index }) => _renderCard(item, index)}
                />
            </View>
        </View>

    );
}
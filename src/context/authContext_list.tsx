import React, { createContext, useContext, useEffect } from "react";
import { Alert, Dimensions, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Modalize } from "react-native-modalize";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import { Input } from "../components/Input";

export const authContextList = createContext({});


export const AuthProvider_list = (props: any):any => {
    const modalizeRef = React.useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    useEffect(() => {
        onOpen();
    }, []);

    const _container = () => {
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <TouchableOpacity>
                        <MaterialIcons name="close" style={{fontSize: 30}}/>
                    </TouchableOpacity>
                    <Text style={style.title}>Criar Tarefa</Text>
                    <TouchableOpacity>
                        <AntDesign name="check" style={{fontSize: 30}}/>
                    </TouchableOpacity>
                </View>
                <View style={style.content}>
                    <Input
                    title="Título:"
                    labelStyle={{fontSize: 12}}

                    />
                    <Input
                    title="Descrição:"
                    labelStyle={{fontSize: 12}}
                    height={100}
                    multiline={true}
                    numberOfLines={6}

                    />

                    <View style={{width:'40%'}}>
                        <Input
                        title="Tempo Limite:"
                        placeholder="Horas"
                        labelStyle={{fontSize: 12}}
                        keyboardType="numeric"
                        />
                    </View>
                
                    <View style={style.containerFlag}>
                        <Text style={style.label}>Flags:</Text>
                        <View style={{}}></View>
                    </View>
                </View>
            </View>
        )
      };
      

    return (
        <authContextList.Provider value={{onOpen}}>
            {props.children}
            <Modalize 
            ref={modalizeRef}
            childrenStyle={{height: Dimensions.get('window').height / 1.5}}
            adjustToContentHeight={true}
            >
                {_container()}
            </Modalize>
        </authContextList.Provider>
    );
};

export const useAuth = () => useContext(authContextList);


export const style = StyleSheet.create({
    container:{
        width: '100%',
    },

    header:{
        width: '100%',
        height: 40,
        paddingHorizontal: 40,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title:{
        fontSize: 20,
        fontWeight: 'bold',

    },
    content:{
        width: '100%',
        paddingHorizontal: 40,
        marginTop: 20,
    },
    containerFlag:{
        width: '100%',
        padding: 20,
    },
    label:{

    }

});
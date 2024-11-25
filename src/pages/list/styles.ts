import { StyleSheet,Dimensions} from "react-native";
import { temas } from "../../global/temas";


export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        // justifyContent:'center'
    },
    header:{
        width:'100%',
        height:Dimensions.get('window').height/5.5,
        backgroundColor:temas.cores.primaria,
        // alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
        borderRadius:15
        
    },
    greeting:{
        fontSize:20,
        color:'#FFF',
        marginTop:20
    },
    boxInput:{
        width:'80%'
    },
    boxList:{
        flex:1,
        width:'100%',
        // backgroundColor:'red'
    },
    card:{
        width:'100%',
        minHeight:60,
        backgroundColor:'#FFF',
        marginTop:6,
        borderRadius:10,
        justifyContent:'center',
        padding:10,
        borderWidth:1,
        borderColor:temas.cores.primaria
    },
    rowCard:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    titleCard:{
        fontSize:16,
        fontWeight:'bold'
    },
    descriptionCard:{
        color:temas.cores.gray
    },
    rowCardLeft:{
        width:'70%',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },
    Button: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        marginVertical: 10,
        borderRadius: 10,
    },
    ButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    
    
})
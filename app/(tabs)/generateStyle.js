import { StyleSheet } from "react-native";


const generateStyle = StyleSheet.create({

    mainContainer:{
        flex:1,
        alignItems:"center",
    },
    
    sectionOne:{
        width:"100%",
        paddingBottom:"9%",
        // backgroundColor:"#004594",
        paddingHorizontal:"5%",
        // borderWidth:1
    },
    descContainer:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        marginVertical:10,
        // backgroundColor:"#004594",
        

    },textContainer:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        marginVertical:10,
        // backgroundColor:"#004594",
    },
    icons:{
        marginRight:5
    },
    
    descLabel:{
        alignItems:"center",
        // backgroundColor:"#004594",
       
    },

    descInput:{
        height: 45,
        borderWidth: 1,
        padding: 10,
        marginBottom:10,
        borderRadius:5,
        borderColor:"#A6A6A6",
        
      
    },
    
    textInput:{
       
        borderWidth: 1,
        padding: 10,
        marginBottom:10,
        borderRadius:5,
        borderColor:"#A6A6A6",
        
 

    },buttonsCont:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"flex-end",
        marginTop:"4%"
        // backgroundColor:"#004594",
        
        

    },clearButton:{
        marginRight:"5%",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:5,
        

    },genButton:{
        backgroundColor:"#25C196",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:5,
    },

    clearButtonText:{
        color:"white"
    },disableDL:{
        backgroundColor:"#79F4D2"
    },


// Section Two
    sectionTwo:{

        // backgroundColor:"#004594",
        flex:1,
        width:"100%",
        alignItems:"center",
       
       
        

    },ready:{

        width:"90%",
        // backgroundColor:"#1565C0",
        textAlign:"center",
        paddingVertical:15,
        // color:"white",
        borderRadius:5,
        marginTop:"5%"

    },qrContainer:{
        width:"90%",
        alignItems:"center",
        backgroundColor:"none"
        // backgroundColor:"#004594",

    },qr:{

        marginVertical:"10%"
        
    },actionBttn:{
        width:"100%",
        // backgroundColor:"#1565C0",
        flexDirection:"row",
        justifyContent:"center",
        borderRadius:5,
        paddingVertical:10,
        backgroundColor:"#004594",
    },
    addBttn:{
        backgroundColor:"red",
        flexDirection:"row",
        width:"35%",
        marginLeft:20,
        alignItems:"center",
        // justifyContent:"center",
        borderRadius:5,
        backgroundColor:"#25C196"
     

    },dlBttn:{
        flexDirection:"row",
        width:"35%",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:7,
        borderRadius:5,
        backgroundColor:"#1565C0"


    },dlBttn_label:{
        // color:"white"
    },dlIcon:{
        marginTop:2,
        marginRight:12,
    },addIcon:{
        marginRight:12,
        marginLeft:30,
        
    },
    
    addBttn_label:{
        color:"white"

    },dlBttn_label:{
        color:"white"
    }




})


export {generateStyle}
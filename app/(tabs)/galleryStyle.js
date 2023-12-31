import { StyleSheet } from "react-native";


const galleryStyle = StyleSheet.create({

    mainContainer:{
        flex:1,
        alignItems:"center"

    },sectionOne:{
        width:"90%",
        textAlign:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
     
        
        // marginTop:"7%",
    },title:{
    
    
    },bttnCont:{
        flexDirection:"row",
        width:"15%",
        justifyContent:"space-between"
    },
    
    listBttn:{
   
    },sortBttn:{
       
    },
    qrSize:{
        flexDirection:"row",
        alignItems:"center",
        

    },sizeInput:{
        backgroundColor:"#E6E6E6",
        width:"40%",
        textAlign:"center",
        marginLeft:"5%",
        paddingHorizontal:8,
        paddingVertical:5,
        // borderRadius:5
        borderRadius:5

    }  ,
    qrAction:{
        backgroundColor:"none",
        flexDirection:"row",
        width:50,
        justifyContent: 'space-between',

    },
    qrGallery:{
        width:"90%",
        // borderWidth:1,
        marginTop:20

    },qrItem:{
        flexDirection:"row",
        alignItems:"center",
        // borderWidth:1,
        paddingHorizontal:15,
        paddingVertical:15,
        backgroundColor:"#EFEFEF",
        marginTop:"2%",
        borderStartWidth:4,
        borderStartColor:"#25C196",
        borderRadius:5
        // borderBottomWidth:1,
        // borderBottomColor:"#E6E6E6"

        
  

      
    },qrEven:{

        backgroundColor:"#E2F5FF",
        borderStartWidth:4,
        borderStartColor:"#2FA0D8"
        
    },qrOdd:{
        backgroundColor:"#E4FFF2",
        
        // backgroundColor:"#FAFAFA",
        

    },

    qrDesc:{
        // borderWidth:1,
        backgroundColor:"none",
        width:"75%",
        marginLeft:10
    },


    bttnListCont:{
        position:"absolute",
        // borderWidth:1,
        right:1,
        paddingVertical:20,
        paddingHorizontal:10,
        borderRadius:5,

        shadowColor: '#171717',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    bttn1:{
       
        paddingHorizontal:10,
        paddingVertical:5,
        marginBottom:5
    },
    bttn2:{
        
        paddingHorizontal:10,
        paddingVertical:5,
    },


    centeredView:{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        flex: 1,

        alignItems: 'center',
        marginTop: 22,
    },

    backIconCont:{
        width:"100%",
        backgroundColor: 'none',
    
        paddingVertical:10,
        paddingHorizontal:20

    },

    modalView:{
  
        backgroundColor: 'none',
        alignItems:"center",
        width:"80%",
        height:"80%",
        marginTop:20
    },

    qrCodeModal:{
        backgroundColor:"white",
        padding:20
    },

    qrCodeModal:{
        backgroundColor:"white",
        padding:20
    },

    modalValue:{
        color:"white",
        width:"85%",
        marginTop:10
    },

    modalButton:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:"none"
        
    },

    modalButtonDL:{

        width:"35%",
        backgroundColor:"#1565C0",
        paddingVertical:15,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        marginRight:10
        

    },
    modalButtonDel:{
        width:"35%",
        backgroundColor:"red",
        paddingVertical:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5

    },

    modalButtonDLLabel:{
        color:"white"
    },
    modalButtonDelLabel:{
        color:"white"
    },

})

export {galleryStyle}
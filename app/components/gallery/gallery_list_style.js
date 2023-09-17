import { StyleSheet } from "react-native";


const gallery_list_style = StyleSheet.create({

        sectionOne:{
            width:"100%",
            textAlign:"center",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
         
     
        
        // marginTop:"7%",
         },

         bttnCont:{
            flexDirection:"row",
            // width:"15%",
            // justifyContent:"space-between",
            
        },

        title:{
        
        
        },
        listBttn:{
    
        },sortBttn:{
            
        },

        // SOrt Button

        bttnListCont:{
            backgroundColor:"white",
            position:"absolute",
            // borderWidth:1,
            right:1,
            top:40,
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
        qrItem:{
            flexDirection:"row",
            alignItems:"center",
            // borderWidth:1,
            paddingHorizontal:15,
            paddingVertical:15,
            backgroundColor:"#EFEFEF",
            marginTop:"4%",
            // borderStartWidth:4,
            // borderStartColor:"#25C196",
            borderRadius:5
        },

        qrDesc:{
            // borderWidth:1,
            backgroundColor:"none",
            width:"75%",
            marginLeft:20
        },


        // Modal

        centeredView:{
            // backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backgroundColor:"white",
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
            // color:"white",
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


export {gallery_list_style};

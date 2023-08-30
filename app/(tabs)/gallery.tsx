import { StyleSheet, TouchableOpacity,FlatList, Image, ImageBackground, Modal, PixelRatio } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import {galleryStyle} from './galleryStyle';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';
import React, { useRef, useState } from 'react';
import ViewShot, { captureRef } from 'react-native-view-shot';
import * as MediaLibrary from "expo-media-library";

export default function TabTwoScreen() {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedQR, setSelectedQR] = useState<any | null>(null);

  const qrData = [

    {id: '1', value:"QRCodeValue12", description:"Description 1",dates: new Date("2023-08-10")},
    {id: '2', value:"QRCodeValue2", description:"Description 2",dates: new Date("2023-09-10")},
    {id: '3', value:"QRCodeValue3", description:"Description 3",dates: new Date("2023-10-10")},
    {id: '4', value:"QRCodeValue4", description:"Description 4",dates: new Date("2023-11-10")},
    {id: '5', value:"QRCodeValue5", description:"Description 5",dates: new Date("2023-12-10")},
  ];

  
  const [sortedData, setSortedData] = useState(qrData)
  const [ascending, setAscending] = useState(true);
  const [ascendingDate, setAscendingDate] = useState(true);
  const [showButtons, setShowButtons] = useState(false);

  const viewShotRef = useRef(null);

  const downloadToast = async () => {
    //function to make Toast With Duration And Gravity

    const targetPixelCount = 1080;
    const pixelRatio = PixelRatio.get();
    const pixels = targetPixelCount / pixelRatio;


    if (viewShotRef.current) {
        const uri =  await captureRef(viewShotRef.current,{
  
          format:'png',
          quality:1,
          height: pixels,
          width: pixels,
          
        });
  
        const asset = await MediaLibrary.createAssetAsync(uri);
  
        console.log('QR Code PNG image saved:', asset.uri);
  
  
      }


    // ToastAndroid.showWithGravity(
    //   'Saved to gallery.',
    //   ToastAndroid.SHORT, //can be SHORT, LONG
    //   ToastAndroid.CENTER //can be TOP, BOTTON, CENTER
    // );
  };


    // Sort Data Function

    const toggleSorting = () =>{

      setAscending(!ascending);
  
      const sortedArray = [...sortedData].sort((a:any,b:any) =>
      
      ascending ? a.value.localeCompare(b.value) :
      b.value.localeCompare(a.value)
  
      );
      setSortedData(sortedArray);
      setShowButtons(!showButtons);
    }
  
    const toggleSortingDate = () =>{
      console.log("hello");
      setAscendingDate(!ascendingDate);
  
      const sortedArray = [...sortedData].sort((a:any,b:any) =>
      
      ascendingDate ? a.dates-b.dates :
      b.dates-a.dates
  
      );
      setSortedData(sortedArray);
      setShowButtons(!showButtons);
    }


      // Render Button List

  const toggleButtonList = () => {
    setShowButtons(!showButtons);
  };

  const renderButtonList = () => {
    if (showButtons) {
      return (
        <View style={galleryStyle.bttnListCont}>

          <TouchableOpacity style={galleryStyle.bttn1} onPress={toggleSorting}>
            <Text>Description</Text>
          </TouchableOpacity>

          <TouchableOpacity style={galleryStyle.bttn2} onPress={toggleSortingDate}>
            <Text>Date</Text>
          </TouchableOpacity>
          {/* Add more buttons as needed */}
        </View>
      );
    } else {
      return null;
    }
  };


  const renderQR = ({item, index}:{item:any, index:number}) => {
    const itemStyle = index % 2 === 0 ? galleryStyle.qrOdd : galleryStyle.qrEven;

    return(


    <TouchableOpacity  
            style = {[galleryStyle.qrItem, itemStyle]}
            onPress={() => {
              setModalVisible(true);
              setSelectedQR(item);}}
            > 
        <QRCode value ={item.value} size={30}/>
        
        <View  style = {galleryStyle.qrDesc}>
            <Text> {item.id} </Text>
            <Text> {item.value} </Text>
            <Text>{item.dates.toDateString()}</Text>
        </View>  

        <View style = {galleryStyle.qrAction}>
            <TouchableOpacity>
                <Ionicons name='download-outline' size={18} color="#737373
                " />
            </TouchableOpacity>  
            <TouchableOpacity>
                <Ionicons name='trash-outline' size={18} color="#737373" />
            </TouchableOpacity>  
        </View>  

        {selectedQR && ( 


<Modal
   animationType="slide"
   transparent={true}
   visible={modalVisible}
   onRequestClose={() => {
   setModalVisible(!modalVisible);
}}>


<View style = {galleryStyle.centeredView}>

 <TouchableOpacity style= {galleryStyle.backIconCont} onPress={ ()=> setModalVisible(!modalVisible)}>

     <Ionicons name='arrow-back-outline' size={20} color="white" />

 </TouchableOpacity>

 <View style={galleryStyle.modalView}>

   <View style={galleryStyle.qrCodeModal}>

   <ViewShot 
        ref={viewShotRef} 
        options={{ format: 'png', quality: 1 }}
    >
     <View style={{backgroundColor:"white", padding:20}}>

         <QRCode 
         value ={selectedQR.value}
         size={200}
         />

     </View>

   </ViewShot>

   </View>
     <Text style={galleryStyle.modalValue}>{selectedQR.value}</Text>
     <Text style={galleryStyle.modalValue}>{selectedQR.description}</Text>
   </View>

   <View style={galleryStyle.modalButton}>
       <TouchableOpacity style={galleryStyle.modalButtonDL} onPress={downloadToast}>
           <Text style={galleryStyle.modalButtonDLLabel}>Download</Text>
       </TouchableOpacity>

       <TouchableOpacity style={galleryStyle.modalButtonDel} >
         <Text style={galleryStyle.modalButtonDLLabel}>Delete</Text>
       </TouchableOpacity>
   </View>

</View>
</Modal>    
)}
          

               
   </TouchableOpacity> 

);

};




  return (
    
    <View style={galleryStyle.mainContainer}>
    

        <View style = {galleryStyle.sectionOne}>

            {/* <View style = {galleryStyle.qrSize}>
                <Text>Size: </Text>
                <TextInput
                    placeholder='Enter Size'
                    style = {galleryStyle.sizeInput}
                />
            </View> */}
           
                      
          <Text style = {galleryStyle.title}> QR Code</Text>

          <View style = {galleryStyle.bttnCont}>

           <TouchableOpacity style = {galleryStyle.listBttn} >
              <Ionicons name='list-outline' size={18}  />
            </TouchableOpacity>

            <TouchableOpacity style = {galleryStyle.sortBttn} onPress={toggleButtonList}>
              <Ionicons name='funnel-outline' size={18} />
            </TouchableOpacity>

          </View>
        </View>

        <View style = {galleryStyle.qrGallery}>


        <FlatList
            data={sortedData}
            renderItem={renderQR}
           
       />
        {renderButtonList()}
        </View>
    </View>
  );
}


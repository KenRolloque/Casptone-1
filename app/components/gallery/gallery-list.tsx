import * as React from 'react';
import { useState, useEffect,useRef } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Modal, } from 'react-native';
import axios from 'axios';
import QRCode from 'react-native-qrcode-svg';
import {gallery_list_style} from './gallery_list_style'
import ViewShot, { captureRef } from 'react-native-view-shot';
import Ionicons from '@expo/vector-icons/Ionicons';

const GalleryList = () => {

const [data, setData] = useState([]);
const [modalVisible, setModalVisible] = useState(false);
const [selectedQR, setSelectedQR] = useState<any | null>(null);
const viewShotRef = useRef(null);

const [ascending, setAscending] = useState(true);
const [ascendingDate, setAscendingDate] = useState(true);
const [showButtons, setShowButtons] = useState(false);
const [sortedData, setSortedData] = useState(data)

  useEffect(() => {
    fetchData();
  }, []);


  // Fetch Data from Database

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/events/');
      setData(response.data);
      setSortedData(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  // Delete 

  const deleteQR = async () => {

    try{
        const response = await axios.delete('http://127.0.0.1:8000/api/events/');

    }catch(error){


    }

  }
    
  //  Render Data
  const renderItem = ({item}:{item:any}) =>{
    return(
        <TouchableOpacity
            style ={gallery_list_style.qrItem}
            onPress={() => {
                setModalVisible(true);
                setSelectedQR(item);}}
        >

            <QRCode value ={item.value} size={40}/>

            <View style = {gallery_list_style.qrDesc}>
          
                <Text> {item.description}</Text>
                <Text
                    numberOfLines={1}
                > {item.url} </Text>
                <Text>{item.qr_date}</Text>
            </View>


    {/* MODAL  */}

    {selectedQR && ( 
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
    setModalVisible(!modalVisible);
    }}>


    <View style = {gallery_list_style.centeredView}>
        <TouchableOpacity style= {gallery_list_style.backIconCont} onPress={ ()=> setModalVisible(!modalVisible)}>
        <Ionicons name='arrow-back-outline' size={20} color="black" />

        </TouchableOpacity>

            <View style={gallery_list_style.modalView}>
            <View style={gallery_list_style.qrCodeModal}>

            <ViewShot 
                    ref={viewShotRef} 
                    options={{ format: 'png', quality: 1 }}
                >
                <View style={{backgroundColor:"white", padding:20, borderColor:"black", borderWidth:1}}>

                    <QRCode 
                    value ={selectedQR.url}
                    size={200}
                    />

                </View>

            </ViewShot>

            </View>
                <Text style={gallery_list_style.modalValue}>{selectedQR.url}</Text>
                <Text style={gallery_list_style.modalValue}>{selectedQR.description}</Text>
            </View>

            <View style={gallery_list_style.modalButton}>
                <TouchableOpacity style={gallery_list_style.modalButtonDL} >
                    <Text style={gallery_list_style.modalButtonDLLabel}>Download</Text>
                </TouchableOpacity>

                <TouchableOpacity style={gallery_list_style.modalButtonDel} >
                    <Text style={gallery_list_style.modalButtonDLLabel}>Delete</Text>
                </TouchableOpacity>
            </View>

        </View>
        </Modal>

            )}
        </TouchableOpacity>

        
    )
  }



    return (
    <View style={styles.container}>


      <View style = {gallery_list_style.sectionOne}>

                      
          <Text style = {gallery_list_style.title}> QR Code</Text>

        </View>


      <FlatList
            data={sortedData}
            keyExtractor={item  => item.id}
            renderItem={renderItem}

        />
     
    </View>


  );
};

export default GalleryList;

const styles = StyleSheet.create({
  container: {}
});

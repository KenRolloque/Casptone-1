import { StyleSheet, TouchableOpacity,FlatList, Image, ImageBackground, Modal, PixelRatio } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import {galleryStyle} from './galleryStyle';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';
import React, { useRef, useState, useEffect } from 'react';
import ViewShot, { captureRef } from 'react-native-view-shot';
import * as MediaLibrary from "expo-media-library";
import axios from 'axios';


import GalleryList from '../components/gallery/gallery-list';

export default function TabTwoScreen() {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedQR, setSelectedQR] = useState<any | null>(null);


  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  // Fetch Data from Database
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/events/');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
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
           
                      
   

         

        </View>

        <View style = {galleryStyle.qrGallery}>
        <GalleryList/>


        </View>
    </View>
  );
}


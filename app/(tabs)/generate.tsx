import { StyleSheet,TextInput, TouchableOpacity,ImageBackground } from 'react-native';
import { generateStyle} from "./generateStyle";
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';

export default function TabTwoScreen() {

    const [desc, setDesc] = useState("");
    const [inputText, setinputText] = useState("");

    // Boolean
    const [shouldShow, setShouldShow] = useState(false);
    const [isDisabled, setisDisabled] = useState(false);

    const handleChangeText = (text:any) => {

        setinputText (text);
        setShouldShow(false);
    }

    const handleGenerateQRCode = () => {

        if (inputText ===""){
            
        }else{
            setShouldShow(true); // Show the QR code when the "Generate" button is pressed
        }
      
    };

  return (

    // Main Container
    
    <View style = {generateStyle.mainContainer}>

    {/* Section One */}

        <View style = {generateStyle.sectionOne}>

            <View style = {generateStyle.descContainer}>
                <FontAwesome style =  {generateStyle.icons}  name="font" size={16} color="#25C196" />
                <Text style = {generateStyle.descLabel}> Description </Text>
            </View>

            <TextInput
                multiline
                placeholder='Enter Description'
                value={desc}
                style={generateStyle.descInput}

            />

            <View style = {generateStyle.textContainer}>
                <FontAwesome style =  {generateStyle.icons} name="file" size={16} color="#25C196" />
                <Text style = {generateStyle.descLabel}> Text </Text>
            </View>
            <TextInput
                multiline
                onChangeText={handleChangeText}
                value={inputText}
                placeholder='Enter Text'
                style={generateStyle.textInput}
            />

            <View style = {generateStyle.buttonsCont}>

                    <TouchableOpacity 
                    style = {[generateStyle.clearButton]}
                    disabled = {inputText.trim() === ''}

                    >
                        <Text >Clear</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity 
                        style = {[generateStyle.genButton, inputText.trim() === "" && generateStyle.disableDL]} onPress={handleGenerateQRCode}
                         disabled = {inputText.trim() === ''}>
                        <Text style = {generateStyle.clearButtonText}>Generate</Text>
                    </TouchableOpacity>
        
            </View>
        </View>




        {/* Section Two */}

        {shouldShow ? (


    <ImageBackground style = {generateStyle.sectionTwo} source={require('../../assets/images/stacked-peaks-haikei.jpg')}>
        
               
           <Text style ={generateStyle.ready}> Your QR Code is Ready</Text>

           <View style ={generateStyle.qrContainer}>

              <View style={generateStyle.qr}>
                    <QRCode value ={inputText} size={200}/>
               </View>

                <View style ={generateStyle.actionBttn}>
                   
                     <TouchableOpacity style ={generateStyle.dlBttn}>
                         <Ionicons  style ={generateStyle.dlIcon} name='arrow-down-circle-outline' size={18} color="white" />
                         <Text style ={generateStyle.dlBttn_label}> Download</Text>
                     </TouchableOpacity>

                     <TouchableOpacity style ={generateStyle.addBttn}>
                         <Ionicons  style ={generateStyle.addIcon} name='add-circle-outline' size={18} color="white"/>
                         <Text style ={generateStyle.addBttn_label}> Add</Text>
                     </TouchableOpacity>

                 </View>
                
             </View> 

        {/* </View> */}

        </ImageBackground>    

    ):null} 
    </View>
  );
}


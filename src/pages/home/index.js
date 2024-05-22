import {React, useState, useEffect} from "react";
import { 
    View, 
    Text,
    Image,
    TouchableOpacity
 } from "react-native";
 import styles from "./styles";

import app from "../../config/firebaseconfig";
import { getDatabase, ref, get } from "firebase/database";

export default function Home(){
    const [speed, setSpeed] = useState(0);
    
    useEffect(()=>{
        const fetchData = async () => {
            const db = getDatabase(app);
            const dbref = ref(db, "ECG/nReal");
            let snapShot;    
            try {
                snapShot = await get(dbref);
                setSpeed(snapShot.val())
            } catch (err) {
                alert("Error")            
            }
        }

        fetchData();

        const intervalId = setInterval(fetchData, 1000);

        return () => clearInterval(intervalId);
    
    }, []);

    return(
        <View style={styles.container}>
            <Image
                style={{ width: 300, height: 150 }}
                source={require('../../../assets/semicircle.png')}               
            />
            <Text style={styles.numeroResult}>{speed}</Text>
        </View>
    )
}
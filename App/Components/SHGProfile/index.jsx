import { Text,View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import Form from "../Home/Form";

export default function SHGProfile() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("http://10.11.53.8:5000/fetchSHG");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
        <View>
            <Text>{data[0].SHG_Name}</Text>
            <Text>{data[0].SHG_ID}</Text>
        </View>
      
    </>
  );
}

import { Text } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SHGBookkeeping() {
  const [shgData, setShgData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("http://10.11.53.8:5000/fetchSHG");
        setShgData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Text>SHG Bookkeeping123</Text>
    </>
  );
}

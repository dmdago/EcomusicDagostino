import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import db from "../../utils/firebase";

export const FirebaseComponent = () => {
  useEffect(() => {
    const getData = async () => {
      const query = collection(db, "products");
      const response = await getDocs(query);
      const dataItems = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
    };
    getData();
  }, []);
  return <p>Firebase Component</p>;
};

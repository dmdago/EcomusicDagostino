import { collection, getDocs } from "firebase/firestore";
import db from "../utils/firebase";

export const getProducts = async () => {
  const query = collection(db, "products");
  const response = await getDocs(query);
  return response.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
};

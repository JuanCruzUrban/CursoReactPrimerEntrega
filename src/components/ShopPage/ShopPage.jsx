import React from "react";
import "../ShopPage/ShopPage.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import "../MessageSucess/MessageSucess"
import MessageSucess from "../MessageSucess/MessageSucess";

const initialState = {
  name: "",
  lastName: "",
  city: "",
};

const ShopPage = () => {
  const [values, setValues] = useState(initialState);

  const [purchaseID, serPurchaseID] = useState();

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "Pucharses"), {
      values,
    });
    setValues(initialState);
    serPurchaseID(docRef.id);
  };

  return (
    <div className="Shopcar">
      <h1>ShopPage</h1>
      <form className="ShopForm" onSubmit={handleOnSubmit}>
        <TextField
          className="textF"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleOnChange}
          required
        />
        <TextField
          className="textF"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleOnChange}
          required
        />
        <TextField
          className="textF"
          placeholder="City"
          name="city"
          value={values.city}
          onChange={handleOnChange}
          required
        />
        <button>Enviar</button>
      </form>
      {purchaseID && <MessageSucess purchaseID={purchaseID}/>}
    </div>
  );
};

export default ShopPage;

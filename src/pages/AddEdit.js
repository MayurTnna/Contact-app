import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/scss/addEdit.scss";
import { fireDb } from "../firebase";
import { toast } from "react-toastify";
import { onValue, ref, set } from "firebase/database";

const AddEdit = () => {
  const [state, setState] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const contactsRef = ref(fireDb, `contacts/${id}`);
    onValue(contactsRef, (snapshot) => {
      const data = snapshot.val();
      setState(data || {});
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmitChange = async (e) => {
    e.preventDefault();
    const { name, email, contact } = state;

    if (!name || !email || !contact) {
      toast.error("Please fill all the fields!");
    } else {
      const dbRef = ref(fireDb, `contacts/${id}`);
      try {
        await set(dbRef, state);
        toast.success("Contact updated!"); // Display success message on successful submission
        navigate("/home");
      } catch (error) {
        console.error(error);
        toast.error("Failed to update the contact. Please try again later!");
      }
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmitChange}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={state.name || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          value={state.email || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Your contact"
          value={state.contact || ""}
          onChange={handleInputChange}
        />
        <input
          className="submitButton"
          type="submit"
          value={id ? "update" : "save"}
        />
      </form>
    </div>
  );
};

export default AddEdit;

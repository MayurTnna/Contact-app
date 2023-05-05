import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";
import "../assets/scss/home.scss";
import { ref, onValue, remove } from "firebase/database";
import { fireDb } from "../firebase";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const contactsRef = ref(fireDb, "contacts");
    onValue(contactsRef, (snapshot) => {
      const data = snapshot.val();
      setData(data || {});
    });
  }, []);

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      const contactRef = ref(fireDb, `contacts/${id}`);
      remove(contactRef)
        .then(() => {
          toast.success("Contact deleted successfully");
        })
        .catch((error) => {
          toast.error("Error deleting contact: " + error.message);
        });
    }
  };

  return (
    <>
      <div className="home-main">
        <table className="styled-table">
          <thead>
            <tr>
              <th className="head-item">No.</th>
              <th className="head-item">Name</th>
              <th className="head-item">Email</th>
              <th className="head-item">Contact</th>
              <th className="head-item">Action</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((id, index) => {
              return (
                <tr key={id}>
                  <th>{index + 1}</th>
                  <td>{data[id].name}</td>
                  <td>{data[id].email}</td>
                  <td>{data[id].contact}</td>
                  <td>
                    <Link to={`/update/${id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => onDelete(id)}
                    >
                      Delete
                    </button>
                    <Link to={`/view/${id}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;

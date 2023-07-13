// AdminPanel.js
// AdminPanel.js
// AdminPanel.js
// AdminPanel.js
// AdminPanel.js
// AdminPanel.js
import React, { Component, useEffect, useState,} from 'react';
import app from "../public/firebaseconfig";

import { getDatabase, ref, get, set, onValue, update } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { text } from '@fortawesome/fontawesome-svg-core';

const AdminPanel = () => {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [DATA, setDATA] = useState({});
  const [submitValues, setSubmitValues] = useState({});
  const [inputValues, setInputValues] = useState({});

const [inputData,setinputadta]=useState("");

  

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  async function fetchData() {
    try {
      const response = await fetch('https://mun-2023-default-rtdb.firebaseio.com/preferences.json');
      const data = await response.json();
      
      setDATA(data)
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
//   useEffect(() => {
//  fetchPreferencesData()
//   }, [isLoggedIn]);
  const handleLogin = () => {
    if (password === "SHIVANSHUMUN") {
      async function fetchData1() {
        try {
          await fetchData(); // Wait for the first command to complete
          setIsLoggedIn(true); // Execute the second command after the first one is finished
          // Any other code that depends on the completion of both commands
        } catch (error) {
          // Handle errors if necessary
        }
      }
      
      
        
      
      // Functional component
     
        fetchData1();
    
    } else {
      alert("Incorrect password");
    }
  };
  

  const handleOptionChange = (event, itemId) => {
    const { value } = event.target;
    setSubmitValues((prevValues) => ({
      ...prevValues,
      [itemId]: value,
    }));
  };
  const handleinputChange = (event) => {
    const  value  = event.target.value;
    setInputValues(
       value
    )
  };
  const handleInput = (itemId) => {
    console.log("Inside handleSubmit");
    const database = getDatabase();
    const itemRef = ref(database, `preferences/${itemId}`);
    update(itemRef, { alloted: inputValues })
      .then(() => {
        setTimeout(() => {
          alert("Allotted successfully");
        }, 300);
      })
      .catch((error) => {
        console.log("Error updating value:", error);
      });
  };





  const handleSubmit = (itemId) => {
    console.log("Inside handleSubmit");
    const database = getDatabase();
    const itemRef = ref(database, `preferences/${itemId}`);
    update(itemRef, { alloted: submitValues[itemId] })
      .then(() => {
        setTimeout(() => {
          alert("Allotted successfully");
        }, 300);
      })
      .catch((error) => {
        console.log("Error updating value:", error);
      });
  };

  const filteredData = Object.keys(DATA).reduce((filtered, itemId) => {
    const item = DATA[itemId];
    if (item.alloted === "NO") {
      filtered.push({ itemId, ...item });
    }
    return filtered;
  }, []);

  if (!isLoggedIn) {
    return (
      <div>
        <h1 className='mb-5 text-center font-bold'>ADMIN PANEL MUN IIT BHU</h1>
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter password" className="text-center font bold mx-auto my-3 block" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto rounded block" onClick={handleLogin}>
          Login
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className='mb-5 text-center font-bold'>ADMIN PANEL MUN IIT BHU</h1>
        <h2 className="text-red-500 font-bold text-center my-4">Allotment of preferences for delegates</h2>
        {filteredData.map(({ itemId, ...item }) => (
          <div key={itemId}>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 font-bold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(event) => handleOptionChange(event, itemId)}>
              {Object.keys(item).map((key) => {
                if (key !== "alloted") {
                  return (
                    <option className="font-bold" key={key} value={item[key]}>
                      {item[key]}
                    </option>
                  );
                }
               
              })}
            </select>
            <button className="bg-transparent ml-4 mx-auto 'block' hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 my-4 border border-blue-500 hover:border-transparent rounded" onClick={() => handleSubmit(itemId)}>Allot!</button>
           <input type="text" placeholder='Input the different choice you want to give!' onChange={(event) => handleinputChange(event, itemId)} ></input>
                         
            <button className="bg-transparent ml-4 mx-auto 'block' hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 my-4 border border-blue-500 hover:border-transparent rounded" onClick={() => handleInput(itemId)}>Allot!</button>
         
         
          </div>
        ))}
      </div>
    );
  }
};

export default AdminPanel;
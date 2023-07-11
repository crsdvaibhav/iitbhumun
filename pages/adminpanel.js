// AdminPanel.js

import React, { useEffect, useState } from 'react';
import app from "../public/firebaseconfig";
import 'firebase/database';
import { getDatabase, ref, set, onValue,update } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const AdminPanel = () => {
  const [DATA, setDATA] = useState([]);
  const [submitValues, setSubmitValues] = useState({});

  useEffect(() => {
    const database = getDatabase();
    const Ref1 = ref(database, "preferences/");
    onValue(Ref1, (snapshot) => {
      const data = snapshot.val();
      setDATA(data);
    });
  }, []);

  const handleOptionChange = (event, itemId) => {
    const { value } = event.target;
    setSubmitValues((prevValues) => ({
      ...prevValues,
      [itemId]: value,
    }));
  };

  const handleSubmit = (itemId) => {
    const database = getDatabase();
    const itemRef = ref(database, `preferences/${itemId}`);
    update(itemRef, { alloted: submitValues[itemId] })
      .then(() =>  setTimeout(() => {
        alert("Allotted successfully");
      }, 500))
      .catch((error) => console.error("Error updating value:", error));
  };

  const filteredData = Object.entries(DATA).reduce((filtered, [itemId, item]) => {
    if (item.alloted === "NO") {
      filtered[itemId] = item;
    }
    return filtered;
  }, {});

  return (
    <div>
      <h1 className='mb-5 text-center font-bold'>ADMIN PANEL MUN IIT BHU</h1>
<h2 className="text-red-500 font-bold text-center my-4" >Allotment of preferences for delegates</h2>
      {Object.entries(filteredData).map(([itemId, item]) => (
        <div key={itemId}>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 font-bold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(event) => handleOptionChange(event, itemId)}>
            {Object.keys(item).map((key) => {
              if (key !== "alloted") {
                return (
                  <option className="font-bold"key={key} value={item[key]}>
                    {item[key]}
                  </option>
                );
              }
              return null;
            })}
          </select>
          <button className="bg-transparent ml-4 mx-auto 'block' hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 my-4 border border-blue-500 hover:border-transparent rounded" onClick={() => handleSubmit(itemId)}>Allot!</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;

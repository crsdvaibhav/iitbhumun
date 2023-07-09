
// import React, { useEffect, useState } from "react";
// import { getAuth } from "firebase/auth";
// import { getDatabase, ref, get, onValue } from "firebase/database";
// import Footer from "../components/Footer";
// import NavBar from "../components/Navbar";
// import app from "../public/firebaseconfig";
// const Loggedinhomepage = () => {
//   const database = getDatabase();
//   const auth = getAuth();
//   const [finaldata, setFinalData] = useState([]);
//   const [isLoading, setLoad] = useState(true);
//   const userEmail = auth.currentUser ? auth.currentUser.email : "shivanshu264@gmail.com";

//   // Function to filter data based on user email
//   const filterDataByUserEmail = (data) => {
//     const filteredData = Object.values(data).filter((item) => {
//       const delegateData = Object.values(item);
//       return delegateData.some((nestedItem) => {
//         return nestedItem.email === userEmail;
//       });
//     });
//     return filteredData;
//   };

//   // Function to fetch data from the database
//   const fetchData = async () => {
//     try {
//       const Ref1 = ref(database, "records of Conference ambassadors/");
//       const snapshot1 = await get(Ref1);
//       const data1 = snapshot1.val();
//       const filteredData1 = filterDataByUserEmail(data1);

//       const Ref2 = ref(database, "records of single delegates/");
//       const snapshot2 = await get(Ref2);
//       const data2 = snapshot2.val();
//       const filteredData2 = filterDataByUserEmail(data2);

//       setFinalData([...filteredData1, ...filteredData2]);
      
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchData()
//     .then(() =>
//     setLoad(false)
//     );
//    }, [])

//   if (isLoading || finaldata.length === 0) {
//     return (
//       <>
//         <NavBar navbar={true} backgroundColor="white" qt="" />
//         <div className="h-25">This is loading...</div>
//         <Footer />
//       </>
//     );
//   } else {
//     return (
//       <>
//         <NavBar navbar={true} backgroundColor="white" qt="" />
//         <div className="my-50 text-center font-bold">
//           <h2 className="my-50 text-center font-bold">Record of this user:</h2>
//           {finaldata.map((item) => {
//             const delegateData = Object.values(item);
//             const nestedItem = delegateData.find((item) => item.email === userEmail);
//             if (nestedItem) { // Added null check for nestedItem
//               return (
//                 <div key={nestedItem.email} className="my-40 display:'block' m-auto text-center font-bold">
//                   <p>Name: {nestedItem.name}</p>
//                   <p>Age: {nestedItem.Age}</p>
//                   <p>Gender: {nestedItem.Gender}</p>
//                   <p>Email: {nestedItem.email}</p>
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </div>
//         <Footer />
//       </>
//     );
//   }
// };

// export default Loggedinhomepage;
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get, onValue } from "firebase/database";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import app from "../public/firebaseconfig";
const Loggedinhomepage = () => {
  const database = getDatabase();
  const auth = getAuth();
  let [finaldata, setFinalData] = useState([]);
  const [isLoading, setLoad] = useState(true);
  const userEmail = auth.currentUser ? auth.currentUser.email : "shivanshu264@gmail.com";

  // Function to filter data based on user email
  const filterDataByUserEmail = (data) => {
    const filteredData = Object.values(data).filter((item) => {
      const delegateData = Object.values(item);
      return delegateData.some((nestedItem) => {
        return nestedItem.email === userEmail;
      });
    });
    return filteredData;
  };

  // Function to fetch data from the database
  const fetchData = async () => {
    try {
      const Ref1 = ref(database, "records of Conference ambassadors/");
      const snapshot1 = await get(Ref1);
      const data1 = snapshot1.val();
      const filteredData1 = filterDataByUserEmail(data1);

      const Ref2 = ref(database, "records of single delegates/");
      const snapshot2 = await get(Ref2);
      const data2 = snapshot2.val();
      const filteredData2 = filterDataByUserEmail(data2);
      let DATA;
if(filteredData2>0){DATA=filteredData2}
else{DATA=filteredData1}
     
      setFinalData(DATA)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{fetchData()
    setLoad(false)},[finaldata])
    


  

  if(isLoading){
    console.log("loading.....")
    return (
      <><NavBar className="h-25 mb-72 text-center" navbar={true} backgroundColor="" qt="" />
       <div id="loading"className="h-screen font-bold py-25  mb-auto my-15 text-center">This is loading...</div>
        
       
        <Footer />
      </>
    );}
   else if(isLoading==false && finaldata.length > 0) {
    return (
      <>
        <NavBar navbar={true} backgroundColor="white" qt="" />
        <div className="my-50 text-center font-bold">
          <h2 className="my-50 text-center font-bold">Record of this user:</h2>
          {finaldata.map((item) => {
            const delegateData = Object.values(item);
            const nestedItem = delegateData.find((item) => item.email === userEmail);
            if (nestedItem) { // Added null check for nestedItem
              return (
                <div key={nestedItem.email} className="my-40 display:'block' h-screen m-auto text-center font-bold">
                  <p>Name: {nestedItem.name}</p>
                  <p>Age: {nestedItem.Age}</p>
                  <p>Gender: {nestedItem.Gender}</p>
                  <p>Email: {nestedItem.email}</p>
                </div>
              );
            }
            return(<div className="text-center h-screen mb-11 m-auto">KUCH NHI HAI</div>);
          })}
        </div>
        <Footer />
      </>
    );
  }
};

export default Loggedinhomepage;

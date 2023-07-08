import React,{ useEffect, useState } from "react"
import { getAuth,signOut } from "firebase/auth"
import { Database, getDatabase,db,ref,get,child,query,push,orderByChild,equalTo,once,onValue} from "firebase/database"
import app from "../public/firebaseconfig";
import Footer from "../components/Footer";
import NavBar from '../components/Navbar';
import Countdown from '../components/Countdown';




const Loggedinhomepage = () => {
    
const database=getDatabase();
const auth=getAuth();
let userEmail;
// if (auth.currentUser) {
//   userEmail = auth.currentUser.email;
// } else {
//   userEmail = "shivanshu264@gmail.com";
// }
 userEmail = auth.currentUser ? auth.currentUser.email : "shivanshu264@gmail.com";

const filterDataByUserEmail = (data) => {
  if (data) {
    const filteredData = Object.values(data).filter((item) => {
      const delegateData = Object.values(item);
      return delegateData.some((nestedItem) => {
        return nestedItem.email === userEmail;
      });
    });
    return filteredData;
  }
  return [];
};


  const [finaldata, setFinalData] = useState([""]);
  
 useEffect(() => {
    const fetchData = async () => {
      try {
       
        const Ref1 = ref(database, "records of Conference ambassadors/");
        const Ref2 = ref(database, "records of single delegates/");

        const [snapshot1, snapshot2] = await Promise.all([get(Ref1), get(Ref2)]);
        const data1 = snapshot1.val();
        const data2 = snapshot2.val();

        const filteredData1 = filterDataByUserEmail(data1);
        const filteredData2 = filterDataByUserEmail(data2);

        if (filterDataByUserEmail(data1).length > 0) {
                  setFinalData(filteredData1);}
                  if (filterDataByUserEmail(data2).length > 0) {
                    setFinalData(filteredData2);}
              
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };

    fetchData();
  }, [auth.currentUser, database]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const Ref1 = ref(database, "records of Conference ambassadors/");
//       const snapshot1 = await get(Ref1);
//       const data1 = snapshot1.val();
//       const filteredData1 = filterDataByUserEmail(data1);

//       if (filteredData1.length > 0) {
//         setData(filteredData1);
//       }

//       const Ref2 = ref(database, "records of single delegates/");
//       const snapshot2 = await get(Ref2);
//       const data2 = snapshot2.val();
//       const filteredData2 = filterDataByUserEmail(data2);

//       if (filteredData2.length > 0) {
//         setData(filteredData2);
//       }
//     } catch (error) {
//       // Handle error
//       console.error(error);
//     }
//   };

//   fetchData();
  
// }, []);















return(
  <>
  <NavBar navbar={true} backgroundColor="white" qt=''/>
  <div>
  <Countdown></Countdown>
  <div>
        <h2>Record of this user:</h2>
        {finaldata.map((item) => {
          const delegateData = Object.values(item);
          const nestedItem = delegateData.find(
            (item) => item.email === userEmail
          );
          if (nestedItem) {
            return (
              <div key={nestedItem.email}>
                <p>Name: {nestedItem.name}</p>
                <p>Age: {nestedItem.Age}</p>
                <p>Gender: {nestedItem.Gender}</p>
                <p>Email: {nestedItem.email}</p>
                {/* Render other properties as needed */}
              </div>
            );
            
          }
          return null;
        })}
      </div>


<Footer></Footer>
</div>
</>
) 
};
export default Loggedinhomepage;
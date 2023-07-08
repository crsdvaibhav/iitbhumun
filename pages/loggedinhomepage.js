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
if (auth.currentUser) {
  userEmail = auth.currentUser.email;
} else {
  userEmail = "shivanshu264@gmail.com";
}


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

const [ab,setstate]=useState(true)
  const [finaldata, setData] = useState([""]);
  
  
// useEffect(()=>
//  {let Ref1 = ref(database,"records of Conference ambassadors/");
// onValue(Ref1, snapshot => {
//  const data1=snapshot.val();
//  const filteredData1 = filterDataByUserEmail(data1);
//  if(filterDataByUserEmail(data1).length>0){
//  setData(filteredData1)}
// })

 
//    let Ref2 = ref(database,"records of single delegates/");
// onValue(Ref2, snapshot => {
//  const data2=snapshot.val();
//  const filteredData2 = filterDataByUserEmail(data2);
//  if(filterDataByUserEmail(data2).length>0){
//  setData(filteredData2)}
 

// })},[])
useEffect(() => {
  const fetchData = async () => {
    try {
      const Ref1 = ref(database, "records of Conference ambassadors/");
      const snapshot1 = await get(Ref1);
      const data1 = snapshot1.val();
      const filteredData1 = filterDataByUserEmail(data1);

      if (filteredData1.length > 0) {
        setData(filteredData1);
      }

      const Ref2 = ref(database, "records of single delegates/");
      const snapshot2 = await get(Ref2);
      const data2 = snapshot2.val();
      const filteredData2 = filterDataByUserEmail(data2);

      if (filteredData2.length > 0) {
        setData(filteredData2);
      }
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  fetchData();
  
}, []);
console.log(finaldata)














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
            
          }console.log("hello",finaldata)
          return null;
        })}
      </div>


<Footer></Footer>
</div>
</>
) 
};
export default Loggedinhomepage;
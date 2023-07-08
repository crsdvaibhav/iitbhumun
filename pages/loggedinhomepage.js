import React,{ useEffect, useState } from "react"
import { getAuth,signOut } from "firebase/auth"
import { Database, getDatabase,db,ref,get,child,query,push,orderByChild,equalTo,once,onValue} from "firebase/database"
import app from "../public/firebaseconfig";
import Footer from "../components/Footer";
import NavBar from '../components/Navbar';
import Countdown from '../components/Countdown';
import { AccordionBody } from "@material-tailwind/react";




const Loggedinhomepage = () => {
    
const database=getDatabase();
const auth=getAuth();
let userEmail;
const [code,newcode]=useState("")
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
  
};


  const [finaldata, setFinalData] = useState([]);
  
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
        setFinalData(filteredData1);
      }
      if (filterDataByUserEmail(data2).length > 0) {
        setFinalData(filteredData2);
      }
      
      
    } catch (error) {
      // Handle error
      console.error(error);
    }
    
      
      
      
  ;}
  
  







  



return(
  <>
  <NavBar navbar={true} backgroundColor="white" qt=''/>
  <div>
  
  <div>
        <h2 >Record of this user:</h2>
     
     
     {
     fetchData()&&
     finaldata.length>0&&finaldata.map((item) => {
      const delegateData = Object.values(item);
      const nestedItem = delegateData.find(
        (item) => item.email === userEmail
      )
     
        return (
          <div key={nestedItem.email}className="my-32">
            <p>Name: {nestedItem.name}</p>
            <p>Age: {nestedItem.Age}</p>
            <p>Gender: {nestedItem.Gender}</p>
            <p>Email: {nestedItem.email}</p>
            
          </div>
        )
        
      
      
    })
}
      </div>

     
<Footer></Footer>
</div>
</>
)
}

 
export default Loggedinhomepage;
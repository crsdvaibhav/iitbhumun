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
  
    const filteredData = Object.values(data).filter((item) => {
      const delegateData = Object.values(item);
      return delegateData.some((nestedItem) => {
        return nestedItem.email === userEmail;
      });
    });
    return filteredData;
  
  
};


  const [finaldata, setFinalData] = useState([]);
  
  function fetchData(){
    
      const Ref1 = ref(database, "records of Conference ambassadors/");
      const Ref2 = ref(database, "records of single delegates/");
  
      onValue(Ref1, (snapshot) => {const data1 = snapshot.val();
        const filteredData1 = filterDataByUserEmail(data1);
      if (filterDataByUserEmail(data1).length > 0) {
        setFinalData(filteredData1);
      }
      
    }
      )
      onValue(Ref2, (snapshot) => {const data2 = snapshot.val();
        const filteredData2 = filterDataByUserEmail(data2);
  
      
        if (filterDataByUserEmail(data2).length > 0) {
          setFinalData(filteredData2);
        }
      
      
      })   
      
  ;}
  
   







  

useEffect(()=>{fetchData()},[] )

return(
  <>
  <NavBar navbar={true} backgroundColor="white" qt=''/>
  <div>
  
  <div>
        <h2 >Record of this user:</h2>
     
     
     {
     
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
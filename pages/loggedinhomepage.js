import React,{ useEffect, useState } from "react"
import { getAuth,signOut } from "firebase/auth"
import { Database, getDatabase,db,ref,get,child,query,push,orderByChild,equalTo,once,onValue} from "firebase/database"
import { initfirebase } from './firebaseconfig';
import Footer from "../components/Footer";
import NavBar from '../components/Navbar';
import Countdown from '../components/Countdown';




const Loggedinhomepage = () => {
    const app=initfirebase;
const database=getDatabase();
const auth=getAuth();


const userEmail = auth.currentUser.email;
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
  
  
useEffect(()=>
 {let Ref1 = ref(database,"records of Conference ambassadors/");
onValue(Ref1, snapshot => {
 const data1=snapshot.val();
 const filteredData1 = filterDataByUserEmail(data1);
 if(filterDataByUserEmail(data1).length>0){
 setData(filteredData1)}
})},[]);
useEffect(()=>{
 
   let Ref2 = ref(database,"records of single delegates/");
onValue(Ref2, snapshot => {
 const data2=snapshot.val();
 const filteredData2 = filterDataByUserEmail(data2);
 if(filterDataByUserEmail(data2).length>0){
 setData(filteredData2)}
 

})},[])


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
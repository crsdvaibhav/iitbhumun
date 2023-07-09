
// import React, { Component } from "react";
// import { getAuth } from "firebase/auth";
// import { getDatabase, ref, get } from "firebase/database";
// import Footer from "../components/Footer";
// import NavBar from "../components/Navbar";
// import app from "../public/firebaseconfig";





// class Loggedinhomepage extends Component {
  
  
  




//   constructor(props) {
//     super(props);
//     this.state = {
//       finaldata: [],
//       isLoading: true,
//       userEmail: "",
//     };
//   }

//   componentDidMount() {
//     const database = getDatabase();
//     const auth = getAuth();
//     const userEmail = auth.currentUser ? auth.currentUser.email : "shivanshu264@gmail.com";

//     this.setState({ userEmail }, () => {
//       this.fetchData(database);
//     });
//   }

//   filterDataByUserEmail(data) {
//     const { userEmail } = this.state;
//     const filteredData = Object.values(data).filter((item) => {
//       const delegateData = Object.values(item);
//       return delegateData.some((nestedItem) => {
//         return nestedItem.email === userEmail;
//       });
//     });
//     return filteredData;
//   }

//   async fetchData(database) {
//     const Ref1 = ref(database, "records of Conference ambassadors/");
//     const snapshot1 = await get(Ref1);
//     const data1 = snapshot1.val();
//     const filteredData1 = this.filterDataByUserEmail(data1);

//     const Ref2 = ref(database, "records of single delegates/");
//     const snapshot2 = await get(Ref2);
//     const data2 = snapshot2.val();
//     const filteredData2 = this.filterDataByUserEmail(data2);

//     const finaldata = [...filteredData1, ...filteredData2];
//     const isLoading = false;
//     this.setState({ finaldata, isLoading });
//   }

//   render() {
//     const { finaldata, isLoading } = this.state;

//     if (isLoading || finaldata.length === 0) {
//       return (
//         <>
//           <NavBar navbar={true} backgroundColor="white" qt="" />
//           <div className=" ">This is loading...</div>
//           <Footer />
//         </>
//       );
//     } else {
//       return (
//         <>
          
//           <div>
          
//             <h2 className=" my-50 text-center font-bold">Record of this user:</h2>
//             {finaldata.map((item) => {
//               const delegateData = Object.values(item);
//               const nestedItem = delegateData.find((item) => item.email === this.state.userEmail);
//               if (nestedItem) {
//                 return (
//                   <div key={nestedItem.email} className="  font-bold text-center">
//                     <p>Name: {nestedItem.name}</p>
//                     <p>Age: {nestedItem.Age}</p>
//                     <p>Gender: {nestedItem.Gender}</p>
//                     <p>Email: {nestedItem.email}</p>
//                   </div>
//                 );
//               }
//               return null;
//             })}
//           </div>
//           <Footer />
//         </>
//       );
//     }
//   }
// }

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
  const [finaldata, setFinalData] = useState([]);
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

      setFinalData([...filteredData1, ...filteredData2]);
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData()
    .then(() =>
    setLoad(false)
    );
   }, [])

  if (isLoading || finaldata.length === 0) {
    return (
      <>
        <NavBar navbar={true} backgroundColor="white" qt="" />
        <div className="h-25">This is loading...</div>
        <Footer />
      </>
    );
  } else {
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
                <div key={nestedItem.email} className="my-40 display:'block' m-auto text-center font-bold">
                  <p>Name: {nestedItem.name}</p>
                  <p>Age: {nestedItem.Age}</p>
                  <p>Gender: {nestedItem.Gender}</p>
                  <p>Email: {nestedItem.email}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
        <Footer />
      </>
    );
  }
};

export default Loggedinhomepage;

// import React from "react";
// import axios from "axios";
// import Chart from './Chart/Chart';

// class Transformation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       realData: [],
//       usersArray: [],
//       dataFromLance: [],
//       distinctUsers: "",
//       isDoneProcessing: false
//     };
//   };

//   async componentDidMount() {
//         this.setState({isDoneProcessing: false})
//         await this.createUsersArray();
     
//         await this.getGender();
     
//         await this.getAge();
     
//         await this.getEducation();
      
//         await this.getCrossingFreq();
     
//         await this.getProduce();
     
//         await this.getPrimaryIncome();
     
//         await this.getLanguage();
     
//         await this.getCountry();

       
    
//   };

//   distinct = (value, index, self) => {
//     return self.indexOf(value) === index;
//   };

//   createUsersArray = () => {
//     let array = [];

//     this.props.realData.map(element => {
//       let object = {};
//       object.cell_num = element.cell_num;
//       array.push(object);
//     });

//     const distinctUsers = [];
//     const map = new Map();
//     for (const item of array) {
//       // for each element of the array that contains duplicates
//       if (!map.has(item.cell_num)) {
//         //if map does not contain an object with the cell_num (userid), it includes it and pushes it to result
//         map.set(item.cell_num, true);
//         distinctUsers.push({
//           cell_num: item.cell_num,
//           gender: null,
//           age: null,//set gender to null inside every object so that every object has a gender property.
//           education: null,
//           crossing_freq: null,
//           produce: null,
//           primary_income: null,
//           language: null,
//           country_of_residence: null
//         });
//       }
//     }
//     this.setState({ ...this.state, distinctUsers: distinctUsers });
    
//   };

//   // Map over session array
//   // See if session did gender survey
//   // Then map through distinct User array, and append gender to user with matching cell phone number
//   getGender = () => {
//     let arrayWithGender = this.state.distinctUsers;

//     this.props.realData.map(element => {
//       let num = element.cell_num;
//       if (element.data.includes("Male")) {
//         arrayWithGender.map(user => {
//           if (user.cell_num === num) {
//             user.gender = "Male";
//           }
//         });
//       } else if (element.data.includes("Female")) {
//         arrayWithGender.map(user => {
//           if (user.cell_num === num) {
//             user.gender = "Female";
//           }
//         });
//       }
//     });

    

//     this.setState({ ...this.state, distinctUsers: arrayWithGender });

//   };

//   getAge = () => {
//     let arrayWithAge = this.state.distinctUsers;

//     this.props.realData.map(element => {
//       let num = element.cell_num;
//       if (element.data.includes("10-20")) {
//         arrayWithAge.map(user => {
//           if (user.cell_num === num) {
//             user.age = "10-20";
//           }
//         });
//       } else if (element.data.includes("20-30")) {
//         arrayWithAge.map(user => {
//           if (user.cell_num === num) {
//             user.age = "20-30";
//           }
//         });
//       } else if (element.data.includes("30-40")) {
//         arrayWithAge.map(user => {
//           if (user.cell_num === num) {
//             user.age = "30-40";
//           }
//         });
//       } else if (element.data.includes("40-50")) {
//         arrayWithAge.map(user => {
//           if (user.cell_num === num) {
//             user.age = "40-50";
//           }
//         });
//       } else if (element.data.includes("50-60")) {
//         arrayWithAge.map(user => {
//           if (user.cell_num === num) {
//             user.age = "50-60";
//           }
//         });
//       } else if (element.data.includes("60-70")) {
//         arrayWithAge.map(user => {
//           if (user.cell_num === num) {
//             user.age = "60-70";
//           }
//         });
//       } 
//     });



//     this.setState({ ...this.state, distinctUsers: arrayWithAge });

//   };

//   getEducation = () => {
//     let arrayWithEducation = this.state.distinctUsers;

//     this.props.realData.map(element => {
//       let num = element.cell_num;
//       if (element.data.includes("No formal education")) {
//         arrayWithEducation.map(user => {
//           if (user.cell_num === num) {
//             user.education = "No formal education";
//           }
//         });
//       } else if (element.data.includes("Primary")) {
//         arrayWithEducation.map(user => {
//           if (user.cell_num === num) {
//             user.education = "Primary";
//           }
//         });
//       } else if (element.data.includes("Secondary")) {
//         arrayWithEducation.map(user => {
//           if (user.cell_num === num) {
//             user.education = "Secondary";
//           }
//         });
//       } else if (element.data.includes("University/College")) {
//         arrayWithEducation.map(user => {
//           if (user.cell_num === num) {
//             user.education = "University/College";
//           }
//         });
//       }
//     });

    

//     this.setState({ ...this.state, distinctUsers: arrayWithEducation });

//   };

//   getCrossingFreq = () => {
//     let arrayWithCrossingFreq = this.state.distinctUsers;

//     this.props.realData.map(element => {
//       let num = element.cell_num;
//       if (element.data.includes("Never")) {
//         arrayWithCrossingFreq.map(user => {
//           if (user.cell_num === num) {
//             user.crossing_freq = "Never";
//           }
//         });
//       } else if (element.data.includes("Monthly")) {
//         arrayWithCrossingFreq.map(user => {
//           if (user.cell_num === num) {
//             user.crossing_freq = "Monthly";
//           }
//         });
//       } else if (element.data.includes("Weekly")) {
//         arrayWithCrossingFreq.map(user => {
//           if (user.cell_num === num) {
//             user.crossing_freq = "Weekly";
//           }
//         });
//       } else if (element.data.includes("Daily")) {
//         arrayWithCrossingFreq.map(user => {
//           if (user.cell_num === num) {
//             user.crossing_freq = "Daily";
//           }
//         });
//       }

    
//     });

    

//     this.setState({ ...this.state, distinctUsers: arrayWithCrossingFreq, isDoneProcessing: true });

//   };

//   checkIncomeProduce = () => {
//     let array = this.state.realData;
//     let totalCount = 0;
//     let countYes = 0;
//     let countNo = 0;
//     this.state.realData.map(element => {

//       if (element.data.includes("survey-2-produce")) {
//         totalCount += 1;
//       } 
      
//       if (element.data.includes(`survey-2-produce\";a:1:{i:0;s:3`) || element.data.includes(`survey-2-produce\";a:1:{i:0;s:4`)) {
//         countYes += 1;
//       } 
      
//       if (element.data.includes(`survey-2-produce\";a:1:{i:0;s:2`)) {
//         countNo += 1;
//       }
//     })

//     let totalOtherWay = countYes + countNo;

//     console.log("total", totalCount);
//     console.log("total yes no", totalOtherWay);
//   };



//   getProduce = () => {
//     let arrayWithProduce = this.state.distinctUsers;

//     this.props.realData.map(element => {
//       let num = element.cell_num;
//       if (element.data.includes(`survey-2-produce\";a:1:{i:0;s:3`) || element.data.includes(`survey-2-produce\";a:1:{i:0;s:4`))  {
//         arrayWithProduce.map(user => {
//           if (user.cell_num === num) {
//             user.produce = "Yes";
//           }
//         });
//       } else if (element.data.includes(`survey-2-produce\";a:1:{i:0;s:2`)) {
//         arrayWithProduce.map(user => {
//           if (user.cell_num === num) {
//             user.produce = "No";
//           }
//         });
//       } 
//     });


//     this.setState({ ...this.state, distinctUsers: arrayWithProduce });

//   };

//   getProduce = () => {
//     let arrayWithProduce = this.state.distinctUsers;

//     this.state.realData.map(element => {
//       let num = element.cell_num;
//       if (element.data.includes(`survey-2-produce\";a:1:{i:0;s:3`) || element.data.includes(`survey-2-produce\";a:1:{i:0;s:4`))  {
//         arrayWithProduce.map(user => {
//           if (user.cell_num === num) {
//             user.produce = "Yes";
//           }
//         });
//       } else if (element.data.includes(`survey-2-produce\";a:1:{i:0;s:2`)) {
//         arrayWithProduce.map(user => {
//           if (user.cell_num === num) {
//             user.produce = "No";
//           }
//         });
//       } 
//     });


//     this.setState({ ...this.state, distinctUsers: arrayWithProduce });

//   };

//   getPrimaryIncome = () => {

//     let arrayWithPrimaryIncome = this.state.distinctUsers;

//     this.props.realData.map(element => {
//       let num = element.cell_num;
//       if (element.data.includes(`survey-1-primaryincome\";a:1:{i:0;s:3`) || element.data.includes(`survey-1-primaryincome\";a:1:{i:0;s:4`))  {
//         arrayWithPrimaryIncome.map(user => {
//           if (user.cell_num === num) {
//             user.primary_income = "Yes";
//           }
//         });
//       } else if (element.data.includes(`survey-1-primaryincome\";a:1:{i:0;s:2`)) {
//         arrayWithPrimaryIncome.map(user => {
//           if (user.cell_num === num) {
//             user.primary_income = "No";
//           }
//         });
//       } 
//     });


//     this.setState({ ...this.state, distinctUsers: arrayWithPrimaryIncome });

//   };

//  /*
//  survey-1-primaryincome\";a:1:{i:0;s:3:\"Yes\" survey-1-primaryincome\";a:1:{i:0;s:4:\"Ndio\

//  "survey-1-primaryincome\";a:1:{i:0;s:2:\"La\" survey-1-primaryincome\";a:1:{i:0;s:2:\"No\
//  */
  
//   getLanguage = () => {
//     let arrayWithLanguage = this.state.distinctUsers;

//     this.props.realData.map(element => {
//       let num = element.cell_num;
//       if (element.data.includes("English")) {
//         arrayWithLanguage.map(user => {
//           if (user.cell_num === num) {
//             user.language = "English";
//           }
//         });
//       } else if (element.data.includes("Swahili")) {
//         arrayWithLanguage.map(user => {
//           if (user.cell_num === num) {
//             user.language = "Swahili";
//           }
//         });
//       } else if (element.data.includes("Luganda")) {
//         arrayWithLanguage.map(user => {
//           if (user.cell_num === num) {
//             user.language = "Luganda";
//           }
//         });
//       } else if (element.data.includes("Kinyarwanda")) {
//         arrayWithLanguage.map(user => {
//           if (user.cell_num === num) {
//             user.language = "Kinyarwanda";
//           }
//         });
//       } else if (element.data.includes("Lukiga")) {
//         arrayWithLanguage.map(user => {
//           if (user.cell_num === num) {
//             user.language = "Lukiga";
//           }
//         });
//       }
//     });

    

//     this.setState({ ...this.state, distinctUsers: arrayWithLanguage });

//   };
  
//   getCountry = () => {
//     let arrayWithCountry = this.state.distinctUsers;

      
//       arrayWithCountry.map(user => {
//         let num = user.cell_num;
//     if (num.includes("25400")) {
//           user.country_of_residence = "KEN";
//     } else if ( num.includes("25600")){
//           user.country_of_residence = "UGA"
//     } else if (num.includes("25000")) {
//           user.country_of_residence = "RWA"
//     }
//   })


    

//     this.setState({ ...this.state, distinctUsers: arrayWithCountry });

//   };
  
//   render() {
//     return(
//       <div>
//         <h1>Hello</h1>
//       </div>
//     )
//   };
// };

// export default Transformation;
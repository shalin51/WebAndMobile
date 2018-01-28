
var courses=[{ number:"CSEE-5021",
    term:"2018 Spring",
    career:"Graduate",
    career_option:"Computer Science",    
    numberOfStudentsEnrolled:8,
    rating:"5 out of 5",
    name:"Web Development",
    professor:"Dr. Lee",
    creditHours:3,
    duration:"2 hrs",
    description:"This is course for Graduate students",
    imgSrc:"https://necurity.com/wp-content/uploads/2017/10/web-development.png"
},{ number:"CSEE-5022",
    term:"2018 Spring",
    career:"Graduate",
    career_option:"Electrical Engineering",      
    numberOfStudentsEnrolled:7,
    rating:"5 out of 5",
    name:"Internet of things",
    professor:"Dr. Song",
    creditHours:3,
    duration:"2 hrs",
    description:"This is course for Graduate students",
    imgSrc:"https://25088-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/08/Internet-of-Things-01.png"
},{ number:"CSEE-5023",
    term:"2018 Spring",
    career:"Graduate",
    career_option:"Electrical Engineering",  
    
    numberOfStudentsEnrolled:20,
    rating:"5 out of 5",
    name:"Motor Binding",
    professor:"Dr. Keley",
    creditHours:3,
    duration:"2 hrs",
    description:"This is course for Graduate students",
    imgSrc:"http://ame21st.com/images/28925/70926080.png"
},{ number:"CSEE-5024",
    term:"2018 Spring",
    career:"Graduate",
    career_option:"Electrical Engineering",  
    
    numberOfStudentsEnrolled:20,
    rating:"5 out of 5",
    name:"Cryptology",
    professor:"Dr. Han",
    creditHours:3,
    description:"This is course for Graduate students",
    duration:"Mon - Wed 5:30PM - 7:30PM",
    imgSrc:"http://www.cwins.wpi.edu/images/publications/wireless_network_deployment.jpg"
},{ number:"CSEE-5026",
    term:"2018 Spring",
    career:"Graduate",
    career_option:"Electrical Engineering",      
    numberOfStudentsEnrolled:10,
    description:"This is course for Graduate students",
    rating:"5 out of 5",
    name:"Network Architecture",   
    duration:"Mon - Wed 5:30PM - 7:30PM",
    imgSrc:"https://followmyvote.com/wp-content/uploads/2015/06/cryptology.jpg"
},{ number:"CSEE-5027",
    term:"2018 Spring",
    career:"Graduate",
    career_option:"Electrical Engineering",  
    
    numberOfStudentsEnrolled:10,
    rating:"5 out of 5",
    name:"VLSI", 
    professor:"Dr. Keley",
    creditHours:3,
    description:"This is course for Graduate students",
    duration:"2 hrs",
    imgSrc:"https://www.bernardmarr.com/img/books/big-data-using-smart-big-data.png"
},{ number:"CSEE-5028",
    term:"2018 Spring",
    career:"Graduate",
    career_option:"Computer Science",      
    numberOfStudentsEnrolled:9,
    rating:"5 out of 5",
    name:"Software Architecture", 
    professor:"Dr. Chaudary",
    creditHours:3,
    description:"This is course for Graduate students",
    duration:"2 hrs",
    imgSrc:"https://www.packtpub.com/sites/default/files/9781784391409.png"
},{ number:"CSEE-5029",
    term:"2018 Spring",
    career:"Graduate",
    career_option:"Computer Science",  
    numberOfStudentsEnrolled:9,
    rating:"5 out of 5",
    name:"Data Structures", 
    professor:"Dr. Chaudary",
    creditHours:3,
    description:"This is course for Graduate students",
    duration:"2 hrs",
    imgSrc:"https://images-na.ssl-images-amazon.com/images/I/51dOg1AWbKL._SX260_.jpg"
},{ number:"CSEE-5030",
    term:"2018 Spring",
    career:"Graduate",
    career_option:"Computer Science", 
    numberOfStudentsEnrolled:5,
    rating:"5 out of 5",
    name:"Data Analysis", 
    professor:"Deep Mendi",
    creditHours:3,
    description:"This is course for Graduate students",
    duration:"2 hrs",
    imgSrc:"https://www.packtpub.com/sites/default/files/9781783980246.png"
},{ number:"CSEE-5031",
    term:"2018 Spring",
    career:"Graduate",
    career_option:"Computer Science",      
    numberOfStudentsEnrolled:5,
    rating:"5 out of 5",
    name:"Data Science", 
    professor:"Deep Mendi",
    creditHours:3,
    description:"This is course for Graduate students",
    duration:"2 hrs",
    imgSrc:"http://www.cwins.wpi.edu/images/publications/wireless_network_deployment.jpg"
}]

cData=[];

getData=function(career,cOption){
   
   cData=courses.filter(c=>{
      return c.career==career && c.career_option==cOption        
    })
    localStorage.setItem("cData",JSON.stringify(cData));
    debugger;    
    return (cData);
};

getCourse=function(number){
    debugger;  
    cData=JSON.parse(localStorage.getItem("cData")) 
       
    return cData.find(d=>d.number==number)
}

setSeat=function(number){
    debugger;
    cData=JSON.parse(localStorage.getItem("cData")) 
    d=cData.find(e=>e.number==number);
    let index=cData.indexOf(d);
    d.numberOfStudentsEnrolled=d.numberOfStudentsEnrolled-1
    cData[index]=d;
    localStorage.setItem("cData",JSON.stringify(cData));
    return cData[index].numberOfStudentsEnrolled;
}
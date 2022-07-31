

const container=document.getElementById("container");
const login=document.getElementById("login");

const hospital=document.getElementById("hospital");

const hospitalList=document.getElementById("hospitalList");






const hospitalName=document.getElementById("hname");
const code=document.getElementById("code");
const type=document.getElementById("type");
const district=document.getElementById("district");
const sector=document.getElementById("sector");
const cell=document.getElementById("cell");
const village=document.getElementById("village");
const email=document.getElementById("email");
const createH=document.getElementById("create");



const fetchData=async()=>{
   const data= await (await fetch("https://mdbackend.herokuapp.com/api/hospitals")).json();

   // console.log(data);


   // console.log(data.data);

}

fetchData();



const log=async()=>{

   console.log("hello function");
   
  const formData=new FormData();
  formData.append("phone","0785189326");
  formData.append("password","12345678");

   const message=JSON.stringify({phone:"0785189326",password:"12345678"});
  const result= await (await fetch("https://mdbackend.herokuapp.com/api/authenticate",
  {method:"POST",headers:{"Accept":"application/json","content-type":"application/json"},body:message})).json();

  console.log(result);
}


login.addEventListener("click",e=>{
   e.preventDefault();
   log();
})



const header={"Accept":"application/json","Authorization":`Bearer ${localStorage.getItem('token')}`}

const createHospital=async()=>{

   const formData=new FormData();



   const hospitalName=document.getElementById("hname");
   const code=document.getElementById("code");
   const type=document.getElementById("type");
   const district=document.getElementById("district");
   const sector=document.getElementById("sector");
   const cell=document.getElementById("cell");
   const village=document.getElementById("village");
   const email=document.getElementById("email");
   const createH=document.getElementById("create");


   // formData.append("names","hospitalName.value");
   // formData.append("code","RH/205");
   // formData.append("type","Referral Hospital");
   // formData.append("district","MUSANZE");
   // formData.append("sector","MUHOZA");
   // formData.append("cell","KIGOMBE");
   // formData.append("village","NYAMAGUMBA");
   // formData.append("email","ruhengerirh2020@gmail.com");
  
   formData.append("names",hospitalName.value);
   formData.append("code",code.value);
   formData.append("type",type.value);
   formData.append("district",district.value);
   formData.append("sector",sector.value);
   formData.append("cell",cell.value);
   formData.append("village",village.value);
   formData.append("email",email.value);

   
   
   const result=await (await fetch("https://mdbackend.herokuapp.com/api/create-hospital",{method:"POST",headers:header,body:formData})).json();

   console.log(result);

   if(result){document.getElementById("text").innerText="The hospital is successfully created"

}
else{
   document.getElementById("text").innerText="Some data are missing!"
}
}

hospital.addEventListener("click",e=>{
   createHospital();
 
})



const list=async()=>{
   const result=await (await fetch("https://mdbackend.herokuapp.com/api/hospitals")).json();
   console.log(result);
}



hospitalList.addEventListener("click",e=>{
list();
})

localStorage.setItem("token","eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjc2ZDM3NzFhYzM5MmEyNThmN2Y0NzM4ODdhYTY0NjRkZThiNjYyODY2ZTIyNjA2Njk0Yjg1MDY3ODIyMTgzYjc0YTU1YmJiMDZlMDJjZDYiLCJpYXQiOjE2NTkyODA5OTIsIm5iZiI6MTY1OTI4MDk5MiwiZXhwIjoxNjkwODE2OTkyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.B0hmdfnmV9h95onbxCVGOdP-9QUkfweg9uOsWBkAPVVMzfSyuf5cxIC7Fg6eTAi0e4cOIoSiK8cPGKRWKjCsuu5enPMVgjWLnZ91p31EEBMQaRuTLzMYF74fwYgpmdo-znolYT0oY08wvRYONdAFsezxFaNvujTsNJbTUTDj7s1KNkwzhb-2W_N9j7rdy2ule-jEHE7FFtxEWSk1A8XItnC4uwDryU5vYPK3kI-JbE-b1vGTxKLuXKdwR2O-yvGPTnPohNHXj2r9Z2Ei5RNoqiQhnfplprk3joBcS4QbDF6cxtIqOaTuhlmA_Yh12SxFw90KhvUa2LWUmOPwCQJqCBWwXLHOmx7pG8BLWeFZFH2QcEfG8aPumhJ5eufIB8cjf6joJNl9GvrjbcK4_bnuPQasfBZOzwAKXfUFRHvEbuV1a4TOSHxetq2U8Jr2xCjeW1nsPnvsqQ6xBLdyHiZVP1PgjQUt59oz2nyeWhtg6K5yYGeuev8SKkSQn92ob6iGpwCqZTHFcvXPl0ItQnvny4DYxCoM7_VucF8om-6ZPsjYZEOLblZS4VRBK_RfqycG4GsE07Ssssd2gOosAggQZYso1NyUHSVBXIPkU-6Eicy4u5Aun6Fk09vWvsQM5-5kuf0UgKjv2rT7FaAbygLUGjQaXMLjKhwqkicg6qD66uE")



createH.addEventListener("click",e=>{
   e.preventDefault();
   createHospital();
})

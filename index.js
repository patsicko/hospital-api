const container=document.getElementById("container");

const fetchData=async()=>{
   const data= await (await fetch("https://mdbackend.herokuapp.com/api/authenticate",{method:"POST"})).json();

   console.log(data);
}

fetchData();
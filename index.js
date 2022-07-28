

const container=document.getElementById("container");

const fetchData=async()=>{
   const data= await (await fetch("https://mdbackend.herokuapp.com/api/hospitals")).json();

   console.log(data);

   for(item in data){
      (`${item}:${data[item]}`)
      console.log(item.map(e=>e))
   }
}

fetchData();
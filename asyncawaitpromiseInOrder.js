const a = 1;
const b = 2;
const c = 3;

 const getA = () => {
   return new Promise((resolve, reject) =>{
     resolve(a);
   });
 }
 const getB = () => {
   return new Promise((resolve, reject) =>{
     resolve(b);
   });
 }
 const getC = () => {
   return new Promise((resolve, reject) =>{
     resolve(c);
   });
 }
 
 async function data(){
   const dataA = await getA();
   const dataB = await getB();
   const dataC = await getC();
   console.log(dataA, dataB, dataC);
 }

data();
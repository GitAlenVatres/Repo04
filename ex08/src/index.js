function main(){
   
   var myX=12;
   var mxY=19;
   var myZ=24;

   myX+=3;
   mxY+=17;
   myZ-=20;

   return {
      myX,
      mxY,
      myZ
   };
}

console.log(main());
module.exports=main;
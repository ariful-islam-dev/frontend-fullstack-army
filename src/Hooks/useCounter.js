import { useState } from 'react';

export const useCounter = ({initial=0, lowerBound=0, upperBound=10}) => {
   const [count, setCount]=useState(initial);

   const handleCountUp = ()=>{
      if(count < upperBound){
        setCount(count + 1) 
      }
   }
   const handleCountDown = ()=>{
       if(count > lowerBound){
           setCount(count - 1)
       }
   }
   return{
       count, handleCountDown, handleCountUp, lowerBound, upperBound
   }
};


import { useEffect } from "react";

export const useTitle = (title) => {
    useEffect(()=>{
        document.title=`Cinema Paradise/${title}`;
        console.log(title);
      });

     return null; 
}

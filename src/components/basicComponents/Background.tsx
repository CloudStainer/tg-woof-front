"use client";  

/* eslint-disable @next/next/no-img-element */  
import React from "react";  

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => {  
  return (  
    <div className="relative bg-black px-4 text-white rounded-lg h-screen w-screen bg-radial-gradient pt-20 pb-40 z-0 overflow-hidden">  
      <img  
        src="/assets/shape-bottom.png"  
        className="absolute left-0 -bottom-20 w-full z-0"  
        alt=""  
      />  
      <img  
        src="/assets/shape-left.png"  
        className="absolute left-0 top-1/3 max-w-24 z-0"  
        alt=""  
      />  
      <img  
        src="/assets/shape-right.png"  
        className="absolute right-0 bottom-1/3 max-w-24 z-0"  
        alt=""  
      />  
      <div className="relative z-10">{children}</div>  
    </div>  
  );  
};  

export default Background;
/* eslint-disable @next/next/no-img-element */

"use client";

const Ready: React.FC<{ setPass?: any }> = ({ setPass }) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen  bg-radial-gradient pt-20 pb-40">
      <div
        className="rounded-full p-10 mt-5"
        style={{
          background:
            "radial-gradient(circle, rgba(10, 10, 10, 0.5) 0%, rgba(50, 100, 155, 0.5) 100%)",
          borderRadius: "50%", // Makes it circular
        }}
      >
        <div
          className="rounded-full p-6"
          style={{
            background:
              "radial-gradient(circle, rgba(97, 150, 255, 1) 0%, rgba(10, 10, 10, 0.3) 100%)",
            borderRadius: "50%", // Makes it circular
          }}
        >
          <div
            className="rounded-full p-5"
            style={{
              background:
                "radial-gradient(circle, rgba(97, 150, 255, 1) 0%, rgba(90, 130, 200, 0.3) 100%)",
              borderRadius: "50%", // Makes it circular
            }}
          >
            <div
              className="rounded-full p-5"
              style={{
                background:
                  "radial-gradient(circle, rgba(50, 50, 50, 1) 0%, rgba(90, 130, 200, 0.3) 100%)",
                borderRadius: "50%", // Makes it circular
              }}
            >
              <img
                onClick={() => setPass(true)}
                src="/assets/wolf.png"
                className="bg-gradient-radial rounded-full bg-blue-500 to-blue-400 max-w-44 max-h-44"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setPass(true)}
        className="mt-8 bg-blue-500 text-white rounded-full py-3 px-6 shadow-lg transition-transform transform hover:scale-105"
      >
        Join Now
      </button>

      {Array.from({ length: 8 }).map((_, index) => {  
        // Generate random positions  
        const top = Math.random() * 80 + 10; // Keep within 10%-90% for visibility  
        const left = Math.random() * 80 + 10; // Keep within 10%-90%  
        const size = Math.random() * 20 + 10; // Random size between 10px and 30px  

        return (  
          <div  
            key={index}  
            className="absolute text-blue-400"  
            style={{  
              top: `${top}%`,  
              left: `${left}%`,  
              fontSize: `${size}px`,  
            }}  
          >  
            ★  
          </div>  
        );  
      })}  
    </div>
  );
};

export default Ready;

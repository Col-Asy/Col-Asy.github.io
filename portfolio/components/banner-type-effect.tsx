"use client";
import Typed from 'typed.js';
import React from 'react';


const SrchBar = () => {
    const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
        strings: [
          'Coder', 
          'Photographer', 
          'Basketball Player',
          'Traveler',
          'Guitarist'
        ],
        typeSpeed: 80,
        backSpeed: 100,
        smartBackspace: true,
        showCursor: true,
        autoInsertCss: true,
        cursorChar: '|',
        loop: true,
        backDelay: 1500
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


    return ( <>
        <div className="w-full h-[60px] bg-neutral-100 rounded-[50px] border-r-2 border-b-2 flex justify-start items-center text-xl">
          <div className="srch-icon flex justify-center">
            <i className="fa-solid fa-magnifying-glass ms-8"></i>
          </div>
          <div ref={el} className="inline h-auto w-auto ms-5" />
        </div>
    </> );
}
 
export default SrchBar;
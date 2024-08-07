import "./components-global.css";

const Footbar = () => {
    return ( 
        <div className="footer w-full h-full flex flex-col xl:block justify-center items-center rounded-tl-[20px] rounded-tr-[20px] p-14 pb-2 mb-0">
            <div className="routes md:p-8 pt-2 flex flex-col items-center justify-center h-1/2 w-fit">
                <img src="Images\logo-light-transformed-wo-txt.jpeg" alt="Logo" id="logo" className="w-1/3" />

                <div className="links flex space-x-2 justify-center text-lg">
                    <div className="link-names">
                        <a href="#introduction">

                            HOME

                        </a>
                    </div>

                    <div className="link-names">
                        <a href="#about-section">
                            
                            ABOUT
                            
                        </a>
                    </div>

                    <div className="link-names">
                        <a href="#contact-section">

                            CONNECT

                        </a>
                    </div>
                </div>
            </div>

            <div className="after-msg pt-10 flex flex-col items-center mb-0 pb-0">
                <div className="tag-line text-lg">
                    “ न हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगा:। ”
                </div>
                <div className="credits-line flex space-x-2 text-sm">
                    <div className="pointer">
                        &copy; AYUSH BARNWAL
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footbar;




import SrchBar from "@/components/banner-type-effect";

const IntroBanner = () => {
    return ( 
        <div id="introduction" className="introduction">
            <div className="back-img-container w-full h-full">
            </div>

            <div className="banner-content flex flex-col lg:flex-row justify-center items-center px-4">
                <div className="profile-pic container md:flex-initial md:w-3/5 justify-center ms-0 flex m-5 h-full">
                    <img src="Images/front.jpg" alt="Profile Image" id="profile-pic" className="basis-1/2 me-0" />
                </div>

                <div className="banner-content-text container md:flex-none md:w-4/5 flex flex-col me-6 lg:me-32">
                    <div className="salutations justify-center lg:justify-start">
                        <h3>Ram Ram Ji 🙏 !</h3>
                    </div>
                    
                    <div className="intro items-center lg:items-start">
                    <span className="ms-0 md:ms-5">This is</span> 
                    
                    <div className="name ms-5">Ayush Barnwal</div>
                    </div>
                    
                    <div className="skill container flex flex-col items-center mt-6 md:mt-12">
                    <SrchBar />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default IntroBanner;
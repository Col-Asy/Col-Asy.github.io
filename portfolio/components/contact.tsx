const ContactSection = () => {
    return ( 
        <div id="contact-section" className="contact-section relative flex lg:block flex-col justify-center items-center py-10">
            <div className="relative lg:w-1/2 ps-20 pe-10">
                <h3>Get in Touch</h3>
                <p className="py-3">
                    Just thrilled by the thought of connecting with you! Whether you have a project idea, a question, or just want to say hello, I’d love to hear from you. Feel free to reach out using the contact form below. You can also find me on LinkedIn, Twitter and other links mentioned below. Or you can just fill the form beside. Looking forward to connecting!
                </p>

                <div className="mail py-5">
                    <i className="fa-solid fa-envelope px-5 text-2xl"></i><a href="mailto:ayush.astik@gmail.com" className="text-xl">ayush.astik@gmail.com</a>
                </div>

                <div className="social-media-handles py-16 flex flex-wrap justify-center items-center space-x-4 space-y-4 md:space-x-8 lg:space-x-20 text-[1.75rem]">
                    <div className="icon first ms-4 mt-4"><a href="https://linkedin.com/in/vanshu-barnwal" target="_blank" className="shadow-lg"><i className="fa-brands fa-linkedin-in"></i></a></div>
                    <div className="icon second"><a href="https://x.com/vanshu_barnwal" target="_blank" className="shadow-lg"><i className="fa-brands fa-twitter"></i></a></div>
                    <div className="icon third"><a href="https://github.com/Col-Asy/" target="_blank" className="shadow-lg"><i className="fa-brands fa-github-alt"></i></a></div>
                    <div className="icon fourth"><a href="https://discordapp.com/users/748954060690030703" target="_blank" className="shadow-lg"><i className="fa-brands fa-discord"></i></a></div>
                    <div className="icon fifth"><a href="https://www.instagram.com/vanshu_barnwal/" target="_blank" className="shadow-lg"><i className="fa-brands fa-instagram"></i></a></div>
                </div>
            </div>

            <div className="flex lg:block w-full justify-center items-center">
                <div className="form-area lg:absolute right-20 top-5 shadow-lg w-full md:w-2/3 lg:w-2/5 px-10 py-7">
                    <h3>Fill out the Form</h3>
                    <form action="" method="get" className="form pt-14">
                        <div className="group">
                            <input type="text" required placeholder="Name" />
                            <label htmlFor="name">Name</label>
                        </div>

                        <div className="group md:flex md:space-x-7">
                            <div className="group md:w-2/5">
                                <input type="tel" required id="tel" name="tel" pattern="[1-9]{1}[0-9]{9}" placeholder="Phone No." />
                                <label htmlFor="tel">Phone No.</label>
                            </div>

                            <div className="group md:w-3/5">
                                <input type="email" required id="email" name="email" placeholder="Email" />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>

                        <div className="group">
                            <textarea id="comment" name="comment" rows={5} required placeholder="Comment" />
                            <label htmlFor="comment">Comment</label>
                        </div>

                        <button className="button-submit w-full md:w-1/2 md:ml-[25%]" role="button">
                            <span className="button-text">Submit</span>
                            <span className="button-text-hover">Let's Connect</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default ContactSection;
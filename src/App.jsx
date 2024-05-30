import React, { useEffect, useRef ,useState} from 'react';
import emailjs from '@emailjs/browser';
import resume from './assets/resume.pdf'
import './App.css';
import './profile.css';
import './contact.css';
import './project.css';
import './decore.scss';
import './skills.css';
import './home.css';

function App() {
//   <PDFViewer>
//   <MyDocument />
// </PDFViewer>
// const [showPdf, setShowPdf] = useState(false);
// const handleButtonClick = () => {
//   setShowPdf(true);};
  const form = useRef();
  const [message, setMessage] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_37o42me', 'template_89jk8xb', form.current, {
        publicKey: 'Hm0hw9aIBWRBPpO34',
      })
      .then(
        () => {
          setMessage('Email sent successfully!'); 
          form.current.reset();         
        },
        (error) => {
          setMessage('Failed to send email.');        },
      );
  };
  const hamRef = useRef(null);
  const bulbRef = useRef(null);
  const bodyref= useRef(null);
  useEffect(() => {
    const ham = hamRef.current;
    const bulb = bulbRef.current;
    const handleHamClick = () => {
      const dots = document.querySelector('.dot');
      dots.classList.toggle('displaynone');
      dots.classList.toggle('displayflex');


    };

    const handleBulbClick = () => {
      const body = document.querySelector('.secondcontainer');
      const profileimg = document.querySelector('.profileimage');
      const dot=document.querySelector('.dot');
      const links = dot.querySelectorAll('a i');


      const projectnames = document.querySelectorAll('.projectname');
      projectnames.forEach(projectname => {
        projectname.classList.toggle('dark');
        projectname.classList.toggle('light');
      });
      

      bulb.classList.toggle('active');

      body.classList.toggle('dark');
      profileimg.classList.toggle('dark');

      // dot.classList.toggle('lightfont')

      bulb.classList.toggle('inactive');

      body.classList.toggle('light');
      profileimg.classList.toggle('light');
      const inputs = document.querySelectorAll('form input');
      inputs.forEach(input => {
        input.classList.toggle('dark');
        input.classList.toggle('light');

      })

      const input2 = document.querySelector('form textarea');
      input2.classList.toggle('dark');
        input2.classList.toggle('light');

  //     const inputs = document.querySelectorAll('input');
  // inputs.forEach(input => {
  //   if (input.style.backgroundColor === 'black') {
  //     input.style.backgroundColor = 'white';
  //     input.style.color = 'black';
  //   } else {
  //     input.style.backgroundColor = 'black';
  //     input.style.color = 'white';
  //   }
  // });


        links.forEach(link=>{
          link.classList.toggle('darkfont');
          link.classList.toggle('lightfont');

        })

    };

    ham.addEventListener('click', handleHamClick);
    bulb.addEventListener('click', handleBulbClick);

    return () => {
      ham.removeEventListener('click', handleHamClick);
      bulb.removeEventListener('click', handleBulbClick);
    };
  }, []);

  return (
    <div className="secondcontainer light" >
       <div className="dot displaynone">
            <a href="#section1"><i className="fa-solid fa-house"></i></a>
            <a href="#skillsection"><i className="fa-solid fa-address-card"></i></a>
            <a href="#projects"><i className="fa-solid fa-pen-ruler"></i></a>
            <a href="#contacts"><i className="fa-solid fa-address-book"></i></a>
          </div>
      <div className="navbar">
        <div className="name"><h2 style={{ color: '#B0EBB4', fontFamily:'futura' ,  padding:'none' , margin:'20px' , display:"flex"}}> &lt;Atharva Dhatrak/&gt;</h2> </div>
       

        <div className="navmenu">
          <ul>
            <li><a href="#section1"><h2>Home</h2></a></li>
            <li><a href="#skillsection"><h2>About</h2></a></li>
            <li><a href="#projects"><h2>Project</h2></a></li>
            <li><a href="#contacts"><h2>contact</h2></a></li>
          </ul>
        </div>
        <div className="bulb-container">
          <div className="wire"></div>
          <div className="connector">
            <div className="grove"></div>
            <div className="grove"></div>
            <div className="grove"></div>
          </div>
          <div className="bulb" ref={bulbRef}>
            <div className="metal-wire"></div>
            <div className="metal-wire"></div>
            <div className="metal-wire"></div>
          </div>
        </div>
        <div className="hiddenmenu">
        <div className="hamburger">
          <i className="fa-solid fa-ellipsis-vertical" ref={hamRef}></i>
          </div>
         
        </div>
        
        
      </div>

      




      <section className="section1" id="section1">
        <div className="profileimage">
          <div className="profileimgcircle">
            <img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716566470/propic_p3ubkb.png" alt="image not available" />

          </div>
          <div className="quote">
          <div style={{padding:'0%'}}>Hello 👋 I'm  </div>
          <div className="animation">
    <div className="first"><div>Atharva Dhatrak</div></div>
    <div className="second"><div>Web Developer</div></div>
    <div className="third"><div>App Developer</div></div>
    </div>

         <div className="text">
            <h1>
              <span className="grays">Code, Debug</span> <span className="purples">and</span> Repeat <span className="purples">that's all</span> <span className="mint">!!!</span>
            </h1>

          </div> 
          <div className="joke">
                <h4><div className="grays">Life goes by fast and I catch the moments using <code>&#123;&#125;</code></div>
                </h4>

                <p style={{fontSize:"17px" ,fontFamily:"cursive"}}>
                 A curated showcase of my work as a FullStack Developer who loves to try new ideas.
                  Dive into projects featuring my expertise in React for front-end development and Node.js 
                  for back-end solutions. Let’s code something awesome together and transform innovative ideas
                   into reality!</p>
            </div>
            </div>
            <div>
            <div>
            <button >
              <a href={resume} target="_blank" > Download CV </a>
              </button>

            
        </div>
            </div>
        </div>
      
      </section>


      

      
      <section className="skillsection" id="skillsection">
      <div className="text"><h2 className="grays">Skill Set</h2></div>
        <div className="column2"> 
          <div className="container">
              <div className="skill-category">
                      <div className="skill">
                        <span><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716794340/html_1_uplijw.png" alt="" /></span>
                        <h3>HTML 5</h3>
                       
                      </div>
                      <div className="skill">
                        <span><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716798504/css_hf8xcj.png" alt="" /></span>
                        <h3>CSS</h3>
                       
                      </div>
                      <div className="skill">
                        <span><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716798505/javascript_1_d09nye.png" alt="" /></span>
                        <h3>Javascript</h3>
                        
                       
                      </div>
                     
                      
                    
                    
              </div>

              <div className="skill-category">
                    {/* <div className="skill">
                    <span><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716798505/javascript_1_d09nye.png" alt="" />
                    </span><h3>Javascript</h3>
                     
                    </div> */}
                    <div className="skill">
                    <span><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716798833/1012812_code_development_logo_php_icon_zw8msb.png" alt="" />
                    </span>   <h3>php</h3>       
                   
                    </div>
                    <div className="skill">
                    <span><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716798833/4375017_js_logo_node_icon_lznh5y.png" alt="" />
                    </span>   <h3>Node Js</h3>      
                     
                    </div>

                    <div className="skill">
                        <span><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716798833/1174949_js_react_js_logo_react_react_native_icon_loxgm9.png" alt="" />
                        </span> <h3>React</h3>
                       




                     
                      </div>
                   
                    </div>

                    <div className="skill-category">
                
                    <div className="skill">
                    <span><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716799092/7564187_figma_logo_brand_icon_wqvr5x.png" alt="" />
                    </span>  <h3>Figma</h3>
                       
                    </div>
                    <div className="skill">
                    <span><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716799092/11401189_canva_graphic_design_icon_qqstny.png" alt="" />
                    </span>  <h3>Canva</h3>  
                       
                    </div>
                    <div className="skill">
                        <span><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716798504/bootstrap-framework-logo_xgkafn.png" alt="" /></span>
                      <h3>Bootstrap</h3>
                      </div>
                  
              </div>

              <div className="skill-category">
                    <div className="skill">
                    <span><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716798945/1012821_code_development_logo_mysql_icon_dvfiob.png" alt="" />
                    </span>  <h3>MySQL</h3>
                           
                    </div>
                    <div className="skill">
                    <span><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716792653/mongo-db_za9ze1.png" alt="" />
                    </span>  <h3>MongoDB</h3>
                       
                    </div>
                    <div className="skill">
                        <span><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716798504/pngwing.com_dva8p1.png" alt="" /></span>
                        <h3>jQuery</h3>
                       
                      </div>
                    </div>       
            </div>

            <div className="decore">
              <div className="animation01">
                <div className="rhombus_small">
                  <div className="rhombus">
                    <div className="border_box">
                      <span className="line line01"></span>
                      <span className="line line02"></span>
                      <span className="line line03"></span>
                      <span className="line line04"></span>
                      <span className="circle circle01"></span>
                      <span className="circle circle02"></span>
                      <span className="circle circle03"></span>
                      <span className="circle circle04"></span>
                      <span className="animation_line animation_line01"></span>
                      <span className="animation_line_wrapper animation_line02_wrapper"><span className="animation_line animation_line02"></span></span>
                      <span className="animation_line animation_line03"></span>
                      <span className="animation_line_wrapper animation_line04_wrapper"><span className="animation_line animation_line04"></span></span>
                      <span className="animation_line animation_line05"></span>
                      <span className="animation_line_wrapper animation_line06_wrapper"><span className="animation_line animation_line06"></span></span>
                      <span className="animation_line animation_line07"></span>
                      <span className="animation_line_wrapper animation_line08_wrapper"><span className="animation_line animation_line08"></span></span>
                    </div>
                    <div className="wave">
                      <div className="wave_wrapper"><div className="wave_box"></div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animation02">
                <div className="rhombus_box">
                  <span className="rhombus_item_wrapper rhombus_item01_wrapper"><span className="rhombus_item"></span></span>
                  <span className="rhombus_item_wrapper rhombus_item02_wrapper"><span className="rhombus_item"></span></span>
                </div>
                <div className="double_content">
                  <div className="double_wrapper02 dotted02"><div className="dotted_hide"><div className="double_wrapper01 dotted01"><span className="dotted_right"></span></div></div></div>
                  <div className="double_wrapper02 white02"><div className="double_wrapper01 white01"></div></div>
                  <div className="double_wrapper02 gray02"><div className="double_wrapper01 gray01"></div></div>
                  <div className="double_wrapper02 orange02"><div className="double_wrapper01 orange01"></div></div>
                </div>
               
              </div>
        </div>
            
        </div>
         </section>

        

      <section className="projects" id="projects">
      <div className="text"><h2 className="mint">Projects</h2></div>
                      <div className="projectcontainer">
                        <div className="projectcard">
                        <div className="github"><a href="https://github.com/AtharvDhatrak/frontendprojects/tree/main/weather"><i className="fa-brands fa-github"></i></a></div>

                            <div className="projectimg">
                              <div >
                                <a href="https://github.com/AtharvDhatrak/frontendprojects/tree/main/weather"><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716962001/Screenshot_78_u9a2ml.png" alt="" /></a>

                              </div>

                                  <div className="projectname light">
                                        <h5>Weather App </h5>

                                  </div>
                                  

                            </div>
                            <div className="projectinfo">
                            A dynamic weather application using HTML, CSS, and JavaScript that fetches
                             real-time weather data from an API. Users can search for any city to view current
                              weather conditions, including temperature, humidity, and forecasts. The app features 
                              a sleek, responsive design with smooth transitions and interactive elements.
                            </div>
                        </div>

                        <div className="projectcard">
                        <div className="github"><a href="https://www.figma.com/proto/rcWwGKw9mIsS0l4FZ6H6a0/E-Commerce-Shoe-Product-Page-Design-(Community)?node-id=404-479&scaling=contain&t=9FwiZY6BYlQ4j2E2-1"><i className="fa-solid fa-link"></i></a></div>

                            <div className="projectimg">
                              <div >
                               <a href="https://www.figma.com/proto/rcWwGKw9mIsS0l4FZ6H6a0/E-Commerce-Shoe-Product-Page-Design-(Community)?node-id=404-479&scaling=contain&t=9FwiZY6BYlQ4j2E2-1"><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716974816/Screenshot_79_tyvhmo.png" alt="image not avalable" /></a> 

                              </div>

                                  <div className="projectname light">
                                        <h5>E-commerce UI </h5>

                                  </div>
                                  

                            </div>
                            <div className="projectinfo">
                            Designed a sleek and intuitive UI for an e-commerce sneaker site using Figma.
                             Focus on creating a visually appealing layout that highlights product images,
                              incorporates easy navigation, and provides a seamless shopping experience. 
                              Utilize Figma's collaborative features to streamline the design process and
                               ensure a cohesive user interface.
                            </div>
                        </div>
                        
                        <div className="projectcard">
                        <div className="github"><a href="https://github.com/AtharvDhatrak/turfbooking.git"><i className="fa-brands fa-github"></i></a></div>

                            <div className="projectimg">
                              <div >
                                <a href="https://github.com/AtharvDhatrak/turfbooking.git"><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1716976782/turfimg_dpwbjm.jpg" alt="" /></a>

                              </div>

                                  <div className="projectname light">
                                        <h5>Turf Booking App </h5>

                                  </div>
                                  

                            </div>
                            <div className="projectinfo">
                            Developing a robust turf booking app using PHP, providing users with an intuitive 
                            platform to reserve sports fields and facilities. The app features real-time 
                            availability, secure payment integration, and user-friendly navigation, ensuring 
                            a seamless booking experience. Utilize PHP's server-side capabilities to manage 
                            bookings, user accounts, and notifications efficiently.
                            </div>
                        </div>


                        <div className="projectcard">
                        <div className="github"><a href="https://github.com/AtharvDhatrak/frontendprojects/tree/main/weather"><i className="fa-brands fa-github"></i></a></div>

                            <div className="projectimg">
                              <div >
                                <a href="https://github.com/AtharvDhatrak/portfolio.git"><img src="https://res.cloudinary.com/dkkt4pmey/image/upload/v1717073125/Screenshot_86_qbbnrh.png" alt="" /></a>

                              </div>

                                  <div className="projectname light">
                                        <h5>Portfolio </h5>

                                  </div>
                                  

                            </div>
                            <div className="projectinfo">
                            Introducing my portfolio project: a curated showcase of my work, blending creativity and technical prowess. 
                            Explore a diverse range of projects, from web development and graphic design to data analysis and programming. 
                            Each piece highlights my skills, growth, and passion for turning ideas into impactful realities, demonstrating 
                            my commitment to excellence and innovation.






                            </div>
                        </div>

                      </div>
       
      </section>


      <section className="contacts" id="contacts">

       
          <div className="contactline1">
              <div className="links">
              <a href="https://stackoverflow.com/users/25326138/atharv-dhatrak"><i className="fa-brands fa-stack-overflow"></i></a>
             <a href="https://www.linkedin.com/in/atharv-dhatrak-197778251/"><i className="fa-brands fa-linkedin"></i></a> 
             <a href="https://github.com/AtharvDhatrak"> <i className="fa-brands fa-square-github"></i></a>
              <a href="https://leetcode.com/u/atharvdhatrak1/"><i className="fa-solid fa-code"></i></a>
              </div>
              <div className="decoresquare">
              <div className="text"><h2 className="orange" style={{margin:"10px"}}>Let's talk over a cup of tea</h2></div>



              </div>
          </div>
          {message && <p>{message}</p>}
          <div className="emailbox">
                  <form  ref={form} onSubmit={sendEmail}>
                    <div><label >Name</label>
                    <input type="Text"  name="from_name" className="light"/> </div>
                    <div> <label >Email Id</label>
                    <input type="email" name="from_email" className="light"/> </div>
                    <div>
                       <label>Message</label>
                    <textarea style={{height:"120px",width:"95%"}} name="message" className="light"/> 
                    </div>
                 
                     <input type="submit" value="Send" name="button"/>
                  </form>

          </div>

              
     </section>

     <div>Copyright@Atharv_Dhatrak 2024</div>
    </div>
  );
}

export default App;

import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import icon1 from './icon1.jpg'
import icon2 from './icon2.jpg'
import icon3 from './icon3.jpg'
import logoUI from './logoUI.jpg'
import c1 from './c1.jpg'
import c2 from './c2.jpg'
import c3 from './c3.jpg'
import c4 from './c4.jpg'
import c5 from './c5.jpg'
import c6 from './c6.jpg'
export default function Body() {
    return (
        <>
        <div className="container">
        <div id="about"  className="about">
            <div className="container-fluid">
                <div className="row d_flex">
                <div className="col-xl-7 col-lg-7 col-md-12 padding_lert">
                    <div className="about_img">
                        <figure><img src={pic1} alt="#"/></figure>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-12" style={{margin: "auto", paddingBottom: "0px"}}>
                    <div className="about_text">
                        <div className="titlepage">
                            <h2 style={{fontSize: "5vh"}}>Making the most of the <br/>ever-growing</h2><br/>
                            <h2 style={{color:"red", fontSize: "7vh"}}>Information Technology</h2>
                            <p>Managed by a team of professional experts with extensive experience and impressive track records</p>
                            <button className="read_more">Read More</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
{/* ends */}

        <div className="container">
        <div id="our"  className="our">
         <div className="container-fluid">
            <div className="row d_flex">
               <div className="col-xl-7 col-lg-7 col-md-12 order_2" style={{margin: "auto", paddingBottom: "0px"}}>
                  <div className="our_text" >
                     <div className="titlepage">
                        <h2 style={{textAlign: "center"}}>Welcome to <h2 style={{color: 'red', textAlign: 'center'}} >Dwidasa Samsara Indonesia (DSI)</h2></h2>
                        <p style={{textAlign: "left"}}>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through DSI’s distinct front-end based application concept.
<br></br>
Managed by a team of professional experts with extensive experience and impressive track records, DSI believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
                        <button className="read_more">Read More</button>
                     </div>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-5 col-md-12 padding_right order_1">
                  <div className="our_img">
                     <figure><img src={pic2} alt="#" style={{maxWidth: "90vh"}}/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>


       {/* card */}
       <section class="section" id="blog">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-heading">
                        <h2 class="section-title" style={{marginBottom: "10vh"}}>Product and Services</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="blog-post-thumb">
                        <div class="img" style={{height: "-webkit-fill-available"}}>
                            <img src={icon1} alt=""/>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <a href="#">Our Product</a>
                            </h3>
                            <div class="text">
                            Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.
                            </div>
                            <button className="read_more">Read More</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="blog-post-thumb">
                        <div class="img" style={{height: "-webkit-fill-available"}}>
                            <img src={icon2} alt=""/>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <a href="#">Our Service</a>
                            </h3>
                            <div class="text">
                            DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.
                            </div>
                            <button className="read_more">Read More</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="blog-post-thumb">
                        <div class="img" style={{height: "-webkit-fill-available"}}>
                            <img src={icon3} alt=""/>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <a href="#">Our Technology</a>
                            </h3>
                            <div class="text">
                            First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.
                            </div>
                            <button className="read_more">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* contactUS and aboutUS */}
    <section class="section" id="blog">
        <div class="container">
            <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12">
                           
                            <div class="blog-post-thumb">
                                    <div class="img" style={{height: "-webkit-fill-available"}}>
                                        <img src={logoUI} alt=""/>
                            </div>
                            <h5>PT Dwidasa Samsara Indonesia</h5><br></br>
                            <h5>Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang 15323
                            </h5>
                              
                            </div> 
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                        <h3>Contact</h3> 
                        <h5>Phone : +62.21.5314.1135 <br></br>
                            Fax : +62.21.5314.1135  <br></br>
                            Email : community@dwidasa.com</h5>
                        </div>
                        <div class="col-lg-5 col-md-6 col-sm-12">
                        <div style={{marginTop: "3vh"}}>
                            <img src={c1} alt=""/>
                            <img src={c2} alt=""/>
                            <img src={c3} alt=""/>
                            <img src={c4} alt=""/>
                            <img src={c5} alt=""/>
                            <img src={c6} alt=""/>
                        </div>
                        </div>
                </div>
            </div>
    </section>
        </>
    )
}

import React from 'react'
import styled from "styled-components"
import Image_1 from "../Assets/images/Rectangle4.png"
import Image_2 from "../Assets/images/group1.png"
import Image_3 from "../Assets/images/Rectangle 7.png"
import Image_4 from "../Assets/images/Rectangle 15.png"
import Image_7 from "../Assets/images/Rectangle 3.png"
import Image_8 from "../Assets/images/Rectangle 3-1.png"
import Image_9 from "../Assets/images/Rectangle12.png"
import Image_10 from "../Assets/images/Rectangle 36-1.png"
import Image_11 from "../Assets/images/Rectangle 35-1.png"
import Image_12 from "../Assets/images/Rectangle 34-1.png"
import Image_13 from "../Assets/images/Group 23.png"
import Image_14 from "../Assets/images/Group2.png"
import Image_15 from "../Assets/images/apso-left.png"
import Image_16 from "../Assets/images/apso-right.png"
import Image_17 from "../Assets/images/arrow-left"
import Image_18 from "../Assets/images/arrow-right"

const SiteHeader = styled("header")`
background: #f3f8f2;

`
const MostPopular = styled("div")`
  &.box{
    width: 260px;
    height: auto;

  }

  &.rotateSideTag{
    transform:rotate(-90deg) ;
    margin-left:-25px ;
  }
`
const ContentWrapper = styled("div")`
/* height: 158px; */
width: 100%;

background-color: #bdbdbd;
  padding: 0px 15px;
`
const WeeklyNews = styled("div")`
  
position: relative;
&.weekly1{
  height: 240px;
}
&.weekly2{
  width: 50%;
}
`
const WeeklySubColumn = styled("div")` 
position: absolute;
z-index: 2;
bottom: 0;
right: 0;
height: 80px;
width: 100%;
background-color: #52454580;
`
const WeeklyColumn = styled("div")` `
const Mentorship = styled("div")`
 &.box{
  width: 263px;
  height: 230px;
  background-color: aliceblue;
  border-radius:20px ;
  margin: 0px px;

 }
 &.scroll{
overflow-x: scroll;
max-width: 1000px;
scroll-behavior:smooth;
 }
 &.rotateSideTag{
    transform:rotate(-90deg) ;
    margin-left:-10px ;
    font-size: 30px;

  }
  &.header{
    color: #f3f8f2;
    padding: 3px 5px;
    background-color: #BA1200;

  }


`
const Upcoming = styled("div")`
  &.smallbox{
    width: 30px;
    height: 40px;
    background-color:${props => props.black ? "#242423" : "#BA1200"};
    
  }
  &.extendedback{
    width: 200%;
    height: 50px;
    
  }
  &.activitybox{
    width: 250px;
    height: 200px;
    background-color: #f3f8f2;
    border: 15px solid #242423;
    box-shadow: 0px  0px 5px 4px #2424237d;
    margin:10px 0px;
  }
  &.wrapper{}
`
const Comment = styled("div")`
&.box{
  min-height:400px ;
  background-color: #BA1200;
}
`
const AboutAuthor = styled("div")`
  &.smallbox{
    width: 30px;
    height: 40px;
    background-color:${props => props.black ? "#242423" : "#BA1200"};
    
  }
  &.box{
    width: 80%;
    margin: 0px auto;
  }
  &.w-limiter{
    max-width: 800px;
  }
  &.w-limiter2{
    max-width: 400px;
  }
  &.divider{
  width: 80%;
  height: 20px;
  margin: 0px auto;
  background-color: #d72713;
}
  &.about{  
  background-color:;
  padding: 30px 20px;
}
&.w-limiter3{
  width: 400px;
}
`
const Footer = styled("div")`
&.box{
  background-color:#242423;
}

`
export default function Homepage() {
  return (
    <div className='' style={{ backgroundColor: "#F3F8F2" }}>
      <SiteHeader className='d-flex justify-content-between py-2'>
        {/* nav  */}
        <div className='px-3'>AmyWrites</div>
        <div className='d-flex justify-content-between'>
          <nav className='mx-3'>LifeStyle

          </nav>
          <nav className='mx-2'>Marriage</nav>
          <nav className='mx-3'>Tech</nav>
        </div>
        <div className='px-3 d-flex d-none'>
          <nav className='mx-2'>Sign-in</nav>
          <div>Icon</div>
          <div></div>
        </div>
      </SiteHeader>
      <div className='row mx-auto py-4'>

        {/* first */}
        <div className='col-lg-8 col-sm-12  mx-auto'>

          <div className=''>Weekly</div>
          <WeeklyColumn className='row'>
            <div className='weekly2 col-lg-6 col-md-12 my-2'>
              <WeeklyNews className=''><img src={Image_1} width="100%" height="500px" alt="" /><WeeklySubColumn>Floating</WeeklySubColumn><WeeklySubColumn>Floating</WeeklySubColumn></WeeklyNews>

            </div>

            <div className='row mx-auto col-lg-6 col-md-12 '>


              <div className='col-sm-6 col-lg-12 my-2'><WeeklyNews className='weekly1'><img src={Image_2} width="100%" height="240px" alt="" /><WeeklySubColumn>Floating</WeeklySubColumn></WeeklyNews></div>
              <div className='col-sm-6 col-lg-12 my-2'> <WeeklyNews className='weekly1'><img src={Image_3} alt="" width="100%" height="240px" /><WeeklySubColumn>Floating</WeeklySubColumn></WeeklyNews></div>
            </div>

          </WeeklyColumn>





        </div>
        <div className='col-lg-4 col-sm-12 mt-md-0 mt-sm-5' >
          <div className='d-flex'><span>Recent</span> <span className='ms-auto'>Icons</span></div>
          <div style={{ height: "500px" }} className='d-flex flex-column justify-content-between my-2' >
            <ContentWrapper>
              <div className='row '>

                <div className='col-8 my-auto'>
                  <div>A working Life</div>
                  <p>Living a life of a God loved
                    child, a true witness and
                    living jesus life of hope jesus life of hope life of hope</p>
                  <div className='d-flex justify-content-between'>
                    <div>Feb 2</div>
                    <div>Read More</div>


                  </div>
                </div>
                <div className='col-4 h-100'>


                  <img src={Image_7} className="w-100 py-3" style={{ height: "158px" }} alt="" />


                </div>


              </div>
            </ContentWrapper>
            <ContentWrapper>
              <div className='row '>

                <div className='col-8 my-auto'>
                  <div>A working Life</div>
                  <p>Living a life of a God loved
                    child, a true witness and
                    living jesus life of hope jesus life of hope life of hope</p>
                  <div className='d-flex justify-content-between'>
                    <div>Feb 2</div>
                    <div>Read More</div>


                  </div>
                </div>
                <div className='col-4 h-100'>


                  <img src={Image_8} className="w-100 py-3" style={{ height: "158px" }} alt="" />


                </div>


              </div>
            </ContentWrapper>
            <ContentWrapper className=''>
              <div className='row '>

                <div className='col-8 my-auto'>
                  <div>A working Life</div>
                  <p>Living a life of a God loved
                    child, a true witness and
                    living jesus life of hope jesus life of hope life of hope</p>
                  <div className='d-flex justify-content-between'>
                    <div>Feb 2</div>
                    <div>Read More</div>


                  </div>
                </div>
                <div className='col-4 h-100'>


                  <img src={Image_7} className="w-100 py-3" style={{ height: "158px" }} alt="" />


                </div>


              </div>
            </ContentWrapper>

          </div>

        </div>

      </div>
      <div >
        <MostPopular className='text-center mb-3'>Most Popular Stories Today</MostPopular>
        <div className='row mx-auto px-lg-5 pb-4 position-relative'>
          <div className='col-md-4 col-sm-12 mb-3'>
            <MostPopular className='box mx-auto'><img src={Image_4} width="260px" height="200px" alt="" />
              <div className='mt-3'> Will non-linear work days be the new hybrid working?</div>
              <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
              <div className=' d-flex'><span className='ms-auto'>LifeStyle</span> </div>

            </MostPopular>
            <MostPopular className='position-absolute start-0 top-50 rotateSideTag'>Most Popular Stories</MostPopular>

          </div>

          <div className='col-md-4 col-sm-12 mb-3'>
            <MostPopular className='box mx-auto'><img src={Image_4} width="260px" height="200px" alt="" />
              <div className='mt-3'> Will non-linear work days be the new hybrid working?</div>
              <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
              <div className=' d-flex'><span className='ms-auto'>LifeStyle</span> </div>
            </MostPopular>

          </div>
          <div className='col-md-4 col-sm-12 mb-3'>
            <MostPopular className='box mx-auto'><img src={Image_4} width="260px" height="200px" alt="" />
              <div className='mt-3'> Will non-linear work days be the new hybrid working?</div>
              <p className='mt-2 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
              <div className='d-flex'><span className='ms-auto'>LifeStyle</span> </div>

            </MostPopular>
          </div>


        </div>


      </div>
      <div className='' style={{ backgroundImage: `url(${Image_9})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", width: "100%", minHeight: "450px" }} >

        <div className='text-center pt-3'><Mentorship className='d-inline header'>Mentorship</Mentorship></div>
        <Mentorship className='row mx-auto  mt-5 pt-5 h-100 position-relative'>
          <Mentorship className='position-absolute start-0 top-50 text-light rotateSideTag'>Mentorship</Mentorship>
          <div style={{ height: "400px" }} className="col-lg-4 col-md-12 ">
            <Mentorship className='box position-relative mx-auto'>
              <div className='position-absolute top-50 start-50 translate-middle' style={{ height: "", width: "234px" }}>
                <div style={{ height: "", width: "234px" }} className="position-relative">
                  <img src={Image_10} height="308px" width="234px" alt="" />

                  <div className='position-absolute'><p style={{ wordBreak: "" }}>fffgggkenhfghjklkjh ghjkjh hnnjjjjj jjjjjjjjjjjjjjjjjjknhwh jf</p> </div>

                </div>

              </div>
            </Mentorship>
          </div>
          <div style={{ height: "400px" }} className="col-lg-4 col-md-12">
            <Mentorship className='box position-relative mx-auto'>
              <div className='position-absolute top-50 start-50 translate-middle' style={{ height: "", width: "234px" }}>
                <div style={{ height: "", width: "234px" }} className="position-relative">
                  <img src={Image_11} height="308px" width="234px" alt="" />

                  <div className='position-absolute'><p style={{ wordBreak: "" }}>fffgggkenhfghjklkjh ghjkjh hnnjjjjj jjjjjjjjjjjjjjjjjjknhwh jf</p> </div>

                </div>

              </div>
            </Mentorship>
          </div>
          <div style={{ height: "400px" }} className="col-lg-4 col-md-12">
            <Mentorship className='box position-relative mx-auto'>
              <div className='position-absolute top-50 start-50 translate-middle' style={{ height: "", width: "234px" }}>
                <div style={{ height: "", width: "234px" }} className="position-relative">
                  <img src={Image_12} height="308px" width="234px" alt="" />

                  <div className='position-absolute'><p style={{ wordBreak: "" }}>fffgggkenhfghjklkjh ghjkjh hnnjjjjj jjjjjjjjjjjjjjjjjjknhwh jf</p> </div>

                </div>

              </div>
            </Mentorship>
          </div>
        </Mentorship>


      </div>
      <div className='' style={{ backgroundColor: "#242423", width: "100%", minHeight: "300px" }} >

        <div className='text-center pt-3'><Mentorship className='d-inline header'>My TechSpace</Mentorship></div>
        <Mentorship className='position-absolute start-0 top-50 text-light rotateSideTag'>My TechSpace</Mentorship>
        <Mentorship className='d-flex mx-auto mt-5 pt-5 h-100 position-relative scroll'>

          <div style={{ height: "400px" }} className="mx-2">
            <Mentorship className='box position-relative'>
              <div className='position-absolute top-50 start-50 translate-middle' style={{ height: "", width: "234px" }}>
                <div style={{ height: "", width: "234px" }} className="position-relative">
                  <img src={Image_10} height="308px" width="234px" alt="" />

                  <div className='position-absolute'><p style={{ wordBreak: "" }}>fffgggkenhfghjklkjh ghjkjh hnnjjjjj jjjjjjjjjjjjjjjjjjknhwh jf</p> </div>

                </div>
 
              </div>
            </Mentorship>
          </div>
          <div style={{ height: "400px" }} className="mx-2">
            <Mentorship className='box position-relative mx-auto'>
              <div className='position-absolute top-50 start-50 translate-middle' style={{ height: "", width: "234px" }}>
                <div style={{ height: "", width: "234px" }} className="position-relative">
                  <img src={Image_11} height="308px" width="234px" alt="" />

                  <div className='position-absolute'><p style={{ wordBreak: "" }}>fffgggkenhfghjklkjh ghjkjh hnnjjjjj jjjjjjjjjjjjjjjjjjknhwh jf</p> </div>

                </div>

              </div>
            </Mentorship>
          </div>
          <div style={{ height: "400px" }} className="mx-2">
            <Mentorship className='box position-relative mx-auto'>
              <div className='position-absolute top-50 start-50 translate-middle' style={{ height: "", width: "234px" }}>
                <div style={{ height: "", width: "234px" }} className="position-relative">
                  <img src={Image_12} height="308px" width="234px" alt="" />

                  <div className='position-absolute'><p style={{ wordBreak: "" }}>fffgggkenhfghjklkjh ghjkjh hnnjjjjj jjjjjjjjjjjjjjjjjjknhwh jf</p> </div>

                </div>

              </div>
            </Mentorship>
          </div>
          <div style={{ height: "400px" }} className="mx-2">
            <Mentorship className='box position-relative mx-auto'>
              <div className='position-absolute top-50 start-50 translate-middle' style={{ height: "", width: "234px" }}>
                <div style={{ height: "", width: "234px" }} className="position-relative">
                  <img src={Image_12} height="308px" width="234px" alt="" />

                  <div className='position-absolute'><p style={{ wordBreak: "" }}>fffgggkenhfghjklkjh ghjkjh hnnjjjjj jjjjjjjjjjjjjjjjjjknhwh jf</p> </div>

                </div>

              </div>
            </Mentorship>
          </div>
          <div style={{ height: "400px" }} className="mx-2">
            <Mentorship className='box position-relative mx-auto'>
              <div className='position-absolute top-50 start-50 translate-middle' style={{ height: "", width: "234px" }}>
                <div style={{ height: "", width: "234px" }} className="position-relative">
                  <img src={Image_12} height="308px" width="234px" alt="" />

                  <div className='position-absolute'><p style={{ wordBreak: "" }}>fffgggkenhfghjklkjh ghjkjh hnnjjjjj jjjjjjjjjjjjjjjjjjknhwh jf</p> </div>

                </div>

              </div>
            </Mentorship>
          </div>
        </Mentorship>


      </div>


      {/* upcoming */}

      <div className='d-flex position-relative my-auto' style={{ minHeight: "350px" }}>
        <Upcoming black className='smallbox position-absolute start-0 top-0'></Upcoming>
        <Upcoming black className='smallbox position-absolute top-0 end-0'></Upcoming>
        <Upcoming className='smallbox position-absolute bottom-0 start-0'></Upcoming>
        <Upcoming className='smallbox position-absolute bottom-0 end-0'></Upcoming>
        <Upcoming className='d-none d-md-block extendedback bg-dark top-50 translate-middle position-absolute'>sdfghjkl;lhg</Upcoming>
        <Upcoming className='d-md-flex my-3 my-md-0 justify-content-evenly align-items-center position-relative' style={{ width: "100%" }}>

          <Upcoming className='activitybox mx-auto  position-relative'><div
            className='position-absolute fixed-bottom h-25 p-1 bg-danger'> Hello Word</div></Upcoming>



          <div>

            <Upcoming className='activitybox mx-auto'></Upcoming>
          </div>
          <Upcoming className='activitybox mx-auto'></Upcoming>

        </Upcoming>

        <div>
          <div></div>
        </div>
      </div>


      <Comment className='box position-relative'>
          <div className='position-absolute top-50 p-2'><img src={Image_17} alt="" /></div>
          <div className='position-absolute top-50 end-0 p-2'><img src={Image_18} alt="" /></div>
        <div className='py-4 position-relative h-100' >
          <div className='position-absolute ms-5 mt-2  top-0 p-2 '><img src={Image_15} alt="" /></div>
          <div className='position-absolute me-5 mb-2 end-0 bottom-0 p-2'><img src={Image_16} alt="" /></div>
       
          <div className='d-flex flex-column my-3 align-items-center justify-content-cnter  w-75  mx-auto '>
            <img src={Image_14} alt="" width="auto" height="200px"/>
            <div className='mt-2 mb-2'>Loveth Chikamso Okoronkwo</div>
            <p>
              Lorem ipsum dolor sit ametLoLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametrem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorem quis quisquam! Delectus quo tem po
              </p>
          </div>
        </div>
      

      </Comment>
      <div className='position-relative pb-5'>
        <AboutAuthor className='smallbox position-absolute top-0 end-0'></AboutAuthor>
        <AboutAuthor className='smallbox position-absolute top-0 start-0'></AboutAuthor>
        
        <div title='About Author' className='pt-5 pb-4 text-center'>About Arthur</div>
        <AboutAuthor className='d-md-flex box w-limiter justify-content-evenly align-items-center'>
          <AboutAuthor className='d-flex'><img src={Image_13} alt="" width="200px" className='mx-auto'/></AboutAuthor>
          <AboutAuthor className='w-limiter2 mt-3 mt-md-0 mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero earum ratione minus. Inventore numquam accusamus facilis. Rerum, dignissimos, voluptate alias esse sint expedita asperiores, natus sit ut maiores quia quam.</AboutAuthor>

        </AboutAuthor>


        
      </div>
      <AboutAuthor className='divider'></AboutAuthor>
      <AboutAuthor className='about d-flex justify-content-around position-relative about mt-4'>
     <AboutAuthor black className='smallbox position-absolute bottom-0 start-0'></AboutAuthor>
        <AboutAuthor black className='smallbox position-absolute bottom-0 end-0'></AboutAuthor>
        <AboutAuthor className='w-limiter3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque totam, voluptates molestiae inventore possimus temporibus earum labore velit rerum officia sunt, cupiditate voluptatibus quae quibusdam rem pariatur libero quisquam delectus!</AboutAuthor>
        <div className=''>
          <ul>
          <li>Contact Us</li>
          <li>Advertise</li>
          <li>Customer care</li>
          </ul>
          </div>
      </AboutAuthor>
   
      <Footer className='box py-2 text-center'> Built By kingsey
        
      </Footer>

    </div>
  )
}

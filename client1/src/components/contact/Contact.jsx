import Footer from "../footer/Footer"
import MailList from "../mailList/MailList"
import Navbar from "../navbar/Navbar"
import "./contact.css"
// import shreyan from "./images/shreyan.jpeg"
// import harsha from "./images/harsha.jpeg"



const Contact =()=>{

  
  
  
    
    return(
        <div>
            <Navbar/>
            
            
<hr/>
<div class="terms1">
<h1 class= "ls">Founders......</h1>
    <table  cellpadding="80" >
      <tr>
        <td>
          <ul>
             
             {/* <img src={shreyan}  className="pl" /> */}
             <li class="lb">Ammar.</li>
             <li class="lb">9849757556.</li>
             <li class="lb">abc@gmail.com</li>
             <li class="lb">Software Developer</li>
          </ul>
        </td>
        <td>
          
        </td>
        {/* <td>
          <ul>
          <img src={harsha} className="pl"/>
            <li class="lb" >SRIHARSHA SUTRAVE.</li>
            <li class="lb">9381671576.</li>
            <li class="lb">sriharshasutrave@gmail.com</li>
            <li class="lb">Software Developer</li>

          </ul>
        </td> */}

      </tr>
    </table>
        
        </div>
        <MailList/>
        <br />
        <br />

        <div className="ft">
            <Footer/>
            </div>
        </div>
    )
        
        
}

export default Contact
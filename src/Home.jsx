import React from 'react'
import "./Home.css"

const Home = () => {
    const Australia=()=>{
        console.log("a")

        //
        const elements = document.querySelectorAll("#a-state");

        elements.forEach(element => {
            element.style.display = "block";
        });

        //
        const elements2 = document.querySelectorAll("#i-state");

        elements2.forEach(element => {
            element.style.display = "none";
        });

        //
        const elements3 = document.querySelectorAll("#u-state");

        elements3.forEach(element => {
            element.style.display = "none";
        });

        ///
        document.querySelector(".a-country").style.background="rgb(244,204,204)"
        document.querySelector(".i-country").style.background="white"
        document.querySelector(".u-country").style.background="white"


    }

    const India=()=>{
        console.log("i")

         //
         const elements = document.querySelectorAll("#a-state");

         elements.forEach(element => {
             element.style.display = "none";
         });
 
         //
         const elements2 = document.querySelectorAll("#i-state");
 
         elements2.forEach(element => {
             element.style.display = "block";
         });
 
         //
         const elements3 = document.querySelectorAll("#u-state");
 
         elements3.forEach(element => {
             element.style.display = "none";
         });

          ///
        document.querySelector(".i-country").style.background="rgb(244,204,204)"
        document.querySelector(".a-country").style.background="white"
        document.querySelector(".u-country").style.background="white"
    }

    const United=()=>{
        console.log("u")

         //
         const elements = document.querySelectorAll("#a-state");

         elements.forEach(element => {
             element.style.display = "none";
         });
 
         //
         const elements2 = document.querySelectorAll("#i-state");
 
         elements2.forEach(element => {
             element.style.display = "none";
         });
 
         //
         const elements3 = document.querySelectorAll("#u-state");
 
         elements3.forEach(element => {
             element.style.display = "block";
         });

          ///
        document.querySelector(".u-country").style.background="rgb(244,204,204)"
        document.querySelector(".i-country").style.background="white"
        document.querySelector(".a-country").style.background="white"
    }

  return (
    <div>
      <table>
        <tr>
            <td className='a-country' onClick={()=>Australia()}>Australia</td>
            <td id='a-state'>New South Wales</td>
            <td id='i-state'>Gujarat</td>
            <td id='u-state'>New York</td>
        </tr>
        <tr>
            <td className='i-country' onClick={()=>India()}>India</td>
            <td id='a-state'>Victoria</td>
            <td id='i-state'>Goa</td>
            <td id='u-state'>North Carolina</td>
        </tr>
        <tr>
            <td className='u-country'  onClick={()=>United()}>United States</td>
            <td id='a-state'>Queensland</td>
            <td id='i-state'>Madhya Pradesh</td>
            <td id='u-state'>Ohio</td>
        </tr>
        <tr>
            <td className='tdover'></td>
            <td id='a-state'>South Australia</td>
            <td id='i-state'>Maharashtra</td> 
            <td id='u-state'>Oregon</td>
        </tr>
        <tr>
            <td className='tdover'></td>
            <td className='tdover' id='a-state'></td>
            <td id='i-state'>Rajasthan</td> 
            <td className='tdover' id='u-state'></td>
        </tr>
      </table>
    </div>
  )
}

export default Home

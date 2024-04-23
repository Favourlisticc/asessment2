import Image from "next/image";
import { Inter } from "next/font/google";
import Firstcomponent from "./components/first";
import logo from "../public/image01.png"
import powersystemimg from "../public/image02a2b0.png"
import day2img from "../public/image05a2b0.png"
import man from "../public/image06a2b0.jpg"
import 'animate.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div id="" className="">


      <div id="container06" className="style7 container columns full screen">
      <div className="wrapper">
        <div className="inner mx-20 max-sm:mx-0" data-onvisible-trigger="1">
          <div>
            <div id="image01" className="style3 image" style={{ opacity: 1, transform: 'none' }}>
              <span className="frame">
              <Image src={logo} alt=""/>
              </span>
            </div>
          </div>
          <div>
            <ul id="buttons05" className="style5 buttons" style={{ opacity: 1, transform: 'none' }}>
              <li><a href="https://cal.com/janismjartans/my-paid-community-discovery-call" className="button n01">Book Discovery Call</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="container05" className="style1 container default full max-sm:mt-5">
      <div className="wrapper">
        <div className="inner" data-onvisible-trigger="1">
          <h1 id="text05" className="style16 text-xl" style={{ opacity: 1, transform: 'none' }}>
            Launch your high-ticket power offer in <mark>under 30 days</mark>
          </h1>
          <p id="text10" className="style20" style={{ opacity: "1" }}>
            Helping coaches & creators unlock an additional $25k p/m with paid communities & high-ticket offers.
          </p>
          <div id="image02" className="style4 image full" style={{ opacity: 1, transform: 'none' }}>
            <span className="frame">
              <Image src={powersystemimg} alt="" className="w-10" onContextMenu={() => false} onDragStart={() => false} />
            </span>
          </div>
        </div>
      </div>
    </div>


    <h2 id="text09" class="style5 max-sm:mt-10 max-sm:text-center   " style={{opacity: 1, transform: "none"}}>This might sound familiar to you:</h2>

    <div id="list02" className="style1 list ml-44 max-sm:ml-10 max-sm:mr-10 max-sm:mt-5">
      <ol>
        <li>
          <p>You’re creating content or are building your coaching business.</p>
        </li>
        <li>
          <p>You’ve grown a medium-sized following on Instagram, X, or LinkedIn.</p>
        </li>
        <li>
          <p>You’re looking to scale your business through high-ticket offers & paid communities.</p>
        </li>
      </ol>
    </div>

    <div id="" className="style8 container w-2/3 ml-48 max-sm:w-96 max-sm:ml-6 ">
      <div className="wrapper">
        <div className="inner" data-onvisible-trigger="1">
          <h2 id="text08" className="style5   " style={{ opacity: 1, transform: 'none' }}>Except there’s a problem:</h2>
          <div id="list03" className="style1 list">
            <ol>
              <li>
                <p>You don’t know where to begin.</p>
              </li>
              <li>
                <p>You don’t know how to set everything up.</p>
              </li>
              <li>
                <p>You don’t know what tools to use to build your business.</p>
              </li>
              <li>
                <p>You don’t want to spend time on something that might not work out.</p>
              </li>
              <li>
                <p>You don’t know what to sell to your audience, and how to validate different ideas.</p>
              </li>
            </ol>
          </div>
          <ul id="buttons02" className="style1 buttons" style={{ opacity: 1, transform: 'none' }}>
            <li>
              <a href="https://cal.com/janismjartans/my-paid-community-discovery-call" className="button n01">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"></path></svg>
                <span className="label">Schedule Call</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <h2 id="" className=" text-white text-center text-3xl   " style={{opacity: 1, transform: "none"}}>That's where I come in:</h2>
    <p id="" class="text-gray-300 text-center text-xl font-light mx-72 max-sm:mx-0   animate__delay-2s" style={{opacity: 1}}>I take care of your background operations, advise you, and support you - allowing you to scale and spend less time working on your business.</p>

    <div id="container08" className="style8 container default  w-2/3 ml-48 max-sm:w-96 max-sm:ml-6">
      <div className="wrapper">
        <div className="inner" data-onvisible-trigger="1">
          <h2 id="text18" className="style10" style={{ opacity: 1, transform: 'none' }}>
            This is how we're going to add $10k/month to your business in the next 30 days:
          </h2>
          <div id="list01" className="style1 list">
            <ol>
              <li><p>Come up with the offer &amp; strategy</p></li>
              <li><p>Choose the right toolstack &amp; pricing</p></li>
              <li><p>Build your high-ticket offer/paid community</p></li>
              <li><p>Launch the your high-ticket offer/paid community</p></li>
            </ol>
          </div>
          <ul id="buttons07" className="style1 buttons" style={{ opacity: 1, transform: 'none' }}>
            <li>
              <a href="https://cal.com/janismjartans/my-paid-community-discovery-call" className="button n01">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"></path></svg>
                <span className="label">Schedule Call</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

        <div className="flex mb-10 max-sm:flex-col-reverse">

          <div className="w-1/2 max-sm:w-full  animate__slideInLeft ">
            <div id="" className="" style={{ opacity: 1, transform: 'none' }}>
              <span className="frame">
                <Image src={day2img} alt="" className="w-52 ml-40 max-sm:ml-28 max-sm:mt-20 " onContextMenu={() => false} onDragStart={() => false} />
              </span>
            </div>
            <p id="text02" className="style2" style={{ opacity: 1, transform: 'none' }}>
              <span className="p"><strong>@Davzskill</strong><br /> YouTuber &amp; Creator</span>
            </p>
          </div>

          <div className="w-2/3 mt-20 max-sm:mt-5 max-sm:w-full  animate__bounceInUp ">
            <h3 id="" className="style3 text-xl" style={{ opacity: 1, transform: 'none', fontSize: "25px" }}>
              <mark>$11,315</mark> in recurring revenue in just <mark>20 days</mark>
            </h3>
            <p id="=" className="text-gray-300 leading-9 text-center max-sm:mx-10" style={{ opacity: 1 }}>
              <span className="">"My Paid Community helped me unlock a new revenue stream from my audience. After just 20 days of working together, we managed to launch a highly-engaged paid community."</span>
              <span className="">Janis is extremely knowledgeable and knows how to find the right balance between hand-holding and executing."</span>
            </p>
          </div>

        </div>


    <div id="container02" className="style4 container columns full screen">
      <div className="wrapper">
        <div className="inner" data-onvisible-trigger="1" data-reorder="0,1">
          <div>
            <h2 id="text03" className="style3" style={{ opacity: 1, transform: 'none' }}>
              About <mark>My Paid Community</mark>
            </h2>
            <p id="text12" className="style4  animate__zoomInDown animate__delay-2s" style={{ opacity: 1 }}>
              <span className="p">I worked for 5+ years at a fast-paced startup as a Creator Success Manager, helping 75+ creators &amp; artists build audiences, monetize their content, and grow their businesses.</span>
              <span className="p">Now I help coaches &amp; creators with custom subscription-based communities and high-ticket digital products.</span>
            </p>
            <ul id="buttons06" className="style6 buttons" style={{ opacity: 1, transform: 'none' }}>
              <li><a href="https://cal.com/janismjartans/my-paid-community-discovery-call" className="button n01">Schedule Call</a></li>
            </ul>
          </div>
          <div>
            <div id="image06" className="style5 image max-sm:ml-20  animate__slideInRight " style={{ opacity: 1, transform: 'none' }}>
              <span className="frame"><Image src={man} alt="" onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} /></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Firstcomponent/>

    <ul id="icons01" className="style1 icons">
    <li style={{ opacity: 1, transform: 'none' }}>
      <a className="n01  animate__zoomInDown " href="https://twitter.com/JanisMjartans" aria-label="Twitter">
      <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5" aria-hidden="true"><path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path></svg>
        <span className="label">Twitter</span>
      </a>
    </li>
    <li style={{ opacity: 1, transform: 'none' }}>
      <a className="n02  animate__zoomInDown animate__delay-2s" href="https://www.linkedin.com/in/janismjartans/" aria-label="LinkedIn">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>

        <span className="label">LinkedIn</span>
      </a>
    </li>
    <li style={{ opacity: 1, transform: 'none' }}>
      <a className="n03  animate__zoomInDown animate__delay-3s" href="mailto:janis@example.com" aria-label="Email">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M17 3.5H7c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5Zm.47 6.09-3.13 2.5c-.66.53-1.5.79-2.34.79-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.77.77 0 0 1-.12-1.06c.26-.32.73-.38 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.11 1.06Z" fill="#ffffff"></path></svg>
        <span className="label">Email</span>
      </a>
    </li>
  </ul>

  <p id="text04" class="style1  animate__fadeIn   " style={{opacity: 1}}>hello@mypaidcommunity.com</p>
  <p id="text43" class="style1" style={{opacity: 1}}>© 2024 My Paid Community. All rights reserved.</p>

  <button className="z-50 fixed md:bottom-6 bottom-4 flex h-16 origin-center bg-red-50 transform cursor-pointer items-center rounded-full py-4 px-6 text-base outline-none drop-shadow-md transition focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50 active:scale-95 md:right-10 right-4"
    style={{backgroundColor: 'rgb(47, 104, 216)', color: 'rgb(255, 255, 255)'}}>
        <div id="button-icon" className="mr-3 flex items-center justify-center" style={{display: 'block'}}>

         <svg className="h-7 w-7" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.995 13.7h.01M8.294 13.7h.01M8.294 16.7h.01" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
       </div>
       <div id="button" className="font-semibold leading-5 antialiased text-white">Schedule call (1 space available)</div>
</button>

    </div>
  );
}

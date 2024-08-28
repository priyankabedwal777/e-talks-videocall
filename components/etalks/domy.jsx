// import React from 'react';
// import Image from 'next/image';
// import etalkbg from "../../public/images/etalkbg.webp";
// import domy1 from "../../public/images/domy1.webp"
// import domy2 from "../../public/images/domy2.webp"

// const EasyCampusEtalks = () => {
//   return (
//     <div className='etalk-overlay'>
//          <Image src={etalkbg} alt='etalkbg' className='h-[125vh] w-[100%] relative'/>
//          <div className='absolute inset-0 flex justify-center items-center'>
//          <div className='mr-5'>
//            <div className='grid grid-cols-3 gap-[3px]'>
//             <div className='bg-[#1e336a] p-[7px] rounded-ss-xl'></div>
//             <div className='bg-[#1e336a] p-[7px]'></div>
//             <div className='bg-[#1e336a] p-[7px]  rounded-se-xl'></div>
//             <div className='bg-[#1e336a] p-[7px]'></div>
//             <div className='bg-[#1e336a] p-[7px]'></div>
//             <div className='bg-[#1e336a] p-[7px]'></div>
//             <div className='bg-[#1e336a] p-[7px] rounded-es-xl'></div>
//             <div className='bg-[#1e336a] p-[7px]'></div>
//             <div className='bg-[#1e336a] p-[7px] rounded-ee-xl'></div>
//            </div>

//            <div className='grid grid-cols-2 my-10 gap-[3px]'>
//             <div className='flex'>
//             <div className='bg-[#1e336a] p-[7px] rounded-s-xl'></div>
//             <div className='bg-[#1e336a] p-[7px]'></div>
//             </div>
//             <div className='grid gap-[3px]'>
//             <div className='bg-[#1e336a] p-[7px]  rounded-se-xl'></div>
//             <div className='bg-[#1e336a] p-[7px]'></div>
//             <div className='bg-[#1e336a] p-[7px] rounded-ee-xl'></div>
//             </div>
//            </div>
//            <div className='grid grid-cols-2 gap-[3px] my-2'>
//             <div className='bg-[#1e336a] p-[11px] rounded-ss-xl'></div>
//             <div className='bg-[#1e336a] p-[11px]  rounded-se-xl'></div>
//             <div className='bg-[#1e336a] p-[11px] rounded-es-xl'></div>
//             <div className='bg-[#1e336a] p-[11px] rounded-ee-xl'></div>
//            </div>
//            <div className='mt-10'>
//            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15 text-[#51a9ff]">
//            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//           </svg>
//            </div>
//           </div>
//         <div className='grid grid-cols-1 lg:grid-cols-2'>
//           <div className='video-overlay'>
//              {/* <Image src={domy2} alt='domy2' className='h-[500px] w-[100%]'/> */}
//           </div>
//           <div className=''>
//                <Image src={domy1} alt='domy1' className='h-[500px] w-[100%]'/>
//           </div>
//         </div>
//         </div>
//         <div className='absolute bottom-0  w-full'>
//            <div className='flex justify-center items-center'>
//            <ul className="example-2">
//            <li className="icon-content">
//            <div className='e-talk-icon'>
//           <div className="filled" />
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
// </svg>
//         </div>
//         <div className="tooltip">Sound</div>
//           </li>
//           <li className="icon-content">
//           <div className='e-talk-icon'>
//           <div className="filled" />
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
// </svg>

//         </div>
//         <div className="tooltip">Mute</div>
//           </li>
//           <li className="icon-content">
//           <div className='e-talk-icon'>
//           <div className="filled" />
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
// </svg>
//         </div>
//         <div className="tooltip">Video</div>
//           </li>
//           <li className="icon-content">
//           <div className='e-talk-icon'>
//           <div className="filled" />
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
// </svg>
//         </div>
//         <div className="tooltip">Chat</div>
//           </li>
//           <li className="icon-content">
//           <div className='e-talk-icon'>
//           <div className="filled" />
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//   <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
// </svg>
//         </div>
//         <div className="tooltip">Record</div>
//           </li>
//           <li className="icon-content">
//           <div className='e-talk-icon'>
//           <div className="filled" />
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
// </svg>

//         </div>
//         <div className="tooltip">Participants</div>
//           </li>
//           <li className="icon-content">
//           <div className='e-talk-icon'>
//           <div className="filled" />
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//   <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
// </svg>
//         </div>
//         <div className="tooltip">Polls</div>
//           </li>
//           <li className="icon-content">
//           <div className='e-talk-icon'>
//           <div className="filled" />
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
// </svg>
//         </div>
//         <div className="tooltip">Split Screen</div>
//           </li>
//           <li className="icon-content">
//           <div className='e-talk-icon'>
//           <div className="filled" />
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//   <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
// </svg>
//         </div>
//         <div className="tooltip">White Board</div>
//           </li>
//           <li className="icon-content">
//           <div className='e-talk-icon'>
//           <div className="filled" />
//           <svg
//            xmlns="http://www.w3.org/2000/svg" 
//            fill="none" viewBox="0 0 24 24" 
//            strokeWidth={1.5} 
//            stroke="currentColor" 
//            className="bi bi-discord"
//            height="16"
//            width="16"
//            >
//   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
// </svg>
//         </div>
//         <div className="tooltip">More</div>
//           </li>
//           <li className="icon-content">
//         <div className='etalks-endcall-icon'>
//           <div className="filled" />
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75 18 6m0 0 2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
// </svg>

//         </div>
//         <div className="tooltip">End Call</div>
//           </li>
//            </ul> 
//          </div>
//          </div>
//     </div>
//   )
// }

// export default EasyCampusEtalks


// 22222222222222222

import React, { useState } from 'react';
import Image from 'next/image';
import etalkbg from "../../public/images/etalkbg.webp";
import logo1 from "../../public/images/logo1.webp";
import mute from "../../public/svg/mute.svg";
import domy1 from "../../public/images/domy1.webp";
import domy2 from "../../public/images/domy2.webp";
import ScreenButtons from './screenbuttons';


const EasyCampusEtalks = () => {
  const [currentView, setCurrentView] = useState(1); 

  return (
    <div className='etalk-overlay'>
      <Image src={etalkbg} alt='etalkbg' className='h-[125vh] w-full relative' />
      <div className='absolute inset-0 flex justify-center items-center'>
        <div className='mr-5'>
          {/* Button 1 */}
          <div className='mb-10 cursor-pointer' onClick={() => setCurrentView(1)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15 text-[#1e336a]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>

       {/*button 2  */}
          <div className='grid grid-cols-3 gap-[1px] cursor-pointer' onClick={() => setCurrentView(2)}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className={`bg-[#1e336a] p-[6px] ${index === 0 ? 'rounded-ss-xl' : ''} ${index === 2 ? 'rounded-se-xl' : ''}`}></div>
            ))}
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className='bg-[#1e336a] p-[6px]'></div>
            ))}
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className={`bg-[#1e336a] p-[6px] ${index === 0 ? 'rounded-es-xl' : ''} ${index === 2 ? 'rounded-ee-xl' : ''}`}></div>
            ))}
          </div>

          {/* Button 3 */}
          <div className='grid grid-cols-2 my-8 gap-[1px] cursor-pointer' onClick={() => setCurrentView(3)}>
            <div className='flex'>
              <div className='bg-[#1e336a] p-[6px] rounded-s-xl'></div>
              <div className='bg-[#1e336a] p-[6px]'></div>
            </div>
            <div className='grid gap-[1px]'>
              <div className='bg-[#1e336a] p-[6px] rounded-se-xl'></div>
              <div className='bg-[#1e336a] p-[6px]'></div>
              <div className='bg-[#1e336a] p-[5px] rounded-ee-xl'></div>
            </div>
          </div>

          {/* Button 4 */}
          <div className='grid grid-cols-2 gap-[1.5px] my-2 cursor-pointer' onClick={() => setCurrentView(4)}>
            {['rounded-ss-xl', 'rounded-se-xl', 'rounded-es-xl', 'rounded-ee-xl'].map((className, index) => (
              <div key={index} className={`bg-[#1e336a] p-[9px] ${className}`}></div>
            ))}
          </div>
        </div>

        {currentView === 1 && (
          <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='video-overlay-2 text-[#fff]'>
                <div className='flex items-center mt-3'>
                  <Image src={logo1} alt='logo1' className='w-14 h-14 mx-3' />
                  <div className='bg-red-600 px-3 py-2 rounded-lg'>
                    <h5>Live</h5>
                  </div>
                </div>
                <div className='flex justify-between items-end h-[452px]'>
                  <div className='e-talk-morphism-1'>
                    <h5>Dr. Ayushi</h5>
                  </div>
                  <div className='e-talk-morphism-1'>
                    <Image src={mute} alt='mute' className='w-[22px] h-[22px]' />
                  </div>
                </div>
              </div>
              <div className='video-overlay-1 flex justify-between items-end text-[#fff]'>
                <div className='e-talk-morphism-1'>
                  <h5>Aarti</h5>
                </div>
                <div className='e-talk-morphism-1'>
                  <h5>kjgh</h5>
                </div>
              </div>
        </div>
      )}

        {currentView === 2 && (
           <div className='grid grid-cols-1 lg:grid-cols-5'>
           {view2students.map((studenttwoview, index) => (
             <div key={index} className='video-overlay-view2 flex justify-between items-end text-[#fff]'>
               <div className='e-talk-morphism-1'>
                 <h5>{studenttwoview.viewtwoname1}</h5>
               </div>
               <div className='e-talk-morphism-1'>
                    <Image src={mute} alt='mute' className='w-[20px] h-[20.2px]' />
                  </div>
             </div>
           ))}
         </div>
        )}

        {currentView === 3 && (
           <div className='grid grid-cols-2 gap-[5px]'>
           <div className='video-overlay-2 text-[#fff]'>
                <div className='flex items-center mt-3'>
                  <Image src={logo1} alt='logo1' className='w-14 h-14 mx-3' />
                  <div className='bg-red-600 px-3 py-2 rounded-lg'>
                    <h5>Live</h5>
                  </div>
                </div>
                <div className='flex justify-between items-end h-[450px]'>
                  <div className='e-talk-morphism-1'>
                    <h5>Dr. Ayushi</h5>
                  </div>
                  <div className='e-talk-morphism-1'>
                    <Image src={mute} alt='mute' className='w-[22px] h-[22px]' />
                  </div>
                </div>
              </div>
           <div className='grid gap-[4px]'>
           <div className='video-overlay-3 flex justify-between items-end text-[#fff]'>
                <div className='e-talk-morphism-1'>
                  <h5>Aarti Shrma</h5>
                </div>
                <div className='e-talk-morphism-1'>
                    <Image src={mute} alt='mute' className='w-[22px] h-[22px]' />
                  </div>
              </div>
              <div className='video-overlay-3 flex justify-between items-end text-[#fff]'>
                <div className='e-talk-morphism-1'>
                  <h5>Arpita</h5>
                </div>
                <div className='e-talk-morphism-1'>
                    <Image src={mute} alt='mute' className='w-[22px] h-[22px]' />
                  </div>
              </div>
              <div className='video-overlay-3 flex justify-between items-end text-[#fff]'>
                <div className='e-talk-morphism-1'>
                  <h5>Raman</h5>
                </div>
                <div className='e-talk-morphism-1'>
                    <Image src={mute} alt='mute' className='w-[22px] h-[22px]' />
                  </div>
              </div>
           </div>
         </div>
        )}

        {currentView === 4 && (
         <div className='grid grid-cols-1 lg:grid-cols-2'>
             <div className='video-overlay-4 text-[#fff]'>
                <div className='flex items-center mt-3'>
                  <Image src={logo1} alt='logo1' className='w-14 h-14 mx-3' />
                  <div className='bg-red-600 px-3 py-2 rounded-lg'>
                    <h5>Live</h5>
                  </div>
                </div>
                <div className='flex justify-between items-end h-[178px]'>
                  <div className='e-talk-morphism-1'>
                    <h5>Miss. Mehak</h5>
                  </div>
                  <div className='e-talk-morphism-1'>
                    <Image src={mute} alt='mute' className='w-[22px] h-[22px]' />
                  </div>
                </div>
              </div>
             <div className='video-overlay-4 flex justify-between items-end text-[#fff]'>
               <div className='e-talk-morphism-1'>
                 <h5>Sumit</h5>
               </div>
               <div className='e-talk-morphism-1'>
                   <Image src={mute} alt='mute' className='w-[22px] h-[22px]' />
                 </div>
             </div>
             <div className='video-overlay-4 flex justify-between items-end text-[#fff]'>
               <div className='e-talk-morphism-1'>
                 <h5>Gunjan</h5>
               </div>
               <div className='e-talk-morphism-1'>
                   <Image src={mute} alt='mute' className='w-[22px] h-[22px]' />
                 </div>
             </div>
             <div className='video-overlay-4 flex justify-between items-end text-[#fff]'>
               <div className='e-talk-morphism-1'>
                 <h5>Rama</h5>
               </div>
               <div className='e-talk-morphism-1'>
                   <Image src={mute} alt='mute' className='w-[22px] h-[22px]' />
                </div>
             </div>
       </div>
         )}
      </div>
      <ScreenButtons/>
    </div>
  );
};

const view2students = [
    { viewtwoname1: "Student Name", },
    { viewtwoname1: "Aarti", },
    { viewtwoname1: "Vikash",  },
    { viewtwoname1: "Pushpinder",  },
    { viewtwoname1: "Harry",  },
    { viewtwoname1: "Herlyn", },
    { viewtwoname1: "Cysis", },
    { viewtwoname1: "Ciya",  },
    { viewtwoname1: "Urvashi",  },
    { viewtwoname1: "Rohan",  },
    { viewtwoname1: "Rohit", },
    { viewtwoname1: "Anu", },
    { viewtwoname1: "Anamika",  },
    { viewtwoname1: "Diksha",  },
    { viewtwoname1: "Shiv",  },
    { viewtwoname1: "Reena", },
    { viewtwoname1: "Lakshy", },
    { viewtwoname1: "Radha",  },
    { viewtwoname1: "Sivansh",  },
    { viewtwoname1: "Siksha",  },
  ];

export default EasyCampusEtalks;


//  <div className='mr-5'>
{/* <div className='mb-10 cursor-pointer' onClick={() => setCurrentView(1)}>
{/* Button 1 */}
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15 text-[#1e336a]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</div>

<div className='grid grid-cols-3 gap-[1px] e-talk-clickable' onClick={() => setCurrentView(2)}>
{/* Button 2 */}
// {Array.from({ length: 3 }).map((_, index) => (
//   <div key={index} className={`bg-[#1e336a] p-[6px] ${index === 0 ? 'rounded-ss-xl' : ''} ${index === 2 ? 'rounded-se-xl' : ''}`}></div>
// ))}
// {Array.from({ length: 3 }).map((_, index) => (
//   <div key={index} className='bg-[#1e336a] p-[6px]'></div>
// ))}
// {Array.from({ length: 3 }).map((_, index) => (
//   <div key={index} className={`bg-[#1e336a] p-[6px] ${index === 0 ? 'rounded-es-xl' : ''} ${index === 2 ? 'rounded-ee-xl' : ''}`}></div>
// ))}
// </div>

// <div className='grid grid-cols-2 my-8 gap-[1px]  ' onClick={() => setCurrentView(3)}>
// {/* Button 3 */}
// <div className='flex e-talk-clickable'>
//   <div className='bg-[#1e336a] p-[6px] rounded-s-xl'></div>
//   <div className='bg-[#1e336a] p-[6px]'></div>
// </div>
// <div className='grid gap-[1px] e-talk-clickable'>
//   <div className='bg-[#1e336a] p-[6px] rounded-se-xl'></div>
//   <div className='bg-[#1e336a] p-[6px]'></div>
//   <div className='bg-[#1e336a] p-[5px] rounded-ee-xl'></div>
// </div>
// </div>

// <div className='grid grid-cols-2 gap-[1.5px] my-2   e-talk-clickable' onClick={() => setCurrentView(4)}>
// {/* Button 4 */}
// {['rounded-ss-xl', 'rounded-se-xl', 'rounded-es-xl', 'rounded-ee-xl'].map((className, index) => (
//   <div key={index} className={`bg-[#1e336a] p-[9px] ${className}`}></div>
// ))}
// </div>
// </div> */} */}



import React, { useState } from 'react';
import Image from 'next/image';
import etalkbg from '../../public/images/etalkbg.webp';
import logo1 from '../../public/images/logo1.webp';
import mute from '../../public/svg/mute.svg';
import ScreenButtons from './screenbuttons';
import domyimg from "../../public/images/domy1.webp";

const view2students = [
  "Student Name", "Aarti", "Vikash", "Pushpinder", "Harry", "Herlyn",
  "Cysis", "Ciya", "Urvashi", "Rohan", "Rohit", "Anu", "Anamika",
  "Diksha", "Shiv", "Reena", "Lakshy", "Radha", "Sivansh", "Siksha"
];

const view3students = [
  { name: "Aarti Shrma" },
  { name: "Arpita" },
  { name: "Raman" },
];

const EasyCampusEtalks = () => {
  const [currentView, setCurrentView] = useState(1);

  const activeBgColor = '#51a9ff';
  const inactiveBgColor = '#1e336a';
  const activeTextColor = '#51a9ff';
  const inactiveTextColor = '#1e336a';

  const renderStudentView2 = () => (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-5 gap-1'>
      {view2students.map((student, index) => (
        <div key={index} className='video-overlay-view2 flex justify-between items-end text-[#fff]'>
          <div className='e-talk-morphism-1'>
            <h5>{student}</h5>
          </div>
          <div className='e-talk-morphism-1'>
            <Image src={mute} alt='mute' className='w-[20px] h-[20.2px]' />
          </div>
        </div>
      ))}
    </div>
    </>
  );

  const renderStudentView3 = () => (
    <>
    <div className='grid grid-cols-2 gap-[5px]'>
      <div className='video-overlay-2 text-[#fff]'>
        <div className='flex items-center mt-3'>
          <Image src={logo1} alt='logo1' className='w-14 h-14 mx-3' />
          <div className='bg-red-600 px-3 py-2 rounded-lg'>
            <h5>Live</h5>
          </div>
        </div>
        <div className='flex justify-between items-end h-[543px]'>
          <div className='e-talk-morphism-1'>
            <h5>Dr. Ayushi</h5>
          </div>
          <div className='e-talk-morphism-1'>
            <Image src={mute} alt='mute' className='w-[22px] h-[22px]' />
          </div>
        </div>
      </div>
      <div className='grid gap-[4px]'>
        {view3students.map((student, index) => (
          <div key={index} className='video-overlay-3 flex justify-between items-end text-[#fff]'>
            <div className='e-talk-morphism-1'>
              <h5>{student.name}</h5>
            </div>
            <div className='e-talk-morphism-1'>
              <Image src={mute} alt='mute' className='w-[22px] h-[22px]' />
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );

  const renderStudentView4 = () => (
  <>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
    <div className='video-overlay-4 text-[#fff]'>
      <div className='flex items-center mt-3'>
        <Image src={logo1} alt='logo1' className='w-14 h-14 mx-3' />
        <div className='bg-red-600 px-3 py-2 rounded-lg'>
          <h5>Live</h5>
        </div>
      </div>
      <div className='flex justify-between items-end h-[236px]'>
        <div className='e-talk-morphism-1'>
          <h5>Miss. Mehak</h5>
        </div>
        <div className='e-talk-morphism-1'>
          <Image src={mute} alt='mute' className='w-[22px] h-[22px]'/>
        </div>
      </div>
    </div>
    {[ 'Sumit', 'Gunjan', 'Rama' ].map((name, index) => (
      <div key={index} className='video-overlay-4 flex justify-between items-end text-[#fff]'>
        <div className='e-talk-morphism-1'>
          <h5>{name}</h5>
        </div>
        <div className='e-talk-morphism-1'>
          <Image src={mute} alt='mute' className='w-[22px] h-[22px]' />
        </div>
      </div>
    ))}
  </div>
  </>
  );

  return (
    <div className='etalk-overlay'>
      <Image src={etalkbg} alt='etalkbg' className='h-[125vh] w-full relative' />
      <div className='absolute inset-0 flex justify-center items-center mb-[5rem]'>
      <div className='mr-5'>
      {/* Button 1 */}
      <div className='mb-10 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110'
        onClick={() => setCurrentView(1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-15"
          style={{
            color: currentView === 1 ? activeTextColor : inactiveTextColor,
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>

      {/* Button 2 */}
      <div
        className='grid grid-cols-3 gap-[1px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110'
        onClick={() => setCurrentView(2)}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`p-[6px] ${
              index === 0 ? 'rounded-ss-lg' : ''
            } ${index === 2 ? 'rounded-se-lg' : ''}`}
            style={{
              backgroundColor: currentView === 2 ? activeBgColor : inactiveBgColor,
            }}
          ></div>
        ))}
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className='p-[6px]'
            style={{
              backgroundColor: currentView === 2 ? activeBgColor : inactiveBgColor,
            }}
          ></div>
        ))}
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`p-[6px] ${
              index === 0 ? 'rounded-es-lg' : ''
            } ${index === 2 ? 'rounded-ee-lg' : ''}`}
            style={{
              backgroundColor: currentView === 2 ? activeBgColor : inactiveBgColor,
            }}
          ></div>
        ))}
      </div>

      {/* Button 3 */}
      <div
        className='grid grid-cols-2 my-8 gap-[1px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110'
        onClick={() => setCurrentView(3)}
      >
        <div className='flex'>
          <div
            className='p-[6px] rounded-s-lg'
            style={{
              backgroundColor: currentView === 3 ? activeBgColor : inactiveBgColor,
            }}
          ></div>
          <div
            className='p-[6px]'
            style={{
              backgroundColor: currentView === 3 ? activeBgColor : inactiveBgColor,
            }}
          ></div>
        </div>
        <div className='grid gap-[1px]'>
          <div
            className='p-[6px] rounded-se-lg'
            style={{
              backgroundColor: currentView === 3 ? activeBgColor : inactiveBgColor,
            }}
          ></div>
          <div
            className='p-[6px]'
            style={{
              backgroundColor: currentView === 3 ? activeBgColor : inactiveBgColor,
            }}
          ></div>
          <div
            className='p-[5px] rounded-ee-lg'
            style={{
              backgroundColor: currentView === 3 ? activeBgColor : inactiveBgColor,
            }}
          ></div>
        </div>
      </div>

      {/* Button 4 */}
      <div
        className='grid grid-cols-2 gap-[1px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110'
        onClick={() => setCurrentView(4)}
      >
        {['rounded-ss-lg', 'rounded-se-lg', 'rounded-es-lg', 'rounded-ee-lg'].map(
          (className, index) => (
            <div
              key={index}
              className={`p-[8.5px] ${className}`}
              style={{
                backgroundColor: currentView === 4 ? activeBgColor : inactiveBgColor,
              }}
            ></div>
          )
        )}
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
              <div className='flex justify-between items-end h-[543px]'>
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
                  <Image src={mute} alt='mute' className='w-[22px] h-[22px]' />
                </div>
            </div>
          </div>
        )}

        {currentView === 2 && renderStudentView2()}
        {currentView === 3 && renderStudentView3()}
        {currentView === 4 && renderStudentView4()}
      </div>

      <ScreenButtons />
    </div>  
  );
};

export default EasyCampusEtalks;

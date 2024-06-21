'use client';

import React, { useState } from 'react';
import GaiaButton from './ui/GaiaButton';
import Calender from './Calender';
import Profile from './Profile';

const GaiaLearn = () => {
  const [selected, setSelected] = useState('Calendar');

  return (
    <div className="mt-4 ml-8"> {/* Added margin to the left */}
      <div className="font-bold inline-flex space-x-4 bg-gray-200 py-2 px-4 rounded-md inline-block"> {/* Adjusted styles here */}
        <GaiaButton text="Calendar" onClick={() => setSelected('Calendar')} isActive={selected === 'Calendar'} />
        <GaiaButton text="Profile" onClick={() => setSelected('Profile')} isActive={selected === 'Profile'} />
      </div>
      <div className="mt-4">
        {selected === 'Calendar' && <div><Calender /></div>}
        {selected === 'Profile' && <div><Profile /></div>}
      </div>
    </div>
  );
};

export default GaiaLearn;
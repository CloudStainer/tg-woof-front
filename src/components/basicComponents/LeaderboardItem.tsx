/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface LeaderboardItemProps {
  rank: number;
  initial: string;  
  name: string;
  points: string;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ rank, initial, name, points }) => {
  return (
    <div className={`flex items-center justify-between px-3 py-1 border ${rank === 1 ? 'border-yellow-300' : 'border-slate-500'} rounded-xl`}>
      <div className="flex items-center">
        <div className={`relative border border-${rank === 1 ? 'yellow-400' : 'blue-900'} font-semibold rounded-lg w-8 h-8 flex items-center justify-center`}>
          {rank === 1 && <img className='absolute -top-2 -right-2' width={20} src="/assets/first.png" alt="" />}
          {rank === 2 && <img className='absolute -top-2 -right-2' width={20} src="/assets/second.png" alt="" />}
          {rank === 3 && <img className='absolute -top-2 -right-2' width={20} src="/assets/third.png" alt="" />}
          {initial}
        </div>
        <div className="ml-4">
          <p className="text-sm font-semibold">{name}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-400">Total Paws</p>
        <p className="text-lg font-semibold">{points}</p>
      </div>
    </div>
  );
};

export default LeaderboardItem;

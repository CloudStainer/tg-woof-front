/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import TaskButton from "./TaskButton";
import { useWalletContext } from "./Web3Context";

interface Task {
  text: string;
  image: string;
  state: boolean;
}

// Function to map the dynamic data to the tasks array
const mapTasks = (data: any): Task[] => [
  {
    text: "Share Paws Story",
    image: "pawstory",
    state: Boolean(data?.daily_share_paws_story < 1),
  },
  {
    text: "Make a Transaction",
    image: "transaction",
    state: Boolean(data?.daily_make_transaction < 1),
  },
  {
    text: "Be a Good Dog",
    image: "gooddog",
    state: Boolean(data?.daily_begood_dog < 1),
  },
  {
    text: "Subscribe to our YouTube channel",
    image: "youtube",
    state: Boolean(data?.daily_youtube_channel < 1),
  },
  {
    text: "Follow us on X.com",
    image: "x",
    state: Boolean(data?.daily_x_channel < 1),
  },
  {
    text: "Subscribe to Notcoin",
    image: "notcoin",
    state: Boolean(data?.daily_notcoin < 1),
  },
  {
    text: "Invite 3 Friends",
    image: "invite",
    state: Boolean(data?.daily_invite_friends < 1),
  },
];

const DailyTask: React.FC = () => {
  const { walletAddress } = useWalletContext();
  const [tasksData, setTasksData] = useState<Task[]>([]);

  const fetchDailyPaws = async () => {
    try {
      const response = await fetch(`/api/tasks/${walletAddress}`);
      const data = await response.json();
      setTasksData(mapTasks(data));
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  useEffect(() => {
    if (walletAddress) {
      fetchDailyPaws();
    }
  }, []);

  const getDailyPaws = async (transactionMethod: number) => {
    const requestData = { transactionMethod };

    try {
      const response = await fetch(`/api/tasks/${walletAddress}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      // Optionally, refresh the tasks data after successful update
      if (walletAddress) {
        fetchDailyPaws();
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="bg-[#1a1a1aff] p-3 rounded-xl mt-4 border border-slate-500 shadow-lg hover:shadow-xl transition-shadow duration-300 max-h-[65vh] min-h-[50vh] overflow-y-auto z-20">
      <div className="text-center text-white">
        <h2 className="text-lg font-semibold">Daily Task</h2>
        <p className="text-xs text-gray-400 mt-2">
          Complete your daily tasks to earn rewards.
        </p>
      </div>
      <div className="mt-2 space-y-4">
        {tasksData.map((task, index) => (
          <TaskButton
            key={index}
            text={task.text}
            image={`/assets/${task.image}.png`}
            status={task.state}
            transactionMethod={index + 2}
            getDailyPaws={getDailyPaws}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyTask;

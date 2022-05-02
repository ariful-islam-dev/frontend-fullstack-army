import React from "react";
import "./App.css";
import TaskCard from "./TaskCard";

const tasks = [
  {
    id: "unique_id_001",
    subtitle: "Subtitle",
    createdAt: "2022-05-02T05:58:50.319Z",
    tags: [
      {
        id: "tag_001",
        text: "It's Done",
        icon: "T",
      },
      {
        id: "tag_002",
        text: "Its' cancelled",
        icon: "X",
      },
      {
        id: "tag_003",
        text: "It's Progress",
        icon: "P",
      },
      {
        id: "tag_004",
        text: "Just wrote this",
        icon: "C",
      },
    ],
    comments: [
      {
        id: "comment_id_001",
        user: {
          avatar: "xyz.com",
          name: "Viraj",
          id: "user_id_001",
        },
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet qui veritatis magnam, quasi deserunt nostrum eaque labore cumque velit accusantium. Quo, vero quae laborum sunt nostrum atque sed expedita quasi.",
      },
    ],
    tasks: [
      {
        id: "task_001",
        title: "Foggy Nelson",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "done",
      },
      {
        id: "task_002",
        title: "Louis Ck",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "cancelled",
      },
      {
        id: "task_003",
        title: "Albert Elnatein",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "progress",
      },
      {
        id: "task_004",
        title: "Albert Elnatein",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "progress",
      },
    ],
  },
  {
    id: "unique_id_001",
    subtitle: "Subtitle",
    createdAt: "2022-05-02T05:58:50.319Z",
    tags: [
      {
        id: "tag_001",
        text: "It's Done",
        icon: "T",
      },
    ],
    comments: [
      {
        id: "comment_id_001",
        user: {
          avatar: "xyz.com",
          name: "Viraj",
          id: "user_id_001",
        },
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet qui veritatis magnam, quasi deserunt nostrum eaque labore cumque velit accusantium. Quo, vero quae laborum sunt nostrum atque sed expedita quasi.",
      },
    ],
    tasks: [
      {
        id: "task_001",
        title: "Foggy Nelson",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "done",
      },
      {
        id: "task_002",
        title: "Louis Ck",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "cancelled",
      },
      {
        id: "task_003",
        title: "Albert Elnatein",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "progress",
      },
      {
        id: "task_004",
        title: "Albert Elnatein",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "progress",
      },
    ],
  },
  {
    id: "unique_id_001",
    subtitle: "Subtitle",
    createdAt: "2022-05-02T05:58:50.319Z",
    tags: [
      {
        id: "tag_001",
        text: "It's Done",
        icon: "T",
      },
      {
        id: "tag_002",
        text: "Its' cancelled",
        icon: "X",
      },
      {
        id: "tag_003",
        text: "It's Progress",
        icon: "P",
      },
      {
        id: "tag_004",
        text: "Just wrote this",
        icon: "C",
      },
    ],
    comments: [],
    tasks: [
      {
        id: "task_001",
        title: "Foggy Nelson",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "done",
      },
      {
        id: "task_002",
        title: "Louis Ck",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "cancelled",
      },
      {
        id: "task_003",
        title: "Albert Elnatein",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "progress",
      },
      {
        id: "task_004",
        title: "Albert Elnatein",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "progress",
      },
    ],
  },
  {
    id: "unique_id_001",
    subtitle: "Subtitle",
    createdAt: "2022-05-02T05:58:50.319Z",
    tags: [
      {
        id: "tag_003",
        text: "It's Progress",
        icon: "P",
      },
    ],
    comments: [
      {
        id: "comment_id_001",
        user: {
          avatar: "xyz.com",
          name: "Viraj",
          id: "user_id_001",
        },
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet qui veritatis magnam, quasi deserunt nostrum eaque labore cumque velit accusantium. Quo, vero quae laborum sunt nostrum atque sed expedita quasi.",
      },
      {
        id: "comment_id_002",
        user: {
          avatar: "xyz.com",
          name: "Viraj",
          id: "user_id_001",
        },
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet qui veritatis magnam, quasi deserunt nostrum eaque labore cumque velit accusantium. Quo, vero quae laborum sunt nostrum atque sed expedita quasi.",
      },
    ],
    tasks: [
      {
        id: "task_001",
        title: "Foggy Nelson",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "done",
      },
      {
        id: "task_002",
        title: "Louis Ck",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "cancelled",
      },
      {
        id: "task_003",
        title: "Albert Elnatein",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "progress",
      },
      {
        id: "task_004",
        title: "Albert Elnatein",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "progress",
      },
    ],
  },
  {
    id: "unique_id_001",
    subtitle: "Subtitle",
    createdAt: "2022-05-02T05:58:50.319Z",
    tags: [
      {
        id: "tag_003",
        text: "It's Progress",
        icon: "P",
      },
    ],
    comments: [],
    tasks: [
      {
        id: "task_003",
        title: "Albert Elnatein",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "progress",
      },
      {
        id: "task_004",
        title: "Albert Elnatein",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "progress",
      },
    ],
  },
  {
    id: "unique_id_001",
    subtitle: "Subtitle",
    createdAt: "2022-05-02T05:58:50.319Z",
    tags: [
      {
        id: "tag_001",
        text: "It's Done",
        icon: "T",
      },
      {
        id: "tag_002",
        text: "Its' cancelled",
        icon: "X",
      },
      {
        id: "tag_003",
        text: "It's Progress",
        icon: "P",
      },
      {
        id: "tag_004",
        text: "Just wrote this",
        icon: "C",
      },
    ],
    comments: [
      {
        id: "comment_id_001",
        user: {
          avatar: "xyz.com",
          name: "Viraj",
          id: "user_id_001",
        },
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet qui veritatis magnam, quasi deserunt nostrum eaque labore cumque velit accusantium. Quo, vero quae laborum sunt nostrum atque sed expedita quasi.",
      },
    ],
    tasks: [
      {
        id: "task_001",
        title: "Foggy Nelson",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "done",
      },
      {
        id: "task_002",
        title: "Louis Ck",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "cancelled",
      },
      {
        id: "task_003",
        title: "Albert Elnatein",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "progress",
      },
      {
        id: "task_004",
        title: "Albert Elnatein",
        text: "Here to cleen the streets of hell's Kitchen",
        status: "progress",
      },
    ],
  },
];

function getDay(str) {
  const date = new Date(str).getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date];
  // switch (date) {
  //   case 0:
  //     return "Monday";
  //   case 1:
  //     return "Tuesday";
  //   case 2:
  //     return "Wednesday";
  //   case 3:
  //     return "Thursday";
  //   case 4:
  //     return "Friday";
  //   case 5:
  //     return "Saturday";
  //   case 6:
  //     return "Sunday";
  //   default:
  //     throw new Error("Invalid Date");
  // }
}

function formateDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const App = () => {
  return (
    <div className="cardGroup">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          getDay={getDay}
          formateDate={formateDate}
        />
      ))}
    </div>
  );
};

export default App;

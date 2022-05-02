import React from "react";
import Comment from "./Comment";
import Tag from "./Tag";
import Task from "./Task";

const TaskCard = ({ task, getDay, formateDate }) => {
  return (
    <div className="dayCard">
      <h1 className="title">
        {getDay(task.createdAt)}, {formateDate(task.createdAt)}
      </h1>
      <h3 className="subTitle">{task.subtitle}</h3>
      <ul className="tagUl">
        {task.tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </ul>
      <div className="line"></div>
      <p className="nodes">Nodes Linked to people</p>
      <div className="comments">
        {task.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <ul className="task">
        {task.tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskCard;

import React from "react";

interface TaskCardProps {
  title: string;
  completed: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, completed }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${completed ? "bg-green-100" : "bg-white"}`}>
      <h4 className="text-md font-medium">{title}</h4>
      <p className={`text-sm ${completed ? "text-green-600" : "text-gray-600"}`}>
        {completed ? "Completed" : "Pending"}
      </p>
    </div>
  );
};

export default TaskCard;

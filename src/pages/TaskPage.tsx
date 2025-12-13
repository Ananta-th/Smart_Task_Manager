import React from 'react';
import KanbanBoard from '../components/KanbanBoard';

const TaskPage: React.FC = () => {
  return (
    <div className="task-page" style={{ padding: '20px', height: '100%' }}>
      <KanbanBoard />
    </div>
  );
};

export default TaskPage;

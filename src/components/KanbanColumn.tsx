import { useDrop } from 'react-dnd';
import { Plus } from 'lucide-react';
import { Task, TaskCard } from './TaskCard';
import { Button } from './ui/button';

interface KanbanColumnProps {
  status: 'todo' | 'inprogress' | 'done';
  title: string;
  color: string;
  gradient: string;
  tasks: Task[];
  onDrop: (taskId: string, newStatus: 'todo' | 'inprogress' | 'done') => void;
  onAddTask: (status: 'todo' | 'inprogress' | 'done') => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
}

export function KanbanColumn({
  status,
  title,
  color,
  gradient,
  tasks,
  onDrop,
  onAddTask,
  onEditTask,
  onDeleteTask,
}: KanbanColumnProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item: { id: string; status: string }) => {
      if (item.status !== status) {
        onDrop(item.id, status);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }), [status, onDrop]);

  return (
    <div
      className="flex flex-col backdrop-blur-lg bg-white/80 p-[--space-lg] min-h-[500px] flex-1 min-w-[280px] relative overflow-hidden"
      style={{
        borderRadius: 'var(--radius-md)',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Gradient header bar */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: gradient }}
      />
      
      <div className="flex items-center justify-between mb-[--space-lg]">
        <div className="flex items-center gap-[--space-sm]">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg"
            style={{ 
              background: gradient,
            }}
          >
            <span className="text-white">{tasks.length}</span>
          </div>
          <h3 
            className="bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage: gradient,
            }}
          >
            {title}
          </h3>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:scale-110 transition-transform"
          style={{
            background: gradient,
          }}
          onClick={() => onAddTask(status)}
        >
          <Plus className="h-4 w-4 text-white" />
        </Button>
      </div>

      <div
        ref={drop}
        className="flex-1 overflow-y-auto"
        style={{
          backgroundColor: isOver ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
          transition: 'background-color 0.2s',
          borderRadius: 'var(--radius-sm)',
          border: isOver ? '2px dashed rgba(0, 0, 0, 0.2)' : '2px dashed transparent',
        }}
      >
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            gradient={gradient}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}

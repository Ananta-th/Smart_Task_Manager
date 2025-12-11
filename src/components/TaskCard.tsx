import { useDrag } from 'react-dnd';
import { Clock, Edit, Trash2, Circle, CheckCircle, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

export type Priority = 'low' | 'medium' | 'high' | 'critical';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'inprogress' | 'done';
  priority?: Priority;
  assignee?: string;
  dueDate?: string;
  tags?: string[];
  progress?: number;
  createdAt: string;
}

// Get priority configuration
function getPriorityConfig(priority?: Priority) {
  const configs = {
    low: {
      color: '#10B981',
      label: 'Low',
    },
    medium: {
      color: '#3B82F6',
      label: 'Medium',
    },
    high: {
      color: '#F59E0B',
      label: 'High',
    },
    critical: {
      color: '#EF4444',
      label: 'Critical',
    },
  };
  
  return priority ? configs[priority] : null;
}

interface TaskCardProps extends HTMLAttributes<HTMLDivElement> {
  task: Task;
  onEdit?: (task: Task) => void;
  onDelete?: (taskId: string) => void;
  className?: string;
  isDragging?: boolean;
}

const TaskCard = forwardRef<HTMLDivElement, TaskCardProps>(({ 
  task, 
  onEdit, 
  onDelete, 
  className,
  isDragging = false,
  ...props 
}, ref) => {
  const priorityConfig = getPriorityConfig(task.priority);
  const progress = task.progress || 0;
  const formattedDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }) : '';

  return (
    <div
      ref={ref}
      className={cn(
        'group relative bg-white dark:bg-gray-800 rounded-xl p-4 mb-3 border border-gray-200 dark:border-gray-700',
        'hover:shadow-md transition-shadow duration-200',
        isDragging && 'opacity-50',
        className
      )}
      {...props}
    >
      {/* Task header with status and menu */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-5 h-5 mr-2">
            {task.status === 'done' ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <Circle className="w-4 h-4 text-gray-300 group-hover:text-gray-400" />
            )}
          </div>
          <h3 className="font-medium text-gray-900 dark:text-white text-sm">{task.title}</h3>
        </div>
        
        <div className="flex items-center space-x-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit?.(task);
            }}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200 p-1"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.(task.id);
            }}
            className="text-gray-400 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 p-1"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-3">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
          <span>Progress</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
          <div
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              background: progress < 30 ? '#EF4444' : progress < 70 ? '#F59E0B' : '#10B981',
            }}
          />
        </div>
      </div>

      {/* Task meta */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          {priorityConfig && (
            <div 
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: priorityConfig.color }}
              aria-label={`Priority: ${priorityConfig.label}`}
            />
          )}
          {task.dueDate && (
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <Clock className="w-3 h-3 mr-1" />
              <span>{formattedDate}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center">
          <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">View Details</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
});

// Create a draggable version of the TaskCard
export const DraggableTaskCard = (props: TaskCardProps) => {
  const [collected, drag] = useDrag(() => ({
    type: 'TASK',
    item: { id: props.task.id, status: props.task.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [props.task.id, props.task.status]);

  return (
    <TaskCard
      ref={drag}
      {...props}
      isDragging={collected.isDragging}
    />
  );
};

export { TaskCard };

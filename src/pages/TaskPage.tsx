import { useState, useMemo } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Navbar } from '../components/Navbar';
import { KanbanColumn } from '../components/KanbanColumn';
import { TaskDialog } from '../components/TaskDialog';
import { Task, Priority, DraggableTaskCard } from '../components/TaskCard';

interface TaskPageProps {
  onHomeClick: () => void;
}

export function TaskPage({ onHomeClick }: TaskPageProps) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Design new landing page',
      description: 'Create wireframes and mockups for the new product landing page',
      status: 'todo' as const,
      priority: 'high',
      assignee: 'User',
      dueDate: '2025-11-03',
      tags: ['Design', 'High Priority'],
      progress: 30,
      createdAt: new Date('2025-10-15').toISOString(),
    },
    {
      id: '2',
      title: 'Implement authentication',
      description: 'Add user login and registration functionality',
      status: 'inprogress' as const,
      priority: 'critical',
      assignee: 'User',
      dueDate: '2025-11-03',
      tags: ['Backend', 'Security'],
      progress: 70,
      createdAt: new Date('2025-10-20').toISOString(),
    },
    {
      id: '3',
      title: 'Write API documentation',
      description: 'Document all REST API endpoints with examples',
      status: 'inprogress' as const,
      priority: 'medium',
      assignee: 'User',
      dueDate: '2025-11-03',
      tags: ['Documentation'],
      progress: 50,
      createdAt: new Date('2025-10-25').toISOString(),
    },
    {
      id: '4',
      title: 'Setup CI/CD pipeline',
      description: 'Configure automated testing and deployment',
      status: 'done' as const,
      priority: 'high',
      assignee: 'User',
      dueDate: '2025-11-03',
      tags: ['DevOps'],
      progress: 100,
      createdAt: new Date('2025-10-10').toISOString(),
    },
    {
      id: '5',
      title: 'Code review for PR #234',
      status: 'done' as const,
      priority: 'low',
      assignee: 'User',
      dueDate: '2025-11-03',
      tags: ['Review'],
      progress: 100,
      description: 'Review pull request #234 for the new feature implementation',
      createdAt: new Date('2025-11-01').toISOString(),
    },
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>();
  const [defaultStatus, setDefaultStatus] = useState<'todo' | 'inprogress' | 'done'>('todo');

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriorities, setSelectedPriorities] = useState<Priority[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedAssignees, setSelectedAssignees] = useState<string[]>([]);

  const handleDrop = (taskId: string, newStatus: 'todo' | 'inprogress' | 'done') => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const handleAddTask = (status: 'todo' | 'inprogress' | 'done') => {
    setDefaultStatus(status);
    setEditingTask(undefined);
    setDialogOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setDialogOpen(true);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleSaveTask = (taskData: Omit<Task, 'id'> & { id?: string }) => {
    if (taskData.id) {
      // Edit existing task
      setTasks(tasks.map(task =>
        task.id === taskData.id ? { ...taskData, id: taskData.id } : task
      ));
    } else {
      // Create new task
      const newTask: Task = {
        ...taskData,
        id: Date.now().toString(),
        status: taskData.status,
      };
      setTasks([...tasks, newTask]);
    }
  };

  // Get unique assignees
  const availableAssignees = useMemo(() => {
    const assignees = tasks
      .map(task => task.assignee)
      .filter((assignee): assignee is string => !!assignee);
    return Array.from(new Set(assignees)).sort();
  }, [tasks]);

  // Filter tasks based on search and filters
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          task.title.toLowerCase().includes(query) ||
          task.description?.toLowerCase().includes(query) ||
          task.assignee?.toLowerCase().includes(query) ||
          task.tags?.some(tag => tag.toLowerCase().includes(query));

        if (!matchesSearch) return false;
      }

      // Priority filter
      if (selectedPriorities.length > 0 && task.priority) {
        if (!selectedPriorities.includes(task.priority)) return false;
      }

      // Status filter
      if (selectedStatuses.length > 0) {
        if (!selectedStatuses.includes(task.status)) return false;
      }

      // Assignee filter
      if (selectedAssignees.length > 0 && task.assignee) {
        if (!selectedAssignees.includes(task.assignee)) return false;
      }

      return true;
    });
  }, [tasks, searchQuery, selectedPriorities, selectedStatuses, selectedAssignees]);

  const todoTasks = filteredTasks.filter(task => task.status === 'todo');
  const inProgressTasks = filteredTasks.filter(task => task.status === 'inprogress');
  const doneTasks = filteredTasks.filter(task => task.status === 'done');

  // Filter handlers
  const handlePriorityToggle = (priority: Priority) => {
    setSelectedPriorities(prev =>
      prev.includes(priority)
        ? prev.filter(p => p !== priority)
        : [...prev, priority]
    );
  };

  const handleStatusToggle = (status: string) => {
    setSelectedStatuses(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  const handleAssigneeToggle = (assignee: string) => {
    setSelectedAssignees(prev =>
      prev.includes(assignee)
        ? prev.filter(a => a !== assignee)
        : [...prev, assignee]
    );
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedPriorities([]);
    setSelectedStatuses([]);
    setSelectedAssignees([]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="min-h-screen"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        {/* Navbar */}
        <Navbar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedPriorities={selectedPriorities}
          onPriorityToggle={handlePriorityToggle}
          selectedStatuses={selectedStatuses}
          onStatusToggle={handleStatusToggle}
          selectedAssignees={selectedAssignees}
          onAssigneeToggle={handleAssigneeToggle}
          availableAssignees={availableAssignees}
          onClearFilters={handleClearFilters}
          totalTasks={tasks.length}
          filteredTasksCount={filteredTasks.length}
          onHomeClick={onHomeClick}
          showSearchBar={true}
        />

        {/* Kanban Board */}
        <main className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 pt-4 sm:pt-6">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <KanbanColumn
                status="todo"
                title="To Do"
                color="#3B82F6"
                gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
                tasks={todoTasks}
                onDrop={handleDrop}
                onAddTask={handleAddTask}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
              />
              <KanbanColumn
                status="inprogress"
                title="In Progress"
                color="#F59E0B"
                gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
                tasks={inProgressTasks}
                onDrop={handleDrop}
                onAddTask={handleAddTask}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
              />
              <KanbanColumn
                status="done"
                title="Done"
                color="#10B981"
                gradient="linear-gradient(135deg, #30cfd0 0%, #c43ad6 100%)"
                tasks={doneTasks}
                onDrop={handleDrop}
                onAddTask={handleAddTask}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
              />
            </div>
          </div>
        </main>

        {/* Task Dialog */}
        <TaskDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          task={editingTask}
          defaultStatus={defaultStatus}
          onSave={handleSaveTask}
        />
      </div>
    </DndProvider>
  );
}

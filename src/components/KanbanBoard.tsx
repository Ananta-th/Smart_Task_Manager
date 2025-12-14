import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import '../styles/KanbanBoard.css';
import { Flame, MoreHorizontal, Plus, MessageCircle, Paperclip, CheckCircle2 } from 'lucide-react';

// Type definitions
interface Task {
  id: string;
  title: string;
  type: 'task' | 'subtask' | 'subcategory' | 'category' | 'divider';
  date?: string;
  progress?: string;
  comments?: string;
  day?: string;
  children?: Task[];
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

interface Columns {
  [key: string]: Column;
}

const getTagKey = (columnTitle: string) => {
  const t = columnTitle.toLowerCase();
  if (t.includes('backlog')) return 'design';
  if (t.includes('to do') || t.includes('todo')) return 'research';
  if (t.includes('in progress')) return 'planning';
  return 'content';
};

const getCoverSeed = (title: string) => {
  const lower = title.toLowerCase();
  if (lower.includes('design')) return 1050;
  if (lower.includes('copy') || lower.includes('content')) return 1060;
  if (lower.includes('research')) return 1040;
  return 1030;
};

// Initial data matching the image
const initialColumns: Columns = {
  backlog: {
    id: 'backlog',
    title: 'Backlog',
    tasks: [
      {
        id: 'b1',
        type: 'category',
        title: 'Tooling',
        children: [
          {
            id: 'b1-1',
            title: 'Create styleguide foundation',
            type: 'task'
          },
          {
            id: 'b1-2',
            title: 'Create content for peceland App',
            date: 'Nov 20, 2025',
            progress: '0/8',
            type: 'task'
          }
        ]
      }
    ]
  },
  planning: {
    id: 'planning',
    title: 'Planning',
    tasks: [
      {
        id: 'p1',
        type: 'category',
        title: 'Update requirement list',
        children: [
          {
            id: 'p1-1',
            title: 'Create content for peceland App',
            date: 'Nov 20, 2025',
            progress: '0/8',
            comments: '4 Comment',
            day: '11th',
            type: 'task'
          }
        ]
      },
      { id: 'divider1', title: 'divider', type: 'divider' }
    ]
  },
  todo: {
    id: 'todo',
    title: 'To Do',
    tasks: [
      {
        id: 't1',
        type: 'category',
        title: 'Research',
        children: [
          {
            id: 't1-1',
            title: 'auditing information architecture',
            date: 'Nov 20, 2025',
            progress: '0/8',
            type: 'task'
          }
        ]
      },
      {
        id: 't2',
        title: 'Update support documentation',
        date: 'Nov 20, 2024',
        progress: '0/8',
        type: 'task'
      },
      {
        id: 't3',
        title: 'Qualitative research planning',
        date: 'Nov 20, 2025',
        progress: '0/8',
        type: 'task'
      }
    ]
  },
  inprogress: {
    id: 'inprogress',
    title: 'In Progress',
    tasks: [
      {
        id: 'i1',
        type: 'category',
        title: 'Learning',
        children: [
          {
            id: 'i1-1',
            title: 'Listing deliverables checklist',
            date: 'Nov 20, 2025',
            comments: '4 Comment',
            day: '11th',
            type: 'task'
          }
        ]
      },
      {
        id: 'i2',
        type: 'category',
        title: 'Research',
        children: [
          {
            id: 'i2-1',
            title: 'Qualitative research planning',
            date: 'Nov 20, 2025',
            progress: '0/8',
            type: 'task'
          }
        ]
      },
      {
        id: 'i3',
        type: 'category',
        title: 'Design',
        children: [
          {
            id: 'i3-1',
            title: 'Copywriting Content',
            date: 'Nov 20, 2025',
            progress: '0/8',
            type: 'task'
          }
        ]
      },
      {
        id: 'i4',
        type: 'category',
        title: 'Review',
        children: [
          {
            id: 'i4-1',
            title: 'Content',
            type: 'subcategory',
            children: [
              { id: 'i4-1-1', title: 'Design System', type: 'task' },
              {
                id: 'i4-1-2',
                title: 'Create content for peceland App',
                date: 'Nov 20, 2025',
                progress: '0/8',
                type: 'task'
              }
            ]
          }
        ]
      },
      {
        id: 'i5',
        type: 'category',
        title: 'Design',
        children: [
          {
            id: 'i5-1',
            title: 'High fidelity UI Desktop',
            date: 'Nov 20, 2025',
            progress: '0/8',
            type: 'task'
          }
        ]
      },
      {
        id: 'i6',
        type: 'category',
        title: 'Content',
        children: [
          {
            id: 'i6-1',
            title: 'Listing deliverables checklist',
            date: 'Nov 20, 2025',
            comments: '4 Comment',
            day: '11th',
            type: 'task'
          }
        ]
      }
    ]
  }
};

const KanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState<Columns>(initialColumns);
  const [newTaskText, setNewTaskText] = useState<string>('');
  const [selectedColumn, setSelectedColumn] = useState<string>('backlog');
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, type } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Object.keys(columns);
      const [removed] = newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, removed);

      const reorderedColumns: Columns = {};
      newColumnOrder.forEach(key => {
        reorderedColumns[key] = columns[key];
      });

      setColumns(reorderedColumns);
      return;
    }

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceTasks = [...sourceColumn.tasks];
    const destTasks = destColumn ? [...destColumn.tasks] : [...sourceTasks];

    const [movedTask] = sourceTasks.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceTasks.splice(destination.index, 0, movedTask);
      setColumns(prev => ({
        ...prev,
        [source.droppableId]: {
          ...sourceColumn,
          tasks: sourceTasks
        }
      }));
    } else {
      destTasks.splice(destination.index, 0, movedTask);
      setColumns(prev => ({
        ...prev,
        [source.droppableId]: {
          ...sourceColumn,
          tasks: sourceTasks
        },
        [destination.droppableId]: {
          ...destColumn,
          tasks: destTasks
        }
      }));
    }
  };

  const handleAddTask = () => {
    if (!newTaskText.trim()) return;

    const newTask: Task = {
      id: `task-${Date.now()}`,
      title: newTaskText,
      type: 'task',
      date: new Date().toLocaleDateString('en-US', { 
        month: 'short', 
        day: '2-digit', 
        year: 'numeric' 
      }),
      progress: '0/8'
    };

    setColumns(prev => {
      const updatedColumn = {
        ...prev[selectedColumn],
        tasks: [...prev[selectedColumn].tasks, newTask]
      };

      return {
        ...prev,
        [selectedColumn]: updatedColumn
      };
    });

    setNewTaskText('');
    setShowAddForm(false);
  };

  const handleRemoveTask = (columnId: string, taskId: string) => {
    setColumns(prev => {
      const column = prev[columnId];
      const updatedTasks = column.tasks.filter(task => {
        if (task.type === 'category' && task.children) {
          const filteredChildren = task.children.filter(child => child.id !== taskId);
          return filteredChildren.length > 0;
        }
        return task.id !== taskId;
      });

      return {
        ...prev,
        [columnId]: {
          ...column,
          tasks: updatedTasks
        }
      };
    });
  };

  interface TaskItemProps {
    task: Task;
    index: number;
    columnId: string;
  }

  const TaskItem: React.FC<TaskItemProps> = ({ task, index, columnId }) => {
    if (task.type === 'divider') {
      return <div className="task-divider" />;
    }

    if (task.type === 'category') {
      return (
        <div className="kb-section">
          <div className="task-list">
            {task.children?.map((child, childIndex) => (
              <Draggable
                key={child.id}
                draggableId={child.id}
                index={childIndex}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`task-item kb-card ${snapshot.isDragging ? 'dragging' : ''}`}
                  >
                    <div className="kb-card-top">
                      <span className={`kb-tag kb-tag-${getTagKey(columns[columnId].title)}`}>{getTagKey(columns[columnId].title)}</span>
                      <button className="kb-icon-btn" type="button" aria-label="More">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>

                    <div className="kb-card-body">
                      <div className="kb-card-title">{child.title}</div>
                      <div className="kb-card-subtitle">Create content for peaceland App</div>

                      {child.date && <div className="kb-date-pill">{child.date}</div>}

                      <div className="kb-card-footer">
                        <div className="kb-assignees">
                          <span className="kb-assignee" />
                          <span className="kb-assignee" />
                        </div>

                        <div className="kb-meta">
                          {child.progress && (
                            <span className="kb-meta-item">
                              <CheckCircle2 size={14} />
                              {child.progress}
                            </span>
                          )}
                          {child.comments && (
                            <span className="kb-meta-item">
                              <MessageCircle size={14} />
                              {child.comments}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        </div>
      );
    }

    return (
      <Draggable
        key={task.id}
        draggableId={task.id}
        index={index}
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`task-item kb-card ${snapshot.isDragging ? 'dragging' : ''}`}
          >
            <div className="kb-card-top">
              <span className={`kb-tag kb-tag-${getTagKey(columns[columnId].title)}`}>{getTagKey(columns[columnId].title)}</span>
              <button className="kb-icon-btn" type="button" aria-label="More">
                <MoreHorizontal size={16} />
              </button>
            </div>

            <div className="kb-cover" style={{
              backgroundImage: `url(https://picsum.photos/seed/${getCoverSeed(task.title)}/520/280)`
            }} />

            <div className="kb-card-body">
              <div className="kb-card-title">{task.title}</div>
              <div className="kb-card-subtitle">Create content for peaceland App</div>

              {task.date && <div className="kb-date-pill">{task.date}</div>}

              <div className="kb-card-footer">
                <div className="kb-assignees">
                  <span className="kb-assignee" />
                  <span className="kb-assignee" />
                  <span className="kb-assignee" />
                </div>

                <div className="kb-meta">
                  {task.progress && (
                    <span className="kb-meta-item">
                      <CheckCircle2 size={14} />
                      {task.progress}
                    </span>
                  )}
                  {task.comments && (
                    <span className="kb-meta-item">
                      <MessageCircle size={14} />
                      {task.comments}
                    </span>
                  )}
                  <span className="kb-meta-item">
                    <Paperclip size={14} />
                    1 file
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="kanban-board">
        <div className="kanban-header">
          <div className="kb-topbar">
            <h1 className="kanban-title">
              <Flame size={20} />
              Task
            </h1>

            <div className="kb-topbar-right">
              <div className="kb-avatars">
                <span className="kb-avatar" />
                <span className="kb-avatar" />
                <span className="kb-avatar" />
                <span className="kb-avatar" />
                <span className="kb-avatar kb-avatar-plus">+6</span>
              </div>
              <button className="kb-topbar-add" type="button" onClick={() => setShowAddForm(!showAddForm)} aria-label="Add">
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        {showAddForm && (
          <div className="add-task-form">
            <input
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              placeholder="Enter task title..."
              className="task-input"
              onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
            />
            <div className="form-buttons">
              <button onClick={handleAddTask} className="submit-btn">
                Add Task
              </button>
              <button onClick={() => setShowAddForm(false)} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        )}

        <Droppable droppableId="columns" direction="horizontal" type="column">
          {(provided) => (
            <div
              className="kanban-columns"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {Object.values(columns).map((column, index) => (
                <Draggable
                  key={column.id}
                  draggableId={column.id}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="kanban-column"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <div className="column-header" {...provided.dragHandleProps}>
                        <h2 className="column-title">{column.title}</h2>
                        <div className="kb-column-actions">
                          <button className="kb-column-action" type="button" aria-label="More">
                            <MoreHorizontal size={16} />
                          </button>
                          <button className="kb-column-action kb-column-add" type="button" aria-label="Add">
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <Droppable droppableId={column.id} type="task">
                        {(provided, snapshot) => (
                          <div
                            className={`column-content ${
                              snapshot.isDraggingOver ? 'dragging-over' : ''
                            }`}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            {column.tasks.map((task, taskIndex) => (
                              <TaskItem
                                key={task.id}
                                task={task}
                                index={taskIndex}
                                columnId={column.id}
                              />
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
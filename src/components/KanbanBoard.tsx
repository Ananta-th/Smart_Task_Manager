import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import '../styles/Dashboard.css';

interface TaskCardProps {
  id: string;
  statusLabel: string;
  statusColor: 'blue' | 'orange' | 'purple';
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
}

type ColumnId = 'backlog' | 'todo' | 'inProgress' | 'review';

type BoardState = Record<ColumnId, TaskCardProps[]>;

function TaskCard({ statusLabel, statusColor, title, description, date, imageUrl }: TaskCardProps) {
  return (
    <div className="kanban-card">
      <span className={`kanban-pill kanban-pill--${statusColor}`}>{statusLabel}</span>

      {imageUrl && (
        <div className="kanban-card-image-wrapper">
          <img src={imageUrl} alt={title} className="kanban-card-image" />
        </div>
      )}

      <h4 className="kanban-card-title">{title}</h4>
      <p className="kanban-card-desc">{description}</p>

      <div className="kanban-card-footer">
        <button className="kanban-date">{date}</button>
        <span className="kanban-meta">0/8</span>
      </div>
    </div>
  );
}

const initialData: BoardState = {
  backlog: [
    {
      id: 'task-1',
      statusLabel: 'Design',
      statusColor: 'blue',
      title: 'Create styleguide foundation',
      description: 'Create content for pecland App',
      date: 'Nov 20, 2025',
      imageUrl:
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'task-2',
      statusLabel: 'Research',
      statusColor: 'blue',
      title: 'Copywriting Content',
      description: 'Create content for pecland App',
      date: 'Nov 20, 2025',
    },
  ],
  todo: [
    {
      id: 'task-3',
      statusLabel: 'Research',
      statusColor: 'blue',
      title: 'Auditing information architecture',
      description: 'Create content for pecland App',
      date: 'Nov 20, 2025',
    },
    {
      id: 'task-4',
      statusLabel: 'Content',
      statusColor: 'orange',
      title: 'Update support documentation',
      description: 'Create content for pecland App',
      date: 'Nov 20, 2024',
      imageUrl:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    },
  ],
  inProgress: [
    {
      id: 'task-5',
      statusLabel: 'Planning',
      statusColor: 'orange',
      title: 'Listing deliverables checklist',
      description: 'Create content for pecland App',
      date: 'Nov 20, 2025',
    },
    {
      id: 'task-6',
      statusLabel: 'Research',
      statusColor: 'blue',
      title: 'Qualitative research planning',
      description: 'Create content for pecland App',
      date: 'Nov 20, 2025',
    },
  ],
  review: [
    {
      id: 'task-7',
      statusLabel: 'Content',
      statusColor: 'orange',
      title: 'Design System',
      description: 'Create content for pecland App',
      date: 'Nov 20, 2025',
      imageUrl:
        'https://images.unsplash.com/photo-1505740106531-4243f3831c78?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'task-8',
      statusLabel: 'Design',
      statusColor: 'purple',
      title: 'High fidelity UI Desktop',
      description: 'Create content for pecland App',
      date: 'Nov 20, 2025',
    },
  ],
};

export function KanbanBoard() {
  const [columns, setColumns] = useState<BoardState>(initialData);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = source.droppableId as ColumnId;
    const destCol = destination.droppableId as ColumnId;

    if (sourceCol === destCol && source.index === destination.index) return;

    const sourceTasks = Array.from(columns[sourceCol]);
    const [moved] = sourceTasks.splice(source.index, 1);

    const destTasks = sourceCol === destCol ? sourceTasks : Array.from(columns[destCol]);
    destTasks.splice(destination.index, 0, moved);

    setColumns(prev => ({
      ...prev,
      [sourceCol]: sourceCol === destCol ? destTasks : sourceTasks,
      [destCol]: destTasks,
    }));
  };

  return (
    <div className="kanban-page">
      <header className="kanban-header">
        <div className="kanban-header-left">
          <span className="kanban-emoji">🔥</span>
          <h1 className="kanban-title">Task</h1>
        </div>
      </header>

      <DragDropContext onDragEnd={handleDragEnd}>
        <section className="kanban-columns">
          <Droppable droppableId="backlog">
            {(provided) => (
              <div className="kanban-column" ref={provided.innerRef} {...provided.droppableProps}>
                <div className="kanban-column-header">
                  <h3>Backlog</h3>
                </div>
                {columns.backlog.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(dragProvided, snapshot) => (
                      <div
                        ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                        className={`kanban-draggable ${snapshot.isDragging ? 'dragging' : ''}`}
                      >
                        <TaskCard {...task} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="todo">
            {(provided) => (
              <div className="kanban-column" ref={provided.innerRef} {...provided.droppableProps}>
                <div className="kanban-column-header">
                  <h3>To Do</h3>
                </div>
                {columns.todo.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(dragProvided, snapshot) => (
                      <div
                        ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                        className={`kanban-draggable ${snapshot.isDragging ? 'dragging' : ''}`}
                      >
                        <TaskCard {...task} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="inProgress">
            {(provided) => (
              <div className="kanban-column" ref={provided.innerRef} {...provided.droppableProps}>
                <div className="kanban-column-header">
                  <h3>In Progress</h3>
                </div>
                {columns.inProgress.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(dragProvided, snapshot) => (
                      <div
                        ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                        className={`kanban-draggable ${snapshot.isDragging ? 'dragging' : ''}`}
                      >
                        <TaskCard {...task} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="review">
            {(provided) => (
              <div className="kanban-column" ref={provided.innerRef} {...provided.droppableProps}>
                <div className="kanban-column-header">
                  <h3>Review</h3>
                </div>
                {columns.review.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(dragProvided, snapshot) => (
                      <div
                        ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                        className={`kanban-draggable ${snapshot.isDragging ? 'dragging' : ''}`}
                      >
                        <TaskCard {...task} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </section>
      </DragDropContext>
    </div>
  );
}

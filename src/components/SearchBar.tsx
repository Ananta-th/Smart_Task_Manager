import { Search, Filter, X } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Priority } from './TaskCard';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedPriorities: Priority[];
  onPriorityToggle: (priority: Priority) => void;
  selectedStatuses: string[];
  onStatusToggle: (status: string) => void;
  selectedAssignees: string[];
  onAssigneeToggle: (assignee: string) => void;
  availableAssignees: string[];
  onClearFilters: () => void;
}

export function SearchBar({
  searchQuery,
  onSearchChange,
  selectedPriorities,
  onPriorityToggle,
  selectedStatuses,
  onStatusToggle,
  selectedAssignees,
  onAssigneeToggle,
  availableAssignees,
  onClearFilters,
}: SearchBarProps) {
  const activeFiltersCount =
    selectedPriorities.length + selectedStatuses.length + selectedAssignees.length;

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {/* Search Input */}
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[--color-text-secondary]" />
        <Input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10 bg-white/90 backdrop-blur-sm border-2 border-white/50 focus:border-purple-400 transition-colors"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7"
            onClick={() => onSearchChange('')}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Filter Dropdowns */}
      <div className="flex gap-2 flex-wrap items-center">
        {/* Priority Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm transition-all bg-white/90 backdrop-blur-sm border-2 border-white/50 hover:border-purple-400 h-8 sm:h-9 px-2.5 sm:px-4 py-2"
            >
              <Filter className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">Priority</span>
              {selectedPriorities.length > 0 && (
                <Badge
                  variant="secondary"
                  className="ml-1 sm:ml-2 px-1.5 py-0 text-xs"
                  style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}
                >
                  {selectedPriorities.length}
                </Badge>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Filter by Priority</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {(['low', 'medium', 'high', 'critical'] as Priority[]).map((priority) => (
              <DropdownMenuCheckboxItem
                key={priority}
                checked={selectedPriorities.includes(priority)}
                onCheckedChange={() => onPriorityToggle(priority)}
              >
                <span className="capitalize">{priority}</span>
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Status Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm transition-all bg-white/90 backdrop-blur-sm border-2 border-white/50 hover:border-purple-400 h-8 sm:h-9 px-2.5 sm:px-4 py-2"
            >
              <Filter className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">Status</span>
              {selectedStatuses.length > 0 && (
                <Badge
                  variant="secondary"
                  className="ml-1 sm:ml-2 px-1.5 py-0 text-xs"
                  style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}
                >
                  {selectedStatuses.length}
                </Badge>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {['todo', 'inprogress', 'done'].map((status) => (
              <DropdownMenuCheckboxItem
                key={status}
                checked={selectedStatuses.includes(status)}
                onCheckedChange={() => onStatusToggle(status)}
              >
                <span className="capitalize">{status === 'inprogress' ? 'In Progress' : status === 'todo' ? 'To Do' : 'Done'}</span>
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Assignee Filter */}
        {availableAssignees.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm transition-all bg-white/90 backdrop-blur-sm border-2 border-white/50 hover:border-purple-400 h-8 sm:h-9 px-2.5 sm:px-4 py-2"
              >
                <Filter className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Assignee</span>
                {selectedAssignees.length > 0 && (
                  <Badge
                    variant="secondary"
                    className="ml-1 sm:ml-2 px-1.5 py-0 text-xs"
                    style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}
                  >
                    {selectedAssignees.length}
                  </Badge>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Filter by Assignee</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {availableAssignees.map((assignee) => (
                <DropdownMenuCheckboxItem
                  key={assignee}
                  checked={selectedAssignees.includes(assignee)}
                  onCheckedChange={() => onAssigneeToggle(assignee)}
                >
                  {assignee}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {/* Clear Filters */}
        {activeFiltersCount > 0 && (
          <Button
            variant="ghost"
            onClick={onClearFilters}
            className="text-[--color-text-secondary] hover:text-[--color-danger] h-8 sm:h-9 px-2.5 sm:px-4 text-xs sm:text-sm"
          >
            <X className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            <span className="hidden xs:inline">Clear ({activeFiltersCount})</span>
            <span className="xs:hidden">({activeFiltersCount})</span>
          </Button>
        )}
      </div>
    </div>
  );
}

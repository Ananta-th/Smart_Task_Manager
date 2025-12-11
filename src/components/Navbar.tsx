import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { CheckSquare, LogIn, UserPlus, LayoutGrid, Home } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { Priority } from './TaskCard';

interface NavbarProps {
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
  totalTasks: number;
  filteredTasksCount: number;
  onHomeClick?: () => void;
  showSearchBar?: boolean;
}

export function Navbar({
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
  totalTasks,
  filteredTasksCount,
  onHomeClick,
  showSearchBar = true,
}: NavbarProps) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email: loginEmail, password: loginPassword });
    setLoginOpen(false);
    setLoginEmail('');
    setLoginPassword('');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup:', { name: signupName, email: signupEmail, password: signupPassword });
    setSignupOpen(false);
    setSignupName('');
    setSignupEmail('');
    setSignupPassword('');
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 backdrop-blur-lg border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg shadow-md">
                <CheckSquare className="h-6 w-6 text-white" />
              </div>
              <span className="text-white text-xl hidden sm:block">Smart Task Manager</span>
            </div>

            {/* Navigation and Auth Buttons */}
            <div className="flex items-center gap-3">
              {onHomeClick && (
                <Button
                  onClick={onHomeClick}
                  variant="ghost"
                  className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/30 gap-2 transition-all hover:scale-105"
                >
                  <Home className="h-4 w-4" />
                  <span className="hidden sm:inline">Home</span>
                </Button>
              )}
              <Button
                onClick={() => setLoginOpen(true)}
                variant="ghost"
                className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/30 gap-2 transition-all hover:scale-105"
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">Log In</span>
              </Button>
              <Button
                onClick={() => setSignupOpen(true)}
                className="bg-white text-purple-600 hover:bg-white/90 gap-2 shadow-lg transition-all hover:scale-105"
              >
                <UserPlus className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Up</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Header with Title, Task Count, and Search */}
      {showSearchBar && (
        <header 
          className="backdrop-blur-lg bg-white/90 border-b border-white/20 px-4 sm:px-6 lg:px-8 py-4"
          style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="max-w-[1600px] mx-auto">
            {/* Task Count Row */}
            <div className="flex items-center justify-end mb-3">
              <div className="flex gap-2">
                <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs sm:text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  <span className="hidden xs:inline">{filteredTasksCount} / {totalTasks} Tasks</span>
                  <span className="xs:hidden">{filteredTasksCount}/{totalTasks}</span>
                </div>
              </div>
            </div>

            {/* Search Bar Row */}
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={onSearchChange}
              selectedPriorities={selectedPriorities}
              onPriorityToggle={onPriorityToggle}
              selectedStatuses={selectedStatuses}
              onStatusToggle={onStatusToggle}
              selectedAssignees={selectedAssignees}
              onAssigneeToggle={onAssigneeToggle}
              availableAssignees={availableAssignees}
              onClearFilters={onClearFilters}
            />
          </div>
        </header>
      )}

      {/* Login Dialog */}
      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Welcome Back</DialogTitle>
            <DialogDescription>
              Log in to your account to manage your tasks.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleLogin}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  className="focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="login-password">Password</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  className="focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setLoginOpen(false)}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Log In
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Signup Dialog */}
      <Dialog open={signupOpen} onOpenChange={setSignupOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Account</DialogTitle>
            <DialogDescription>
              Sign up to start managing your tasks efficiently.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSignup}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="signup-name">Full Name</Label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="John Doe"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  required
                  className="focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  required
                  className="focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  required
                  className="focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setSignupOpen(false)}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Sign Up
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

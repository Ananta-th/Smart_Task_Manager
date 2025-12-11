# Smart Task Manager - Design System Documentation

This document provides complete specifications for recreating the Smart Task Manager design in Figma or any other design tool.

---

## 📐 Design Tokens

### Colors

#### Primary Background Gradients
- **Main App Background**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Navbar Gradient**: `linear-gradient(to right, #9333ea 0%, #ec4899 50%, #a855f7 100%)` (purple-600 → pink-500 → purple-700)

#### Status Column Colors & Gradients
- **To Do**:
  - Solid: `#3B82F6` (Blue)
  - Gradient: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`
  - Light Background: `#DBEAFE`

- **In Progress**:
  - Solid: `#F59E0B` (Amber)
  - Gradient: `linear-gradient(135deg, #fa709a 0%, #fee140 100%)`
  - Light Background: `#FEF3C7`

- **Done**:
  - Solid: `#10B981` (Green)
  - Gradient: `linear-gradient(135deg, #30cfd0 0%, #330867 100%)`
  - Light Background: `#D1FAE5`

#### Priority Level Colors & Gradients
- **Low Priority**:
  - Solid: `#10B981`
  - Gradient: `linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)`
  - Icon: TrendingUp

- **Medium Priority**:
  - Solid: `#3B82F6`
  - Gradient: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`
  - Icon: AlertCircle

- **High Priority**:
  - Solid: `#F59E0B`
  - Gradient: `linear-gradient(135deg, #fa709a 0%, #fee140 100%)`
  - Icon: Flame

- **Critical Priority**:
  - Solid: `#EF4444`
  - Gradient: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`
  - Icon: Zap (with pulse animation)

#### Semantic Colors
- **Text Primary**: `#1a1a2e`
- **Text Secondary**: `#6B7280`
- **Danger**: `#EF4444`
- **Border**: `#E5E7EB`
- **Hover**: `#F3F4F6`
- **Surface**: `#FFFFFF`
- **Accent Background**: `#EEF2FF`

#### Tag/Badge Gradients (Cycle through these)
1. `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
2. `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`
3. `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`
4. `linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)`
5. `linear-gradient(135deg, #fa709a 0%, #fee140 100%)`

#### Avatar Gradients (Cycle through these for team members)
1. `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
2. `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`
3. `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`
4. `linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)`
5. `linear-gradient(135deg, #fa709a 0%, #fee140 100%)`
6. `linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)`
7. `linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)`
8. `linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)`

### Spacing Scale
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px

### Border Radius
- **sm**: 6px
- **md**: 12px
- **lg**: 20px

### Shadows
- **Small**: `0 1px 3px rgba(0, 0, 0, 0.1)`
- **Medium**: `0 4px 8px rgba(0, 0, 0, 0.12)`
- **Card**: `0 4px 15px rgba(0, 0, 0, 0.08)`
- **Large**: `0 8px 32px rgba(0, 0, 0, 0.1)`
- **Header**: `0 4px 30px rgba(0, 0, 0, 0.1)`
- **Extra Large**: `0 8px 64px rgba(0, 0, 0, 0.15)` (for dialogs)

### Typography

#### Font
- **Family**: System default (San Francisco on macOS, Segoe UI on Windows, Roboto on Android)
- **Base Size**: 16px

#### Font Weights
- **Normal**: 400
- **Medium**: 500

#### Text Styles
- **h1**: 2xl size, medium weight, 1.5 line-height
- **h2**: xl size, medium weight, 1.5 line-height
- **h3**: lg size, medium weight, 1.5 line-height
- **h4**: base size, medium weight, 1.5 line-height
- **p**: base size, normal weight, 1.5 line-height
- **label**: base size, medium weight, 1.5 line-height
- **button**: base size, medium weight, 1.5 line-height
- **input**: base size, normal weight, 1.5 line-height

---

## 🎨 Component Specifications

### 1. Navigation Bar (Navbar)

**Desktop & Mobile Responsive**

#### Structure
- **Height**: 64px (h-16)
- **Background**: `linear-gradient(to right, #9333ea 0%, #ec4899 50%, #a855f7 100%)`
- **Border**: Bottom border with `rgba(255, 255, 255, 0.2)`, 1px
- **Shadow**: Large shadow
- **Position**: Sticky to top, z-index 50

#### Elements
1. **Logo Section** (Left):
   - Icon container: 
     - Background: `rgba(255, 255, 255, 0.2)` with backdrop blur
     - Padding: 8px
     - Border radius: 8px
     - Shadow: Medium
   - Icon: CheckSquare (24x24, white)
   - Text: "Smart Task Manager" (white, xl, hidden on mobile <640px)

2. **Action Buttons** (Right):
   - **Home Button** (when applicable):
     - Background: transparent
     - Border: 1px solid `rgba(255, 255, 255, 0.3)`
     - Hover: `rgba(255, 255, 255, 0.2)` with scale 1.05
     - Icon: Home (16x16)
     - Text: "Home" (hidden on mobile <640px)
   
   - **Log In Button**:
     - Same styling as Home button
     - Icon: LogIn (16x16)
     - Text: "Log In" (hidden on mobile <640px)
   
   - **Sign Up Button**:
     - Background: white
     - Text color: `#9333ea` (purple-600)
     - Hover: `rgba(255, 255, 255, 0.9)` with scale 1.05
     - Shadow: Large
     - Icon: UserPlus (16x16)
     - Text: "Sign Up" (hidden on mobile <640px)

#### Responsive Behavior
- **Mobile (<640px)**: Hide button labels, show only icons
- **Padding**: 16px mobile, 24px tablet, 32px desktop

---

### 2. Search Header (Secondary Header)

**Sticky below navbar**

#### Structure
- **Position**: Sticky, top-16 (64px from top), z-index 40
- **Background**: `rgba(255, 255, 255, 0.9)` with backdrop blur
- **Border**: Bottom border `rgba(255, 255, 255, 0.2)`, 1px
- **Shadow**: `0 4px 30px rgba(0, 0, 0, 0.1)`
- **Padding**: 16px mobile, 24px tablet, 32px desktop

#### Elements
1. **Task Counter** (Top Right):
   - Background: `linear-gradient(to right, #3b82f6 0%, #06b6d4 100%)` (blue-500 → cyan-500)
   - Text: White, small/xs
   - Padding: 6-8px horizontal, 6-8px vertical
   - Border radius: Full (pill shape)
   - Includes animated pulse dot (2x2, white, pulse animation)
   - Format: "X / Y Tasks" (desktop) or "X/Y" (mobile)

2. **Search Bar**:
   - Width: Full width, responsive
   - Height: 40px
   - Background: `rgba(255, 255, 255, 0.9)` with backdrop blur
   - Border: 2px solid `rgba(255, 255, 255, 0.5)`
   - Focus state: Border changes to `#a855f7` (purple-400)
   - Border radius: 6px
   - Padding left: 40px (for search icon)
   - Search icon: Left absolute, 12px from left, gray
   - Clear button: Right absolute (when text present), X icon

3. **Filter Buttons Row**:
   - Layout: Horizontal wrap on mobile, single row on desktop
   - Gap: 8px
   - Responsive sizing:
     - **Mobile**: Height 32px, padding 10px, text xs, icons 14x14
     - **Desktop**: Height 36px, padding 16px, text sm, icons 16x16

   - **Filter Button Structure**:
     - Background: `rgba(255, 255, 255, 0.9)` with backdrop blur
     - Border: 2px solid `rgba(255, 255, 255, 0.5)`
     - Hover: Border changes to `#a855f7` (purple-400)
     - Border radius: 6px
     - Icon: Filter icon
     - Label: "Priority", "Status", or "Assignee" (hidden <480px)
     - Badge (when filters active):
       - Small rounded badge with count
       - Different gradient per filter type:
         - Priority: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`
         - Status: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`
         - Assignee: `linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)`

   - **Clear Filters Button** (when active):
     - Ghost variant
     - Icon: X
     - Text: "Clear (N)" or "(N)" on mobile
     - Hover: Red color

---

### 3. Kanban Column

#### Structure
- **Width**: 
  - Mobile: Full width (100%)
  - Tablet (≥768px): 50% (2 columns)
  - Desktop (≥1024px): 33.333% (3 columns)
- **Min Width**: 280px
- **Min Height**: 500px
- **Background**: `rgba(255, 255, 255, 0.8)` with backdrop blur
- **Border**: 2px solid `rgba(255, 255, 255, 0.3)`
- **Border Radius**: 12px
- **Shadow**: `0 8px 32px rgba(0, 0, 0, 0.1)`
- **Padding**: 24px

#### Header Elements
1. **Top Accent Bar**:
   - Height: 4px
   - Position: Absolute top
   - Background: Status gradient (different per column)

2. **Column Header** (Flexbox row):
   - **Task Count Badge**:
     - Size: 32x32
     - Border radius: 8px
     - Background: Status gradient
     - Text: White, centered
     - Shadow: Large
   
   - **Column Title**:
     - Text: h3 size
     - Gradient text effect using column gradient
     - Margin left: 8px
   
   - **Add Button**:
     - Size: 32x32
     - Background: Status gradient
     - Icon: Plus (16x16, white)
     - Hover: Scale 1.1
     - Transition: All properties

3. **Drop Zone**:
   - Flex: 1 (fills remaining space)
   - Border radius: 6px
   - Default: Transparent
   - On drag over: 
     - Background: `rgba(255, 255, 255, 0.5)`
     - Border: 2px dashed `rgba(0, 0, 0, 0.2)`
   - Transition: 0.2s background-color

#### Column-Specific Gradients
- **To Do**: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`
- **In Progress**: `linear-gradient(135deg, #fa709a 0%, #fee140 100%)`
- **Done**: `linear-gradient(135deg, #30cfd0 0%, #330867 100%)`

---

### 4. Task Card

#### Structure
- **Background**: White
- **Border**: 2px solid `rgba(255, 255, 255, 0.5)`
- **Border Radius**: 12px
- **Padding**: 24px
- **Margin Bottom**: 16px
- **Shadow**: `0 4px 15px rgba(0, 0, 0, 0.08)`
- **Cursor**: Move (draggable)
- **Hover Effects**:
  - Scale: 1.02
  - Top accent bar appears (1px height, status gradient, opacity 0 → 1)
- **Dragging State**: Opacity 0.5

#### Elements Layout (Top to Bottom)

1. **Header Row**:
   - Layout: Flexbox, space between
   - **Left**: Task title (h4, primary text color)
   - **Priority Badge** (if set):
     - Size: ~20x20 with padding
     - Background: Priority gradient
     - Border radius: 6px
     - Icon: 12x12, white
     - Shadow: Small
     - Animation: Pulse
   - **Right**: Action buttons
     - Edit button: Ghost variant, 32x32, Edit icon 16x16, gray, scale 1.1 on hover
     - Delete button: Ghost variant, 32x32, Trash2 icon 16x16, red, scale 1.1 on hover

2. **Description** (if present):
   - Text: p, secondary color
   - Margin bottom: 16px

3. **Metadata Section** (Vertical stack, gap 8px):
   
   a. **Assignee Row** (if present):
      - Layout: Flexbox horizontal
      - Avatar:
        - Size: 32x32
        - Background: Assignee gradient (hash-based from name)
        - Border: 2px white
        - Shadow: Medium
        - Initials: White text, xs, centered, 2 letters max
      - Name: Text sm, primary color, margin left 8px
   
   b. **Due Date Row** (if present):
      - Background: `#f3f4f6` (gray-100)
      - Padding: 6px 12px
      - Border radius: 8px
      - Width: Fit content
      - Clock icon: 16x16, secondary color
      - Text: sm, secondary color, formatted date
   
   c. **Tags Row** (if present):
      - Layout: Flexbox horizontal wrap
      - Gap: 8px
      - Margin top: 8px
      - Each tag:
        - Padding: 4px 12px
        - Border radius: Full (pill)
        - Background: Tag gradient (cycles through 5 gradients)
        - Text: xs, white
        - Shadow: Medium

---

### 5. Task Dialog (Create/Edit)

#### Structure
- **Max Width**: 425px
- **Background**: White
- **Border Radius**: 12px
- **Shadow**: `0 8px 64px rgba(0, 0, 0, 0.15)`
- **Padding**: 24px

#### Elements

1. **Header**:
   - Title: "Add New Task" or "Edit Task"
   - Description: Instructional text in secondary color

2. **Form Fields** (Vertical stack, gap 16px):

   a. **Task Title**:
      - Label: "Task Title"
      - Input: Full width, border focus ring purple-500
   
   b. **Description** (Textarea):
      - Label: "Description"
      - Rows: 3
      - Placeholder: "Add task details..."
   
   c. **Status** (Select dropdown):
      - Label: "Status"
      - Options: To Do, In Progress, Done
   
   d. **Priority** (Select dropdown):
      - Label: "Priority"
      - Options: Low, Medium, High, Critical
   
   e. **Assignee** (Input):
      - Label: "Assignee"
      - Placeholder: "John Doe"
   
   f. **Due Date** (Date input):
      - Label: "Due Date"
      - Type: Date picker
   
   g. **Tags** (Input):
      - Label: "Tags"
      - Placeholder: "Separate tags with commas"

3. **Footer** (Action buttons):
   - Layout: Flexbox, right aligned, gap 8px
   - **Cancel Button**:
     - Variant: Outline
     - Text: "Cancel"
   - **Save Button**:
     - Background: `linear-gradient(to right, #9333ea 0%, #ec4899 100%)` (purple-600 → pink-600)
     - Hover: Darker gradient
     - Text: White
     - Text: "Create Task" or "Save Changes"

---

### 6. HomePage

#### Hero Section
- **Background**: `linear-gradient(to bottom right, #9333ea 0%, #ec4899 50%, #a855f7 100%)`
- **Padding**: 80px top, 64px bottom
- **Max Width**: 1280px centered

**Elements**:
1. **Logo Icon**:
   - Container: 64px padding, `rgba(255, 255, 255, 0.2)` with backdrop blur
   - Border radius: 16px
   - Shadow: 2xl
   - Icon: CheckSquare 64x64, white

2. **Heading**:
   - Text: "Smart Task Manager"
   - Size: 5xl mobile, 6xl desktop
   - Color: White
   - Margin bottom: 24px

3. **Subheading**:
   - Size: xl mobile, 2xl desktop
   - Color: `rgba(255, 255, 255, 0.9)`
   - Max width: 768px
   - Centered
   - Margin bottom: 32px

4. **CTA Button**:
   - Background: White
   - Text: `#9333ea` (purple-600)
   - Size: Large (text lg, padding 32px horizontal, 24px vertical)
   - Icon: ArrowRight 20x20
   - Hover: `rgba(255, 255, 255, 0.9)` with scale 1.05
   - Shadow: 2xl

5. **Hero Image**:
   - Margin top: 64px
   - Border radius: 16px
   - Border: 4px solid `rgba(255, 255, 255, 0.2)`
   - Shadow: 2xl
   - Height: 384px
   - Object fit: Cover

#### Features Section
- **Padding**: 64px vertical
- **Layout**: Grid, 3 columns on desktop, 1 on mobile
- **Gap**: 32px

**Section Title**:
- Text: "Why Choose Smart Task Manager?"
- Size: 3xl mobile, 4xl desktop
- Color: White
- Centered
- Margin bottom: 48px

**Feature Card** (3 identical cards):
- **Background**: `rgba(255, 255, 255, 0.1)` with backdrop blur
- **Border**: 1px solid `rgba(255, 255, 255, 0.2)`
- **Border Radius**: 16px
- **Padding**: 32px
- **Shadow**: xl
- **Hover**: Scale 1.05
- **Transition**: All

**Card Elements**:
1. Icon Container:
   - Background: `rgba(255, 255, 255, 0.2)` with backdrop blur
   - Padding: 12px
   - Border radius: 12px
   - Width: Fit content
   - Margin bottom: 16px
   - Icon: 32x32, white

2. Title:
   - Size: 2xl
   - Color: White
   - Margin bottom: 12px

3. Description:
   - Color: `rgba(255, 255, 255, 0.8)`
   - Line height: 1.5

**Feature Icons**:
- Feature 1: ListTodo
- Feature 2: Users
- Feature 3: TrendingUp

#### CTA Section
- **Background**: `rgba(255, 255, 255, 0.1)` with backdrop blur
- **Border**: 1px solid `rgba(255, 255, 255, 0.2)`
- **Border Radius**: 24px
- **Padding**: 48px
- **Shadow**: 2xl
- **Max Width**: 1280px centered
- **Margin**: 64px vertical

**Elements**:
1. Heading: "Ready to boost your productivity?"
   - Size: 3xl mobile, 4xl desktop
   - Color: White
   - Margin bottom: 16px

2. Subtext: "Join thousands of teams already using Smart Task Manager"
   - Size: xl
   - Color: `rgba(255, 255, 255, 0.9)`
   - Margin bottom: 32px

3. CTA Button: Same as hero section button
   - Text: "Start Managing Tasks"

---

## 🎭 Animations & Transitions

### Hover Animations
- **Buttons**: Scale 1.05, transition all 0.2s
- **Cards**: Scale 1.02, transition all 0.2s
- **Feature Cards**: Scale 1.05, transition all 0.3s
- **Task Card Accent Bar**: Opacity 0 → 1, transition 0.2s

### Pulse Animation
- **Task Counter Dot**: Animate pulse (TailwindCSS pulse class)
- **Priority Badge**: Animate pulse for critical priority

### Drag & Drop
- **Dragging Task**: Opacity 0.5
- **Drop Zone Hover**: Background color change 0.2s, dashed border appears

### Backdrop Blur
- Applied to all glassmorphism surfaces for depth

---

## 📱 Responsive Breakpoints

- **xs**: < 480px (Extra small phones)
- **sm**: ≥ 640px (Small tablets and large phones)
- **md**: ≥ 768px (Tablets)
- **lg**: ≥ 1024px (Laptops)
- **xl**: ≥ 1280px (Desktops)

### Layout Changes
- **Kanban Columns**: 1 column mobile → 2 tablet → 3 desktop
- **Feature Cards**: 1 column mobile → 3 desktop
- **Navbar Text**: Hidden <640px, icons only
- **Filter Labels**: Hidden <480px, icons only
- **Search Padding**: 16px mobile → 24px tablet → 32px desktop

---

## 🎯 Icon Library

**Source**: Lucide React

### Icons Used
- CheckSquare (Logo, 24x24)
- Home (Navigation, 16x16)
- LogIn (Navigation, 16x16)
- UserPlus (Navigation, 16x16)
- Search (Search bar, 16x16)
- Filter (Filter buttons, 16x16)
- X (Close/Clear, 16x16)
- Plus (Add task, 16x16)
- Edit (Edit task, 16x16)
- Trash2 (Delete task, 16x16)
- TrendingUp (Low priority, 12x12)
- AlertCircle (Medium priority, 12x12)
- Flame (High priority, 12x12)
- Zap (Critical priority, 12x12)
- Clock (Due date, 16x16)
- Tag (Tags, 16x16)
- ListTodo (Feature, 32x32)
- Users (Feature, 32x32)
- TrendingUp (Feature, 32x32)
- ArrowRight (CTA, 20x20)

---

## 🎨 Glassmorphism Effect Recipe

Used throughout the app for modern depth:

1. **Background**: Semi-transparent white `rgba(255, 255, 255, 0.1)` to `rgba(255, 255, 255, 0.9)`
2. **Backdrop Filter**: `blur(16px)` (CSS: `backdrop-blur-lg`)
3. **Border**: 1-2px solid `rgba(255, 255, 255, 0.2)` to `rgba(255, 255, 255, 0.5)`
4. **Shadow**: Varies by component (small to 2xl)

**Opacity levels by component type**:
- Navbar: 0.9
- Search header: 0.9
- Kanban columns: 0.8
- Feature cards: 0.1
- CTA sections: 0.1

---

## 💡 Implementation Notes

### Gradient Text Effect
To create gradient text (used in column headers):
1. Apply gradient as background-image
2. Use `background-clip: text`
3. Set text color to transparent
4. Ensure `-webkit-` prefixes for Safari

### Avatar Color Assignment
Avatars get consistent colors based on assignee name:
- Use hash function on name string
- Modulo by number of gradient options (8)
- Always shows same color for same name

### Tag Color Cycling
Tags cycle through 5 gradient options:
- Use index modulo 5
- First tag gets gradient 1, second gets gradient 2, etc.

### Responsive Typography
- Base font size: 16px
- All text scales relative to base
- Line height: 1.5 for all text (accessibility)

---

## ✅ Accessibility Considerations

- **Color Contrast**: All text has sufficient contrast ratios
- **Touch Targets**: Minimum 32x32px for mobile buttons
- **Focus States**: Visible focus rings on all interactive elements
- **Semantic HTML**: Proper heading hierarchy (h1 → h2 → h3)
- **ARIA Labels**: Icons have associated text (hidden on mobile but present for screen readers)
- **Keyboard Navigation**: All dialogs and dropdowns keyboard accessible

---

## 📦 Component Library Used

**ShadCN/UI Components**:
- Button
- Input
- Dialog
- Select
- Badge
- Avatar
- Dropdown Menu
- Textarea
- Label

All components follow the design tokens specified above with custom color overrides for the vibrant purple/pink theme.

---

This design system provides all the information needed to accurately recreate the Smart Task Manager interface in Figma, Sketch, Adobe XD, or any other design tool. All measurements, colors, and specifications are production-ready and match the implemented web application.

# Project TODO and Implementation Plan

This document outlines the missing features from the initial plan and provides a high-level implementation strategy for each.

---

### **Phase 2: Calendar & List Views**

#### 2.1 View Toggle

**Goal:** Allow users to switch between the calendar and a list view of events.

**Plan:**
1.  **State Management:** In `src/app/page.tsx`, introduce a state variable to manage the current view (e.g., `const [view, setView] = useState<'calendar' | 'list'>('calendar');`).
2.  **Toggle Buttons:** In `src/components/calendar/CalendarNavigation.tsx`, add two buttons ("Calendar" and "List") that update the `view` state in the parent component via a callback function.
3.  **Conditional Rendering:** In `src/app/page.tsx`, use the `view` state to conditionally render either the `<CalendarView />` or a new `<EventList />` component.

#### 2.2 List View UX

**Goal:** Create a user-friendly list of events with grouping, sorting, and pagination.

**Plan:**
1.  **Create `EventList.tsx`:**
    *   Create a new component at `src/components/events/EventList.tsx`.
    *   This component will receive the list of events as a prop.
2.  **Group by Date:**
    *   Inside `EventList.tsx`, process the events array to group them by date. You can use a `Map` or an object to store events under date headings.
    *   Render the date headings and the events for each date.
3.  **Sorting Options:**
    *   Add a dropdown/select component to `EventList.tsx` with options to sort by "Date", "Event Type", and "Name".
    *   Implement the sorting logic based on the selected option.
4.  **Pagination:**
    *   Implement simple "Next" and "Previous" buttons to paginate through the list of events.
    *   You can manage the current page with a state variable.

---

### **Phase 3: Filtering & Search**

#### 3.1 Search Functionality

**Goal:** Allow users to search for events by name, description, or location.

**Plan:**
1.  **Install Input Component:** Run `npx shadcn@latest add input` to add the input component.
2.  **Create `EventSearch.tsx`:**
    *   Create a new component at `src/components/events/EventSearch.tsx`.
    *   This component will contain an input field.
3.  **Implement Search Logic:**
    *   In `src/app/page.tsx`, add a state for the search term.
    *   Pass the search term and a setter function to `EventSearch.tsx`.
    *   Use a debounce hook to avoid excessive re-renders on every keystroke.
    *   Filter the events based on the search term before passing them to the `CalendarView` or `EventList`.

---

### **Phase 4: Event Registration System**

#### 4.1 Registration Button

**Goal:** Create a button that shows the registration status of an event.

**Plan:**
1.  **Create `EventRegistrationButton.tsx`:**
    *   Create a new component at `src/components/events/EventRegistrationButton.tsx`.
    *   This component will receive event and user data as props.
2.  **Implement Button Logic:**
    *   Based on the props, the button should display different text and be enabled/disabled:
        *   "Register (15/25 spots)" if spots are available.
        *   "Full" if the event is full.
        *   "You are registered" if the user is already registered.
        *   Disabled for past events.

#### 4.2 User State Management

**Goal:** Manage the current user's data and registered events.

**Plan:**
1.  **Create `UserContext.tsx`:**
    *   Create a new file at `src/contexts/UserContext.tsx`.
    *   Use React's Context API to create a `UserContext`.
    *   The context will provide user data (e.g., name, registered events) and functions to update it.
2.  **Create `use-user.ts` hook:**
    *   Create a new file at `src/hooks/use-user.ts`.
    *   This custom hook will provide easy access to the `UserContext`.
3.  **Wrap Application:**
    *   In `src/app/layout.tsx`, wrap the application with the `UserProvider` to make the user context available everywhere.

---

### **Phase 5: Enhanced UX & Polish**

#### 5.1 Loading States

**Goal:** Provide visual feedback to the user while data is loading.

**Plan:**
1.  **Install Skeleton Component:** Run `npx shadcn@latest add skeleton` to add the skeleton component.
2.  **Create `EventListSkeleton.tsx`:**
    *   Create a new component at `src/components/events/EventListSkeleton.tsx`.
    *   This component will mimic the layout of the `EventList` using skeleton placeholders.
3.  **Implement Loading Logic:**
    *   In `src/app/page.tsx`, use a loading state from your data fetching hook (`use-events`).
    *   While loading, display the `<CalendarSkeleton />` or `<EventListSkeleton />` instead of the actual components.

#### 5.2 Empty States

**Goal:** Inform the user when there is no content to display.

**Plan:**
1.  **Create `EmptyState.tsx`:**
    *   Create a new component at `src/components/common/EmptyState.tsx`.
    *   This component will take a message as a prop and display it in a user-friendly way (e.g., with an icon).
2.  **Use in Components:**
    *   In `EventList.tsx` and `CalendarView.tsx`, if there are no events to display (e.g., after applying filters or for a month with no events), render the `<EmptyState />` component with an appropriate message.

#### 5.3 Toast Notifications

**Goal:** Provide non-intrusive feedback for user actions.

**Plan:**
1.  **Install Sonner:** Run `npx shadcn@latest add sonner` to add the toast notification component.
2.  **Add to Layout:** Add the `<Toaster />` component to your root layout (`src/app/layout.tsx`).
3.  **Trigger Toasts:**
    *   In your registration logic, call the `toast()` function from `sonner` to show success or error messages (e.g., `toast.success('Successfully registered!')`).

---

### **Suggested Additional Features**

*   **User Authentication:**
    *   **Plan:** Implement a simple email/password login system. You can use a library like `next-auth` for a full-featured solution or build a simple JWT-based authentication yourself.
*   **Event Submission Form:**
    *   **Plan:** Create a new page with a form for users to submit events. The form should include fields for all the necessary event details. On submission, the event can be saved to a "pending" state for admin approval.
*   **Admin Dashboard:**
    *   **Plan:** Create a protected route for admins. This dashboard would display lists of pending events, registered users for each event, and provide options to approve, edit, or delete events.
*   **Theming (Light/Dark Mode):**
    *   **Plan:** Use a library like `next-themes` to manage themes. Create a theme toggle button in the UI. Update your global CSS to use CSS variables for colors that change between themes.
*   **Internationalization (i18n):**
    *   **Plan:** Use a library like `next-intl`. Store your translations in JSON files and use the provided hooks and components to display the correct language based on the user's preference or browser settings.
*   **Maps Integration:**
    *   **Plan:** Use a library like `react-leaflet` or `google-maps-react`. On the event detail page, use the event's location data to display a map marker.

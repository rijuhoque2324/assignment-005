# Dev Stack

A simple and interactive React application where users can explore different web development technologies and build their own selected technology stack.


## Live Demo

**Live Site:** [Add your live website link here]
**GitHub Repository:** [Add your GitHub repository link here]

## Technologies Used
-- React
-- TypeScript
-- Tailwind CSS
-- React Toastify
-- Vite
-- JSON Data
-- React Hooks (useState)


## Features

### 1. Browse Technologies
Users can view different technologies with their name, image, description, and other information.

### 2. Add & Remove Technologies
Users can add technologies to their personal stack. Once a technology is selected, the button becomes disabled to prevent duplicate selections.
Users can also remove a technology from the selected stack.

### 3. Dynamic & Interactive UI
The interface updates automatically when the user adds or removes technologies. Toast notifications are also shown to give instant feedback about user actions.



# React Questions & Answers

## 1. What is JSX, and why is it used in React?

**JSX** is a syntax that lets us write HTML-like code inside JavaScript.
React uses JSX because it makes UI code easier to read and understand.


## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.
**State** is data managed inside a component that can change over time.

Simply:

* **Props →** Parent gives data to Child
* **State →** Component manages its own changing data


## 3. What does the `useState` hook do, and where did you use it in this project?
`useState` lets a React component store and update data.
In this project, I used `useState` to keep track of the technologies selected by the user.
const [selectedSkills, setSelectedSkills] = useState([]);

When a user adds or removes a technology, the state is updated and React automatically updates the UI.


## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` is used to perform side effects in a React component, such as fetching data.
I used `useEffect` to load the technology data from a JSON file when the component first loads.


The empty `[]` means the effect runs when the component loads.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?
React needs a unique `key` to identify each item in a list.
It helps React understand which item was added, removed, or changed, so React can update the UI efficiently.

The `key` should be unique for every item.


## 6. What is conditional rendering? Show one place you used it.
**Conditional rendering** means showing different UI depending on a condition.
For example, I used it to show a message when no technology has been selected.

example:
{selectedSkills.length === 0 ? (
  <p>No technology selected</p>
) : (
  <p>{selectedSkills.length} Technology Selected</p>
)}


## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent component passes data to a child using **props**.

example:
<SkillCard skill={skill} />

Here, the `skill` data is passed from the parent to `SkillCard`.
A child can communicate back to the parent by receiving a **callback function as a prop** and calling that function.

example:
<SkillCard
  skill={skill}
  onAdd={handleAdd}
/>


Then the child can call:

example:
onAdd(skill);


So the basic flow is:
**Parent → Props → Child**
**Child → Callback Function → Parent**
const friends = [
  {
    name: "Ivan",
    img: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastTimeCalled: "5.5. 2024",
    id: 1,
  },
  {
    name: "Ante",
    img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastTimeCalled: "28.5. 2024",
    id: 2, //Use some libary for id's
  },
  {
    name: "Ivan",
    img: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastTimeCalled: "5.5. 2024",
    id: 3,
  },
  {
    name: "Ante",
    img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastTimeCalled: "28.5. 2024",
    id: 4, //Use some libary for id's
  },
  {
    name: "Ivan",
    img: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastTimeCalled: "5.5. 2024",
    id: 5,
  },
  {
    name: "Ante",
    img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastTimeCalled: "28.5. 2024",
    id: 6, //Use some libary for id's
  },
  {
    name: "Ivan",
    img: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastTimeCalled: "5.5. 2024",
    id: 7,
  },
  {
    name: "Ante",
    img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastTimeCalled: "28.5. 2024",
    id: 8, //Use some libary for id's
  },
  {
    name: "Ivan",
    img: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastTimeCalled: "5.5. 2024",
    id: 9,
  },
  {
    name: "Ante",
    img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastTimeCalled: "28.5. 2024",
    id: 10, //Use some libary for id's
  },
  {
    name: "Ivan",
    img: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastTimeCalled: "5.5. 2024",
    id: 11,
  },
  {
    name: "Ante",
    img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastTimeCalled: "28.5. 2024",
    id: 12, //Use some libary for id's
  },
  {
    name: "Ivan",
    img: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastTimeCalled: "5.5. 2024",
    id: 13,
  },
  {
    name: "Ante",
    img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lastTimeCalled: "28.5. 2024",
    id: 14, //Use some libary for id's
  },
];

/////////////
const recentCalls = [
  {
    name: "Ivan",
    img: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 1,
  },
  {
    name: "Ante",
    img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 2,
  },
  {
    name: "Ivan",
    img: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 3,
  },
  {
    name: "Ante",
    img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 4,
  },
  {
    name: "Ivan",
    img: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 5,
  },
  {
    name: "Ante",
    img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 6,
  },
  {
    name: "Ivan",
    img: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 7,
  },
  {
    name: "Ante",
    img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 8,
  },
];

export { friends, recentCalls };

const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "a@a.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Generate monthly sales report for January.",
        taskDate: "2026-02-15",
        category: "Reports",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Meeting with ABC client regarding new proposal.",
        taskDate: "2026-02-10",
        category: "Meetings",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update CRM Data",
        taskDescription: "Update customer records in CRM system.",
        taskDate: "2026-02-05",
        category: "Data Entry",
      },
    ],
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create new UI design for product landing page.",
        taskDate: "2026-02-18",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve responsive issue in navbar.",
        taskDate: "2026-02-12",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress website images for performance.",
        taskDate: "2026-02-20",
        category: "Performance",
      },
    ],
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Blog Post",
        taskDescription: "Publish blog about new product features.",
        taskDate: "2026-02-11",
        category: "Content",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Social Media Campaign",
        taskDescription: "Plan marketing posts for upcoming week.",
        taskDate: "2026-02-19",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Newsletter",
        taskDescription: "Send monthly newsletter to subscribers.",
        taskDate: "2026-02-08",
        category: "Email Marketing",
      },
    ],
  },
  {
    id: 4,
    firstName: "Ananya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Perform weekly database backup.",
        taskDate: "2026-02-17",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Integrate payment gateway API.",
        taskDate: "2026-02-09",
        category: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDescription: "Check server performance logs.",
        taskDate: "2026-02-21",
        category: "DevOps",
      },
    ],
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Customer Support",
        taskDescription: "Resolve pending support tickets.",
        taskDate: "2026-02-14",
        category: "Support",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Product Testing",
        taskDescription: "Test new features before release.",
        taskDate: "2026-02-22",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Bug Verification",
        taskDescription: "Verify fixed bugs in staging environment.",
        taskDate: "2026-02-06",
        category: "QA",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};

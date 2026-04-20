export const dummyJobs = [
  {
    id: 1,
    title: "Fix kitchen plumbing leak",
    description: "Water leaking from kitchen sink pipe. Need urgent repair.",
    location: "Gulberg, Lahore",
    budget: "1500",
    postedBy: "Ahmed Khan",
    postedDate: "2 hours ago",
    status: "open",
    bids: [
      { id: 1, provider: "Ali Plumbing", amount: "₹1200", time: "2 hours" },
      { id: 2, provider: "ProFix Services", amount: "₹1400", time: "3 hours" }
    ]
  },
  {
    id: 2,
    title: "Electrical wiring for new room",
    description: "Need complete electrical wiring for 12x15 bedroom.",
    location: "DHA Phase 5, Karachi",
    budget: "8000",
    postedBy: "Sara Ahmed",
    postedDate: "1 day ago",
    status: "open",
    bids: []
  }
];
const languages = [
    { code: "en", name: "English - EN" },
    { code: "hi", name: "हिंदी - HI" },
  ];

const  FAQs = [
  {
    question: "What are the benefits of listing your profile on oneCallWorker?",
    answers: [
      "Get work with just one call",
      "Reach more people in your area",
      "Build trust with verified profile",
      "Earn more by getting regular jobs",
    ],
  },
  // {
  //   question: "How do I get verified on oneCallWorker?",
  //   answers: [
  //     "Submit your ID and certifications",
  //     "Complete your profile details",
  //     "Wait for admin approval",
  //   ],
  // },
  {
    question: "Is there a fee for using oneCallWorker?",
    answers: [
      "Listing is free",
    ],
  },
];

  const mapStyles = [
    { label: "Satellite", value: "satellite-streets-v12" },
    { label: "Dark", value: "dark-v11" },
    { label: "Light", value: "light-v11" },
    { label: "Streets", value: "streets-v12" },
    { label: "Navigation Day", value: "navigation-day-v1" },
    { label: "Navigation Night", value: "navigation-night-v1" },
  ];
  export {
    languages,
    FAQs,
    mapStyles
  }
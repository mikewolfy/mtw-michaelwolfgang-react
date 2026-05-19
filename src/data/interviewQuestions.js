// Interview Questions Data

export const getCSharpQuestions = () => {
  return [
    {
      question: "Can multiple catch blocks be executed?",
      answer: "No, Multiple catch blocks of similar type can't be executed. Once the proper catch code executed, the control is transferred to the finally block, and then the code that follows the finally block gets executed."
    },
    {
      question: "Define Constructors",
      answer: "A constructor is a member function in a class that has the same name as its class. The constructor is automatically invoked whenever an object class is created. It constructs the values of data members while initializing the class."
    },
    {
      question: "What are Jagged Arrays?",
      answer: "Arrays of arrays, which can have different sizes and dimensions."
    },
    {
      question: "What is the difference between ref & out parameters?",
      answer: "An argument passed as ref must be initialized before passing to the method whereas out parameter needs not to be initialized before passing to a method."
    },
    {
      question: "What is the use of 'using' statement in C#?",
      answer: "The 'using' block is used to obtain a resource and process it and then automatically dispose of when the execution of the block completed."
    },
    {
      question: "What is serialization?",
      answer: "When we want to transport an object through a network, then we have to convert the object into a stream of bytes. The process of converting an object into a stream of bytes is called Serialization. For an object to be serializable, it should implement ISerialize Interface. De-serialization is the reverse process of creating an object from a stream of bytes."
    },
    {
      question: "Can we use 'this' command within a static method?",
      answer: "We can't use 'This' in a static method because we can only use static variables/methods in a static method."
    },
    {
      question: "What is the difference between constants and read-only?",
      answer: "Constant variables are declared and initialized at compile time. The value can't be changed afterward. Read-only is used only when we want to assign the value at run time."
    },
    {
      question: "What are sealed classes in C#?",
      answer: "We create sealed classes when we want to restrict the class to be inherited. Sealed modifier used to prevent derivation from a class. If we forcefully specify a sealed class as base class, then a compile-time error occurs."
    },
    {
      question: "What is method overloading?",
      answer: "Method overloading is creating multiple methods with the same name with unique signatures in the same class. When we compile, the compiler uses overload resolution to determine the specific method to be invoke."
    }
  ];
};

export const getAzureQuestions = () => {
  return [
    {
      question: "What are the different cloud deployment models?",
      answer: "Public, private, and hybrid."
    },
    {
      question: "What are virtual machine scale sets in Azure?",
      answer: ""
    }
  ];
};

export const getProblemSolvingQuestions = () => {
  return [
    {
      question: "How would you define and drive a CIAM target architecture across a large enterprise with multiple product teams and legacy identity stacks?",
      answer: "Start with business outcomes and risk posture, then define a reference architecture and capability roadmap. Use architecture decision records, platform standards, and phased migration patterns that let teams deliver incrementally while converging on shared CIAM services."
    },
    {
      question: "Describe a time you had to build consensus across security, product, and engineering teams that had conflicting CIAM priorities.",
      answer: "I align stakeholders on measurable outcomes first, such as fraud reduction, conversion, and compliance timelines. Then I facilitate trade-off decisions with transparent options, documented risks, and clear ownership so disagreement turns into an executable plan."
    },
    {
      question: "How do you balance customer experience and security in CIAM, especially around MFA, step-up authentication, and account recovery?",
      answer: "I use risk-based authentication and journey-level telemetry to apply stronger controls only when needed. The goal is to reduce friction for low-risk users while protecting high-risk events with adaptive controls and resilient recovery mechanisms."
    },
    {
      question: "What is your approach to delivering value through other teams rather than building everything directly yourself?",
      answer: "I treat CIAM as a platform product: publish standards, reference implementations, and reusable integration patterns. I focus on enablement, governance, and KPIs so product teams can move faster with consistency instead of waiting on a central team bottleneck."
    },
    {
      question: "How would you modernize identity in an organization where multiple business units own different customer directories and login experiences?",
      answer: "I begin with identity domain mapping and data governance, then establish federation and profile-linking strategies before full consolidation. I prioritize high-impact journeys first and use coexistence patterns to reduce migration risk while improving customer continuity."
    },
    {
      question: "How do you measure whether a CIAM transformation is succeeding at enterprise scale?",
      answer: "I track a balanced scorecard: authentication success rate, latency, account takeover incidents, onboarding time for teams, and release frequency. Success means better security and reliability while business teams ship faster and customer conversion improves."
    },
    {
      question: "When performance or reliability issues appear in identity flows, how do you lead the response across multiple teams?",
      answer: "I establish shared incident command, define clear service ownership boundaries, and drive root-cause analysis across identity, app, and infrastructure layers. Then I convert lessons learned into architectural guardrails, SLOs, and automated regression checks."
    }
  ];
};

export const InterviewQuestionCategories = {
  Azure: "Azure",
  CSharp: "CSharp",
  ProblemSolving: "ProblemSolving"
};

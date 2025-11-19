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
      question: "What does the term microservice mean to you?",
      answer: "Clear set of well defined responsibilities, owned by single team, deployable on its own."
    },
    {
      question: "What does DevOps mean to you?",
      answer: "The combination of people, tools, and process to quickly deliver value to customers."
    }
  ];
};

export const InterviewQuestionCategories = {
  Azure: "Azure",
  CSharp: "CSharp",
  ProblemSolving: "ProblemSolving"
};

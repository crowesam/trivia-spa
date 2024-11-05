import React, { useState } from 'react';
import './App.css';
import SplashScreen from './SplashScreen';
// Import sound files
const correctSound = new Audio('/correct.mp3');
const wrongSound = new Audio('/wrong.mp3');

// Questions Data
const questions = [
  {
      question: "Which of the following is a common symptom of Gaucher disease?", 
      answers: ["Enlarged spleen", "Loss of vision", "Severe headaches", "Skin rash"], 
      correctAnswer: "Enlarged spleen" 
  },
  {
      question: "What is a primary symptom of Marfan syndrome?",
      answers: ["Excessive bleeding", "Vision problems", "Tall and slender build", "Skin lesions"],
      correctAnswer: "Tall and slender build"
  },
  {
      question: "Which symptom is commonly associated with Ehlers-Danlos syndrome?",
      answers: ["Excessive flexibility", "Chronic fatigue", "Hearing loss", "Skin darkening"],
      correctAnswer: "Excessive flexibility"
  },
  {
      question: "Which rare disease is characterized by progressive muscle weakness?",
      answers: ["Myasthenia gravis", "Cystic fibrosis", "Huntington's disease", "Narcolepsy"],
      correctAnswer: "Myasthenia gravis"
  },
  {
      question: "What is a hallmark symptom of Huntington's disease?",
      answers: ["Uncontrolled movements", "Excessive hair growth", "Swollen joints", "Shortness of breath"],
      correctAnswer: "Uncontrolled movements"
  },
  {
      question: "Which disease involves a buildup of copper in the liver and brain?",
      answers: ["Wilson's disease", "Addison's disease", "Graves' disease", "Cushing's syndrome"],
      correctAnswer: "Wilson's disease"
  },
  {
      question: "Which symptom is associated with Amyotrophic Lateral Sclerosis (ALS)?",
      answers: ["Muscle stiffness", "Skin lesions", "Frequent nosebleeds", "Hair loss"],
      correctAnswer: "Muscle stiffness"
  },
  {
      question: "Which of these is a symptom of Cushing's syndrome?",
      answers: ["Weight gain", "Increased hair loss", "Hearing loss", "Skin darkening"],
      correctAnswer: "Weight gain"
  },
  {
      question: "What is a main symptom of narcolepsy?",
      answers: ["Sudden sleep attacks", "High blood pressure", "Excessive sweating", "Chronic pain"],
      correctAnswer: "Sudden sleep attacks"
  },
  {
      question: "What is a common symptom of Addison's disease?",
      answers: ["Chronic fatigue", "Bone fragility", "Loss of vision", "Increased appetite"],
      correctAnswer: "Chronic fatigue"
  },
  {
      question: "What symptom is often seen in people with Fragile X syndrome?",
      answers: ["Intellectual disability", "Excessive sweating", "Severe joint pain", "Skin darkening"],
      correctAnswer: "Intellectual disability"
  },
  {
      question: "Which rare disease presents with episodes of burning pain, usually in the hands and feet?",
      answers: ["Fabry disease", "Tay-Sachs disease", "Moyamoya disease", "Niemann-Pick disease"],
      correctAnswer: "Fabry disease"
  },
  {
      question: "Which symptom is associated with Niemann-Pick disease?",
      answers: ["Accumulation of fat in cells", "Muscle spasms", "Excessive sleepiness", "Rapid weight loss"],
      correctAnswer: "Accumulation of fat in cells"
  },
  {
      question: "Which rare disease is associated with brittle bones that break easily?",
      answers: ["Osteogenesis imperfecta", "Ehlers-Danlos syndrome", "Gaucher disease", "Fabry disease"],
      correctAnswer: "Osteogenesis imperfecta"
  },
  {
      question: "What is a common symptom of Prader-Willi syndrome?",
      answers: ["Chronic hunger", "Memory loss", "Loss of hair", "Skin darkening"],
      correctAnswer: "Chronic hunger"
  },
  {
      question: "Which symptom is typical of Rett syndrome?",
      answers: ["Loss of purposeful hand skills", "Vision loss", "Hair loss", "Excessive sweating"],
      correctAnswer: "Loss of purposeful hand skills"
  },
  {
      question: "Which disease is characterized by abnormal development of blood vessels in the brain?",
      answers: ["Moyamoya disease", "Fabry disease", "Prader-Willi syndrome", "Marfan syndrome"],
      correctAnswer: "Moyamoya disease"
  },
  {
      question: "What is a symptom of Behcet's disease?",
      answers: ["Mouth ulcers", "Sudden weight gain", "Brittle nails", "Hearing loss"],
      correctAnswer: "Mouth ulcers"
  },
  {
      question: "Which rare disease is marked by progressive degeneration of the nervous system?",
      answers: ["Tay-Sachs disease", "Osteogenesis imperfecta", "Narcolepsy", "Wilson's disease"],
      correctAnswer: "Tay-Sachs disease"
  },
  {
      question: "Which symptom is seen in people with Alport syndrome?",
      answers: ["Hearing loss", "Excessive hunger", "Fragile bones", "Muscle stiffness"],
      correctAnswer: "Hearing loss"
  }
]


const App = () => {
  const [showSplash, setShowSplash] = useState(true); // Show splash screen initially
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Function to handle answer selection
  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);

    if (answer === questions[currentQuestion].correctAnswer) {
      correctSound.play();
      setScore(score + 1);
    } else {
      wrongSound.play();
    }
  };

  // Function to handle going to the next question
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  // Function to handle going to the previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    }
  };

 // Render the splash screen first, then the trivia app
 if (showSplash) {
  return <SplashScreen onEnd={() => setShowSplash(false)} />;
}

  return (
    <div className="App">



      <h1>Trivia Quiz</h1>
      <p>Score: {score} / {questions.length}</p>

      <div >
        <h2>{questions[currentQuestion].question}</h2>
        <div >
          {questions[currentQuestion].answers.map((answer, index) => (
           <div id="breakit">
           <button
              key={index}
              onClick={() => handleAnswer(answer)}
              style={{
                padding: '10px 20px',
                margin: '5px',
                width: '250px',
                backgroundColor: selectedAnswer === answer
                  ? (answer === questions[currentQuestion].correctAnswer ? 'green' : 'red')
                  : 'orange',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 'bold',
                fontSize: '2rem',
                color: 'white',
                border: ' 2px  dashed purple',
                borderRadius: '5px',
                cursor: 'pointer',
                alignItems: 'stretch', 
                              }}
            >
              {answer}
            </button>
            </div>
          ))}
        </div>
      </div>

      <div className="buttons-container">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
                  >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestion === questions.length - 1}
                  >
          Next
        </button>
      </div>
      <button onClick={() => setShowSplash(true)} id="replay-splash-button">
        Watch Intro Again
      </button>
    </div>
  );
};

export default App;

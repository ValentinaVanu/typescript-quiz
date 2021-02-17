import React, { useState } from 'react';
import QuestionCard from './component/questionCard.component'
// Components
import { fetchQuizQuestions } from './API'
// Types
import { Difficulty , QuestionState} from './API'
import { CardWrapper, ReactTitle, StyledCard } from './component/questionCard.style';
import { Button } from '@material-ui/core';


export type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}
const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  // console.log(questions)
  
  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)
    
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    // console.log(newQuestions)
    setLoading(false)
    setQuestions(newQuestions)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      // Users answer
      const answer = e.currentTarget.value
      // Chech asnwer agains correct answer
      const correct = questions[number].correct_answer === answer
      // Add score if answer is correct
      if(correct) setScore(prev => prev + 1)
      // Save asnwer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQuestion = number + 1
    if(nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }

  }

  console.log(questions)
  return (
    <CardWrapper className="App">
      <ReactTitle>REACT QUIZ</ReactTitle>
      <StyledCard elevation={6}>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <Button
            variant="contained"
            color="primary"
            className="start"
            onClick={startTrivia}>
              Start
          </Button>
        ) : null}
        <div>
          {!gameOver ? <p className="score" >Score: </p> : null}
          {loading && <p>Loading Questions...</p>}
          {!loading && !gameOver && questions.length && (
            <QuestionCard
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
              />
              )}
        </div>
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
            <Button
              variant="contained"
              color="primary"
              className='next'
              onClick={nextQuestion}>
              Next Question
            </Button>
           ) : null}
      </StyledCard>
    </CardWrapper>
  )
}

export default App;

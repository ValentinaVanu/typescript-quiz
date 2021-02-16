import React from 'react'

type Props = {
  question: string
  answer: string[]
  callback: any
  userAnswer: any
  questionNr: number
  totalQuestions: number
}

const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNr,
  totalQuestions}) => {
  return (
    <div>
      <p className="number">
        Questions: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}/>
      <div>
        {answer.map(answer => {
          return (
            <div>
              <button
                onClick={callback}
                disabled={userAnswer}>
                  <span dangerouslySetInnerHTML={{ __html: answer}}/>
                </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default QuestionCard

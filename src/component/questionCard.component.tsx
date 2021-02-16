import React from 'react'
// types

type Props = {
  question: string
  answers: string[]
  callback: any
  userAnswer: any
  questionNr: number
  totalQuestions: number
}

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
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
        {/* {answers.map(answer => {
          return (
            <div>
              <button
                disabled={userAnswer
                  ? true
                  : false}
                  onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </div>
          )
        })} */}
      </div>
    </div>
  )
}

export default QuestionCard

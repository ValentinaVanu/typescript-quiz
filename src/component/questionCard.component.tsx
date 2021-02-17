import { Button, ButtonGroup } from '@material-ui/core';
import React from 'react';
// Types
import { AnswerObject } from '../App';
import { StyledButtonGroup, StyledQuestion } from './questionCard.style';
// Styles
// import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    <p className='number'>
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <StyledQuestion>
      {answers.map((answer) => (
        <StyledButtonGroup
          variant="contained"
          color="primary"
          aria-label="outlined primary button group"
          key={answer}
          // correct={userAnswer?.correctAnswer === answer}
          // userClicked={userAnswer?.answer === answer}
        >
          <Button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </Button>
        </StyledButtonGroup>
      ))}
    </StyledQuestion>
  </div>
);

export default QuestionCard;

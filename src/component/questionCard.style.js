import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import { ButtonGroup } from '@material-ui/core'


export const ReactTitle = styled.h1`
  grid-column: 1/-1;
  grid-row: 1/2;
  align-self: center;
  justify-self: center;
`

export const StyledCard = styled(Paper)`
  height: 100%;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  grid-column: 1/-1;
  grid-row: auto;
  && {
    color: #fff;
    background: rgb(238,174,202,0.5);
    background: radial-gradient(circle, rgba(238,174,202,0.5) 0%, rgba(6,45,91,0.5) 100%);
  }
`

export const StyledButtonGroup = styled(ButtonGroup)`
  && {
  justify-self: end;
  margin: 60px 10px;
  }
`

export const StyledQuestion = styled.div`
  /* justify-content: center;
  margin: 1rem; */

`

export const CardWrapper = styled.div `
  height: 100%;
  display: grid;
  /* justify-content: center; */
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`

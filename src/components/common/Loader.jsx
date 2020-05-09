import React from 'react'
import styled from '@emotion/styled'
import { CircularProgress } from '@material-ui/core'

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export default () => {
  return (
    <StyledWrapper>
      <CircularProgress />
    </StyledWrapper>
  )
}

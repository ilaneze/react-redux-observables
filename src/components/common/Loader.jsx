import React from 'react'
import styled from '@emotion/styled'
import { CircularProgress } from '@material-ui/core'

const StyledWrapper = styled.div`
  display ${({ isLoading }) => (isLoading ? 'flex' : 'none')};
  width: 100%;
  justify-content: center;
  align-items: center;
`

export default ({ isLoading }) => {
  return (
    <StyledWrapper isLoading={isLoading}>
      <CircularProgress />
    </StyledWrapper>
  )
}

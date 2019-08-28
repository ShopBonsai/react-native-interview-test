import React from 'react'
import { LoadingSpinnerContainer, Spinner, LoadingText } from './LoadingSpinner.styles'

export default function LoadingSpinner() {
  return (
    <LoadingSpinnerContainer>
      <Spinner size="large" />
      <LoadingText>Loading...</LoadingText>
    </LoadingSpinnerContainer>
  )
}

import React from "react"
import { Text } from "react-native"
import TestRenderer from "react-test-renderer"

import { CardSection } from "../../atoms"

describe("CardSection Component", () => {
  it("should render CardSection component", () => {
    const cardSectionComponent = TestRenderer.create(<CardSection />)
    expect(cardSectionComponent).toBeDefined()
  })

  it("should render the Children", () => {
    const cardSectionComponent = TestRenderer.create(
      <CardSection>
        <Text>test</Text>
      </CardSection>,
    )
    const cardSectionInstance = cardSectionComponent.root
    expect(cardSectionInstance.findByType("Text").children[0]).toBe("test")
  })
})

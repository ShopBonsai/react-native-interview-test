import React from "react"
import { Text } from "react-native"
import TestRenderer from "react-test-renderer"

import { Card } from "../../atoms"

describe("Card Component", () => {
  it("should render Card component", () => {
    const cardComponent = TestRenderer.create(<Card />)
    expect(cardComponent).toBeDefined()
  })

  it("should render the Children", () => {
    const cardComponent = TestRenderer.create(
      <Card>
        <Text>test</Text>
      </Card>,
    )
    const cardInstance = cardComponent.root
    expect(cardInstance.findByType("Text").children[0]).toBe("test")
  })
})

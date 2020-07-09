import React from "react"
import Blink from "../components/blink/blink.component"
import renderer from "react-test-renderer"

describe('blink component', () => {
  test('component should render correctly', () => {
    const tree = renderer
      .create(<Blink text="blinker text" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

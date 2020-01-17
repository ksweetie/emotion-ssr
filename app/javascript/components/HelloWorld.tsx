import * as React from "react"
import { css } from '@emotion/core'

const HelloWorld = (props) => {
  const style = css({ color: 'blue' })
  return (
    <React.Fragment>
      <p css={style}>Greeting: {props.greeting}</p>
    </React.Fragment>
  );
}

export default HelloWorld

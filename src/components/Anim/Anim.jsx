import React from 'react'
import { CSSTransition, SwitchTransition } from "react-transition-group";

const Anim = ({ children, state }) => {

  return (
    <SwitchTransition>
      <CSSTransition
        key={state}
        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
        classNames='step'
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  )
}

export default Anim

import React, { useCallback, useState } from 'react'
import classNames from 'classnames'
import './App.css'
import Anim from './components/Anim/Anim'

function App() {
  const [open, setOpen] = useState(false);

  const classRoot = classNames({
    'default-container': true,
    'default-container__open': open,
    'default-container__close': !open
  })

  const handleClick = () => {
    setOpen(open => !open);
  }

  return (
    <div className="App">
      <Anim state={open}>
        <div className={classRoot}>
          <button
            className={"button_s"}
            onClick={handleClick}>switch
          </button>
          {
            open ? (
              <div>open</div>
            ) : (
              <div>
                close
              </div>
            )
          }
        </div>

      </Anim>
    </div>
  )
}

export default App

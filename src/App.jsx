import { useState } from 'react'

function App() {
  const [revealed, setRevealed] = useState(false)
  const [introGone, setIntroGone] = useState(false)
  const [origin, setOrigin] = useState({ x: '50%', y: '50%' })

  function handleClick(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    setOrigin({
      x: `${rect.left + rect.width / 2}px`,
      y: `${rect.top + rect.height / 2}px`,
    })
    setRevealed(true)
  }

  return (
    <>
      {!introGone && (
        <div className="intro">
          <button type="button" className="click-me" onClick={handleClick} disabled={revealed}>
            CLICK ME
          </button>
        </div>
      )}

      {revealed && (
        <div
          className="stage reveal"
          style={{ '--rx': origin.x, '--ry': origin.y }}
          onAnimationEnd={(e) => {
            if (e.animationName === 'circleReveal') setIntroGone(true)
          }}
        >
          <div className="blob blob-a" />
          <div className="blob blob-b" />
          <div className="blob blob-c" />

          <main className="card">
            <div className="rule" />
            <h1 className="headline">
              Come to <span className="nowrap">Large Group</span>
            </h1>
            <p className="detail detail-time">Thursdays at 7:30 pm</p>
            <p className="detail detail-room">in GR 2.302</p>
          </main>
        </div>
      )}
    </>
  )
}

export default App

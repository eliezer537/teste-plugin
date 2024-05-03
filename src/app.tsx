import { useState } from "preact/hooks"

export function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleClick() {
    setModalIsOpen(prev => !prev)
  }

  return (
    <div>
      <button onClick={handleClick} style={{ position: 'fixed', top: '45%', left: '150px', visibility: 'visible', zIndex: 999999999 }}>
        Click me
      </button>

      {
        modalIsOpen && (
          <main style={{ position: 'fixed', top: '20%', left: '45%', border: '1px solid #000' }}>
            <h3>Modal aberto</h3>
          </main>
        )
      }
    </div>
  )
}

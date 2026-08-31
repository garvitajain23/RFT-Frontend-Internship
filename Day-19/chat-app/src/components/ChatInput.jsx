import { useState } from 'react'

export default function ChatInput({ onSend }) {
  const [text, setText] = useState('')

  function handleSend() {
    if (!text.trim()) return
    onSend(text.trim())
    setText('')
  }

  return (
    <div style={styles.bar}>
      <input
        style={styles.input}
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSend()}
        placeholder="Type something..."
        maxLength={300}
      />
      <button
        style={{ ...styles.btn, opacity: text.trim() ? 1 : 0.4 }}
        onClick={handleSend}
      >
        ↑
      </button>
    </div>
  )
}

const styles = {
  bar: {
    display: 'flex',
    gap: 10,
    padding: '16px 20px',
    borderTop: '1px solid #2a2a3d',
    background: '#17171f',
  },
  input: {
    flex: 1,
    padding: '12px 18px',
    background: '#1f1f2e',
    border: '1.5px solid #2a2a3d',
    borderRadius: 14,
    color: '#e8e8f0',
    fontSize: 14,
    outline: 'none',
  },
  btn: {
    width: 46,
    height: 46,
    borderRadius: 14,
    background: '#7c6af7',
    border: 'none',
    color: '#fff',
    fontSize: 20,
    cursor: 'pointer',
    transition: 'opacity .2s, transform .15s',
    flexShrink: 0,
  },
}
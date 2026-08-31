import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import Sidebar from '../components/Sidebar'
import MessageBubble from '../components/MessageBubble'
import ChatInput from '../components/ChatInput'

const BOT_USERS = [
  { name: 'Alex',  color: '#f76a8a' },
  { name: 'Priya', color: '#7c6af7' },
  { name: 'Sam',   color: '#facc15' },
  { name: 'Zoe',   color: '#4ade80' },
]

const BOT_REPLIES = {
  general: [
    "That makes sense 👍",
    "Interesting take!",
    "Same here honestly",
    "lol yeah totally",
    "agreed 100%",
    "wait really? tell me more",
    "haha true",
    "okay that's actually funny 😂",
  ],
  random: [
    "bro what 😭",
    "okay but hear me out...",
    "no way that happened",
    "anyway moving on",
    "I was JUST thinking about this",
    "unhinged but valid",
  ],
  'tech-talk': [
    "have you tried useReducer for that?",
    "sounds like a prop drilling issue tbh",
    "react query would fix this",
    "did you check the console?",
    "just use a custom hook",
    "state management is pain 😔",
    "vite is so fast compared to CRA",
  ],
}

function getTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export default function Chat() {
  const { roomId } = useParams()
  const navigate   = useNavigate()
  const bottomRef  = useRef(null)

  const me = sessionStorage.getItem('chatUser')

  useEffect(() => {
    if (!me) navigate('/')
  }, [])

  const [messages, setMessages] = useState([
    {
      id: 1,
      user: 'Alex',
      color: '#f76a8a',
      text: `Hey everyone! Welcome to #${roomId} 👋`,
      time: getTime(),
      isBot: true,
    },
  ])

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Simulate bot typing after user sends
  function sendMessage(text) {
    const myMsg = {
      id: Date.now(),
      user: me,
      color: '#7c6af7',
      text,
      time: getTime(),
      isBot: false,
    }
    setMessages(prev => [...prev, myMsg])

    // Random bot replies after short delay
    const replyCount = Math.random() > 0.4 ? 1 : 2
    const pool = BOT_REPLIES[roomId] || BOT_REPLIES.general

    for (let i = 0; i < replyCount; i++) {
      const bot   = BOT_USERS[Math.floor(Math.random() * BOT_USERS.length)]
      const reply = pool[Math.floor(Math.random() * pool.length)]
      const delay = 800 + i * 900 + Math.random() * 500

      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now() + i,
          user: bot.name,
          color: bot.color,
          text: reply,
          time: getTime(),
          isBot: true,
        }])
      }, delay)
    }
  }

  // Occasional bot messages even when user is idle
  useEffect(() => {
    const interval = setInterval(() => {
      const pool = BOT_REPLIES[roomId] || BOT_REPLIES.general
      const bot  = BOT_USERS[Math.floor(Math.random() * BOT_USERS.length)]

      setMessages(prev => [...prev, {
        id: Date.now(),
        user: bot.name,
        color: bot.color,
        text: pool[Math.floor(Math.random() * pool.length)],
        time: getTime(),
        isBot: true,
      }])
    }, 12000)

    return () => clearInterval(interval)
  }, [roomId])

  return (
    <div style={styles.layout}>
      <Sidebar currentRoom={roomId} onlineUsers={BOT_USERS} />

      <div style={styles.main}>
        {/* Header */}
        <div style={styles.header}>
          <div>
            <span style={styles.roomName}># {roomId}</span>
            <span style={styles.roomSub}>Real-time chat simulation</span>
          </div>
          <div style={styles.onlinePill}>
            <div style={styles.greenDot} />
            {BOT_USERS.length + 1} online
          </div>
        </div>

        {/* Messages */}
        <div style={styles.feed}>
          {messages.map((msg, i) => {
            const showDate = i === 0 || messages[i-1]?.time !== msg.time
            return (
              <div key={msg.id}>
                <MessageBubble msg={msg} isMe={msg.user === me} />
              </div>
            )
          })}

          {/* Typing indicator — subtle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 4, height: 24 }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: 6, height: 6,
                borderRadius: '50%',
                background: '#6b6b80',
                animation: `pulse 1.2s ease ${i * 0.2}s infinite`,
              }} />
            ))}
            <span style={{ fontSize: 11, color: '#6b6b80' }}>someone's typing...</span>
          </div>

          <div ref={bottomRef} />
        </div>

        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  )
}

const styles = {
  layout: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 24px',
    borderBottom: '1px solid #2a2a3d',
    background: '#17171f',
    flexShrink: 0,
  },
  roomName: {
    fontFamily: 'Syne, sans-serif',
    fontWeight: 700,
    fontSize: 18,
    color: '#e8e8f0',
    display: 'block',
  },
  roomSub: {
    fontSize: 11,
    color: '#6b6b80',
  },
  onlinePill: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    background: '#1f1f2e',
    border: '1px solid #2a2a3d',
    borderRadius: 20,
    padding: '5px 12px',
    fontSize: 12,
    color: '#6b6b80',
  },
  greenDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: '#4ade80',
    animation: 'pulse 2s infinite',
  },
  feed: {
    flex: 1,
    overflowY: 'auto',
    padding: '20px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
}
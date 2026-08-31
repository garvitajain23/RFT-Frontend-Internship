export default function MessageBubble({ msg, isMe }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: isMe ? 'row-reverse' : 'row',
      alignItems: 'flex-end',
      gap: 10,
      animation: 'popIn .25s ease both',
      marginBottom: 4,
    }}>
      {/* Avatar */}
      {!isMe && (
        <div style={{
          width: 34,
          height: 34,
          borderRadius: '50%',
          background: msg.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 14,
          fontWeight: 700,
          flexShrink: 0,
          color: '#fff',
        }}>
          {msg.user[0].toUpperCase()}
        </div>
      )}

      <div style={{ maxWidth: '68%' }}>
        {!isMe && (
          <span style={{
            fontSize: 11,
            color: '#6b6b80',
            marginLeft: 4,
            marginBottom: 3,
            display: 'block',
            fontWeight: 500,
          }}>
            {msg.user}
          </span>
        )}
        <div style={{
          background: isMe ? '#7c6af7' : '#1f1f2e',
          color: isMe ? '#fff' : '#e8e8f0',
          padding: '10px 15px',
          borderRadius: isMe
            ? '18px 18px 4px 18px'
            : '18px 18px 18px 4px',
          fontSize: 14,
          lineHeight: 1.5,
          wordBreak: 'break-word',
          border: isMe ? 'none' : '1px solid #2a2a3d',
        }}>
          {msg.text}
        </div>
        <span style={{
          fontSize: 10,
          color: '#6b6b80',
          marginTop: 4,
          display: 'block',
          textAlign: isMe ? 'right' : 'left',
          paddingInline: 4,
        }}>
          {msg.time}
        </span>
      </div>
    </div>
  )
}
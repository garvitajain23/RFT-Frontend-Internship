// Weather condition → emoji icon map
const getIcon = (condition) => {
  const c = condition?.toLowerCase() || ''
  if (c.includes('clear')) return '☀️'
  if (c.includes('cloud')) return '☁️'
  if (c.includes('rain') || c.includes('drizzle')) return '🌧️'
  if (c.includes('thunder') || c.includes('storm')) return '⛈️'
  if (c.includes('snow')) return '❄️'
  if (c.includes('mist') || c.includes('fog') || c.includes('haze')) return '🌫️'
  if (c.includes('wind')) return '💨'
  return '🌡️'
}

const getBgGradient = (condition) => {
  const c = condition?.toLowerCase() || ''
  if (c.includes('clear')) return 'linear-gradient(135deg, #1a3a5c, #2d6a9f)'
  if (c.includes('cloud')) return 'linear-gradient(135deg, #2d3748, #4a5568)'
  if (c.includes('rain') || c.includes('drizzle')) return 'linear-gradient(135deg, #1a202c, #2b4c7e)'
  if (c.includes('thunder')) return 'linear-gradient(135deg, #0d1117, #2d3748)'
  if (c.includes('snow')) return 'linear-gradient(135deg, #2c3e5d, #4a6fa5)'
  return 'linear-gradient(135deg, #1a2235, #2d3a52)'
}

export default function WeatherCard({ data }) {
  if (!data) return null

  const { name, sys, main, weather, wind, visibility } = data
  const condition = weather?.[0]?.main || ''
  const description = weather?.[0]?.description || ''
  const icon = getIcon(condition)
  const tempC = Math.round(main?.temp)
  const feelsLike = Math.round(main?.feels_like)
  const humidity = main?.humidity
  const windSpeed = wind?.speed
  const visKm = visibility ? (visibility / 1000).toFixed(1) : 'N/A'

  return (
    <div style={{
      background: getBgGradient(condition),
      borderRadius: '20px',
      border: '1px solid var(--border)',
      padding: '2.5rem',
      width: '100%',
      maxWidth: '480px',
      boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
      animation: 'fadeUp 0.5s ease forwards',
    }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Location */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{
          fontFamily: 'Rajdhani',
          fontSize: '2rem',
          fontWeight: 700,
          letterSpacing: '2px',
          color: '#fff',
        }}>
          {name}, {sys?.country}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Icon + Temp */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '5rem', lineHeight: 1 }}>{icon}</span>
        <div>
          <div style={{
            fontFamily: 'Rajdhani',
            fontSize: '4rem',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1,
          }}>
            {tempC}°C
          </div>
          <div style={{
            color: 'rgba(255,255,255,0.7)',
            textTransform: 'capitalize',
            fontSize: '1rem',
            marginTop: '0.25rem',
          }}>
            {description}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '1.5rem',
      }}>
        {[
          { label: 'Feels Like', value: `${feelsLike}°C`, icon: '🌡️' },
          { label: 'Humidity', value: `${humidity}%`, icon: '💧' },
          { label: 'Wind Speed', value: `${windSpeed} m/s`, icon: '💨' },
          { label: 'Visibility', value: `${visKm} km`, icon: '👁️' },
        ].map(({ label, value, icon: statIcon }) => (
          <div key={label} style={{
            background: 'rgba(255,255,255,0.07)',
            borderRadius: '12px',
            padding: '0.85rem 1rem',
          }}>
            <div style={{ fontSize: '1.3rem' }}>{statIcon}</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{label}</div>
            <div style={{ fontFamily: 'Rajdhani', fontWeight: 600, fontSize: '1.15rem', color: '#fff' }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
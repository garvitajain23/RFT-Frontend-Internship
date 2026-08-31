import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'
import Loader from '../components/Loader'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export default function Home() {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    // Fetch weather on search
    const fetchWeather = async (cityName) => {
        setLoading(true)
        setError('')
        setWeather(null)
        setCity(cityName)

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
            )

            if (!res.ok) {
                if (res.status === 404) throw new Error('City not found. Please check the name.')
                if (res.status === 401) throw new Error('Invalid API key. Check your OpenWeatherMap key.')
                throw new Error('Something went wrong. Try again.')
            }

            const data = await res.json()
            setWeather(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    // Auto-load for a default city on mount
    useEffect(() => {
        fetchWeather('Chandigarh')
    }, [])

    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '3rem 1.5rem',
            gap: '2rem',
            minHeight: 'calc(100vh - 64px)',
        }}>
            {/* Heading */}
            <div style={{ textAlign: 'center' }}>
                <h2 style={{
                    fontFamily: 'Rajdhani',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    letterSpacing: '3px',
                }}>
                    WEATHER FORECAST
                </h2>
                <p style={{ color: 'var(--muted)', marginTop: '0.4rem' }}>
                    Enter any city to get real-time weather data
                </p>
            </div>

            {/* Search */}
            <SearchBar onSearch={fetchWeather} loading={loading} />

            {/* Loading */}
            {loading && <Loader />}

            {/* Error */}
            {error && (
                <div style={{
                    background: 'rgba(252,129,129,0.1)',
                    border: '1px solid rgba(252,129,129,0.3)',
                    borderRadius: '12px',
                    padding: '1rem 1.5rem',
                    color: 'var(--error)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    maxWidth: '480px',
                    width: '100%',
                }}>
                    ⚠️ {error}
                </div>
            )}

            {/* Weather Card */}
            {!loading && weather && <WeatherCard data={weather} />}
        </main>
    )
}
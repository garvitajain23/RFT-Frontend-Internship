import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import RepoCard from '../components/RepoCard'

function UserProfile() {
    const { username } = useParams()
    const navigate = useNavigate()

    const [user, setUser] = useState(null)
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setNotFound(false)

            try {
                const userRes = await fetch(`https://api.github.com/users/${username}`)
                if (userRes.status === 404) {
                    setNotFound(true)
                    setLoading(false)
                    return
                }
                const userData = await userRes.json()
                setUser(userData)

                const repoRes = await fetch(
                    `https://api.github.com/users/${username}/repos?sort=stars&per_page=6`
                )
                const repoData = await repoRes.json()
                setRepos(repoData)
            } catch (err) {
                setNotFound(true)
            }

            setLoading(false)
        }

        fetchData()
    }, [username])

    if (loading) {
        return (
            <div style={styles.center}>
                <p style={{ color: '#58a6ff', fontSize: '18px' }}>Loading...</p>
            </div>
        )
    }

    if (notFound) {
        return (
            <div style={styles.center}>
                <div style={styles.notFound}>
                    <div style={{ fontSize: '60px' }}>😕</div>
                    <h2 style={{ color: '#f85149', margin: '12px 0 8px' }}>User Not Found</h2>
                    <p style={{ color: '#8b949e', marginBottom: '20px' }}>
                        No GitHub user with username "{username}"
                    </p>
                    <button onClick={() => navigate('/')} style={styles.backBtn}>
                        Go Back
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div style={styles.page}>
            <div style={styles.container}>

                <button onClick={() => navigate('/')} style={styles.backBtn}>
                    Back to Search
                </button>

                <div style={styles.profileCard}>
                    <img src={user.avatar_url} alt="avatar" style={styles.avatar} />
                    <div style={styles.info}>
                        <h2 style={styles.name}>{user.name || username}</h2>
                        <p style={styles.login}>@{user.login}</p>
                        {user.bio && <p style={styles.bio}>{user.bio}</p>}

                        <div style={styles.statsRow}>
                            <div style={styles.stat}>
                                <span style={styles.statNum}>{user.followers}</span>
                                <span style={styles.statLabel}>Followers</span>
                            </div>
                            <div style={styles.stat}>
                                <span style={styles.statNum}>{user.following}</span>
                                <span style={styles.statLabel}>Following</span>
                            </div>
                            <div style={styles.stat}>
                                <span style={styles.statNum}>{user.public_repos}</span>
                                <span style={styles.statLabel}>Repos</span>
                            </div>
                        </div>

                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noreferrer"
                            style={styles.profileLink}
                        >
                            View on GitHub
                        </a>

                    </div>
                </div>

                {repos.length > 0 && (
                    <div style={styles.reposSection}>
                        <h3 style={styles.reposTitle}>Top Repositories</h3>
                        {repos.map((repo) => (
                            <RepoCard key={repo.id} repo={repo} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}

const styles = {
    center: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    page: {
        minHeight: '100vh',
        padding: '30px 20px',
    },
    container: {
        maxWidth: '680px',
        margin: '0 auto',
    },
    backBtn: {
        background: 'transparent',
        border: '1px solid #30363d',
        color: '#c9d1d9',
        padding: '8px 16px',
        borderRadius: '6px',
        cursor: 'pointer',
        marginBottom: '20px',
        fontSize: '14px',
    },
    profileCard: {
        background: '#161b22',
        border: '1px solid #30363d',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        gap: '24px',
        alignItems: 'flex-start',
        marginBottom: '24px',
        flexWrap: 'wrap',
    },
    avatar: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        border: '3px solid #30363d',
    },
    info: {
        flex: 1,
        minWidth: '200px',
    },
    name: {
        fontSize: '22px',
        color: '#e6edf3',
        marginBottom: '2px',
    },
    login: {
        color: '#58a6ff',
        fontSize: '14px',
        marginBottom: '8px',
    },
    bio: {
        color: '#8b949e',
        fontSize: '14px',
        marginBottom: '14px',
    },
    statsRow: {
        display: 'flex',
        gap: '20px',
        marginBottom: '16px',
    },
    stat: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    statNum: {
        fontSize: '20px',
        fontWeight: '700',
        color: '#e6edf3',
    },
    statLabel: {
        fontSize: '12px',
        color: '#8b949e',
    },
    profileLink: {
        display: 'inline-block',
        background: '#238636',
        color: '#fff',
        padding: '8px 16px',
        borderRadius: '6px',
        fontSize: '13px',
        fontWeight: '600',
    },
    reposSection: {
        marginTop: '8px',
    },
    reposTitle: {
        fontSize: '18px',
        color: '#e6edf3',
        marginBottom: '14px',
    },
    notFound: {
        background: '#161b22',
        border: '1px solid #30363d',
        borderRadius: '12px',
        padding: '40px',
        textAlign: 'center',
        maxWidth: '400px',
    },
}

export default UserProfile
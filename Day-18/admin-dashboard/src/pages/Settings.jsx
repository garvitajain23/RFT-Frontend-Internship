import { useState } from 'react'

function Settings() {
  const [name, setName] = useState('Admin User')
  const [email, setEmail] = useState('admin@example.com')

  return (
    <div>
      <div className="page-heading">
        <h1>Settings</h1>
        <p>Update your account preferences.</p>
      </div>
      <div className="settings-card">
        <label>
          Full Name
          <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Email Address
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <button className="save-btn" onClick={() => alert('Settings saved!')}>
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Settings
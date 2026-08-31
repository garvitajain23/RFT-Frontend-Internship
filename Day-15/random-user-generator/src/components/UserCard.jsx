function UserCard({ user }) {
  return (
    <div className="card">
      <img src={user.picture.large} alt="profile" />
      <h2>{user.name.first} {user.name.last}</h2>
      <p>{user.email}</p>
      <span className="location">
        {user.location.city}, {user.location.country}
      </span>
    </div>
  )
}

export default UserCard
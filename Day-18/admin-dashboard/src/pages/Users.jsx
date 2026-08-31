import UserTable from '../components/UserTable'

function Users() {
  return (
    <div>
      <div className="page-heading">
        <h1>Users</h1>
        <p>Manage all registered users here.</p>
      </div>
      <UserTable />
    </div>
  )
}

export default Users
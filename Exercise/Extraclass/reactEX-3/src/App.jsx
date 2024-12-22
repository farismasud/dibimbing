import useUser from './custom-hook/useUser'
import { useEffect } from 'react'

function App() {
  const {data, getData} = useUser()
    useEffect(() => {
        getData(),[]
    }, )

  return (
    <>
     <h1 style={{ textAlign: 'center', color: '#333' }}>Users</h1>
     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
     {data.map(user => 
        <div key={user.id} style={{
            margin: '10px',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            backgroundColor: 'white',
            width: '300px',
            textAlign: 'center'
        }}>
            <h2 style={{ margin: '0 0 5px 0', fontSize: '1.5em', color: '#555' }}>{user.name}</h2>
            <p style={{ margin: '0', color: '#777' }}>{user.email}</p>
            <p style={{ margin: '0', color: '#777' }}>{user.phone}</p>
        </div>
     )}
     </div>
    </>
  )
}

export default App

import React, { useEffect, useState } from 'react'

interface User {
id: number,
username:string
}
const HooksSample = () => {
const [users, setUser] = useState<User[]>([])
const [count, setCount] = useState<number>(0)

useEffect(() => {
console.log('mounting');
console.log('Users: ', users);

return () => console.log('unmounting');

},[users])
  return (
    <div>
            
    </div>
  )
}

export default HooksSample
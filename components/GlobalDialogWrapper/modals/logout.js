import React from 'react'
import { useSession,signOut } from "next-auth/react"
import { Button } from '@material-tailwind/react'
import { useRouter } from 'next/router'

export default function Logout() {
    const { data: session } = useSession()
    const router=useRouter()
    if (session) {
        return (
          <div className="mt-6 mx-auto">
            <h1>{session.user.name}, You want to signout?</h1><br />
            <Button variant="filled" onClick={() =>{ signOut()
              router.push("/")
            }}>Sign out</Button>
          </div>
        )
      }
}

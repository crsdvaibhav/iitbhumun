import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      < div className="mt-6 mx-auto">
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    < div className="mt-6 flex flex-col items-center my-4 text-xl mx-auto">
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}
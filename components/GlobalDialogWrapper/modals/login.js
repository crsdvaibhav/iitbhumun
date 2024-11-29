import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  const { data: session } = useSession()
  return (
    < div className="mt-6 flex flex-col items-center my-4 text-xl mx-auto">
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}
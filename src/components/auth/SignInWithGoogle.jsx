import { signIn } from "next-auth/react"

const SignInWithGoogle = ({ loading}) => {
  return (
    <div className="mt-4 mb-8 text-center flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Sign in with</h2>
        <button
            className="cursor-pointer px-4 py-2 rounded-full border"
            disabled={loading}
            onClick={() => signIn("google")}
            aria-label="Sign in with Google"
        > 
            Google
        </button>
    </div>
  )
}

export default SignInWithGoogle

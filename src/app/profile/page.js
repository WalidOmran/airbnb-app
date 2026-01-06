import { redirect } from 'next/navigation'
import { auth } from '@/app/lib/auth'

export default async function ProfilePage() {
  const session = await auth()
  
  if (!session?.user) {
    redirect('/auth/signin')
  }
  
  return (
    <div>
      <h1>Profile - {session.user.name}</h1>
      <p>Protected!</p>
    </div>
  )
}

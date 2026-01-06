import Link from 'next/link';


const AuthLink = ({ href, children }) => {
  return (
    <div className="mt-4 pt-4 border-t border-gray-200 text-center">
      <Link href={href} className="text-blue-600 hover:underline text-sm">
        {children}
      </Link>
    </div>
  );
}

export default AuthLink;
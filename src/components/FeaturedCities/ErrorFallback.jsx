import Header from '../header/Header'

const ErrorFallback = ({error}) => {
  return (
    <>
        <Header />
        <p className="text-center text-red-500 mt-10 mb-5">
          Error loading properties: {error?.message ?? "Unknown error"}
        </p>
      </>
  )
}

export default ErrorFallback

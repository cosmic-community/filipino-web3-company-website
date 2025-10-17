'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-sky">
      <div className="text-center max-w-md mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Something went wrong!</h2>
        <p className="text-white/90 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
function AppLayout ({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1 container max-w-6xl mx-auto flex flex-co'>
        {children}
      </main>
    </div>
  )
}

export default AppLayout

function SecondaryBtn ({ children, ...props }) {
  return (
    <button
      className='bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'
      {...props}
    >
      {children}
    </button>
  )
}

export default SecondaryBtn

import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-800 mb-2'>
          AI Image Enhancer{" "}
        </h1>
        <p className='text-lg text-gray-500'>Upload Your Image to unleash the power of PixeLoom to enhance your images with AI.</p>
      </div> 
      <Home />
      <div className="text-sm text-gray-500 mt-6">
        Powered By @PixeLoomAI
      </div>
    </div>
  )
}

export default App
import Navbar from '@/components/navbar/Navbar'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
const loginn=()=>{
    navigate('/home')
}
  return (
    <div className='bg-[url("../assets/peakpxgl.jpg")] bg-no-repeat bg-cover min-h-screen'>
      <Navbar/>
      <div className='flex justify-center items-center min-h-[90vh] p-8'>
      <div className="flex flex-col items-center font-extrabold bg-[#403b40c2] lg:p-24 p-10 shadow-2xl shadow-[#252525] rounded-2xl justify-center">
        <h1 className='heading lg:text-6xl text-4xl my-5'>Code Together, Build Faster</h1>
          <p className='my-5 lg:w-[60vw]'>Coding Collab is a real-time collaborative coding platform designed for teams to work together seamlessly. With live code editing, file management, chat, and instant synchronization, it’s perfect for building projects faster and smarter.</p>

          <div>
            <button className='vtn flex justify-center bg-[#442543] hover:bg-[#6a4f6d] duration-300 px-10 py-1 rounded' onClick={loginn}>
              Login
            </button>
          </div>
      </div>
      </div>


    </div>
  )
}

export default Dashboard
import  React, {useState, useEffect} from 'react'

export default function ScrollTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleIt=()=>{
            document.getElementById("root").scrollTop > 200 ? setVisible(true) : setVisible(false)
        }
        document.getElementById("root").addEventListener("scroll", handleIt)

        return ()=> document.getElementById("root").removeEventListener("scroll", handleIt)
    }, [])


    const scrollTop=()=>{
        document.getElementById("root").scrollTop = 0
    }

  return (
    <div className={`fixed ${visible?'block':'hidden'} bottom-12 right-12`}>
        <button onClick={scrollTop} className='text-white bg-[#000] px-3 py-1 border z-[50]'><i className='fa fa-arrow-up'></i></button>
    </div>
  )
}

import sobreNosotros from '../../assets/videos/SobreNosotros.mp4'

export const AboutUs = () => {
  return (
    <div className='relative w-[40vw] h-[80vh]'>
        <video 
        className='w-full h-full object-cover' 
        src={sobreNosotros}
        autoPlay
        loop
        muted
        controls></video>
    </div>
  )
}

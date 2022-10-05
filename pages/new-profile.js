import ExitButton from '../components/ExitButton'

export default function NewProfile() {
  return (
    <div className="bg-[url('/background.jpeg')] w-full h-screen bg-cover bg-center bg-no-repeat">
      <div className='pt-[50px]'><ExitButton /></div>
      <h1 className="ml-10 text-white">Hej nya profilen</h1>
    </div>
  )
}

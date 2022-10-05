import ExitButton from '../components/ExitButton'


export default function ContactUs() {
  return <div className="bg-[url('/background.jpeg')] w-full h-screen bg-cover bg-center bg-no-repeat">
    <div className='pt-[50px]'>
      <ExitButton />
    </div>
    <div className='mx-8'>
      <a className='text-white pl-24 text-lg pb-4'>Kontakta oss</a>
      <div className='bg-gray-600 opacity-70 w-full h-[200px]'>
        <div className=" ml-10 text-white pt-[40px]">
          <div>{"Telefon: 083-4442-1111"}</div>
          <div>{"Adress: SödraGatan 2 Stockholm"}</div>
          <div>{"Våra öppettider:"}</div>
          <div>{"Måndag-Fredag: 08-16"}</div>
          <div>{"Lördag-Söndag: 10-13"}</div>
        </div>
      </div>
    </div>
  </div >
}

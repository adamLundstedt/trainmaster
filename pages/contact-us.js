import ExitButton from "../components/ExitButton";

export default function ContactUs() {
  return (
    <div>
      <div className="pt-[50px]">
        <ExitButton />
      </div>
      <a className="text-white text-lg ml-36 mb-6">Kontakta oss</a>
      <div className="bg-gray-600 bg-opacity-70 h-[250px] ml-5 mr-5">
        <div className="ml-14 text-white pt-[60px]">
          <div>{"Telefon: 083-4442-1111"}</div>
          <div>{"Adress: SödraGatan 2 Stockholm"}</div>
          <div>{"Våra öppettider:"}</div>
          <div>{"Måndag-Fredag: 08-16"}</div>
          <div>{"Lördag-Söndag: 10-13"}</div>
        </div>
      </div>
    </div>
  );
}

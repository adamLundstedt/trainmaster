import ExitButton from "../components/ExitButton";
import Form from "../components/Form";

export default function NewProfile() {
  const NewUser = () => {
    const userForm = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
    };
  };
  return (
    <div className="h-screen w-full pt-[50px] ">
      <ExitButton />
      <h1 className="text-white text-lg ml-32 mb-6">Registrera ny profil</h1>
      <div className="bg-gray-600 bg-opacity-70 h-[320px] ml-5 mr-5">
        <Form formId="add-user-form" userForm={Form} />;
      </div>
    </div>
  );
}

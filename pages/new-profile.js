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
    <div className="place-content-center place-items-center">
      <div className="pt-[50px]">
        <ExitButton />
      </div>
      <h1 className="ml-10 text-white">Hej nya profilen</h1>
      <Form formId="add-user-form" userForm={Form} />;
    </div>
  );
}

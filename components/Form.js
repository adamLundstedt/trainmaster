import { useState } from "react";

const Form = ({ formId, userForm }) => {
  const contentType = "application/json";

  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    firstName: userForm.firstName,
    lastName: userForm.lastName,
    email: userForm.email,
    phoneNumber: userForm.phoneNumber,
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (form.password !== form.repeatPassword) {
      setMessage("Lösenorden matchar inte varandra!");
      return;
    } else {
      setMessage("");
    }

    postData();
  };

  const postToApi = async (url, data) =>
    await (
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": contentType,
        },
        body: JSON.stringify(data),
      })
    ).json();

  const postData = async () => {
    // ? error handling - if already in db?
    let member = { password: form.password };
    let user = Object.assign({}, form);
    delete user.password;
    delete user.repeatPassword;
    // create the user
    const result = await postToApi("/api/userIndex", user);
    // set the users id as userId in the member
    member.userID = result.data._id;
    // create the member
    await postToApi("/api/memberIndex", member);
  };

  return (
    <div className="bg-gray-600 bg-opacity-70 h-[320px] ml-5 mr-5">
      <form
        id={formId}
        onSubmit={handleSubmit}
        className="grid grid-cols-1 justify-items-center  "
      >
        <input
          type="text"
          maxLength="20"
          name="firstName"
          value={form.firstName}
          required
          placeholder="Förnamn"
          onChange={handleChange}
          className="h-5 w-56 mt-4 border mx-2  bg-white text-center 
        drop-shadow-md shadow-black text-black rounded text-sm"
        />

        <input
          type="text"
          maxLength="20"
          name="lastName"
          value={form.lastName}
          required
          placeholder="Efternamn"
          onChange={handleChange}
          className="h-5 mt-4 border mx-2  bg-white text-center 
        drop-shadow-md shadow-black text-black rounded text-sm w-56"
        />

        <input
          type="email"
          maxLength="30"
          value={form.email}
          required
          name="email"
          placeholder="Mailadress"
          onChange={handleChange}
          className="h-5 mt-5 border mx-2  bg-white text-center 
        drop-shadow-md shadow-black text-black rounded text-sm w-56"
        />

        <input
          type="text"
          maxLength="20"
          value={form.phoneNumber}
          required
          name="phoneNumber"
          placeholder="Telefonnummer"
          onChange={handleChange}
          className="h-5 mt-4 border mx-2  bg-white text-center 
        drop-shadow-md shadow-black text-black rounded text-sm w-56"
        />

        <input
          type="password"
          maxLength="20"
          value={form.password}
          required
          minLength="6"
          name="password"
          placeholder="Välj lösenord"
          onChange={handleChange}
          className="h-5 mt-4 border mx-2  bg-white text-center 
        drop-shadow-md shadow-black text-black rounded text-sm w-56"
        />

        <input
          type="password"
          maxLength="20"
          value={form.repeatPassword}
          required
          minLength="6"
          name="repeatPassword"
          placeholder="Upprepa ditt lösenord"
          onChange={handleChange}
          className="h-5 mt-4 border mx-2  bg-white text-center 
        drop-shadow-md shadow-black text-black rounded text-sm w-56"
        />
        <p className="text-white text-center">{message}</p>
        <input
          type="submit"
          value="Registrera"
          className="text-white  px-4 py-0.5 rounded-md mt-10 bg-gray-400"
        />
      </form>
    </div>
  );
};
export default Form;

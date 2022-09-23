export default function Home() {
  return (
    <div>
      <h1 className="text-blue-400">Registrera medlem</h1>
      <form>
        <label className="text-blue-400">Förnamn</label>
        <input type="text" placeholder="Skriv in ditt förnamn" />
        <label>Efternamn</label>
        <input type="text" placeholder="Skriv in ditt efternamn" />
        <label>Email</label>
        <input type="text" name="email" placeholder="Skriv in din email" />
        <label>Telefonnummer</label>
        <input type="text" placeholder="Skriv in ditt telefonnummer" />
        <label>Användarnamn</label>
        <input type="text" name="userName" placeholder="användarnamn" />
        <label>Lösenord</label>
        <input
          type="text"
          name="password"
          placeholder="minst 8 bokstäver eller siffror "
        />
        <input type="submit" value="Registrera" />
      </form>
    </div>
  );
}

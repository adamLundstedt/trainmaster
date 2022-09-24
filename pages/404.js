import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return ( 
    <div>
      <h1>Oooops...</h1>
      <h2>Något gick fel...</h2>
      <p>Gå tillbaka till <Link href="/"><a>Startsidan.</a></Link> </p>
    </div>
   );
}
 
export default NotFound;
import { useEffect, useState } from "react"

const AdminCoworkingsPage = () => {
    const [coworkings, setCoworkings] = useState(null);
    // useEffect et le fetch sont lancés pour le premier chargement de l'API.
    useEffect(() => {
        (async () => {
            const coworkingsResponse = await fetch ("http://localhost:3000/api/coworkings");
            const coworkingResponseData = await coworkingsResponse.json()
            setCoworkings(coworkingResponseData);
        })();
    },[])

    const handleDeleteCoworking = async(event, coworkingId) => {
        // Le token doit être récupéré.
        const token = localStorage.getItem("jwt")
        // Récupération du delete et de l'id du coworking.
        await fetch("http://localhost:3000/api/coworkings" + coworkingId, {
        method: "DELETE",
        // Seul les utilisateurs qui possède un token peut supprimer les éléments.
        headers: { Authorization: "Bearer" + token },
        });
        // On fait une mise à jour après la suppresion du/des coworking(s).
        const coworkingsResponse = await fetch ("http://localhost:3000/api/coworkings");
        const coworkingsResponseData = await coworkingsResponse.json();
        setCoworkings(coworkingsResponseData);
        };
    

    return(
    <>
    <h1>Liste des coworkings : </h1>

    {coworkings ? (
      <>
        {coworkings.map((coworking) => {
          return (
            <article>
              <h2>{coworking.name}</h2>
              <button onClick={(event) => handleDeleteCoworking(event, coworking.id)}>Supprimer</button>
            </article>
          );
        })}
      </>
    ) : (
      <p>En cours de chargement</p>
    )}
  </>
);
    };
export default AdminCoworkingsPage;

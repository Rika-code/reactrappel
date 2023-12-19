import { useState } from "react"

const AdminCoworkingsPage = () => {
     //  Création du State pour afficher mon message d'état de la demande (succès ou échec de création du coworking).
    const [ message, setMessage] = useState(null);


    // je crée une fonction asynchrome pour créer mon coworking, celle-ci est appelée par mon event listener.
    const handleCreateCoworking = async (event) => {
        // je bloque le refresh dde la page au moment du submit.
        event.preventDefault();

    // Récupération des valeurs pour le formulaire.
    const name = event.target.name.value;
    const priceByMonth = event.target.priceByMonth.value;
    const priceByDay = event.target.priceByDay.value;
    const priceByHour = event.target.priceByHour.value;
    const addressNumber = event.target.addressNumber.value;
    const addressStreet = event.target.addressStreet.value;
    const addressCity = event.target.addressCity.value;
//const addressPostCode = event.target.addressPostCode.value;
    const superficy = event.target.superficy.value;
    const capacity = event.target.capacity.value;


    // Création d'un objet avec les valeurs qui devront correpondre avec les constantes ci-dessus. 
    const coworkingToCreate = {
        name: name,
        price: {
            month: priceByMonth,
            day: priceByDay,
            hour: priceByHour,
        },
        address: {
            number: addressNumber,
            street: addressStreet,
            city: addressCity,
            //postCode: addressPostCode,
        },
        superficy: superficy,
        capacity: capacity,
    };
// Conversion de l'objet en JSON.
    const coworkingToCreateJson = JSON.stringify(coworkingToCreate);

// Récupération du token à partir du localStorage.
    const token = localStorage.getItem("jwt");
console.log(token)
    //appel fetch, j'utilise la méthode post , avec en header Bearer d'autorisation de token.
    const createCoworkingResponse = await fetch("http://localhost:3000/api/coworkings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        // Création du coworking via le body.
        body: coworkingToCreateJson,
    });
// Si le statut de ma réponse est 201 alors c'est un succès et j'affiche mon message,
// Sinon j'affiche un message d'erreur.
    if (createCoworkingResponse.status === 201) {
        setMessage("Coworking crée avec succès!")
    } else {
        setMessage("Erreur lors de la création du coworking")
    }
};

return(
    <>
    {message && <p>{message}</p>}
    <form onSubmit={handleCreateCoworking}>
      <div>
        <label>
          Nom
          <input type="text" name="name" />
        </label>
      </div>
      <div>
        <label>
          Prix par mois
          <input type="number" name="priceByMonth" />
        </label>
      </div>
      <div>
        <label>
          Prix par jour
          <input type="number" name="priceByDay" />
        </label>
      </div>
      <div>
        <label>
          Prix par heure
          <input type="number" name="priceByHour" />
        </label>
      </div>
      <div>
        <label>
          Adresse : Numéro
          <input type="text" name="addressNumber" />
        </label>
      </div>
      <div>
        <label>
          Adresse : Rue
          <input type="text" name="addressStreet" />
        </label>
      </div>
      <div>
        <label>
          Adresse : Ville
          <input type="text" name="addressCity" />
        </label>
      </div>
      <div>
        <label>
          Adresse : Postcode
          <input type="text" name="addressPostcode" />
        </label>
      </div>
      <div>
        <label>
          Superficie
          <input type="number" name="superficy" />
        </label>
      </div>
      <div>
        <label>
          Capacité
          <input type="number" name="capacity" />
        </label>
      </div>

      <input type="submit" />
    </form>
  </>
);
};

export default AdminCoworkingsPage;
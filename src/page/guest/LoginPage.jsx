const LoginPage = () => {
    const handleLogin = async (event) => {
        event.preventDefault();
        // la fonction handlelogin se déclenche grâce au submit lorsque le formulaire est soumis. Elle empêche ici un rafraichissement de la page. 

        // Extraction des données.
        const username = event.target.username.value;
        const password = event.target.password.value;
 
        //Préparation des données oour la requête.
        const loginData = {
            username,
            password,
        };
        //Conversion en JSON.
        const loginDataJson = JSON.stringify(loginData);

        //Traitement de la Réponse
        const loginResponse = await fetch("http://localhost:3000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: loginDataJson,
        });
        const loginResponseData = await loginResponse.json();
        
        const token = loginResponseData.data;
    
       //Stockage du token dans le localStorage.
        if (token) {
       
          localStorage.setItem("jwt", token);
        }
      };
    // rendu du formulaire.
      return (
        <section>
          <form onSubmit={handleLogin}>
            <label>
              username
              <input type="text" name="username" />
            </label>
            <label>
              password
              <input type="password" name="password" />
            </label>
            <input type="submit" />
          </form>
        </section>
      );
    };
    
    export default LoginPage;
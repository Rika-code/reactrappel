import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { useEffect } from "react";

const DashboardPage = () => {
  // Récupération de la fonction navigate qui redigiera l'utilisateur.
  const navigate = useNavigate();

  useEffect(() => {
    // Récupération du token en localStorage du navigateur.
    const token = localStorage.getItem("jwt");

    // Si le token existe, redirection de l'utilisateur vers le formulaire de login
    if (!token) {
      navigate("/login");
    }
//Pour préciser, on verifie si le token est valide
// On le décode (jwt-decode) et on vérifie si les données sont correctes et on redirige l'utlisateur.
    
  });
//rendu du succès de connexion.
  return (
    <>
      <HeaderAdmin />

      <h2>Vous êtes bien connecté en tant qu'admin</h2>
    </>
  );
};

export default DashboardPage;
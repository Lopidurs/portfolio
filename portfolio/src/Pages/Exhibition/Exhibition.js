import './Exhibition.css'

import CustomCard from '../../Components/CustomCard'

import scouts from '../../Assets/scouts.png'
import plex from '../../Assets/plex.png'
import excel from '../../Assets/excel.png'
import film from '../../Assets/film.jpg'
import java from '../../Assets/java.jpg'

import preuve_open from '../../Assets/preuve_open.png'
import proof_scout_1 from '../../Assets/proof_scout_1.jpg'
import proof_scout_2 from '../../Assets/proof_scout_2.jpg'
import proof_movie from '../../Assets/proof_movie.jpg'
import proof_plex from '../../Assets/proof_plex.jpg'

export default function ActionAreaCard() {
  return (
    <div className='card-area'>
      <CustomCard image={scouts} title={"Les scouts"} time={"10H"} realTime={"?H"} theme={"Soft skils"} proofs={[proof_scout_1,proof_scout_2]} improvements={["Vie en groupe","Gestion des bugets","Travail d'équipe","Leadership"]} description={["Le scoutisme est un mouvement de jeunesse qui repose sur l'apprentissage de valeurs telles que la solidarité, l'entraide et le respect. Depuis l'âge de 10 ans, j'ai participé aux activités des scouts puis j'ai décidé de poursuivre en tant que chef afin de transmettre aux plus jeunes ce qui m'avait moi-même transmis.","En tant que chef, je dois animés les jeunes en veillant à leur sécurité et à leur bien-être. C'est une expérience gratifiante que de voir les jeunes grandir et devenir plus sages et confiants."]}/>
      <CustomCard image={film} title={"L'affaire Patersson"} time={"10H"} realTime={"30H"} theme={"Communication"} proofs={[proof_movie]} improvements={["Acting","Travail d'équipe","Communication vidéo"]} description={["Sur l’invitation de Kevin Kuirvels, j’ai participé en tant qu’acteur à la réalisation de ce film réalisé par des étudiants de la sections IT de l’EPHEC louvain-La-Neuve. Le film final dure 1h10 et a été présenté en avant premières aux professeurs de l’EPHEC. Il fut bien accueilli lors de son avant-première par les professeurs bien qu’il ne soit qu’amateur."]}/>
      <CustomCard image={java} title={"Formation Java"} time={"10H"} realTime={"12H"} theme={"Devlopement"} proofs={[preuve_open]} improvements={["Bases de la programation Java"]} description={["En suivant ce cours, vous allez apprendre les bases d’un des langages de programmation les plus populaires : le  Java ! En commençant par les bases, et en pratiquant avec des exercices, vous allez découvrir comment développer des programmes répondant à des besoins réels.Nous irons ensuite ensemble dans l’univers de la programmation orientée objet, là où Java montre toute sa puissance.Pour finir, nous verrons des éléments pour aller plus loin, mieux contrôler vos programmes, les bonnes pratiques…"]}/>
      <CustomCard image={plex} title={"Installation d'un plex mediacenter"} time={"3H"} realTime={"3H"} theme={"Admin système et réseau"} proofs={[proof_plex]} improvements={["Meilleur compréhension d'un réseau doméstique","Configuration d'un service Plex","Configuration d'une b-box3"]} description={["Plex est un logiciel client-serveur de gestion multimédia qui permet d'accéder à des films, séries, musiques et photos sur le serveur peu importe où le client se situe, s'il a une connexion Internet."]}/>
      <CustomCard image={excel} title={"Formation excel"} time={"10H"} realTime={"16H"} theme={"Init PC"} proofs={[preuve_open]} improvements={["Amélioration de l'utilisation d'Ecel","Automatisation d'Excel","Formatage de données sur Excel"]} description={["Dans ce cours, vous découvrirez comment créer un tableau de données sur Excel, en partant de données brutes. Vous apprendrez à les préparer efficacement pour les rendre exploitables. Vous ferez parler vos données, grâce à des formules et des outils très performants intégrés à Excel. Enfin, vous apprendrez à résoudre des problèmes complexes, et à automatiser vos tâches, grâce aux macros VBA !"]}/>
    </div>
  );
}
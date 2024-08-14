<template>
  <div class="bodySafe">
    <div class="titleView">
      <h3>CONTACT</h3>
    </div>

    <div class="bodyGroup">
      <div class="portraitBlock">
        <img src="@\assets\portrait.jpg" />
      </div>
      <div class="textBlock">
        Étudiant B. Informatique<br />
        Université Laval<br /><br />
        <span class="petitTexte">
          Salut, moi c’est Julien!
          <br /><br />
          Après un bout de parcours en design de produits à l’université, j’ai opté pour le bac en
          informatique dans lequel j’ai approfondis mes notions de frontend et de design UX.
          <br /><br />Pour mon premier stage durant l’été 2024,j’ai été chez Bzoing - un studio de
          graphisme et design web - à cause de la qualité de leurs projets et de leur vision du
          design hors norme. Une expérience vraiment intéressante et très enrichissante.
          <br /><br />Je continue mon chemin dans le design UX et je suis ouvert à de nouveaux
          projets liés aux expériences utilisateurs et à la conception d’interfaces / sites web.
          <br /><br />Habitant dans les Laurentides, je suis à l’aise avec le travail en équipe au
          bureau ainsi qu’à distance. <br /><br />Merci d’avoir navigué sur mon site et au plaisir
          de travailler ensemble!<br /><br />
        </span>
        <button @click="sendEmail">Contact</button>
      </div>
    </div>

    <div class="footer">
      <h3 class="retourLink"><router-link to="/">←RETOUR</router-link></h3>
      <div class="copyright">© 2024 Julien Rhéaume-Lepage</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  methods: {
    sendEmail() {
      const subject = encodeURIComponent('')
      const body = encodeURIComponent('')
      window.location.href = `mailto:rknmusic01@gmail.com?subject=${subject}&body=${body}`
    }
  }
}
</script>

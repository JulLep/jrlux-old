<template>
  <div class="background">
    <img src="@/assets/ogGif.gif" class="ogGif" />
    <div class="circleBackground">
      <div class="middleBlock">
        <div class="centeredTextHorizontal">
          <p>
            J <br />
            <span class="textGray">U<br />L<br />I<br />E<br />N </span>
          </p>
          <p>
            R<br />
            <span class="textGray">H<br />É<br />A<br />U<br />M<br />E</span>
          </p>
          <p>
            L<br /><span class="textGray">E<br />P<br />A<br />G<br />E</span>
          </p>
          <p>
            UX<span class="textGray">DESIGNER/<br /></span>DEV<span class="textGray"
              >WEB <br /><br /><br /><br /><br /><br
            /></span>
            <span class="estheticLinks"
              ><router-link to="/portefolio">PORTEFOLIO</router-link><br
            /></span>
            <span class="estheticLinks"
              ><router-link to="/designux">DESIGN UX?</router-link><br
            /></span>
            <span class="estheticLinks"><router-link to="/contact">CONTACT</router-link></span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Copyright Notice -->
  <div class="copyright">© 2024 Julien Rhéaume-Lepage</div>
</template>

<script>
export default {
  name: 'IndexView'
}
</script>

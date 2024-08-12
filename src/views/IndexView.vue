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
            UX<span class="textGray"
              >DESIGNER/<br />DEVWEB <br /><br /><br /><br /><br /><br />
              <span class="estheticLinks"
                ><router-link to="/portefolio">PORTEFOLIO</router-link><br /><br
              /></span>
              <span class="estheticLinks"
                ><router-link to="/designux">DESIGN UX?</router-link><br /><br
              /></span>
              <span class="estheticLinks"><router-link to="/contact">CONTACT</router-link></span>
            </span>
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

<style scoped>
.estheticLinks:hover {
  color: var(--textBlack);
}
.ogGif {
  width: 750px;
  border-radius: 50%;
}

.background {
  position: relative; /* Ensures the circleBackground andTextHorizontal are positioned relative to this container */
  display: grid;
  justify-content: center;
  margin-bottom: 50px; /* Adjust this value as needed */
  position: absolute; /* Position the circleBackground absolutely within the .background container */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.circleBackground {
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255); /* Semi-transparent white */
  border-radius: 50%;
  position: absolute; /* Position the circleBackground absolutely within the .background container */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.centeredTextHorizontal {
  display: flex;
  flex-direction: row;
  letter-spacing: 10px;
  text-align: left; /* Center theTextHorizontal within the container */
  align-self: center;
}

.textGray {
  color: var(--textGray);
}

/* Copyright Notice */
.copyright {
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: xx-small;
}
</style>

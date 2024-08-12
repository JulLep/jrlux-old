<template>
    <div class="background">
      <img src="@/assets/ogGif.gif" class="ogGif" />
      <div class="circle">
        <div class="middleBlock">
          <div class="centeredTextHorizontal">
            <h3>
              J <br />
              <span class="textGray">U<br />L<br />I<br />E<br />N </span>
            </h3>
            <h3>
              R<br />
              <span class="textGray">H<br />É<br />A<br />U<br />M<br />E</span>
            </h3>
            <h3>
              L<br /><span class="textGray">E<br />P<br />A<br />G<br />E</span>
            </h3>
            <h3>
              UX<span class="textGray"
                >DESIGNER/<br />DEVWEB <br /><br /><br /><br /><br /><br />
                <span class="estheticLinks"><router-link to="/portefolio">PORTEFOLIO</router-link><br /><br /></span>
                <span class="estheticLinks"><router-link to="/">DESIGN UX?</router-link><br /><br /></span>
                <span class="estheticLinks"><router-link to="/">CONTACT</router-link></span>
  
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Copyright Notice -->
    <div class="copyright">© 2024 Julien Rhéaume-Lepage</div>
  </template>
  

<script>
export default {
  name: "IndexComponent",
};
</script>

<style scoped>

.estheticLinks:hover{
    color: var(--textBlack);
}
.ogGif {
  width: 750px;
  border-radius: 50%;
}

.background {
  position: relative; /* Ensures the circle andTextHorizontal are positioned relative to this container */
  display: grid;
  justify-content: center;
  margin-bottom: 50px; /* Adjust this value as needed */
  position: absolute; /* Position the circle absolutely within the .background container */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.circle {
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255); /* Semi-transparent white */
  border-radius: 50%;
  position: absolute; /* Position the circle absolutely within the .background container */
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
  font-size: small;
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
  color: var(
    --color2
  ); /* Assuming you want the text color to be the secondary color */
}
</style>

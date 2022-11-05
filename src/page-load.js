export default function createPage() {
  const element = document.createElement("div");
  element.setAttribute("id","content")

  element.innerHTML = `
        <div class="content-top">
      <img src="/src/images/Ice cream 1.webp" alt="ice cream image">
      <div class="content-top-description">
        <h1>#1 Best selling Icecream in the state</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit temporibus, obcaecati iure aut a et.
          Obcaecati repudiandae architecto eveniet, qui facere voluptates veritatis mollitia! Aperiam nostrum ex,
          consequuntur veniam doloribus esse delectus adipisci cumque impedit. Cupiditate eum error dolor soluta fugiat
          quae eveniet, dolores eius quaerat nemo nam, illo accusantium.
        </p>
      </div>
    </div>

    <!-- Start of MAIN section -->
    <ul class="tabs">
      <li data-tab-target="#home" class="tab active">Home</li>
      <li data-tab-target="#menu" class="tab">Menu</li>
      <li data-tab-target="#contact" class="tab">Contact us</li>
    </ul>

    <div class="content-main">


      <!-- Home -->
      <div id="home" data-tab-content class="active">
        <h3>
          Our Products trully are the finest in the market
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ullam neque deserunt facere eaque dicta
          corrupti eius, amet est, accusamus temporibus odio corporis deleniti et asperiores illo quia libero dolorum,
          modi fugit beatae ducimus ut quas nulla? Ratione tempore rem odio odit, velit distinctio molestias quam
          repudiandae, sit possimus cupiditate voluptates cumque accusamus dolorem illum optio earum labore cum a.
        </p>
      </div>

      <!-- Menu -->
      <div id="menu" class="menu-container" data-tab-content>
        <div class="menu one">
          <img src="/src/images/civilization.jpg" alt="civilization">
          <p><b>I was created at a time when the relevant images couldn't be fetched due to net issues. Here are some placeholder images in the meantime</b></p>
        </div>
        <div class="menu two">
          <img src="/src/images/female titan.jpg" alt="Female Titan">
          <div class="menu-para">
            <p>*Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, qui.</p>
            <p> *Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, qui.</p>
          </div>
        </div>
        <div class="menu three">
          <img src="/src/images/rumbling.jpg" alt="The rumbling">
          <div class="menu-para">
            <p>*Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, qui.</p>
            <p> *Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, qui.</p>
          </div>
        </div>
        <div class="menu four">
          <img src="/src/images/Ymir paths.jpg" alt="Ymir in Paths">
          <div class="menu-para">
            <p>*Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, qui.</p>
            <p> *Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, qui.</p>
          </div>
        </div>
      </div>

      <!-- Contact us -->
      <div id="contact" data-tab-content>
        <p><span class="contact">Phone Number:</span> 0787654321 </p>
        <p><span class="contact">Email: </span>Icecreampalour@gmail.com</p>
        <!-- <form action="">
          <textarea name="Feedback" id="textarea" cols="30" rows="10"></textarea>
        </form> -->
      </div>
      <!-- end of MAIN section -->
    </div>
  `

  const parentContainer = document.querySelector(".content-attach");
  parentContainer.appendChild(element)
}

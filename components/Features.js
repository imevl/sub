function Features() {
  const Features = document.getElementById("Features");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
    <div
      class="text-body text-center d-flex flex-column align-items-center"
    >
      <h2 class="title fw-bold">Features Tailored for Your Pets</h2>
      <p class="">
        Discover the unique features of our pet food subscription service designed to keep your pets healthy and happy.
      </p>
    </div>
    <div
      class="container-body row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4"
    >
      <div class="col d-flex flex-column justify-content-center pt-5">
        <div class="icon d-flex justify-content-center">
          <img src="./Images/Base-feature-icon-1.svg" alt="Customizable Plans" srcset="" />
        </div>
        <div class="text">
          <div class="title fw-bold text-center">Customizable Plans</div>
          <div class="description text-center">
            Choose the best plan that suits your pet's dietary needs and preferences. Adjust it anytime through our app.
          </div>
        </div>
      </div>
      <div class="col d-flex flex-column justify-content-center pt-5">
        <div class="icon d-flex justify-content-center">
          <img src="./Images/Base-feature-icon-3.svg" alt="Flexible Deliveries" srcset="" />
        </div>
        <div class="text">
          <div class="title fw-bold text-center">Flexible Deliveries</div>
          <div class="description text-center">
            Schedule deliveries at your convenience and ensure your pet never runs out of food.
          </div>
        </div>
      </div>
      <div class="col d-flex flex-column justify-content-center pt-5">
        <div class="icon d-flex justify-content-center">
          <img src="./Images/Base-feature-icon-5.svg" alt="User Friendly App" srcset="" />
        </div>
        <div class="text">
          <div class="title fw-bold text-center">User Friendly App</div>
          <div class="description text-center">
            Manage your subscriptions with ease using our intuitive and easy-to-use mobile app.
          </div>
        </div>
      </div>
      <div class="col d-flex flex-column justify-content-center pt-5">
        <div class="icon d-flex justify-content-center">
          <img src="./Images/Base-feature-icon-7.svg" alt="Variety of Options" srcset="" />
        </div>
        <div class="text">
          <div class="title fw-bold text-center">Variety of Options</div>
          <div class="description text-center">
            We offer a wide range of food options to cater to different dietary needs and preferences of your pets.
          </div>
        </div>
      </div>
      <div class="col d-flex flex-column justify-content-center pt-5">
        <div class="icon d-flex justify-content-center">
          <img src="./Images/Base-feature-icon-2.svg" alt="Quality Ingredients" srcset="" />
        </div>
        <div class="text">
          <div class="title fw-bold text-center">Quality Ingredients</div>
          <div class="description text-center">
            Our pet food is made from high-quality ingredients to ensure your pet's health and wellbeing.
          </div>
        </div>
      </div>
      <div class="col d-flex flex-column justify-content-center pt-5">
        <div class="icon d-flex justify-content-center">
          <img src="./Images/Base-feature-icon-8.svg" alt="Reliable Service" srcset="" />
        </div>
        <div class="text">
          <div class="title fw-bold text-center">Reliable Service</div>
          <div class="description text-center">
            Count on us for timely deliveries and consistent quality to keep your pets happy and healthy.
          </div>
        </div>
      </div>
    </div>
  `;
  Features.appendChild(Container);
}
Features();

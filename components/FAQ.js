function FAQ() {
  const FAQ = document.getElementById("FAQ");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
    <div class="text-body">
      <h2 class='title fw-bold'>Frequently Asked Questions</h2>
      <p>These are the questions we hear most often from our customers.</p>
    </div>
    <div class="accordion mt-5" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            How does the pet food subscription work?
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>Our pet food subscription is simple and convenient.</strong> Choose a plan that suits your pet's needs, make a one-time payment, and receive regular deliveries of high-quality pet food right to your door. You can manage your subscription through our app, ensuring you never run out of food for your furry friends.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Can I customize my subscription?
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>Yes, you can customize your subscription.</strong> You can choose different types of food, adjust the delivery frequency, and even pause or cancel your subscription at any time through our app or website.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            What if my pet doesn't like the food?
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>Your pet's satisfaction is our priority.</strong> If your pet doesn't like the food, you can reach out to our customer service team for assistance. We offer a satisfaction guarantee and can help you find a suitable alternative.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            How do I manage my subscription?
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>Managing your subscription is easy.</strong> You can use our app or website to update your delivery schedule, change your food preferences, or adjust any other details of your subscription. Our user-friendly interface makes it simple to keep everything up-to-date.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            What types of pet food are available?
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>We offer a variety of pet food options.</strong> Our selection includes dry food, wet food, and specialty diets for both dogs and cats. You can choose from different flavors and brands to suit your pet's preferences and dietary needs.
          </div>
        </div>
      </div>
    </div>
  `;
  FAQ.appendChild(Container);
}
FAQ();

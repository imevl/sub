function Testimonial() {
  const Testimonial = document.getElementById("Testimonial");
  const Container = document.createElement("div");
  Container.classList.add("container", "position-relative");
  Container.innerHTML = `
    <div
      class="testimonial-items row row-cols-1 row-cols-lg-2 gx-5 align-items-center position-relative"
    >
      <div class="text-body position-absolute">
        <div class="quote-mark position-absolute">
          <img src="./Images/Quote mark.png" alt="Quote Mark" srcset="" />
        </div>
        <h2 class="title fw-bold">Real Stories from Real Pet Owners</h2>
        <p>Get inspired by these stories.</p>
      </div>
      <div class="col">
        <div class="testimonial-item bg-white rounded item-1">
          <div class="client-logo">
            <img src="./Images/Client-logo-01.svg" alt="Client Logo" srcset="" />
          </div>
          <div class="content mt-3">
            <div class="feed-personalDetails">
              <p class="feed">
                "Since subscribing to this pet food service, my dog's health has improved significantly. The convenience and quality are unmatched."
              </p>
              <div class="personal-detail d-flex flex-column mt-3">
                <span class="per-name fw-bold"> Floyd Miles </span>
                <span class="per-role"> Pet Owner </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col mt-4">
        <div class="testimonial-item bg-white rounded">
          <div class="client-logo">
            <img src="./Images/Client-logo-02.svg" alt="Client Logo" srcset="" />
          </div>
          <div class="content mt-3">
            <div class="feed-personalDetails">
              <p class="feed">
                "My cats are picky eaters, but they absolutely love the food from this service. It's a game-changer for us!"
              </p>
              <div class="personal-detail d-flex flex-column mt-3">
                <span class="per-name fw-bold">Jane Cooper</span>
                <span class="per-role"> Pet Owner </span>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial-item bg-white rounded mt-4">
          <div class="client-logo">
            <img src="./Images/Client-logo-03.svg" alt="Client Logo" srcset="" />
          </div>
          <div class="content mt-3">
            <div class="feed-personalDetails">
              <p class="feed">
                "The flexibility and customer support are amazing. I can adjust my subscription anytime to meet my pet's needs."
              </p>
              <div class="personal-detail d-flex flex-column mt-3">
                <span class="per-name fw-bold">Kristin Watson</span>
                <span class="per-role"> Pet Owner </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  Testimonial.appendChild(Container);
}
Testimonial();

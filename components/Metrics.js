function Metrics() {
  const Metrics = document.getElementById("Metric");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-lg-2 gy-5 gx-5">
      <div class="text-body col">
        <h2 class="fw-bold">Our Achievements in Pet Care</h2>
        <p class="Description mt-2">
          With our dedication and love for pets, we've achieved remarkable milestones.
        </p>
      </div>
      <div class="content col">
        <div class="row row-cols-1 row-cols-md-2 gy-4 gx-4">
          <div class="content-item d-flex align-items-center col">
            <div class="icon">
              <img src="./Images/Base-feature-icon-1.svg" alt="Downloads Icon" />
            </div>
            <div class="text ms-3">
              <div class="title fw-bold">10,000+</div>
              <div class="Description">Subscriptions per day</div>
            </div>
          </div>
          <div class="content-item d-flex align-items-center col">
            <div class="icon">
              <img src="./Images/Base-feature-icon-7.svg" alt="Users Icon" />
            </div>
            <div class="text ms-3">
              <div class="title fw-bold">2 Million</div>
              <div class="Description">Happy Pets</div>
            </div>
          </div>
          <div class="content-item d-flex align-items-center col">
            <div class="icon">
              <img src="./Images/Base-feature-icon-2.svg" alt="Clients Icon" />
            </div>
            <div class="text ms-3">
              <div class="title fw-bold">500+</div>
              <div class="Description">Pet Owners Served</div>
            </div>
          </div>
          <div class="content-item d-flex align-items-center col">
            <div class="icon">
              <img src="./Images/Base-feature-icon-6.svg" alt="Countries Icon" />
            </div>
            <div class="text ms-3">
              <div class="title fw-bold">140</div>
              <div class="Description">Countries Reached</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  Metrics.appendChild(Container);
}
Metrics();

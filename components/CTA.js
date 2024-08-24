function CTA() {
  const CTA = document.getElementById("CTA");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-lg-2 gx-5">
      <div class="text-body col py-5">
        <h2 class="title fw-bold">
          Manage Your Pet Food Subscription Easily
        </h2>
        <p>
          Download our app to manage your pet food subscriptions, track delivery schedules, and ensure your pets never run out of their favorite meals. Stay organized and keep your pets happy!
        </p>
        <div class="badges mt-5">
          <p>Get the App</p>
          <div class="badges-items me-3 d-none d-sm-block">
            <a class="badge-item text-decoration-none" href="#1">
              <img
                class="item"
                src="./Images/Store badge.svg"
                alt="App Store Badge"
              />
            </a>
            <a class="badge-item text-decoration-none" href="#2">
              <img
                class="item"
                src="./Images/Store badge-1.svg"
                alt="Google Play Badge"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="col container-body overflow-hidden">
        <img class="img-fluid" src="./Images/mockup-mobiles.png" alt="Mobile App Mockup" />
      </div>
    </div>
  `;
  CTA.appendChild(Container);
}
CTA();

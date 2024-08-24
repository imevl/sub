function Pricing() {
  const Pricing = document.getElementById("Pricing");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
    <div class="text-body d-flex flex-column align-items-center">
      <h2 class="text-center fw-bold">Pricing Packages</h2>
      <p class="text-center">
        Choose the best plan that suits your pet's needs and ensure they get the best nutrition.
      </p>
    </div>
    <div class="row mt-5">
      <!-- Pricing Table -->
      <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
        <div class="inner-box overflow-hidden position-relative">
          <div class="title">Basic</div>
          <div class="price">
            $19 <span class="duration">/ monthly</span>
          </div>
          <div class="table-content">
            <ul>
              <li>
                <span><i class="bi bi-check2"></i>1 bag of food</span>
              </li>
              <li>
                <span><i class="bi bi-check2"></i>Standard delivery</span>
              </li>
              <li>
                <span><i class="bi bi-check2"></i>Access to basic recipes</span>
              </li>
              <li>
                <span><i class="bi bi-check2"></i>Customer support</span>
              </li>
            </ul>
          </div>
          <div class="table-footer">
            <a href="#" class="button btn-theme-1">Subscribe Now</a>
          </div>
        </div>
      </div>
      <!-- Pricing Table -->
      <div class="pricing-table position-relative tagged col-lg-4 col-md-6 col-sm-12">
        <div class="inner-box overflow-hidden position-relative">
          <span class="tag bg-primary-300">Recommended</span>
          <div class="title">Standard</div>
          <div class="price">
            $49 <span class="duration">/ monthly</span>
          </div>
          <div class="table-content">
            <ul>
              <li>
                <span><i class="bi bi-check2"></i>3 bags of food</span>
              </li>
              <li>
                <span><i class="bi bi-check2"></i>Express delivery</span>
              </li>
              <li>
                <span><i class="bi bi-check2"></i>Access to all recipes</span>
              </li>
              <li>
                <span><i class="bi bi-check2"></i>Priority customer support</span>
              </li>
            </ul>
          </div>
          <div class="table-footer">
            <a href="#" class="button btn-theme-1">Subscribe Now</a>
          </div>
        </div>
      </div>
      <!-- Pricing Table -->
      <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
        <div class="inner-box overflow-hidden position-relative">
          <div class="title">Premium</div>
          <div class="price">
            $79 <span class="duration">/ monthly</span>
          </div>
          <div class="table-content">
            <ul>
              <li>
                <span><i class="bi bi-check2"></i>Unlimited bags of food</span>
              </li>
              <li>
                <span><i class="bi bi-check2"></i>Next-day delivery</span>
              </li>
              <li>
                <span><i class="bi bi-check2"></i>Access to exclusive recipes</span>
              </li>
              <li>
                <span><i class="bi bi-check2"></i>24/7 premium support</span>
              </li>
            </ul>
          </div>
          <div class="table-footer">
            <a href="#" class="button btn-theme-1">Subscribe Now</a>
          </div>
        </div>
      </div>
    </div>
  `;
  Pricing.appendChild(Container);
}
Pricing();

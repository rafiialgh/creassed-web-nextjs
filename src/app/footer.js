export default function Footer() {
  return (
      <div class="w-full h-full bg-slate-800 sm:h-96">
        <div class="w-full h-full px-10 flex items-center py-10 sm:py-0">
          <div class="w-full flex flex-col gap-20 justify-evenly sm:flex-row">
            <div class="flex justify-between flex-col w-fit">
              <h3 class="text-white text-sm mb-5 tracking-wide">CREASSED CO</h3>
              <p class="text-white font-extralight text-sm mb-5">
                Create by Processed
              </p>
              <p class="text-white font-extralight text-sm mb-5">
                Jakarta, Indonesia
              </p>
              <a
                class="text-white font-extralight text-sm mb-5"
                target="_blank"
                href="https://www.instagram.com/creassed.co/"
              >
                Instagram: <span class="hover:underline">@creassed.co</span>
              </a>
              <a
                class="text-white font-extralight text-sm"
                target="_blank"
                href="#"
              >
                Email: <span class="hover:underline">creassed@gmail.com</span>
              </a>
            </div>
            <div class="flex justify-between flex-col w-fit">
              <h3 class="text-white text-sm mb-5 tracking-wide">
                CUSTOMER CARE
              </h3>
              <a
                class="text-white font-extralight text-sm hover:underline mb-5"
                href="#"
              >
                How to Order
              </a>
              <a
                class="text-white font-extralight text-sm hover:underline mb-5"
                href="#"
              >
                Payment Confirmation
              </a>
              <a
                class="text-white font-extralight text-sm hover:underline mb-5"
                href="#"
              >
                Product Warranty
              </a>
              <a
                class="text-white font-extralight text-sm hover:underline"
                href="/about"
              >
                About Us
              </a>
            </div>
            <div class="flex justify-between flex-col w-fit">
              <h3 class="text-white text-sm mb-5 tracking-wide">OTHERS</h3>
              <a
                class="text-white font-extralight text-sm hover:underline mb-5"
                href="#"
              >
                Contact Us
              </a>
              <a
                class="text-white font-extralight text-sm hover:underline mb-5"
                href="#"
              >
                FAQ
              </a>
              <a
                class="text-white font-extralight text-sm hover:underline mb-5"
                href="#"
              >
                Terms and Conditions
              </a>
              <a
                class="text-white font-extralight text-sm hover:underline"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
            <div class="flex flex-col w-fit">
              <h3 class="text-white text-sm mb-5 tracking-wide">NEWSLETTER</h3>
              <p class="text-white font-extralight break-words">
                Subscribe to receive updates, to exclusive deals, and more.
              </p>
              <form action="">
                <div>
                  <input
                    type="email"
                    class="mt-5 p-4 w-full rounded-md bg-transparent ring-0 ring-white text-white border border-solid border-slate-300"
                    placeholder="Enter your email address"
                  />
                </div>
                <div class="mt-5">
                  <a
                    href="#"
                    class="text-white font-light uppercase tracking-wider text-sm hover:underline"
                  >
                    subscribe
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

import { useState } from "react";

export default function Index() {
  const [storeUrl, setStoreUrl] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#030A06" }}>
      {/* Header */}
      <header
        className="flex items-center justify-between px-6 py-4"
        style={{ background: "rgba(78, 78, 78, 0.10)", backdropFilter: "blur(2px)" }}
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/dd4a8f9b8b85a235585e827b80903bd178f4493e?width=238"
          alt="Shopify Front"
          className="h-7 object-contain"
        />
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-1 text-white/90 text-sm hover:text-white transition-colors"
        >
          <span className="text-xl leading-none">←</span>
          <span>Back to Business Setup</span>
        </button>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div
          className="w-full max-w-[448px] flex flex-col gap-10 rounded-[40px] p-8 sm:p-12"
          style={{
            border: "1px solid #2523C0",
            background: "rgba(8, 8, 8, 0.53)",
            boxShadow: "0 20px 40px 0 rgba(26, 28, 29, 0.06)",
          }}
        >
          {/* Branding */}
          <div className="flex flex-col items-center gap-0">
            <div className="mb-6">
              <div
                className="w-20 h-20 flex items-center justify-center rounded-xl overflow-hidden"
                style={{ background: "#EEEEEF" }}
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e543b776540f3c10dd1734dab8e806250e299926?width=160"
                  alt="Shopify Logo"
                  className="w-20 h-20 object-cover"
                />
              </div>
            </div>
            <h1
              className="text-white text-center text-[30px] leading-[36px] font-normal tracking-[-0.75px]"
            >
              Log in to your store
            </h1>
            <p
              className="text-center text-sm leading-[22.75px] mt-3 px-5"
              style={{ color: "rgba(86, 102, 90, 1)" }}
            >
              Connect your existing Shopify storefront to get started with
              Front's architecture.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            {/* Store URL */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="storeUrl"
                className="text-sm font-normal leading-5"
                style={{ color: "rgba(86, 102, 90, 1)" }}
              >
                Store URL
              </label>
              <div
                className="flex items-center gap-2 px-4 py-[18px] rounded-lg overflow-hidden"
                style={{ background: "#E2E2E3" }}
              >
                <input
                  id="storeUrl"
                  type="text"
                  value={storeUrl}
                  onChange={(e) => setStoreUrl(e.target.value)}
                  placeholder="mystore.myshopify.com"
                  className="flex-1 bg-transparent text-base font-normal outline-none placeholder:text-[#6D7A70] text-[#6D7A70]"
                  style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
                />
                <LinkIcon />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2 pb-4">
              <label
                htmlFor="password"
                className="text-sm font-normal leading-5"
                style={{ color: "rgba(86, 102, 90, 1)" }}
              >
                Password
              </label>
              <div
                className="flex items-center gap-2 px-4 py-[18px] rounded-lg overflow-hidden"
                style={{ background: "#E2E2E3" }}
              >
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="flex-1 bg-transparent text-base font-normal outline-none placeholder:text-[#6D7A70] text-[#6D7A70]"
                  style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="flex-shrink-0 text-[#7D7D7D] hover:text-[#555] transition-colors"
                >
                  <LockIcon />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-lg text-white text-lg font-normal leading-7 transition-opacity hover:opacity-90 active:opacity-80"
              style={{
                background: "#008060",
                boxShadow:
                  "0 10px 15px -3px rgba(31, 72, 48, 0.20), 0 4px 6px -4px rgba(32, 128, 71, 0.20)",
              }}
            >
              <span>Connect and Continue</span>
              <span className="text-2xl leading-none">→</span>
            </button>
          </form>

          {/* Disclaimer */}
          <div
            className="pt-8 border-t text-center"
            style={{ borderColor: "rgba(188, 202, 190, 0.10)" }}
          >
            <p className="text-xs leading-[19.5px]" style={{ color: "#6D7A70" }}>
              By connecting, you agree to allow Shopify Front to access
              <br />
              your store data.
              <br />
              <a
                href="#"
                className="underline hover:opacity-80 transition-opacity"
                style={{ color: "#6D7A70" }}
              >
                Learn more about permissions
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-center px-20 py-8">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <span
            className="text-sm leading-[22.75px]"
            style={{ color: "rgba(255, 255, 255, 0.70)" }}
          >
            © 2024 Shopify Inc.
          </span>
          <a
            href="#"
            className="text-sm leading-[22.75px] hover:opacity-100 transition-opacity"
            style={{ color: "rgba(255, 255, 255, 0.70)" }}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm leading-[22.75px] hover:opacity-100 transition-opacity"
            style={{ color: "rgba(255, 255, 255, 0.70)" }}
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-sm leading-[22.75px] hover:opacity-100 transition-opacity"
            style={{ color: "rgba(255, 255, 255, 0.70)" }}
          >
            Cookies
          </a>
        </div>
      </footer>
    </div>
  );
}

function LinkIcon() {
  return (
    <div className="relative flex-shrink-0" style={{ width: "22.7px", height: "11.125px" }}>
      <div
        style={{
          width: "23px",
          height: "11px",
          borderRadius: "60px",
          border: "2px solid #000",
          position: "absolute",
          left: 0,
          top: 0,
        }}
      />
      <svg
        style={{ position: "absolute", left: "11px", top: "-3px" }}
        height="19"
        viewBox="0 0 0 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0V18.2261" stroke="black" strokeWidth="3" />
      </svg>
      <svg
        style={{ position: "absolute", left: "7px", top: "6px" }}
        width="8"
        viewBox="0 0 8 0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H8" stroke="#9C9C9C" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M0 0H8"
          stroke="black"
          strokeOpacity="0.2"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function LockIcon() {
  return (
    <svg
      width="18"
      height="23"
      viewBox="0 0 18 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 12.65C8.70163 12.65 8.41548 12.7712 8.2045 12.9868C7.99353 13.2025 7.875 13.495 7.875 13.8V17.25C7.875 17.555 7.99353 17.8475 8.2045 18.0632C8.41548 18.2788 8.70163 18.4 9 18.4C9.29837 18.4 9.58452 18.2788 9.7955 18.0632C10.0065 17.8475 10.125 17.555 10.125 17.25V13.8C10.125 13.495 10.0065 13.2025 9.7955 12.9868C9.58452 12.7712 9.29837 12.65 9 12.65ZM14.625 8.05V5.75C14.625 4.22501 14.0324 2.76247 12.9775 1.68414C11.9226 0.605802 10.4918 0 9 0C7.50816 0 6.07742 0.605802 5.02252 1.68414C3.96763 2.76247 3.375 4.22501 3.375 5.75V8.05C2.47989 8.05 1.62145 8.41348 0.988515 9.06048C0.355579 9.70748 0 10.585 0 11.5V19.55C0 20.465 0.355579 21.3425 0.988515 21.9895C1.62145 22.6365 2.47989 23 3.375 23H14.625C15.5201 23 16.3786 22.6365 17.0115 21.9895C17.6444 21.3425 18 20.465 18 19.55V11.5C18 10.585 17.6444 9.70748 17.0115 9.06048C16.3786 8.41348 15.5201 8.05 14.625 8.05ZM5.625 5.75C5.625 4.835 5.98058 3.95748 6.61351 3.31048C7.24645 2.66348 8.10489 2.3 9 2.3C9.89511 2.3 10.7536 2.66348 11.3865 3.31048C12.0194 3.95748 12.375 4.835 12.375 5.75V8.05H5.625V5.75ZM15.75 19.55C15.75 19.855 15.6315 20.1475 15.4205 20.3632C15.2095 20.5788 14.9234 20.7 14.625 20.7H3.375C3.07663 20.7 2.79048 20.5788 2.5795 20.3632C2.36853 20.1475 2.25 19.855 2.25 19.55V11.5C2.25 11.195 2.36853 10.9025 2.5795 10.6868C2.79048 10.4712 3.07663 10.35 3.375 10.35H14.625C14.9234 10.35 15.2095 10.4712 15.4205 10.6868C15.6315 10.9025 15.75 11.195 15.75 11.5V19.55Z"
        fill="#7D7D7D"
      />
    </svg>
  );
}

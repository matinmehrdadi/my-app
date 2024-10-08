// import Image from "next/image";
// import ba from "../../src/app/globals.css";
export default function MainHeaderBackground() {
  return (
    <>
      <div>
        <svg
          className="bg-no-repeat fixed min-h-screen  bg-cover bg-center bg-fixed"
          viewBox="0 0 900 450"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          // version="1.1"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#ffb876", stopOpacity: "1" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ff7b00", stopOpacity: "1" }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0 250L16 243C32 236 64 222 96 223.5C128 225 160 242 192 249.5C224 257 256 255 288 245.8C320 236.7 352 220.3 384 216.2C416 212 448 220 480 234C512 248 544 268 576 267.8C608 267.7 640 247.3 672 241.8C704 236.3 736 245.7 768 241.8C800 238 832 221 864 222.8C896 224.7 928 245.3 944 255.7L960 266L960 0L944 0C928 0 896 0 864 0C832 0 800 0 768 0C736 0 704 0 672 0C640 0 608 0 576 0C544 0 512 0 480 0C448 0 416 0 384 0C352 0 320 0 288 0C256 0 224 0 192 0C160 0 128 0 96 0C64 0 32 0 16 0L0 0Z"
            fill="url(#gradient)"
          ></path>
        </svg>
      </div>
    </>
  );
}

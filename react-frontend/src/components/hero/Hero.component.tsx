import { TopImage } from "../../assets";

const Hero = () => {
  return (
    <div className="hero h-full">
      <div className="hero-content w-full max-w-none flex-col  justify-between py-16 max-md:py-10 lg:flex-row-reverse">
        <img src={TopImage} className="max-w-lg rounded-lg" />
        <div className="mt-10 w-full px-4 py-4 text-center lg:mt-0 lg:w-1/2 lg:px-0 lg:py-0 lg:text-left">
          <h1 className="text-5xl font-bold">
            Unlock nearshore resource & <br className="hidden md:block" />{" "}
            insurtech capabilities
          </h1>
          <p className="py-6 text-xl text-[#0d0d0d]">
            We deliver transformations
          </p>
          <button className="btn-primary btn space-x-2">
            <p>Discover how</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
            >
              <title />

              <g id="Complete">
                <g id="arrow-right">
                  <g>
                    <polyline
                      data-name="Right"
                      fill="none"
                      id="Right-2"
                      points="16.4 7 21.5 12 16.4 17"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />

                    <line
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="2.5"
                      x2="19.2"
                      y1="12"
                      y2="12"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

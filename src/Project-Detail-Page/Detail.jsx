import { useLocation, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { ArrowLeft } from "lucide-react";


const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // If no state, redirect back or show some fallback
  if (!location.state) {
    navigate("/");
    return null;
  }

  const { name, description, tags, image, source_code_link } = location.state;

  return (
    <section className="relative w-full min-h-screen mx-auto pb-20 px-6 max-w-7xl">
      <div className="fixed top-6 left-6 z-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white hover:text-[#915EFF] transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back to Home</span>
        </button>
      </div>

      <div className="pt-24 md:pt-32">
        <div className="flex flex-row gap-x-6 items-start">
          {/* Left Vertical Line */}
          <div className="flex flex-col justify-start items-center">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-32 md:h-80 violet-gradient" />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h1 className={`${styles.heroHeadText} text-white`}>
              {name.split(" ").map((word, index) => (
                <span
                  key={index}
                  className={index % 2 === 1 ? "text-[#915EFF]" : ""}
                >
                  {word}{" "}
                </span>
              ))}
            </h1>

            {image && (
              <img
                src={image}
                alt={name}
                className="mt-6 rounded-lg w-full max-w-xl object-cover"
              />
            )}


            <p className="mt-6 text-[16px] text-gray-300 leading-relaxed">
              {description}
            </p>



            {source_code_link && (
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#915EFF] underline"
              >
                View Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );

};

export default Detail;

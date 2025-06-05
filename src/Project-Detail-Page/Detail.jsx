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
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white hover:text-[#915EFF] transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      {/* Project Details */}
      <div className={`flex flex-col md:flex-row items-start gap-10 pt-32`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="max-w-4xl">
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
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">{description}</p>

          {image && (
            <img
              src={image}
              alt={name}
              className="mt-6 rounded-lg w-full max-w-xl object-cover"
            />
          )}

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
    </section>
  );
};

export default Detail;

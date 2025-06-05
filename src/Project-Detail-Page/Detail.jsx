import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { styles } from "../styles";
import { ArrowLeft } from "lucide-react";

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // If no state, redirect back
  if (!location.state) {
    navigate("/");
    return null;
  }

  const { name, description, tags, image, source_code_link } = location.state;
  const images = [image, image, image, image]; // Using same image for now
  const [selectedImage, setSelectedImage] = useState(image);

  return (
    <section className="relative w-full min-h-screen mx-auto pb-20 px-6 max-w-7xl">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white hover:text-[#915EFF] transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back to Home</span>
        </button>
      </div>

      {/* Content */}
      <div className="pt-24 md:pt-32">
        <div className="flex flex-row gap-x-6 items-start">
          {/* Left Vertical Line */}
          <div className="flex flex-col justify-start items-center">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-32 md:h-80 violet-gradient" />
          </div>

          {/* Right Main Content */}
          <div className="flex-1">
            {/* Title */}
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

            {/* Image + Description + Thumbnails */}
            {image && (
              <div className="mt-6 flex flex-col md:flex-row gap-6">
                {/* Left: Image + Thumbnails */}
                <div className="flex flex-col md:w-1/2">
                  <img
                    src={selectedImage}
                    alt={name}
                    className="rounded-lg w-full object-cover"
                  />

                  <div className="flex gap-2 mt-4 flex-wrap justify-center">
                    {images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Thumbnail ${idx}`}
                        className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
                          img === selectedImage
                            ? "border-[#915EFF]"
                            : "border-transparent"
                        }`}
                        onClick={() => setSelectedImage(img)}
                      />
                    ))}
                  </div>
                </div>

                {/* Right: Description */}
                <div className="flex-1 mt-6 md:mt-0">
                  <p className="text-sm md:text-[16px] text-gray-300 leading-relaxed">
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;

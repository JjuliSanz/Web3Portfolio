import React from "react";

interface Props {
  data: Project_data;
}

function Technology_tag({ data }: Props) {
  return (
    <div className="w-full h-40 1250:h-28 flex flex-row items-center flex-wrap mt-4 overflow-hidden">
      <div
        className={`tag ${
          data.technology_feature.includes("Html") ? "" : "hidden"
        }  bg-[#E54F24]    text-white  `}
      >
        Html
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Css") ? "" : "hidden"
        } bg-[#2062AF] text-white `}
      >
        Css
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Javascript") ? "" : " hidden"
        }  bg-[#F0DB4F]    text-black `}
      >
        Javascript
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Tailwind") ? "" : " hidden"
        }  bg-[#4ad7f0]    text-[#258899] `}
      >
        Tailwind
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("React") ? "" : " hidden"
        }   bg-[#83e0f8]    text-[#226879] `}
      >
        React
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("React Native") ? "" : " hidden"
        }  bg-[#83e0f8]    text-[#1b859f] `}
      >
        React Native
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Solidity") ? "" : " hidden"
        }  bg-[#FFC131]    text-[#44a1ab] `}
      >
        Solidity
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Redux") ? "" : "hidden"
        } bg-[#764ABC] text-white `}
      >
        Redux
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("ReactQuery") ? "" : "hidden"
        } bg-[#FF4154] text-white `}
      >
        ReactQuery
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Typescript") ? "" : "hidden"
        } bg-[#2D79C7] text-[#b0cae4] `}
      >
        TypeScript
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Next") ? "" : "hidden"
        } bg-[#13224a] text-[#fdfdfd]  `}
      >
        NextJS
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Node js") ? "" : "hidden"
        } bg-[#79B562] text-[#fdfdfd] `}
      >
        NodeJS
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Hardhat") ? "" : "hidden"
        } bg-[#00ACD7] text-[#fdfdfd] `}
      >
        Hardhat
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Vite") ? "" : "hidden"
        } bg-[#0090D1] text-[#f1db4b] `}
      >
        Vite
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Express") ? "" : "hidden"
        } bg-[#333331] text-gray-300 `}
      >
        ExpressJS
      </div>

      <div
        className={`tag ${
          data.technology_feature.includes("MongoDB") ? "" : "hidden"
        } bg-[#10AA50] text-[#fdfdfd]`}
      >
        MongoDB
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Firebase") ? "" : "hidden"
        } bg-[#e9b422] text-[#fdfdfd]  `}
      >
        Firebase
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("PostgreSQL") ? "" : "hidden"
        } bg-[#336791] text-[#fdfdfd]  `}
      >
        PostgreSQL
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("MySQL") ? "" : " hidden"
        } bg-[#01526A] text-[#fdfdfd]  `}
      >
        MySQL
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Framer Motion") ? "" : "hidden"
        } bg-[#ff13ffd3] text-[#fdfdfd] `}
      >
        Framer Motion
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("GraphQL") ? "" : " hidden"
        } bg-[#E632AD] text-[#fdfdfd] `}
      >
        GraphQL
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Ethers") ? "" : " hidden"
        } bg-[#123A50] text-[#fdfdfd]`}
      >
        Ethers
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Three") ? "" : " hidden"
        } bg-[#2496ED] text-[#fdfdfd]`}
      >
        Three
      </div>
    </div>
  );
}

export default Technology_tag;

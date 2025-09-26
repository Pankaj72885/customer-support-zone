import leftVector from "../../assets/vector1.png";
import rightVector from "../../assets/vector2.png";
const BannerCard = ({name, value, bgColor}) => {
  return (
    <div
      className={`relative flex justify-center items-center flex-1 bg-gradient-to-br   text-white ${bgColor}`}
    >
      <div className="flex justify-between w-full">
        <img src={leftVector} alt="vector Image" />
        <img src={rightVector} alt="vector Image" />
      </div>
      <div className="absolute flex flex-col justify-center items-center gap-6">
        <p className="text-2xl">{name}</p>
        <p className="text-6xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default BannerCard;

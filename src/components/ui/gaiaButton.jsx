import Link from "next/link";


const GaiaButton = ({ text,  isActive ,slug}) => {
  return (
    <Link href={`/gaialearn/${slug}`} > <div
    className={`cursor-pointer rounded-md px-12 py-2 font-small ${
      isActive
      ? "bg-white text-teal-600 shadow-md"
      : "bg-gray-200 text-gray-500"
    }`}
    
    >
      {text}
    </div>
     </Link>
  );
};

export default GaiaButton;

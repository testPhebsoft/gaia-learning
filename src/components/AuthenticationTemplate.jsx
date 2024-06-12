import MainPhoto from "./MainPhoto";

export default function AuthenticationTemalate({ ImageSrc, secondPart }) {
  return (
    <div className="flex">
      <MainPhoto imageSrc={ImageSrc && ImageSrc} />
      <div className="w-full flex justify-center items-center">
        {secondPart && secondPart}
      </div>
    </div>
  );
}

import Button from "../atoms/Button";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col gap-10 min-h-screen bg-black justify-center items-center text-white text-xl">
        <p className="cursor-default">Hello, My Name is Kshitij Singh</p>
        <div className="">
          <Button btnName={"Home"} path={"/"} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
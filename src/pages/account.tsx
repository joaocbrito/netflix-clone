import { SavedShows } from "../components/SavedShows";

export default function Account() {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/f0c190ec-fb9d-4442-89f0-08c267b5aee0/BR-en-20221017-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />

        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>

      <SavedShows />
    </>
  );
}

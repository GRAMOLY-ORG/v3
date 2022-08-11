import  { Member } from "../components/about/member";
const about = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-evenly gap-6 align-middle  mx-2  pt-16 sm:pt-6 ">
        <Member 
        img="/public/images/avatars/badal"
        name="Badal"
        role="Administrator"
        />
      </div>
    </>
  );
};

export default about;
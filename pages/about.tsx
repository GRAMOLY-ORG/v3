import { Member } from "../components/about/member";
const about = () => {
  return (
    <>
      <div className="grid grid-cols-1 shrink sm:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-10  align-center align-middle  mx-2  pt-20 pb-16">
        <Member 
        img="/images/avatars/ilm.svg"
         name="ILM"
          role="Administrator" />
        <Member
          img="/images/avatars/badal.svg"
          name="Badal Panchani"
          role="Administrator"
        />
        <Member
          img="/images/avatars/aayush.svg"
          name="Aayush Anand"
          role="Administrator"
        />

        <Member
          img="/images/avatars/soumendu.svg"
          name="Soumendu Jana"
          role="Administrator"
        />
        <Member
          img="/images/avatars/abhishek.svg"
          name="Abhishek Roy"
          role="Administrator"
        />
        <Member
          img="/images/avatars/atharva.svg"
          name="Atharva Mahajan"
          role="Physics"
        />
        <Member
          img="/images/avatars/prannay.svg"
          name="Prannaya Gupta"
          role="Computer Science"
        />
        <Member
          img="/images/avatars/abhiram.svg"
          name="Abhiram Cherukupalli"
          role="Physics"
        />
        <Member
          img="/images/avatars/sainavneet.svg"
          name="Sainavneet Mukund"
          role="Biology"
        />
        <Member
          img="/images/avatars/asutosh.svg"
          name="Asutosh Rath"
          role="Management"
        />
        <Member
          img="/images/avatars/sidharth.svg"
          name="Sidharth Chakrat"
          role="Mathematics"
        />
        <Member
          img="/images/avatars/piyush.svg"
          name="Piyush Singh"
          role="Physics"
        />
        <Member
          img="/images/avatars/om.svg"
          name="Om Badgujar"
          role="Graphics"
        />
        <Member
          img="/images/avatars/sainavneet.svg"
          name="Mahdi Raza"
          role="Mathematics"
        />
        <Member
          img="/images/avatars/amish.svg"
          name="Amish Sinha"
          role="Mathematics"
        />
      </div>
    </>
  );
};

export default about;

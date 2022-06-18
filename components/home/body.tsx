const body = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-darkblue py-2 px-5  gap-10">
        <div className="flex flex-col mx-5 my-10 gap-5">
          <h3 className="text-4xl font-[700] text-lime text-center self-center">
            What is GRAM?
          </h3>
          <p className="text-center self-center text-white ">
            GRAM is a not-for-profit and volunteer-based initiative to raise
            awareness towards various STEM fields. We Intend to do this through
            various events like podcasts, webinars, and contests. We are known
            for our vast community of over achieving students and phenomenal
            guest speakers.
          </p>
        </div>
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div>
                    <h4 className="text-4xl font-[700] text-lime text-center self-center">
                        What we do?
                    </h4>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default body;

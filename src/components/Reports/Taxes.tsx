import React from "react";

const Taxes = () => {
  const taxescards = [
    {
      title: "Sales Tax Report",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "View Report",
    },
    {
      title: "Form 1099-K",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "View Report",
    },
  ];
  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] p-[24px] ">
      <p className="pb-3 text-[#242E3E] font-bold text-base">Taxes</p>
      <p className="text-[#595959]">
        A detailed look at the taxes you owe, based on sales taxes collected and
        paid, and transactions processed.
      </p>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-[16px] gap-y-6 mt-6">
          {taxescards.map((taxes, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 border-[1px] border-[#ECE9E9]"
            >
              <h3 className="text-[16px] font-bold text-[#242E3E]">
                {taxes.title}
              </h3>
              <p className="text-sm text-[#595959] mt-2">{taxes.description}</p>
              <button className="text-[#1D89E4] text-sm font-bold mt-4 block hover:underline">
                {taxes.link}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Taxes;

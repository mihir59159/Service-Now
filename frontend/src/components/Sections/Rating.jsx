import React from "react";
import { FaStar } from "react-icons/fa6";

const Rating = () => {
  const ration = [
    {
      image:
        "https://media.istockphoto.com/id/157373207/photo/balanced-stones-on-a-pebble-beach-during-sunset.jpg?s=612x612&w=0&k=20&c=V4Lua2fcDJmGiTb_JQu2EP6XmFLuAo7e3eI3cUXPNec=",
      name: "John Doe",
      review:
        "Excellent service! The professional arrived on time and did a fantastic job",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Anil Maheta",
      review:
        "Good Service, but they are some techinal issue",
      rating: 2,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefdAYZ6uy2rn4ODl9zSL1KwCAhiEPo9Xm-g&s",
      name: "John Doe",
      review:
        "Very good work and there Services, this service is very Helpfull",
      rating: 5,
    },
  ];

  return (
    <div className="w-full pb-16 mt-10 p-10 bg-[#f0f4f7]">
      <h1 className="font-bold text-3xl w-full text-center py-10">
        What Our Customers Say
      </h1>
      <div className="flex flex-wrap justify-center gap-12 ">
        {ration.map((value, index) => (
          <div key={index} className="flex bg-white p-7 rounded-[7px] w-[400px] flex-col gap-3 justify-center items-start">
            <div className="flex justify-start w-[80%] gap-5">
              <img
                src={value.image}
                className="w-[40px] h-[40px] rounded-full"
                alt=""
              />
              <div>
                <h2 className="font-semibold text-[18px]">{value.name} </h2>
                <div className="flex">
                {[...Array(value.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-[16px] text-start">
              {value.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;

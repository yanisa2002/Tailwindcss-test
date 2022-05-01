import React from "react";
import Data from "./data";

const Notification = () => {
  const infomation = [
    {
      status: "200OK",
      message: "get Notification Success!!",
      NotificationList: [
        {
          IID: 7,
          Subject: "ตรวจสอบรายการคำสั่งซื้อที่ 27",
          Detail:
            "กรุณาตรวจสอบคำสั่งซื้อที่ 27 ที่หน้าตรวจสอบคำสั่งซื้อ และกดปุ่มยืนยันเพื่อทำการยืนยันคำสั่งซื้อ หรือกดปุ่มยกเลิกเพิ้อทำการยกเลิกคำสั่งซื้อ ขอขอบคุณ",
          Date: "20220418212532+0700",
          CID: "",
          SID: "4",
          AID: "1",
        },
      ],
    },
  ];

  console.log(infomation[0].NotificationList[0].Subject);
  console.log(infomation.length);

  return (
    <div className="h-screen flex justify-center  bg-[#FFE5A3] font-prompt">
      <div className="flex flex-col p-8 m-8 bg-white  min-w-[44.25%] w-[97%] 2xl:w-[44.25%] xl:w-[53.1%] lg:w-[66.375%] md:w-[88.5%] sm:w-[95%] xs:w-[97%]  rounded-xl shadow-xl ">
        <label className="block text-gray-darker text-xl text-[#E54E3D] font-bold mb-4">
          การแจ้งเตือน
        </label>
        <hr className="bg-[#FFE5A3] h-0.5" />

        <div>
          {infomation.map((Info) => (
            // for(i=0;i < Info.leng)
            <div className=" m-5">
              <p className="text-lg mb-2">{Info.NotificationList[0].Subject}</p>
              <p className="text-lg mb-2">{Info.NotificationList[0].Detail}</p>
              <p className="text-md mb-2 text-right">
                {Info.NotificationList[0].Date.slice(6, 8) +
                  "/" +
                  Info.NotificationList[0].Date.slice(4, 6) +
                  "/" +
                  Info.NotificationList[0].Date.slice(0, 4) +
                  " เวลา " +
                  Info.NotificationList[0].Date.slice(8, 10) +
                  ":" +
                  Info.NotificationList[0].Date.slice(10, 12) +
                  " น."}
              </p>
              <hr className="bg-[#FFE5A3] h-0.5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;

import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  // const defaultValues = {
  //   Title: "",
  //   Firstname: "",
  //   LastName: "",
  //   UserName: "",
  //   Password: "",
  //   Email: "",
  //   Birthday: "",
  //   Tel: "",
  //   Address: {
  //     HomeNo: "",
  //     Soi: "",
  //     Road: "",
  //     Subdistrict: "",
  //     District: "",
  //     Province: "",
  //     ZipCode: "",
  //   },
  //   IDCard: "",
  //   wantToBeSeller: "",
  // };

  // const { register, handleSubmit } = useForm({ defaultValues });
  const { register, handleSubmit } = useForm();

  // if (register("wantToBeSeller") === true) {
  //   {
  //     register("Role", { value: "Yes" });
  //   }
  // }

  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-full flex justify-center  bg-[#FFE5A3] font-prompt">
      <div>
        <div className="mt-6 text-3xl font-bold text-center text-[#E54E3D]">
          ยินดีต้อนรับ!
        </div>
        <div className="mt-2 text-xl font-medium text-center">
          กรอกข้อมูลด้านล่างเพื่อเข้าร่วมเป็นสมาชิก
        </div>
        <div className="flex flex-col p-8 m-8 bg-white w-[600px] sm:min-w-[400px] min-w-[300px]  rounded-xl shadow-xl">
          <h1 className="text-xl font-bold mb-2">สร้างบัญชีของคุณ</h1>
          <h2 className="text-lg mb-4 text-[#E54E3D]">ข้อมูลส่วนตัว</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              className="block text-gray-darker text-md font-bold mb-2"
              for="Title"
            >
              คำนำหน้าชื่อ
            </label>

            <select
              {...register("Title", { required: true })}
              className="border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            >
              <option value="">เลือกคำนำหน้าชื่อ</option>
              <option value="Mr">นาย</option>
              <option value="Mrs">นาง</option>
              <option value="Miss">นางสาว</option>
            </select>

            <div className=" flex-col grid grid-cols-2 gap-9">
              <div className="flex flex-col">
                <label
                  className="block text-gray-darker text-md font-bold mt-4 mb-2"
                  for="Firstname"
                >
                  ชื่อจริง
                </label>
                <input
                  {...register("Firstname", { required: true, maxLength: 20 })}
                  class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                  //   id="Firstname"
                  type="text"
                  pattern="^[ก-๏\s]+$"
                  placeholder="Firstname"
                ></input>
              </div>

              <div className="flex flex-col">
                <label
                  className="block text-gray-darker text-md font-bold mt-4 mb-2"
                  for="LastName"
                >
                  นามสกุล
                </label>
                <input
                  {...register("LastName", { required: true })}
                  class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                  //   id="LastName"
                  type="text"
                  pattern="^[ก-๏\s]+$"
                  placeholder="LastName"
                ></input>
              </div>
            </div>

            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              for="IDCard"
            >
              เลขประจำตัวประชาขน
            </label>
            <input
              {...register("IDCard", {
                required: true,
                pattern: [0 - 9],
                maxLength: 13,
              })}
              class="shadow appearance-none border w-full rounded py-2 px-3 text-grey-darker"
              //   id="IDCard"
              type="text"
              placeholder="Personal ID"
            ></input>

            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              for="Birthday"
            >
              วัน-เดือน-ปีเกิด
            </label>
            <select
              className="border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              id="Birthday"
            >
              <option value="">เลือกวันเดือนปีเกิด</option>
            </select>

            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              for="Email"
            >
              อีเมล
            </label>
            <input
              {...register("Email", { required: true })}
              class="shadow appearance-none border w-full rounded py-2 px-3 text-grey-darker"
              // id="Email"
              type="Email"
              placeholder="Email"
            ></input>

            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              for="UserName"
            >
              ชื่อผู้ใช้
            </label>
            <input
              {...register("UserName", { required: true })}
              class="shadow appearance-none border w-full rounded py-2 px-3 text-grey-darker"
              // id="UserName"
              type="text"
              placeholder="UserName"
            ></input>

            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              for="Password"
            >
              รหัสผ่าน
            </label>
            <input
              {...register("Password", { required: true })}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              // id="Password"
              type="Password"
              placeholder="Password"
            ></input>

            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              for="comfirmpass"
            >
              ยืนยันรหัสผ่าน
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="confirmpass"
              type="text"
              placeholder="Confirm Password"
            ></input>

            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              for="Tel"
            >
              เบอร์โทรศัพท์
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="Tel"
              type="text"
              placeholder="Phone Number"
            ></input>

            <h2 className="text-lg mt-8 mb-4 text-[#E54E3D]">ที่อยู่</h2>
            <div className="grid grid-cols-6 ">
              <label
                className="block text-gray-darker text-md font-bold mt-4 mb-2"
                for="HomeNo"
              >
                บ้านเลขที่
              </label>

              <input
                {...register("HomeNo", { required: true, pattern: [0 - 9] })}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                // id="HomeNo"
                type="text"
                placeholder="No."
              ></input>

              <label
                className="block text-gray-darker text-md font-bold text-center mt-4 mb-2"
                for="sol"
              >
                ซอย
              </label>

              <input
                {...register("Soi", { required: true })}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                // id="sol"
                type="text"
                placeholder="Sol"
              ></input>

              <label
                className="block text-gray-darker text-md font-bold text-center mt-4 mb-2"
                for="Road"
              >
                ถนน
              </label>

              <input
                {...register("Road", { required: true })}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                // id="Road"
                type="text"
                placeholder="Road"
              ></input>
            </div>

            <div className="grid grid-cols-4 mt-4 ">
              <label
                className="block text-gray-darker text-md font-bold mt-4 mb-2"
                for="Subdistrict"
              >
                แขวง/ตำบล
              </label>

              <input
                {...register("Subdistrict", { required: true })}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                // id="Subdistrict"
                type="text"
                placeholder="Sub District"
              ></input>

              <label
                className="block text-gray-darker text-md font-bold text-center mt-4 mb-2"
                for="District"
              >
                เขต/อำเภอ
              </label>

              <input
                {...register("District", { required: true })}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                // id="District"
                type="text"
                placeholder="District"
              ></input>
            </div>

            <div className="grid grid-cols-4 mt-4 ">
              <label
                className="block text-gray-darker text-md font-bold mt-4 mb-2"
                for="Province"
              >
                จังหวัด
              </label>

              <input
                {...register("Province", { required: true })}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                // id="Province"
                type="text"
                placeholder="Province"
              ></input>

              <label
                className="block text-gray-darker text-md font-bold text-center mt-4 mb-2"
                for="ZipCode"
              >
                รหัสไปรษณีย์
              </label>

              <input
                {...register("ZipCode", { required: true, pattern: [0 - 9] })}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="ZipCode"
                type="text"
                placeholder="Zip Code"
              ></input>
            </div>

            <div className="block">
              <div className="mt-5">
                <label className="inline-flex items-center">
                  <input
                    {...register("wantToBeSeller")}
                    type="checkbox"
                    class="w-6 h-6 rounded"
                  />
                  <span className="text-gray-darker text-md font-bold ml-2">
                    ต้องการเป็นผู้ขาย
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-4 mb-7">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#E54E3D] border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
              >
                ยืนยัน
              </button>
            </div>
          </form>

          <div className="mb-7">
            <button className="w-full p-10 py-2 px-4 border-2 border-[#E54E3D] rounded text-[#E54E3D] hover:bg-[#E54E3D] hover:text-white transition duration-300">
              ยกเลิก และ กลับสู่หน้าหลัก
            </button>
          </div>
        </div>
      </div>
    </div>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input {...register("Firstname", { required: true, maxLength: 20 })} />
    //   <input {...register("LastName", { pattern: /^[A-Za-z]+$/i })} />
    //   <input type="number" {...register("age", { min: 18, max: 99 })} />
    //   <input type="submit" />
    // </form>
  );
}

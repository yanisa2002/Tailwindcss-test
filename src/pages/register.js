import React, { useState, useEffect } from "react";

const Register = () => {
  const defaultValues = {
    Title: "",
    Firstname: "",
    LastName: "",
    UserName: "",
    Password: "",
    Email: "",
    Birthday: "",
    Tel: "",
    Address: {
      HomeNo: "",
      Soi: "",
      Road: "",
      Subdistrict: "",
      District: "",
      Province: "",
      ZipCode: "",
    },
    IDCard: "",
    wantToBeSeller: "",
  };
  const [formValues, setFormValues] = useState(defaultValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [comfirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setConfirmPassword({ ...comfirmPassword, [name]: value });
    console.log(formValues);
    console.log(comfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.Firstname) {
      errors.Firstname = "กรุณากรอกชื่อ";
    }
    if (!values.lastname) {
      errors.lastname = "กรุณากรอกนามสกุล";
    }
    if (!values.UserName) {
      errors.UserName = "กรุณากรอกชื่อผู้ใช้";
    }
    if (!values.email) {
      errors.email = "กรุณากรอกอีเมล";
    } else if (!regex.test(values.email)) {
      errors.email = "ไม่ตรงตามรูปแบบ";
    }
    if (!values.password) {
      errors.password = "กรุณากรอกรหัสผ่าน";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

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
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div>Signup successfully</div>
          ) : (
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
          )}
          <form onSubmit={handleSubmit}>
            <label
              className="block text-gray-darker text-md font-bold mb-2"
              htmlFor="Title"
            >
              คำนำหน้าชื่อ
            </label>

            <select
              className="border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              name="Title"
              value={formValues.Title}
              onChange={handleChange}
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
                  htmlFor="Firstname"
                >
                  ชื่อจริง
                </label>
                <input
                  class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                  name="Firstname"
                  type="text"
                  placeholder="Firstname"
                  value={formValues.Firstname}
                  onChange={handleChange}
                ></input>
              </div>

              <div className="flex flex-col">
                <label
                  className="block text-gray-darker text-md font-bold mt-4 mb-2"
                  htmlFor="LastName"
                >
                  นามสกุล
                </label>
                <input
                  class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                  name="LastName"
                  type="text"
                  placeholder="LastName"
                  value={formValues.LastName}
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              htmlFor="IDCard"
            >
              เลขประจำตัวประชาขน
            </label>
            <input
              class="shadow appearance-none border w-full rounded py-2 px-3 text-grey-darker"
              name="IDCard"
              type="text"
              placeholder="Personal ID"
              value={formValues.IDCard}
              onChange={handleChange}
            ></input>

            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              htmlFor="Birthday"
            >
              วัน-เดือน-ปีเกิด
            </label>
            <input
              className="border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              name="Birthday"
              type="date"
              placeholder="Select Birthday"
              value={formValues.Birthday}
              onChange={handleChange}
            />

            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              htmlFor="Email"
            >
              อีเมล
            </label>
            <input
              class="shadow appearance-none border w-full rounded py-2 px-3 text-grey-darker"
              name="Email"
              type="text"
              placeholder="Email"
              value={formValues.Email}
              onChange={handleChange}
            ></input>

            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              htmlFfor="UserName"
            >
              ชื่อผู้ใช้
            </label>
            <input
              class="shadow appearance-none border w-full rounded py-2 px-3 text-grey-darker"
              name="UserName"
              type="text"
              placeholder="UserName"
              value={formValues.UserName}
              onChange={handleChange}
            ></input>

            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              htmlfor="Password"
            >
              รหัสผ่าน
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              name="Password"
              type="Password"
              placeholder="Password"
              value={formValues.Password}
              onChange={handleChange}
            ></input>

            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              htmlFor="comfirmPassword"
            >
              ยืนยันรหัสผ่าน
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={comfirmPassword} ////////////////////////////
              onChange={handleChange}
            ></input>

            <label
              className="block text-gray-darker text-md font-bold mt-4 mb-2"
              htmlFor="Tel"
            >
              เบอร์โทรศัพท์
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              name="Tel"
              type="tel"
              placeholder="Phone Number"
              value={formValues.Tel}
              onChange={handleChange}
            ></input>

            <h2 className="text-lg mt-8 mb-4 text-[#E54E3D]">ที่อยู่</h2>
            <div className="grid grid-cols-6 ">
              <label
                className="block text-gray-darker text-md font-bold mt-4 mb-2"
                htmlFor="HomeNo"
              >
                บ้านเลขที่
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                name="HomeNo"
                type="text"
                placeholder="No."
                value={formValues.Address.HomeNo}
                onChange={handleChange}
              ></input>

              <label
                className="block text-gray-darker text-md font-bold text-center mt-4 mb-2"
                for="Soi"
              >
                ซอย
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                name="Soi"
                type="text"
                placeholder="Soi"
                value={formValues.Address.Soi}
                onChange={handleChange}
              ></input>

              <label
                className="block text-gray-darker text-md font-bold text-center mt-4 mb-2"
                htmlFor="Road"
              >
                ถนน
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                name="Road"
                type="text"
                placeholder="Road"
                value={formValues.Address.Road}
                onChange={handleChange}
              ></input>
            </div>

            <div className="grid grid-cols-4 mt-4 ">
              <label
                className="block text-gray-darker text-md font-bold mt-4 mb-2"
                htmlFor="Subdistrict"
              >
                แขวง/ตำบล
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                name="Subdistrict"
                type="text"
                placeholder="Sub District"
                value={formValues.Address.Subdistrict}
                onChange={handleChange}
              ></input>

              <label
                className="block text-gray-darker text-md font-bold text-center mt-4 mb-2"
                htmlFor="District"
              >
                เขต/อำเภอ
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                name="District"
                type="text"
                placeholder="District"
                value={formValues.Address.District}
                onChange={handleChange}
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
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                name="Province"
                type="text"
                placeholder="Province"
                value={formValues.Address.Province}
                onChange={handleChange}
              ></input>

              <label
                className="block text-gray-darker text-md font-bold text-center mt-4 mb-2"
                htmlFor="ZipCode"
              >
                รหัสไปรษณีย์
              </label>

              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                name="ZipCode"
                type="text"
                placeholder="Zip Code"
                value={formValues.Address.ZipCode}
                onChange={handleChange}
              ></input>
            </div>

            <div className="block">
              <div className="mt-5">
                <label className="inline-flex items-center">
                  <input
                    name="wantToBeSeller"
                    type="checkbox"
                    class="w-6 h-6 rounded"
                    value={formValues.wantToBeSeller}
                    onChange={handleChange}
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
};

export default Register;

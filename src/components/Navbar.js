import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-prompt  "
      role="navigation"
    >
      <Link to="/" className="pl-8 text-[#E54E3D]">
        Lottery
      </Link>
      <div className="px-4 cusor-ponter md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8  md:block hidden ">
        <Link className="p-4 hover:text-[#E54E3D]" to="/">
          หน้าหลัก
        </Link>
        <Link className="p-4 hover:text-[#E54E3D] " to="/cart">
          ตะกร้าสินค้า
        </Link>
        <Link className="p-4 hover:text-[#E54E3D]" to="/orders">
          สินค้าที่จะได้รับ
        </Link>
        <Link className="p-4 hover:text-[#E54E3D]" to="/notification">
          การแจ้งเตือน
        </Link>
        <Link className="p-4 hover:text-[#E54E3D]" to="/account">
          บัญชีผู้ใช้
        </Link>
        <span className="border-l-2 border-red-200" />
        <Link className="p-4 hover:text-[#E54E3D]" to="/login">
          เข้าสู่ระบบ
        </Link>
        <Link
          to="/register"
          className="p-10 py-1 px-1 border-2 border-[#E54E3D] rounded text-[#E54E3D] hover:bg-[#E54E3D] hover:text-white transition duration-300"
        >
          สมัครเป็นสมาชิก
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

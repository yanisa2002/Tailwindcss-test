import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-yellow-500"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4" to="/">
        หน้าหลัก
      </Link>
      <Link className="p-4" to="/Cart">
        ตะกร้า
      </Link>
      <Link className="p-4" to="/order">
        สินค้าที่ต้องได้รับ
      </Link>
      <Link className="p-4" to="/notification">
        การแจ้งเตือน
      </Link>
      <Link className="p-4" to="/account">
        บัญชีผู้ใช้
      </Link>
    </div>
  );
};

export default Dropdown;

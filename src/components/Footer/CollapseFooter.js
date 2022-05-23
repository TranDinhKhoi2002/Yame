import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useCollapse from "react-collapsed";
import { Link } from "react-router-dom";

function CollapseFooter(props) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div>
      <div
        className="text-[#00ffff] cursor-pointer inline-block text-[13px] relative"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <span>Xem thêm Thông tin YaMe</span>
        <FontAwesomeIcon icon={faAngleDown} className="ml-2 cursor-pointer" />
      </div>

      <ul {...getCollapseProps()} className="mt-3">
        <li>
          <Link to="/page/gioi-thieu-ve-yame">Giới thiệu về YaMe.vn</Link>
        </li>
        <li>
          <Link to="/page/tuyen-dung">Tuyển dụng</Link>
        </li>
        <li>.</li>
        <li>
          <Link to="/page/gioi-thieu-ve-yame">Quy chế hoạt động</Link>
        </li>
        <li>
          <Link to="/page/gioi-thieu-ve-yame">Điều khoản mua bán</Link>
        </li>
        <li>.</li>
        <li>
          <Link to="/page/gioi-thieu-ve-yame">Mã Voucher giảm giá</Link>
        </li>
        <br />
        <p>Đặt hàng và thu tiền tận nơi toàn quốc</p>
        <h5 className="text-xl font-medium">(028) 7307 1441</h5>
        <br />
        <h4 className="text-2xl font-medium mb-2">FAQ</h4>
        <ul>
          <li>
            <Link to="/page/van-chuyen">Vận chuyển</Link>
          </li>
          <li>
            <Link to="/page/chinh-sach-doi-tra">Chính sách đổi trả</Link>
          </li>
          <li>
            <Link to="/page/chinh-sach-bao-hanh">Chính sách bảo hành</Link>
          </li>
          <li>
            <Link to="/page/khach-hang-vip">Khách hàng VIP</Link>
          </li>
          <li>
            <Link to="/page/doi-tac-cung-cap">Đối tác cung cấp</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default CollapseFooter;

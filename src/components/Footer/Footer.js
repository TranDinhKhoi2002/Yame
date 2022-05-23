import CollapseFooter from "./CollapseFooter";

function Footer(props) {
  return (
    <div className="py-5 bg-[#111] text-[#e4e4e4]">
      <div className="container mx-auto px-4">
        <div>
          <div className="text-center mx-auto">
            <img
              src="https://res.yame.vn/Content/images/yame-f-logo-white.png"
              alt=""
              className="h-[70px] mx-auto"
            />
          </div>
          <div className="text-center mt-3">
            <p>Đặt hàng và thu tiền tận nơi toàn quốc</p>
            <h5 className="text-xl font-medium mb-2">(028) 7307 1441</h5>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfwI5hLaOdzOL8xz-rlUxpCTfrMitJRz3Z4N3Nbd8eZItVglQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Than phiền/Góp ý
            </a>
            <CollapseFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import {
  simpleProducts,
  simpleShirt,
  simpleTShirt,
  simpleTShirt2,
  simplifyProducts,
} from "./images";

export const NAV_ITEMS = [
  {
    title: "GU TỐI GIẢN",
    to: "/type/gu-toi-gian",
    hasChildren: false,
    generalProducts: simplifyProducts,
  },
  {
    title: "GU ĐƠN GIẢN",
    to: "/type/gu-don-gian",
    hasChildren: true,
    items: [
      {
        name: "Áo thun đơn giản",
        path: "/type/ao-thun-don-gian",
        products: simpleTShirt,
      },
      {
        name: "Áo thun đơn giản 2",
        path: "/type/ao-thun-don-gian-2",
        products: simpleTShirt2,
      },
      {
        name: "Áo sơ mi đơn giản",
        path: "/type/ao-so-mi-don-gian",
        products: simpleShirt,
      },
    ],
    generalProducts: simpleProducts,
  },
  {
    title: "GU THIẾT KẾ",
    to: "/type/gu-thiet-ke",
    hasChildren: true,
    items: [
      { name: "GU 12 Vị Anh Hùng Dân Tộc", path: "/type/12-anh-hung-dan-toc" },
      { name: "GU Thần Cổ Đại", path: "/type/than-co-dai" },
      { name: "GU Ngân Hà", path: "/type/ngan-ha" },
    ],
  },
  {
    title: "GU UNISEX",
    to: "/type/gu-unisex",
    hasChildren: true,
    items: [
      { name: "GU Linh vật", path: "/type/linh-vat" },
      { name: "GU Y Nguyên Bản 18-", path: "/type/y-nguyen-ban-18-" },
    ],
  },
];

export const DETAILS_ITEMS = [
  {
    title: "GU THỂ THAO",
    to: "/type/gu-the-thao",
    items: [],
  },
  {
    title: "ÁO THUN",
    to: "/type/ao-thun",
    items: [
      {
        name: "Áo Thun Form Tiêu Chuẩn",
        path: "/type/ao-thun-form-tieu-chuan",
      },
      {
        name: "Áo Thun Form Tiêu Chuẩn",
        path: "/type/ao-thun-form-tieu-chuan",
      },
      {
        name: "Áo Thun Form Tiêu Chuẩn",
        path: "/type/ao-thun-form-tieu-chuan",
      },
    ],
  },
  {
    title: "QUẦN DÀI",
    to: "/type/quan-dai",
    items: [
      {
        name: "Áo Thun Form Tiêu Chuẩn",
        path: "/type/ao-thun-form-tieu-chuan",
      },
      {
        name: "Áo Thun Form Tiêu Chuẩn",
        path: "/type/ao-thun-form-tieu-chuan",
      },
      {
        name: "Áo Thun Form Tiêu Chuẩn",
        path: "/type/ao-thun-form-tieu-chuan",
      },
    ],
  },
  {
    title: "QUẦN DÀI",
    to: "/type/quan-dai",
    items: [
      {
        name: "Áo Thun Form Tiêu Chuẩn",
        path: "/type/ao-thun-form-tieu-chuan",
      },
      {
        name: "Áo Thun Form Tiêu Chuẩn",
        path: "/type/ao-thun-form-tieu-chuan",
      },
      {
        name: "Áo Thun Form Tiêu Chuẩn",
        path: "/type/ao-thun-form-tieu-chuan",
      },
    ],
  },
];

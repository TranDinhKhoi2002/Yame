import {
  ancientGodProducts,
  basicProducts,
  beltProducts,
  hatProducts,
  heroProducts,
  items,
  joggerProducts,
  largeFormProducts,
  longTrousersProducts,
  mascotProducts,
  shirtProducts,
  simpleProducts,
  simpleShirt,
  simpleTShirt,
  simpleTShirt2,
  simplifyProducts,
  sockProducts,
  spaceProducts,
  sportProducts,
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
      {
        name: "GU 12 Vị Anh Hùng Dân Tộc",
        path: "/type/12-anh-hung-dan-toc",
        products: heroProducts,
      },
      {
        name: "GU Thần Cổ Đại",
        path: "/type/than-co-dai",
        products: ancientGodProducts,
      },
      { name: "GU Ngân Hà", path: "/type/ngan-ha", products: spaceProducts },
    ],
  },
  {
    title: "GU UNISEX",
    to: "/type/gu-unisex",
    hasChildren: true,
    items: [
      { name: "GU Linh vật", path: "/type/linh-vat", products: mascotProducts },
      {
        name: "GU Y Nguyên Bản 18-",
        path: "/type/y-nguyen-ban-18-",
        products: basicProducts,
      },
    ],
  },
];

export const DETAILS_ITEMS = [
  {
    title: "GU THỂ THAO",
    to: "/type/gu-the-thao",
    hasChildren: false,
    items: [],
    generalProducts: sportProducts,
  },
  {
    title: "ÁO THUN",
    to: "/type/ao-thun",
    hasChildren: true,
    items: [
      {
        name: "Áo Thun Form Tiêu Chuẩn",
        path: "/type/ao-thun-form-tieu-chuan",
      },
      {
        name: "Áo Thun Form Rộng",
        path: "/type/ao-thun-form-rong",
        products: largeFormProducts,
      },
      {
        name: "Áo thun 3 Lỗ",
        path: "/type/ao-thun-3-lo",
      },
    ],
    generalProducts: shirtProducts,
  },
  {
    title: "QUẦN DÀI",
    to: "/type/quan-dai",
    hasChildren: true,
    items: [
      {
        name: "Quần Jogger",
        path: "/type/quan-jogger",
        products: joggerProducts,
      },
      {
        name: "Quần Tây",
        path: "/type/quan-tay",
      },
      {
        name: "Quần Ống Rộng",
        path: "/type/quan-ong-rong",
      },
    ],
    generalProducts: longTrousersProducts,
  },
  {
    title: "PHỤ KIỆN",
    to: "/type/phu-kien",
    hasChildren: true,
    items: [
      {
        name: "Nón",
        path: "/type/non",
        products: hatProducts,
      },
      {
        name: "Tất - Vớ",
        path: "/type/tat-vo",
        products: sockProducts,
      },
      {
        name: "Dây Nịt Da",
        path: "/type/day-nit-da",
        products: beltProducts,
      },
    ],
    generalProducts: items,
  },
];

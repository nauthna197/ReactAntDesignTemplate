import Home from "../pages/home/Home";
import Agency from "../pages/agency/Agency";

export const ROUTERS_CONSTANT = [
  {
    component: Agency,
    link: "/quan-ly-dai-ly",
    isExact: false
  },
  {
    component: Home,
    link: "/",
    isExact: true
  }
];

export const MENU_CONSTANT = [
  {
    link: "",
    icon: "fas fa-cogs",
    displayName: "Cài đặt hệ thống",
    childMenu: [
      {
        link: "/quan-ly-nguoi-dung",
        childIcon: "fas fa-user",
        displayName: "Quản lý người dùng"
      },
      {
        link: "/quan-ly-dai-ly",
        childIcon: "fas fa-user",
        displayName: "Quản lý chức vụ"
      }
    ]
  }
];

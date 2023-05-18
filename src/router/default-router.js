import React from "react";
import Index from "../views/dashboard/index";

//app
import UserProfile from "../views/dashboard/app/user-profile";
import UserPrivacySetting from "../views/dashboard/app/user-privacy-setting";
import FriendProfile from "../views/dashboard/app/friend-profile";
import ProfileBadges from "../views/dashboard/app/profile-badges";
import ProfileForums from "../views/dashboard/app/profile-forum";
import Notification from "../views/dashboard/app/notification";
import File from "../views/dashboard/app/file";
import FriendRequest from "../views/dashboard/app/friend-request";
import Todo from "../views/dashboard/app/todo";
import UserAccountSetting from "../views/dashboard/app/user-account-setting";
import UserProfileEdit from "../views/dashboard/app/user-profile-edit";

// blog pages
import BlogGrid from "../views/dashboard/blog/bloggrid";
import BlogList from "../views/dashboard/blog/bloglist";
import BlogDetail from "../views/dashboard/blog/blogdetail";

// extrapages
import Pricing from "../views/dashboard/extrapages/pricing";
import Pricing1 from "../views/dashboard/extrapages/pricing1";
import Timeline from "../views/dashboard/extrapages/timeline";
import Invoice from "../views/dashboard/extrapages/invoice";
import Faq from "../views/dashboard/extrapages/faq";
import PrivacyPolicy from "../views/dashboard/extrapages/privacy-policy";
import TermsofService from "../views/dashboard/extrapages/terms-of-service";
import BlankPage from "../views/dashboard/extrapages/blankpage";
import Admin from "../views/dashboard/app/admin";

export const DefaultRouter = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "dashboard/app/profile",
    element: <UserProfile />,
  },
  {
    path: "dashboard/app/user-privacy-setting",
    element: <UserPrivacySetting />,
  },
  {
    path: "dashboard/app/friend-profile",
    element: <FriendProfile />,
  },
  {
    path: "dashboard/app/profile-badges",
    element: <ProfileBadges />,
  },
  {
    path: "dashboard/app/profile-forum",
    element: <ProfileForums />,
  },
  {
    path: "dashboard/app/notification",
    element: <Notification />,
  },
  {
    path: "dashboard/app/file",
    element: <File />,
  },
  {
    path: "dashboard/app/friend-request",
    element: <FriendRequest />,
  },
  {
    path: "dashboard/app/todo",
    element: <Todo />,
  },
  {
    path: "dashboard/app/user-account-setting",
    element: <UserAccountSetting />,
  },
  {
    path: "dashboard/app/user-profile-edit",
    element: <UserProfileEdit />,
  },
  
  {
    path: "dashboard/blog/blog-grid",
    element: <BlogGrid />,
  },
  {
    path: "dashboard/blog/blog-list",
    element: <BlogList />,
  },
  {
    path: "dashboard/blog/blog-detail",
    element: <BlogDetail />,
  },

  {
    path: "dashboard/extrapages/pages-pricing",
    element: <Pricing />,
  },
  {
    path: "dashboard/extrapages/pages-pricing-one",
    element: <Pricing1 />,
  },
  {
    path: "dashboard/extrapages/pages-timeline",
    element: <Timeline />,
  },
  {
    path: "dashboard/extrapages/pages-invoice",
    element: <Invoice />,
  },
  {
    path: "dashboard/extrapages/pages-faq",
    element: <Faq />,
  },
  {
    path: "dashboard/extrapages/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "dashboard/extrapages/terms-of-service",
    element: <TermsofService />,
  },
  {
    path: "dashboard/extrapages/blankpage",
    element: <BlankPage />,
  },
  {
    path: "dashboard/app/admin",
    element: <Admin />,
  },

];

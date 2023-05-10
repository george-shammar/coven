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

// icon
import Remixicon from "../views/dashboard/icons/icon-remixicon";
import Lineawesome from "../views/dashboard/icons/icon-lineawesome";
import Fontawesome from "../views/dashboard/icons/icon-fontawesome-5";
import Material from "../views/dashboard/icons/icon-material";

// Form
import FormElement from "../views/dashboard/from/form-element";
import FormValidation from "../views/dashboard/from/form-validation";
import FormSwitch from "../views/dashboard/from/form-switch";
import FormWizard from "../views/dashboard/from/form-wizard";
import FormWizardValidate from "../views/dashboard/from/form-wizard-validate";
import FormWizardVertical from "../views/dashboard/from/form-wizard-vertical";
import FormCheckbox from "../views/dashboard/from/form-checkbox";
import FormRadio from "../views/dashboard/from/form-radio";

// table
import DataTable from "../views/dashboard/table/data-table";
import TableBasic from "../views/dashboard/table/tables-basic";
import TableEditable from "../views/dashboard/table/table-editable";

// blog pages
import BlogGrid from "../views/dashboard/blog/bloggrid";
import BlogList from "../views/dashboard/blog/bloglist";
import BlogDetail from "../views/dashboard/blog/blogdetail";

// Email
import Email from "../views/dashboard/email/email";
import EmailCompose from "../views/dashboard/email/email-compose";

//ui-kit
import UiAlerts from "../views/dashboard/ui-kit/ui-alerts";
import UiBadges from "../views/dashboard/ui-kit/ui-badges";
import UiBreadcrumbs from "../views/dashboard/ui-kit/ui-breadcrumb";
import UiButtons from "../views/dashboard/ui-kit/ui-buttons";
import UiCards from "../views/dashboard/ui-kit/ui-cards";
import UiCarousels from "../views/dashboard/ui-kit/ui-carousel";
import UiColors from "../views/dashboard/ui-kit/ui-color";
import UiDropdowns from "../views/dashboard/ui-kit/ui-dropdowns";
import UiEmbedVideos from "../views/dashboard/ui-kit/ui-embed-video";
import UiGrids from "../views/dashboard/ui-kit/ui-grid";
import UiImages from "../views/dashboard/ui-kit/ui-images";
import UiListGroups from "../views/dashboard/ui-kit/ui-list-groups";
import UiModals from "../views/dashboard/ui-kit/ui-modal";
import UiNotifications from "../views/dashboard/ui-kit/ui-notifications";
import UiOffcanvas from "../views/dashboard/ui-kit/ui-offcanvas";
import UiPaginations from "../views/dashboard/ui-kit/ui-pagination";
import UiPopovers from "../views/dashboard/ui-kit/ui-popovers";
import UiProgressbars from "../views/dashboard/ui-kit/ui-progressbars";
import UiTabs from "../views/dashboard/ui-kit/ui-tabs";
import UiTooltips from "../views/dashboard/ui-kit/ui-tooltips";
import UiTypographys from "../views/dashboard/ui-kit/ui-typography";

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
    path: "dashboard/icon/fontawesome-5",
    element: <Fontawesome />,
  },
  {
    path: "dashboard/icon/remixicon",
    element: <Remixicon />,
  },
  {
    path: "dashboard/icon/lineawesome",
    element: <Lineawesome />,
  },
  {
    path: "dashboard/icon/material",
    element: <Material />,
  },
  {
    path: "dashboard/form/form-elemen",
    element: <FormElement />,
  },
  {
    path: "dashboard/form/form-validation",
    element: <FormValidation />,
  },
  {
    path: "dashboard/form/form-switch",
    element: <FormSwitch />,
  },
  {
    path: "dashboard/form/form-wizard",
    element: <FormWizard />,
  },
  {
    path: "dashboard/form/form-wizard-validate",
    element: <FormWizardValidate />,
  },
  {
    path: "dashboard/form/form-wizard-vertical",
    element: <FormWizardVertical />,
  },
  {
    path: "dashboard/form/form-checkbox",
    element: <FormCheckbox />,
  },
  {
    path: "dashboard/form/form-radio",
    element: <FormRadio />,
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
    path: "dashboard/Email/email",
    element: <Email />,
  },
  {
    path: "dashboard/Email/email-compose",
    element: <EmailCompose />,
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
  // Ui-kit
  {
    path: "dashboard/ui-kit/ui-alerts",
    element: <UiAlerts />,
  },
  {
    path: "dashboard/ui-kit/ui-badges",
    element: <UiBadges />,
  },
  {
    path: "dashboard/ui-kit/ui-breadcrumb",
    element: <UiBreadcrumbs />,
  },
  {
    path: "dashboard/ui-kit/ui-buttons",
    element: <UiButtons />,
  },
  {
    path: "dashboard/ui-kit/ui-cards",
    element: <UiCards />,
  },
  {
    path: "dashboard/ui-kit/ui-carousel",
    element: <UiCarousels />,
  },
  {
    path: "dashboard/ui-kit/ui-color",
    element: <UiColors />,
  },
  {
    path: "dashboard/ui-kit/ui-dropdowns",
    element: <UiDropdowns />,
  },
  {
    path: "dashboard/ui-kit/ui-embed-video",
    element: <UiEmbedVideos />,
  },
  {
    path: "dashboard/ui-kit/ui-grid",
    element: <UiGrids />,
  },
  {
    path: "dashboard/ui-kit/ui-images",
    element: <UiImages />,
  },
  {
    path: "dashboard/ui-kit/ui-list-groups",
    element: <UiListGroups />,
  },
  {
    path: "dashboard/ui-kit/ui-modal",
    element: <UiModals />,
  },
  {
    path: "dashboard/ui-kit/ui-notifications",
    element: <UiNotifications />,
  },
  {
    path: "dashboard/ui-kit/ui-offcanvas",
    element: <UiOffcanvas />,
  },
  {
    path: "dashboard/ui-kit/ui-pagination",
    element: <UiPaginations />,
  },
  {
    path: "dashboard/ui-kit/ui-popovers",
    element: <UiPopovers />,
  },
  {
    path: "dashboard/ui-kit/ui-progressbars",
    element: <UiProgressbars />,
  },
  {
    path: "dashboard/ui-kit/ui-tabs",
    element: <UiTabs />,
  },
  {
    path: "dashboard/ui-kit/ui-tooltips",
    element: <UiTooltips />,
  },
  {
    path: "dashboard/ui-kit/ui-typography",
    element: <UiTypographys />,
  },
  // Table
  {
    path: "dashboard/table/data-table",
    element: <DataTable />,
  },
  {
    path: "dashboard/table/tables-basic",
    element: <TableBasic />,
  },
  {
    path: "dashboard/table/table-editable",
    element: <TableEditable />,
  },
  // Form
  {
    path: "dashboard/form/form-element",
    element: <FormElement />,
  },
  {
    path: "dashboard/form/form-validation",
    element: <FormValidation />,
  },
  {
    path: "dashboard/form/form-switch",
    element: <FormSwitch />,
  },
  {
    path: "dashboard/form/form-wizard",
    element: <FormWizard />,
  },
  {
    path: "dashboard/form/form-wizard-validate",
    element: <FormWizardValidate />,
  },
  {
    path: "dashboard/form/form-wizard-vertical",
    element: <FormWizardVertical />,
  },
  {
    path: "dashboard/form/form-checkbox",
    element: <FormCheckbox />,
  },
  {
    path: "dashboard/form/form-radio",
    element: <FormRadio />,
  },
];

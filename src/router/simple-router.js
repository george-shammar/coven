import React from "react";

//extrpages
import Maintenance from "../views/dashboard/extrapages/maintenance";
import ComingSoon from "../views/dashboard/extrapages/comingsoon";

export const SimpleRouter = [
  
  {
    path: "extra-pages/pages-maintenance",
    element: <Maintenance />,
  },
  {
    path: "extra-pages/pages-comingsoon",
    element: <ComingSoon />,
  },
];

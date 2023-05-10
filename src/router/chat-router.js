import React from "react";
import ChatLayout from "../layouts/dashboard/chat-layout";
import Chat from "../views/dashboard/app/chat";

export const ChatRouter = [
  {
    path: "chat",
    element: <ChatLayout />,
    children: [
      {
        path: "index",
        element: <Chat />,
      },
    ],
  },
];

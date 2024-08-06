"use client";

import "./globals.css";
import { TodoContextProvider } from "@/hooks/useTodo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TodoContextProvider>{children}</TodoContextProvider>
      </body>
    </html>
  );
}

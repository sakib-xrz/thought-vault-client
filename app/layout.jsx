import "./globals.css";

import QueryProvider from "@/components/Providers/QueryProvider";

export const metadata = {
  title: "Thought Vault",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

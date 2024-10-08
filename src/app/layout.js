import Navbar from "@/components/Navbar";
import "./globals.css";
import AuthProvider from "@/services/AuthProvider";

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero",
  },
  description: "Super powerful Next Hero",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-navyblue text-white">
        <AuthProvider>
          <Navbar />
          <div className="grid-background"></div>
          <div className="min-h-screen flex flex-col">
            {/* Main content area with padding-top to ensure it starts below the navbar */}
            <main className="flex-grow">{children}</main>
            <footer className="bg-slate-800 py-4 text-center">
              This is the footer
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

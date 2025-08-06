import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "ระบบช่วยเหลือการสืบสวนอัจฉริยะ - สถานีตำรวจนิคมพัฒนา",
  description: "ระบบช่วยเหลือการสืบสวนอัจฉริยะสำหรับสถานีตำรวจนิคมพัฒนา ด้วยเทคโนโลยี AI",
  keywords: ["AI", "Investigation", "Police", "Nikhompattana", "สืบสวน", "ตำรวจ", "นิคมพัฒนา"],
  authors: [{ name: "Nikhompattana Police Station" }],
  openGraph: {
    title: "ระบบช่วยเหลือการสืบสวนอัจฉริยะ",
    description: "ระบบช่วยเหลือการสืบสวนอัจฉริยะสำหรับสถานีตำรวจนิคมพัฒนา",
    url: "https://chat.z.ai",
    siteName: "Nikhompattana Police Station",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ระบบช่วยเหลือการสืบสวนอัจฉริยะ",
    description: "ระบบช่วยเหลือการสืบสวนอัจฉริยะสำหรับสถานีตำรวจนิคมพัฒนา",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}

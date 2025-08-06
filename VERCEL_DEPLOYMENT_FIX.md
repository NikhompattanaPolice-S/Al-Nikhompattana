# 🔧 Vercel Deployment Fix Guide

## 🚨 ปัญหาที่พบในการ Build บน Vercel

### 1. PostCSS Configuration Error
**Error:** `Your custom PostCSS configuration must export a 'plugins' key.`

**สาเหตุ:** PostCSS configuration ไม่ถูกต้องสำหรับ Tailwind CSS 4

**✅ วิธีแก้ไข:**
ไฟล์ `postcss.config.mjs` ต้องมีการ config ดังนี้:

```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

### 2. Google Fonts Error
**Error:** `Failed to fetch 'Geist' from Google Fonts.`

**สาเหตุ:** Vercel ไม่สามารถดึง Google Fonts ได้ในระหว่างการ build

**✅ วิธีแก้ไข:**
ลบการใช้ Google Fonts ออกจาก `src/app/layout.tsx`:

**ก่อนแก้ไข:**
```typescript
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
```

**หลังแก้ไข:**
```typescript
// ลบ import และ font configuration ออกทั้งหมด
// ใช้ system fonts แทน
```

### 3. CSS Variables Issue
**Error:** การอ้างถึง font variables ที่ไม่มีอยู่

**✅ วิธีแก้ไข:**
ใน `src/app/globals.css` ลบ font variables ที่ไม่ได้ใช้:

**ก่อนแก้ไข:**
```css
@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  // ... other variables
}
```

**หลังแก้ไข:**
```css
@theme inline {
  // ลบ font variables ออก
  --color-background: var(--background);
  // ... other color variables only
}
```

## 📋 ไฟล์ที่ถูกแก้ไขแล้ว

### ✅ `postcss.config.mjs`
```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

### ✅ `src/app/layout.tsx`
```typescript
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "ระบบช่วยเหลือการสืบสวนอัจฉริยะ - สถานีตำรวจนิคมพัฒนา",
  description: "ระบบช่วยเหลือการสืบสวนอัจฉริยะสำหรับสถานีตำรวจนิคมพัฒนา ด้วยเทคโนโลยี AI",
  // ... other metadata
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
```

### ✅ `src/app/globals.css`
ลบ font variables ออกจาก `@theme inline` section

## 🚀 ขั้นตอนการ Deploy บน Vercel

### 1. Push การเปลี่ยนแปลงไปยัง GitHub
```bash
git add .
git commit -m "Fix Vercel deployment issues: Remove Google Fonts and fix PostCSS config"
git push origin main
```

### 2. ตรวจสอบการ Deploy บน Vercel
1. เข้าไปที่ Vercel dashboard
2. เลือก project ของคุณ
3. คลิก "Redeploy" เพื่อ deploy ใหม่
4. ตรวจสอบ build logs

### 3. Environment Variables (ถ้าต้องการ)
สำหรับ production deployment ให้ตั้งค่า:
- `NODE_ENV=production`

## 🎯 การตรวจสอบหลัง Deploy

### 1. ทดสอบการทำงานของเว็บไซต์
- เข้าไปที่ URL ที่ Vercel ให้
- ตรวจสอบว่าหน้าเว็บโหลดได้ normally
- ทดสอบการ login/logout
- ตรวจสอบการทำงานของทุกโมดูล

### 2. ตรวจสอบบนมือถือ
- เปิดเว็บไซต์บนมือถือ
- ตรวจสอบ responsive design
- ทดสอบการใช้งานบน touch screen

### 3. ตรวจสอบ Console Errors
- เปิด Developer Tools (F12)
- ตรวจสอบ Console tab
- ตรวจสอบ Network tab
- ตรวจสอบว่าไม่มี JavaScript errors

## 🔧 ถ้ายังมีปัญหาอื่นๆ

### 1. Clear Build Cache
บน Vercel dashboard:
1. เข้าไปที่ Project Settings
2. เลือก "Functions"
3. คลิก "Clear Build Cache"
4. Redeploy ใหม่

### 2. ตรวจสอส Dependencies
ตรวจสอบว่า `package.json` มี dependencies ที่จำเป็นครบถ้วน:

```json
{
  "dependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    // ... other dependencies
  }
}
```

### 3. ตรวจสอบ TypeScript Errors
ถ้ามี TypeScript errors:
- ตรวจสอบ `tsconfig.json`
- ตรวจสอบว่า imports ถูกต้อง
- รัน `npm run lint` ในเครื่องก่อน push

## 📞 การขอความช่วยเหลือ

ถ้ายังมีปัญหาในการ deploy:
1. ตรวจสอบ Vercel build logs อย่างละเอียด
2. คัดลอก error messages และค้นหา solutions
3. ตรวจสอบ Vercel status page สำหรับ outages
4. ติดต่อ Vercel support ถ้าจำเป็น

---

🎉 **หลังจากแก้ไขปัญหาเหล่านี้แล้ว โปรเจค AI Investigation Assistant ของคุณควรจะ deploy บน Vercel ได้สำเร็จ!**
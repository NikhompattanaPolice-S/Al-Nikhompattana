# 🕵️ AI Investigation Assistant

ระบบช่วยเหลือการสอบสวนอัจฉริยะสำหรับสถานีตำรวจนิคมพัฒนา พัฒนาด้วยเทคโนโลยี AI เพื่อเพิ่มประสิทธิภาพการทำงานของเจ้าหน้าที่ตำรวจ

## ✨ คุณสมบัติหลัก

### 🎯 โมดูลการสอบสวน
- **📊 การวิเคราะห์ข้อมูล** - วิเคราะห์หลักฐาน สร้างกราฟความรู้
- **📄 ปัญญาประดิษฐ์เอกสาร** - ดึงข้อมูลเอนทิตีจากเอกสาร
- **🎤 การสนับสนุนการสอบสวน** - ถอดเสียงและแนะนำคำถามแบบ real-time
- **📁 การจัดการคดี** - ติดตามคดีและสร้างรายงานอัตโนมัติ
- **🗺️ การตำรวจพยากรณ์** - วิเคราะห์จุดเสี่ยงและทำนายแนวโน้ม

### 🔐 ระบบความปลอดภัย
- **การยืนยันตัวตน** - ระบบ login/logout ป้องกันการเข้าถึงโดยไม่ได้รับอนุญาต
- **การจัดการสิทธิ์** - แบ่งสิทธิ์ตามตำแหน่ง (INVESTIGATOR, SUPERVISOR, ADMIN)
- **การป้องกันหน้า** - ปกป้องหน้าที่ละเอียดอ่อนทั้งหมด

### 🌐 ภาษาและการใช้งาน
- **ภาษาไทยเต็มรูปแบบ** - รองรับภาษาไทยทั้งระบบ
- **การตอบสนอง** - รองรับทุกขนาดหน้าจอ
- **การนำทางที่ง่าย** - อินเตอร์เฟซที่ใช้งานง่าย

## 🚀 Technology Stack

### Core Framework
- **⚡ Next.js 15** - React framework สำหรับ production พร้อม App Router
- **📘 TypeScript 5** - Type-safe JavaScript สำหรับการพัฒนาที่ดีขึ้น
- **🎨 Tailwind CSS 4** - Utility-first CSS framework สำหรับการพัฒนา UI อย่างรวดเร็ว

### UI Components & Styling
- **🧩 shadcn/ui** - Components คุณภาพสูงสร้างบน Radix UI
- **🎯 Lucide React** - ไอคอน library ที่สวยงามและสม่ำเสมอ
- **🌈 Framer Motion** - Motion library สำหรับ React
- **🎨 Next Themes** - รองรับ Dark mode ได้อย่างสมบูรณ์

### State Management & Data Fetching
- **🐻 Zustand** - State management ที่ง่ายและ scalable
- **🔄 TanStack Query** - Data synchronization ที่ทรงพลังสำหรับ React
- **🌐 Axios** - HTTP client แบบ Promise-based

### Database & Backend
- **🗄️ Prisma** - Next-generation Node.js and TypeScript ORM
- **🔐 Authentication System** - ระบบยืนยันตัวตนแบบ custom

### Real-time Communication
- **🔌 Socket.IO** - Real-time communication สำหรับการสอบสวนสด

## 🚀 การติดตั้งและใช้งาน

### การติดตั้งในเครื่อง
```bash
# Clone repository
git clone <your-repo-url>
cd ai-investigation-assistant

# Install dependencies
npm install

# Setup database
npm run db:push

# Start development server
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) เพื่อดูแอปพลิเคชัน

### การ Build สำหรับ Production
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 โครงสร้างโปรเจค

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # หน้าหลัก Dashboard
│   ├── login/             # หน้า login
│   ├── data-analysis/     # โมดูลวิเคราะห์ข้อมูล
│   ├── document-intelligence/ # โมดูลปัญญาประดิษฐ์เอกสาร
│   ├── interrogation/     # โมดูลการสอบสวน
│   ├── case-management/   # โมดูลการจัดการคดี
│   ├── predictive-policing/ # โมดูลการตำรวจพยากรณ์
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   └── auth/             # Authentication components
├── contexts/             # React contexts (AuthContext)
├── hooks/                # Custom React hooks
└── lib/                  # Utility functions and configurations
```

## 🔐 ระบบ Authentication

ระบบรองรับการยืนยันตัวตนผู้ใช้งานด้วย:

- **การ Login/Logout** - ระบบจัดการ session ของผู้ใช้
- **การป้องกัน Route** - ProtectedRoute component สำหรับป้องกันหน้าที่ละเอียดอ่อน
- **การจัดการสิทธิ์** - แบ่งสิทธิ์การใช้งานตามตำแหน่ง
  - **INVESTIGATOR**: ดูคดี, สร้างหลักฐาน, บันทึกการสอบสวน, ดูวิเคราะห์
  - **SUPERVISOR**: ทุกอย่างของ INVESTIGATOR + จัดการคดี, สร้างรายงาน, ดูคดีทั้งหมด
  - **ADMIN**: ทุกอย่างของ SUPERVISOR + จัดการผู้ใช้, ตั้งค่าระบบ, ดู log

## 🚀 การ Deploy บน GitHub

### 1. สร้าง GitHub Repository
```bash
# Initialize git repository
git init

# Add files to git
git add .

# Commit initial changes
git commit -m "Initial commit: AI Investigation Assistant"

# Create repository on GitHub and add remote
git remote add origin https://github.com/your-username/ai-investigation-assistant.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Deploy ด้วย Vercel (แนะนำสำหรับ Next.js)

1. **สมัครบัญชี Vercel** ที่ [vercel.com](https://vercel.com)
2. **Import project** จาก GitHub repository
3. **Configure environment variables** (ถ้ามี):
   - `DATABASE_URL` (สำหรับ production database)
   - `NEXTAUTH_URL` (สำหรับ authentication)
4. **Deploy** - Vercel จะ build และ deploy อัตโนมัติ

### 3. Deploy ด้วย GitHub Pages

สำหรับการ deploy แบบ static site:

1. **ติดตั้ง gh-pages**:
```bash
npm install gh-pages --save-dev
```

2. **เพิ่ม scripts ใน package.json**:
```json
{
  "scripts": {
    "export": "next build && next export",
    "deploy": "gh-pages -d out"
  }
}
```

3. **สร้าง `next.config.ts`**:
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

4. **Deploy**:
```bash
npm run export
npm run deploy
```

## 🎯 การใช้งานระบบ

### การเข้าสู่ระบบ
1. เข้าที่หน้า `/login`
2. กรอกข้อมูลผู้ใช้งาน (ระบบจำลองสำหรับ demo)
3. ระบบจะ redirect ไปยัง dashboard

### การใช้งานโมดูล
- **Dashboard**: ภาพรวมสถิติและการเข้าถึงโมดูลต่างๆ
- **Data Analysis**: อัพโหลดและวิเคราะห์หลักฐาน
- **Document Intelligence**: ประมวลผลเอกสารและสร้าง knowledge graph
- **Interrogation**: บันทึกเสียงการสอบสวนแบบ real-time
- **Case Management**: จัดการข้อมูลคดีและกำหนดการ
- **Predictive Policing**: วิเคราะห์ข้อมูลเพื่อทำนายอาชญากรรม

## 🤝 การมีส่วนร่วม

1. **Fork** โปรเจคนี้
2. **สร้าง feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** การเปลี่ยนแปลง (`git commit -m 'Add some AmazingFeature'`)
4. **Push** ไปยัง branch (`git push origin feature/AmazingFeature`)
5. **สร้าง Pull Request**

## 📄 ใบอนุญาต

โปรเจคนี้อยู่ภายใต้ใบอนุญาต MIT - ดูที่ไฟล์ [LICENSE](LICENSE) สำหรับรายละเอียด

## 🙏 ขอบคุณ

- **สถานีตำรวจนิคมพัฒนา** - สำหรับการสนับสนุนโปรเจค
- **ทีมพัฒนา** - สำหรับการทำงานหนักเพื่อสร้างระบบที่มีประโยชน์
- **ชุมชนโอเพนซอร์ส** - สำหรับไลบรารี่และเครื่องมือที่ยอดเยี่ยม

---

สร้างขึ้นด้วย ❤️ สำหรับชุมชนตำรวจและผู้บังคับใช้กฎหมาย 🕵️‍♂️

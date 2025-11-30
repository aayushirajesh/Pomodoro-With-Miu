# Pomodoro With Miu
A cute and minimal Pomodoro timer built with Electron, designed to help you stay focused with a calm, cozy aesthetic.

---

## Features
-  **25–5 Pomodoro cycle** (focus + break)
-  **Simple and intuitive UI** for clarity and ease of use
-  **Sound notifications**
-  **Distraction-free interface**
-  **Lightweight desktop application** built using Electron  
-  **Cross-platform codebase**, currently packaged for Windows
---

## 📸 Screenshots
<p align="center">
  <img src="https://github.com/user-attachments/assets/0c08342c-6b03-4ffb-abd5-06a904855bfe" width="32%" style="border-radius:10px;" />
  <img src="https://github.com/user-attachments/assets/bf97250b-9cde-46ef-afd1-7205ebbeb274" width="32%" style="border-radius:10px;" />
  <img src="https://github.com/user-attachments/assets/dc91402c-ca54-482a-bb01-cfe11235a1e9" width="32%" style="border-radius:10px;" />
</p>

---

## Figma Design
You can view my original UI design here: [**Figma Project**](https://www.figma.com/@aayushirajesh)

---

## Tech Stack
- **Electron** (for native desktop build)
- **JavaScript**
- **HTML / CSS**
- **Node.js**
- **Squirrel.Windows** for installer packaging

---

## Why I Built This
I wanted to create a small, cozy-looking productivity app with:
- a simple UI  
- cute visuals  
- practical Pomodoro timing  
- and a beginner-friendly desktop build flow using Electron  

---

## Installation

### **Windows (Installer)**
1. Download the latest `.exe` installer from the **Releases** page:  
   👉 https://github.com/aayushirajesh/Pomodoro-With-Miu/releases  
2. Run the installer  
3. Start focusing! 🍵

### ⚠️ SmartScreen Warning (Important)
Since this is a **portfolio project without a paid code-signing certificate**, Windows may show:

> **“Windows protected your PC”**

This is normal for unsigned apps.

Click:
**More info → Run anyway**

Everything is safe — this message appears only because the app is unsigned.


---

## Development Setup

```bash
# Clone the repo
git clone https://github.com/aayushirajesh/Pomodoro-With-Miu.git

cd Pomodoro-With-Miu

# Install dependencies
npm install

# Run in dev mode
npm start

# Build installer
npm run make

⚠️ Installer Warning  
Since this is a portfolio project and does not use a paid code-signing certificate, Windows may show a “Windows protected your PC” warning.  
Click “More info → Run anyway” to launch the app.

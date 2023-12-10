// script.js

// สร้างฟังก์ชันสำหรับสร้างสีสุ่ม
function generateRandomColor() {
  const letters = '0123456789ABCDEF' // สตริงของตัวอักษรและตัวเลขที่ใช้สร้างสี
  let color = '#' // สีเริ่มต้นด้วยเครื่องหมาย # เพื่อแทนสี HEX

  // สร้างสี HEX 6 ตัวอักษรสุ่ม
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }

  return color // ส่งคืนสีสุ่ม
}

// ฟังก์ชันเปลี่ยนสีพื้นหลังเป็นสีสุ่ม
function changeBackgroundColor() {
  const body = document.body
  const randomColor = generateRandomColor() // สร้างสีสุ่ม
  body.style.backgroundColor = randomColor // เปลี่ยนสีพื้นหลัง
}

// เชื่อมโยงฟังก์ชัน changeBackgroundColor กับลิงก์ "เปลี่ยนสีพื้นหลัง"
const colorLink = document.getElementById('color-link')
colorLink.addEventListener('click', changeBackgroundColor)

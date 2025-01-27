function showCont() {
    const acc = document.querySelector('.dropdown')
    acc.classList.toggle('drop-cont-show')
}


// let isArrowUp = false; // Trạng thái mặc định
// const droph = document.querySelector(".drop-header");

// droph.addEventListener("click", () => {
//   const dicon = document.getElementById("drop-icon");
//   if (dicon) {
//     const arrowUpPath =
//       '<path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/>';
//     const arrowDownPath =
//       '<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>';

//     dicon.innerHTML = isArrowUp ? arrowDownPath : arrowUpPath; // Chuyển đổi giữa 2 trạng thái
//     isArrowUp = !isArrowUp; // Đổi trạng thái
//   } else {
//     console.error("Phần tử với id='drop-icon' không tồn tại!");
//   }
// });



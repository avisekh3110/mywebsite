// import { useState, useEffect } from "react";

// function MouseTrail() {
//   const circles = document.querySelectorAll(".circle");
//   const [mousePoint, setMousePoint] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const mouseMove = (event: any) => {
//       setMousePoint({ x: event.clientX, y: event.clientY });
//     };

//     window.addEventListener("mousemove", mouseMove);
//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//     };
//   }, []);

//   function animateCircle() {
//     const x = mousePoint.x;
//     const y = mousePoint.y;

//     circles.forEach((circle) => {
//       circle.style.top = `${y - circle.style.height}px`;
//       circle.style.left = `${x - circle.style.height}px`;
//     });

//     requestAnimationFrame(animateCircle);
//   }

//   animateCircle();

//   return (
//     <div>
//       <div
//         className={`absolute circle w-10 h-10 ring-1 ring-white rounded-3xl`}
//       />
//       <div className={`absolute circle w-4 h-4 bg-white rounded-3xl`} />
//     </div>
//   );
// }

// export default MouseTrail;

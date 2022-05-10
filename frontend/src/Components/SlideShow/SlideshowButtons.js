export default function SlideshowButtons({ children }) {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, padding: "1rem", display: "flex", gap:"1rem"}}>
      {children}
    </div>
  );
}

import { ImageResponse } from "next/og";

export const alt = "Blog de Ing. Santiago Arreche sobre software, inteligencia artificial y decisiones técnicas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: "#f7f8fb",
        color: "#07152f",
        borderTop: "14px solid #0759bd",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ color: "#0759bd", fontSize: 22, fontWeight: 700, letterSpacing: 2.5 }}>BLOG · IDEAS CON CRITERIO</div>
        <div style={{ color: "#59667b", fontSize: 22 }}>sarreche.vercel.app</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ maxWidth: 980, fontSize: 68, fontWeight: 700, lineHeight: 1.06, letterSpacing: -2.5 }}>
          Software, IA y decisiones técnicas.
        </div>
        <div style={{ width: 94, height: 7, background: "#1684e7" }} />
        <div style={{ maxWidth: 900, color: "#42506a", fontSize: 29, lineHeight: 1.35 }}>
          Ideas para construir tecnología con más claridad, criterio y perspectiva.
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, fontWeight: 700 }}>
        <div
          style={{
            width: 42,
            height: 42,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            background: "#07152f",
            color: "white",
            fontSize: 18,
          }}
        >
          SA
        </div>
        Ing. Santiago Arreche
      </div>
    </div>,
    size,
  );
}

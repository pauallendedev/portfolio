import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pau Allende — Full-stack engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 20% 20%, #1a1a1a 0%, #0a0a0a 60%)",
          color: "#F5F4F0",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#9C9C97",
          }}
        >
          <span>· Portfolio · MMXXVI</span>
          <span>BCN</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 168,
              lineHeight: 0.92,
              letterSpacing: "-0.045em",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            <div>Pau</div>
            <div>
              Allende<span style={{ color: "#C8FF00" }}>.</span>
            </div>
          </div>
          <div
            style={{
              marginTop: 36,
              fontSize: 30,
              color: "#C8C8C2",
              maxWidth: 820,
            }}
          >
            Diseño y construyo productos web de principio a fin.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#9C9C97",
          }}
        >
          <span>Prepopos · Pàunia</span>
          <span style={{ color: "#C8FF00" }}>pauallende</span>
        </div>
      </div>
    ),
    size,
  );
}

import "server-only";

import { ImageResponse } from "next/og";
import type { BlogPost } from "./blog-types";
import type { Language } from "./types";

export const blogSocialImageSize = { width: 1200, height: 630 };

export function createBlogSocialImage(post: BlogPost, language: Language) {
  const label = language === "es" ? "BLOG · IDEAS CON CRITERIO" : "BLOG · IDEAS WITH JUDGMENT";
  const titleSize = post.title.length > 80 ? 46 : post.title.length > 64 ? 52 : 60;
  const descriptionSize = post.title.length > 80 ? 24 : 27;
  const description = post.description.length > 175
    ? `${post.description.slice(0, 172).trimEnd()}…`
    : post.description;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "54px 68px",
        background: "#f7f8fb",
        color: "#07152f",
        borderTop: "14px solid #0759bd",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexShrink: 0, alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ color: "#0759bd", fontSize: 22, fontWeight: 700, letterSpacing: 2.5 }}>{label}</div>
        <div style={{ color: "#59667b", fontSize: 22 }}>sarreche.vercel.app</div>
      </div>

      <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", gap: 18, padding: "24px 0" }}>
        <div style={{ fontSize: titleSize, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2.2 }}>{post.title}</div>
        <div style={{ width: 94, height: 7, background: "#1684e7" }} />
        <div style={{ maxWidth: 1000, color: "#42506a", fontSize: descriptionSize, lineHeight: 1.32 }}>{description}</div>
      </div>

      <div style={{ display: "flex", flexShrink: 0, alignItems: "center", gap: 16, fontSize: 24, fontWeight: 700 }}>
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
    blogSocialImageSize,
  );
}

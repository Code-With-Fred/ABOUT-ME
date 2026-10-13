// Links mentioned in my videos, shown on /links (newest first by date).
// To add a video, copy this shape to the top of the array:
//
//   {
//     id: "best-free-ai-tools",            // unique, lowercase, dashes
//     title: "5 free AI tools I use daily", // the video's title or hook
//     platform: "TikTok",
//     date: "2026-10-14",                   // YYYY-MM-DD
//     links: [
//       { label: "Lovable", url: "https://lovable.dev", note: "AI app builder" },
//     ],
//   },

export interface VideoLink {
  label: string
  url: string
  note?: string
}

export interface Video {
  id: string
  title: string
  platform: "TikTok" | "Instagram" | "YouTube" | "X" | "LinkedIn" | "Facebook"
  date: string
  links: VideoLink[]
}

export const videos: Video[] = []

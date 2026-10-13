import { useMemo, useState } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowUpRight, Search, PlayCircle, MessageCircle } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"
import ScrollToTop from "@/components/ScrollToTop"
import { Button } from "@/components/ui/button"
import { videos } from "@/data/videoLinks"
import { realProjects } from "@/components/sections/ProjectsSection"

const WHATSAPP_URL =
  "https://wa.me/2347041648121?text=Hi%20Fred%2C%20I%20saw%20your%20video%20and%20I%27d%20like%20a%20website."

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" })

const matches = (query: string, ...fields: (string | undefined)[]) =>
  fields.some((f) => f?.toLowerCase().includes(query))

const Links = () => {
  const [query, setQuery] = useState("")
  const q = query.trim().toLowerCase()

  const shownVideos = useMemo(() => {
    const sorted = [...videos].sort((a, b) => (a.date < b.date ? 1 : -1))
    if (!q) return sorted
    return sorted
      .map((v) =>
        matches(q, v.title, v.platform)
          ? v
          : { ...v, links: v.links.filter((l) => matches(q, l.label, l.note, l.url)) }
      )
      .filter((v) => v.links.length > 0)
  }, [q])

  const liveProjects = useMemo(
    () =>
      realProjects
        .filter((p) => p.liveUrl)
        .filter((p) => !q || matches(q, p.title, p.tag)),
    [q]
  )

  const nothingFound = q && shownVideos.length === 0 && liveProjects.length === 0

  return (
    <PageTransition>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>Links From My Videos | Code-With-Fred</title>
          <meta
            name="description"
            content="Every website, tool and project mentioned in Code-With-Fred videos, in one place. Search for the link you saw, newest videos first."
          />
          <link rel="canonical" href="https://codewithfred.com.ng/links" />
          <meta property="og:title" content="Links From My Videos | Code-With-Fred" />
          <meta property="og:description" content="Every link mentioned in my videos, in one place." />
          <meta property="og:url" content="https://codewithfred.com.ng/links" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://codewithfred.com.ng/my-profile.jpg" />
        </Helmet>

        <header role="banner">
          <Navigation />
        </header>

        <main id="main-content" role="main" className="pt-24 sm:pt-28 pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <img
                  src="/my-profile.jpg"
                  alt="Eze Favour"
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border border-border/50"
                />
                <h1 className="text-2xl sm:text-3xl font-bold font-display mb-2">Links from my videos</h1>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Saw something in a video? Every link I mention ends up here — newest first.
                </p>
              </div>

              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search a tool, site or video…"
                  aria-label="Search links"
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-border/50 bg-card/50 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {nothingFound && (
                <p className="text-center text-sm text-muted-foreground mb-8">
                  Nothing matches “{query}”. Can’t find it?{" "}
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Ask me on WhatsApp
                  </a>
                  .
                </p>
              )}

              <section aria-labelledby="videos-heading" className="mb-10">
                <h2 id="videos-heading" className="text-xs font-medium uppercase tracking-widest text-primary mb-4">
                  From my videos
                </h2>
                {videos.length === 0 ? (
                  <p className="text-sm text-muted-foreground p-5 rounded-xl border border-dashed border-border/50">
                    Links from new videos will show up here.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {shownVideos.map((v) => (
                      <article key={v.id} className="p-4 sm:p-5 rounded-xl border border-border/50 bg-card/50">
                        <div className="flex items-start gap-3 mb-3">
                          <PlayCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <div>
                            <h3 className="font-semibold font-display text-sm sm:text-base leading-snug">{v.title}</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {v.platform} · {formatDate(v.date)}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {v.links.map((l) => (
                            <li key={l.url}>
                              <a
                                href={l.url}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="flex items-center justify-between gap-3 min-h-[48px] px-4 py-2.5 rounded-lg border border-border/50 bg-background/50 hover:border-primary/40 transition-colors"
                              >
                                <span>
                                  <span className="block text-sm font-medium">{l.label}</span>
                                  {l.note && <span className="block text-xs text-muted-foreground">{l.note}</span>}
                                </span>
                                <ArrowUpRight className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                )}
              </section>

              {liveProjects.length > 0 && (
                <section aria-labelledby="projects-heading" className="mb-10">
                  <h2 id="projects-heading" className="text-xs font-medium uppercase tracking-widest text-primary mb-4">
                    Sites I built
                  </h2>
                  <ul className="space-y-2">
                    {liveProjects.map((p) => (
                      <li key={p.title}>
                        <a
                          href={p.liveUrl!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-3 min-h-[48px] px-4 py-2.5 rounded-lg border border-border/50 bg-card/50 hover:border-primary/40 transition-colors"
                        >
                          <span>
                            <span className="block text-sm font-medium">{p.title}</span>
                            <span className="block text-xs text-muted-foreground">{p.tag}</span>
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className="p-5 sm:p-6 rounded-2xl border border-primary/30 bg-primary/5 text-center">
                <h2 className="text-lg sm:text-xl font-bold font-display mb-2">Want a website like these?</h2>
                <p className="text-sm text-muted-foreground mb-5">
                  I build websites, online stores and web apps for businesses across Nigeria.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild className="h-12">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" aria-hidden="true" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="h-12">
                    <Link to="/projects">See my portfolio</Link>
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  )
}

export default Links

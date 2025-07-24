import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Code,
  Command,
  FileCode,
  Github,
  Globe,
  Keyboard,
  LayoutGrid,
  MessageSquare,
  Search,
  Server,
  Tag,
  Wifi,
  Zap,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex  items-center justify-between  w-full px-4 py-4">
          <div className="flex items-center gap-2 ">
            <FileCode className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-mono">Notes4Devs</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Blog
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <a href="#">Log in</a>
            </Button>
            <Button asChild className="">
              <Link to="/notes">Start for Free</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-mono">
                  Note Taking, For Developers
                </h1>
                <p className="max-w-[600px] text-center text-muted-foreground md:text-xl">
                  A keyboard-first, markdown-powered note-taking app with code
                  snippets, Git integration, and offline support.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link to="/notes">Start for Free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/notes">Login</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">
                  Built for Developer Workflows
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to organize your code, thoughts, and
                  projects in one place.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Code className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-mono">
                      Markdown & Code Blocks
                    </h3>
                    <p className="text-muted-foreground">
                      Write in Markdown with syntax-highlighted code blocks for
                      over 100 languages.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <LayoutGrid className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-mono">
                      Snippet Library
                    </h3>
                    <p className="text-muted-foreground">
                      Save and organize code snippets with tags, search, and
                      instant access.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Github className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-mono">
                      Git Integration
                    </h3>
                    <p className="text-muted-foreground">
                      a notes to GitHub/GitLab repos, issues, and pull requests.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <FileCode className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-mono">
                      Templating System
                    </h3>
                    <p className="text-muted-foreground">
                      Create reusable note structures for consistent
                      documentation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Wifi className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-mono">
                      Offline Support
                    </h3>
                    <p className="text-muted-foreground">
                      Work offline with automatic sync when you're back online.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Command className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-mono">
                      CLI & API Access
                    </h3>
                    <p className="text-muted-foreground">
                      Access your notes from the terminal or integrate with your
                      own tools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-mono">
                      Collaboration Tools
                    </h3>
                    <p className="text-muted-foreground">
                      Share notes with teammates with Git-style version control.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Keyboard className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-mono">
                      Keyboard-First UX
                    </h3>
                    <p className="text-muted-foreground">
                      Navigate and edit with keyboard shortcuts, including
                      optional Vim mode.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshot Preview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">
                  Designed for Developers
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A lightweight UI that stays out of your way, with powerful
                  features when you need them.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="rounded-xl border bg-muted/50 p-2 shadow-lg">
                <div className="rounded-lg bg-card">
                  <div className="flex items-center gap-2 border-b px-4 py-2">
                    <div className="flex gap-1">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-2 flex gap-1">
                      <div className="rounded bg-muted px-2 py-1 text-xs font-mono">
                        Notes
                      </div>
                      <div className="rounded bg-primary/10 text-primary px-2 py-1 text-xs font-mono">
                        Projects
                      </div>
                      <div className="rounded bg-muted px-2 py-1 text-xs font-mono">
                        Snippets
                      </div>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <Command className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="grid grid-cols-5">
                    <div className="col-span-1 border-r p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold font-mono">Projects</h3>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Command className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="rounded-md bg-primary/10 px-3 py-2 text-sm font-mono text-primary">
                          API Documentation
                        </div>
                        <div className="rounded-md px-3 py-2 text-sm font-mono text-muted-foreground">
                          Frontend Components
                        </div>
                        <div className="rounded-md px-3 py-2 text-sm font-mono text-muted-foreground">
                          Database Schema
                        </div>
                        <div className="rounded-md px-3 py-2 text-sm font-mono text-muted-foreground">
                          Deployment Notes
                        </div>
                      </div>
                    </div>
                    <div className="col-span-4 p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold font-mono">
                          API Documentation
                        </h3>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 gap-1 text-xs"
                          >
                            <Github className="h-3 w-3" />
                            <span>a to GitHub</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <Command className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4 space-y-4 font-mono">
                        <p className="text-lg font-bold text-primary">
                          # API Endpoints
                        </p>
                        <p className="text-sm">
                          The following endpoints are available in the REST API:
                        </p>
                        <div className="rounded bg-muted p-3 text-sm">
                          <p className="text-primary">## Authentication</p>
                          <p className="mt-2">POST /api/auth/login</p>
                          <p className="text-muted-foreground text-xs mt-1">
                            Authenticates a user and returns a JWT token
                          </p>
                          <p className="mt-2">POST /api/auth/register</p>
                          <p className="text-muted-foreground text-xs mt-1">
                            Creates a new user account
                          </p>
                        </div>
                        <div className="rounded bg-muted p-3 text-sm">
                          <p className="text-primary">## Users</p>
                          <p className="mt-2">GET /api/users</p>
                          <p className="text-muted-foreground text-xs mt-1">
                            Returns a list of all users
                          </p>
                          <p className="mt-2">GET /api/users/:id</p>
                          <p className="text-muted-foreground text-xs mt-1">
                            Returns a specific user by ID
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Tag className="h-3 w-3" />
                          <span>api</span>
                          <Tag className="h-3 w-3 ml-2" />
                          <span>documentation</span>
                          <Tag className="h-3 w-3 ml-2" />
                          <span>rest</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">
                  Loved by Developers
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what other developers are saying about Notes4Devs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">JS</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Jane Smith</h3>
                    <p className="text-sm text-muted-foreground">
                      Senior Frontend Developer
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "Notes4Devs has completely changed how I document my projects.
                  The code snippets and GitHub integration are game changers."
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">MJ</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Michael Johnson</h3>
                    <p className="text-sm text-muted-foreground">
                      Backend Engineer
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "The keyboard-first approach and Vim mode make Notes4Devs feel
                  like a natural extension of my development environment."
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">AL</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Alex Lee</h3>
                    <p className="text-sm text-muted-foreground">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  "I love how Notes4Devs syncs across all my devices and works
                  offline. Perfect for taking notes during client meetings."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start for free, upgrade when you need more power.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="rounded-lg border bg-card p-6 shadow-sm relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                  Popular
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold font-mono">Individual</h3>
                  <div className="mt-4 text-4xl font-bold">$0</div>
                  <p className="text-sm text-muted-foreground">Forever free</p>
                  <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited notes</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced Markdown support</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>Code snippets</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>Community support</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>Public notes</span>
                    </li>

                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited code snippets</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">
                    <Link to="/notes">Get Started</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold font-mono">Team</h3>
                  <div className="mt-4 text-4xl font-bold">$19</div>
                  <p className="text-sm text-muted-foreground">
                    per user/month
                  </p>
                  <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>Everything in Individual</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>Team collaboration</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced permissions</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>Version history</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>SSO & advanced security</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>Dedicated support</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full" variant="outline">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">
                  Ready to Upgrade Your Note-Taking?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of developers who have already made the switch.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link to="/notes">Start for Free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/notes">Login</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FileCode className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold font-mono">Notes4Devs</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A modern note-taking app built specifically for developers.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Website</span>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Server className="h-5 w-5" />
                  <span className="sr-only">API</span>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-mono">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-mono">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-mono">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Notes4Devs. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

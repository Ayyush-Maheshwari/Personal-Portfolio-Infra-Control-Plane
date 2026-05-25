import { Bell, Github, Linkedin, Mail, Phone, Server } from 'lucide-react'
import { useEffect, useState } from 'react'
import { contact } from '../data/portfolio'

export default function TopBar() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const timeStr = time.toISOString().replace('T', ' ').slice(0, 19) + ' UTC'

  return (
    <header className="flex h-12 shrink-0 items-center justify-between border-b border-panel-border bg-panel-light/80 px-4 backdrop-blur">
      {/* Left – brand */}
      <div className="flex items-center gap-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-blue/15 ring-1 ring-accent-blue/30">
          <Server size={14} className="text-accent-blue" />
        </div>
        <div className="leading-tight">
          <div className="text-[13px] font-semibold tracking-wide text-slate-100">
            Ayush-Portfolio<span className="text-accent-cyan">@datacenter</span>
          </div>
          <div className="mono text-[10px] uppercase tracking-[0.18em] text-muted">
            {contact.handle} · region: ap-south-1
          </div>
        </div>
      </div>

      {/* Right – contact actions */}
      <div className="flex items-center gap-1">
        <span className="mono mr-3 hidden text-[11px] text-muted md:inline">
          {timeStr}
        </span>
        <ActionBtn href={`mailto:${contact.email}`} label="Email" icon={<Mail size={14} />} />
        <ActionBtn href={`tel:${contact.phone}`} label="Phone" icon={<Phone size={14} />} />
        <ActionBtn href={contact.linkedin} label="LinkedIn" icon={<Linkedin size={14} />} external />
        <ActionBtn href={contact.github} label="GitHub" icon={<Github size={14} />} external />
        <button
          className="ml-2 flex h-7 w-7 items-center justify-center rounded-md text-muted hover:bg-panel hover:text-slate-200"
          title="Notifications"
        >
          <Bell size={14} />
        </button>
      </div>
    </header>
  )
}

function ActionBtn({
  href,
  label,
  icon,
  external,
}: {
  href: string
  label: string
  icon: React.ReactNode
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      title={label}
      className="flex h-7 items-center gap-1.5 rounded-md px-2 text-[12px] text-muted transition hover:bg-panel hover:text-slate-100"
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </a>
  )
}

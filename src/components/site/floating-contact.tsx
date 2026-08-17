import { MessageCircle } from "lucide-react";
import { company } from "@/lib/site-content";

export function FloatingContact() {
  const href = company.phoneRaw ? `https://wa.me/${company.phoneRaw}` : "#contact";

  return (
    <a
      href={href}
      target={company.phoneRaw ? "_blank" : undefined}
      rel="noreferrer"
      aria-label="Chat with us"
      className="group fixed bottom-5 right-5 z-50 flex h-14 items-center gap-0 overflow-hidden rounded-full bg-foreground pl-4 pr-4 text-primary-foreground shadow-[var(--shadow-lift)] transition-all duration-500 hover:bg-accent sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6 shrink-0" strokeWidth={1.2} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[0.7rem] uppercase tracking-[0.2em] transition-all duration-500 group-hover:ml-3 group-hover:max-w-[10rem]">
        Chat With Us
      </span>
    </a>
  );
}

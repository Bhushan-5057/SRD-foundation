"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { NAV_ITEMS, type NavItem } from "@/constants/navigation";

interface NavbarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [desktopOpenDropdown, setDesktopOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdowns, setMobileOpenDropdowns] = useState<Record<string, boolean>>({});
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setIsMenuOpen(false);
    setDesktopOpenDropdown(null);
    setMobileOpenDropdowns({});
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const linkClass = (href: string) => {
    if (href === "/donate") {
      return "rounded-full px-5 py-2 text-sm font-semibold text-white bg-[var(--brand-primary)] hover:opacity-90 transition shadow-sm";
    }

    return `rounded-full px-4 py-2 text-sm font-medium transition ${isActive(href)
        ? "bg-[var(--brand-primary)] text-white"
        : "text-[var(--text-primary)] hover:bg-[var(--surface-soft)]"
      }`;
  };

  const openDesktopMenu = (href: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setDesktopOpenDropdown(href);
  };

  const closeDesktopMenu = () => {
    closeTimerRef.current = setTimeout(() => {
      setDesktopOpenDropdown(null);
    }, 120);
  };

  const closeDesktopMenuImmediately = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setDesktopOpenDropdown(null);
  };

  const toggleMobileDropdown = (href: string) => {
    setMobileOpenDropdowns((prev) => ({
      ...prev,
      [href]: !prev[href],
    }));
  };

  const renderDesktopItem = (item: NavItem) => {
    const hasChildren = Boolean(item.children?.length);
    if (!hasChildren) {
      return (
        <Link key={item.href} href={item.href} className={linkClass(item.href)}>
          {item.label}
        </Link>
      );
    }

    const isDropdownOpen = desktopOpenDropdown === item.href;
    return (
      <div
        key={item.href}
        className="relative"
        onMouseEnter={() => openDesktopMenu(item.href)}
        onMouseLeave={closeDesktopMenu}
        onFocusCapture={() => openDesktopMenu(item.href)}
        onBlurCapture={(event) => {
          const nextTarget = event.relatedTarget as Node | null;
          if (!event.currentTarget.contains(nextTarget)) {
            closeDesktopMenu();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            closeDesktopMenuImmediately();
          }
        }}
      >
        <button
          type="button"
          aria-expanded={isDropdownOpen}
          aria-haspopup="menu"
          className={`${linkClass(item.href)} inline-flex items-center gap-1.5`}
        >
          {item.label}
          <FiChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
        </button>

        <div
          className={`absolute left-0 top-[calc(100%+10px)] w-[330px] rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-3 shadow-xl transition-all duration-200 ${isDropdownOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
            }`}
        >
          {item.href !== "/community" && (
            <>
              <Link
                href={item.href}
                className="mb-2 block rounded-xl px-3 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)]"
                onClick={closeDesktopMenuImmediately}
              >
                View All {item.label}
              </Link>
            </>
          )}
          <div className="mt-2 space-y-1">
            {item.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block rounded-xl px-3 py-2 text-sm text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)]"
                onClick={closeDesktopMenuImmediately}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderMobileItem = (item: NavItem) => {
    const hasChildren = Boolean(item.children?.length);
    if (!hasChildren) {
      return (
        <Link key={item.href} href={item.href} className={linkClass(item.href)}>
          {item.label}
        </Link>
      );
    }

    const isOpen = Boolean(mobileOpenDropdowns[item.href]);

    return (
      <div key={item.href} className="rounded-2xl p-2">
        <div className="flex items-center justify-between gap-2">
          <Link href={item.href} className={linkClass(item.href)}>
            {item.label}
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)]"
            aria-label={`Toggle ${item.label} menu`}
            aria-expanded={isOpen}
            onClick={() => toggleMobileDropdown(item.href)}
          >
            <FiChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        <div
          className={`overflow-hidden pl-2 transition-all duration-300 ${isOpen ? "max-h-96 pt-2 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block rounded-xl px-3 py-2 text-sm text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)]"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[var(--surface)]/95 backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="inline-flex items-center" aria-label="SRD Foundation Home">
            <Image
              src="/assets/srdlogo.png"
              alt="SRD Foundation logo"
              width={220}
              height={52}
              className="h-11 w-auto rounded-md object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
            <nav className="hidden items-center gap-1 md:flex">{NAV_ITEMS.map(renderDesktopItem)}</nav>

            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)] md:hidden"
              aria-label="Open menu"
            >
              <FiMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-[var(--border-color)] bg-[var(--surface)] p-5 shadow-2xl transition-transform duration-300 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">Menu</span>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)]"
            aria-label="Close menu"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">{NAV_ITEMS.map(renderMobileItem)}</nav>
      </aside>
    </>
  );
}

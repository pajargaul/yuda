import { Icon } from './Icon';
import { NAV_ITEMS } from '@/data/navigation';
import type { PageKey } from '@/data/navigation';

interface SidebarProps {
  current: PageKey;
  onNavigate: (page: PageKey) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export function Sidebar({ current, onNavigate, collapsed, onToggleCollapse, mobileOpen, onCloseMobile }: SidebarProps) {
  return (
    <>
      {mobileOpen && <div className="fixed inset-0 z-30 bg-gray-900/40 backdrop-blur-sm lg:hidden" onClick={onCloseMobile} />}
      <aside className={`
        fixed lg:sticky top-0 z-40 h-screen bg-brand-700 text-white flex flex-col
        transition-all duration-300 ease-in-out
        ${collapsed ? 'lg:w-[72px]' : 'lg:w-64'} w-64
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 h-16 border-b border-white/10 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0 ring-1 ring-white/20">
            <Icon name="GraduationCap" className="w-6 h-6 text-white" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <p className="font-bold text-sm leading-tight tracking-wide">SIPADU</p>
              <p className="text-[11px] text-white/60 leading-tight">SMA Negeri 1 Bandung</p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
          {NAV_ITEMS.map((item) => {
            const active = current === item.key;
            return (
              <button
                key={item.key}
                onClick={() => { onNavigate(item.key); onCloseMobile(); }}
                title={collapsed ? item.label : undefined}
                className={`
                  group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                  transition-all duration-150
                  ${active
                    ? 'bg-white text-brand-700 shadow-sm'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }
                  ${collapsed ? 'lg:justify-center' : ''}
                `}
              >
                <span className="shrink-0 relative">
                  <Icon name={item.icon} className="w-5 h-5" />
                  {item.badge && (
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-400 text-[10px] font-bold flex items-center justify-center text-brand-900">
                      {item.badge}
                    </span>
                  )}
                </span>
                {!collapsed && <span className="flex-1 text-left">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Collapse toggle */}
        <div className="hidden lg:block px-2 py-3 border-t border-white/10 shrink-0">
          <button
            onClick={onToggleCollapse}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/10 hover:text-white transition-colors"
          >
            <Icon name={collapsed ? 'ChevronRight' : 'ChevronLeft'} className="w-5 h-5 shrink-0" />
            {!collapsed && <span>Ciutkan menu</span>}
          </button>
        </div>
      </aside>
    </>
  );
}

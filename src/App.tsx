import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Topbar } from '@/components/Topbar';
import { LoginPage } from '@/pages/LoginPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { SiswaPage } from '@/pages/SiswaPage';
import { SuratPage } from '@/pages/SuratPage';
import { BuatSuratPage } from '@/pages/BuatSuratPage';
import { TemplatePage } from '@/pages/TemplatePage';
import { DisposisiPage } from '@/pages/DisposisiPage';
import { ArsipPage } from '@/pages/ArsipPage';
import type { PageKey } from '@/data/navigation';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [current, setCurrent] = useState<PageKey>('dashboard');
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!loggedIn) {
    return <LoginPage onLogin={() => setLoggedIn(true)} />;
  }

  const renderPage = () => {
    switch (current) {
      case 'dashboard': return <DashboardPage />;
      case 'siswa': return <SiswaPage />;
      case 'surat': return <SuratPage />;
      case 'buat-surat': return <BuatSuratPage />;
      case 'template': return <TemplatePage />;
      case 'disposisi': return <DisposisiPage />;
      case 'arsip': return <ArsipPage />;
      default: return <DashboardPage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        current={current}
        onNavigate={setCurrent}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar
          current={current}
          onToggleMobile={() => setMobileOpen(!mobileOpen)}
          onLogout={() => setLoggedIn(false)}
        />
        <main className="flex-1 p-4 lg:p-6 max-w-[1400px] w-full mx-auto animate-fade-in">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;

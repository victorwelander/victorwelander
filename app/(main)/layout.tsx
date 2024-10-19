import SiteFooter from "@/components/site-footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <div className="relative">
        <main className="flex-auto">{children}</main>
      </div>
      <SiteFooter />
    </>
  );
}

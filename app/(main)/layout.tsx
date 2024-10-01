import SiteFooter from "@/components/site-footer";
import SiteHeader from "./playground/page";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <SiteHeader />
      <div className="relative">
        <main className="flex-auto">{children}</main>
      </div>
      <SiteFooter />
    </>
  );
}

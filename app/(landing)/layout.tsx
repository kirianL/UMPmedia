import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScrollProvider>
      <div className="flex min-h-screen flex-col bg-[#f6f6f3] text-neutral-900 selection:bg-neutral-950 selection:text-white">
        <Header />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}


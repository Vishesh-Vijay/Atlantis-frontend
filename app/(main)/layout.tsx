import Navbar from "@/components/Home/Navbar";
import Dashboard from "@/components/Home/Dashboard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-between items-center">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full h-full flex justify-between items-center">
        <div className="w-1/4">
          <Dashboard />
        </div>
        <div className="w-3/4">{children}</div>
      </div>
    </div>
  );
}

/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { DesktopSidebar } from "./desktop-sidebar";
import { useAuth } from "hooks/auth";
import { PrimaryButton } from "./atoms/button";
export default function ApplicationLayout({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, signOut } = useAuth();
  if (!user) {
    window.location.replace("/");
  }
  return (
    <>
      <div>
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <DesktopSidebar />
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              Menu
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">
                    {title}
                  </h1>
                </div>
                <div>
                  <PrimaryButton link="/sessions/new">
                    New Session
                  </PrimaryButton>
                </div>
              </div>
              <div>
                <div className="my-4">
                  <hr />
                </div>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  <div className="h-96">{children}</div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

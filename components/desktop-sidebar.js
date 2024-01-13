import { useAuth } from "hooks/auth";
import { classNames } from "utils/tools";

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Team", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Calendar", href: "#" },
  { name: "Documents", href: "#" },
  { name: "Reports", href: "#" },
];
export function DesktopSidebar() {
  const { user, signOut } = useAuth();

  return (
    <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
            alt="Workflow"
          />
        </div>
        <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      <AuthenticatedUser user={user} signOut={signOut} />
    </div>
  );
}

function AuthenticatedUser({ user, signOut }) {
  return (
    <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
      <a href="#" className="flex-shrink-0 w-full group block">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-9 w-9 rounded-full"
              src={user.user_metadata.avatar_url}
              alt={user.id}
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              {user.user_metadata.name}
            </p>
            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
              <button onClick={signOut}>Sign out</button>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

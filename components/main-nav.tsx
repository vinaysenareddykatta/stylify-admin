"use client";

import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Link from "next/link";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeid}`,
      label: "Home",
      active: pathname == `/${params.storeid}`,
    },
    {
      href: `/${params.storeid}/billboards`,
      label: "Billboards",
      active: pathname == `/${params.storeid}/billboards`,
    },
    {
      href: `/${params.storeid}/categories`,
      label: "Categories",
      active: pathname == `/${params.storeid}/categories`,
    },
    {
      href: `/${params.storeid}/sizes`,
      label: "Sizes",
      active: pathname == `/${params.storeid}/sizes`,
    },
    {
      href: `/${params.storeid}/settings`,
      label: "Settings",
      active: pathname == `/${params.storeid}/settings`,
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => {
        return (
          <Link
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
            key={route.href}
            href={route.href}
          >
            {route.label}
          </Link>
        );
      })}
    </nav>
  );
}

import { DocsLayout } from "fumadocs-ui/layouts/docs";

import { GithubIcon } from "@/components/docs/icon";
import { SidebarItem, SidebarSeparator } from "@/components/docs/layouts/sidebar-items";
import { Logo } from "@/components/docs/logo";
import { ThemeToggle } from "@/components/docs/theme-toggle";
import { routes } from "@/lib/docs";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
    return (
        <DocsLayout
            nav={{
                title: <Logo />,
            }}
            containerProps={{
                className: "xl:[--fd-toc-width:200px] lg:[--fd-sidebar-width:256px] [--fd-page-width:1320px]",
            }}
            sidebar={{
                components: {
                    Item: SidebarItem,
                    Separator: SidebarSeparator,
                },
            }}
            themeSwitch={{
                component: (
                    <div className="ms-auto">
                        <ThemeToggle />
                    </div>
                ),
            }}
            links={[
                {
                    icon: <GithubIcon className="!size-5" />,
                    url: routes.external.github,
                    text: "Github",
                    type: "icon",
                },
            ]}
            tree={source.pageTree}>
            {children}
        </DocsLayout>
    );
}

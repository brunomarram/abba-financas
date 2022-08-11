import { Menu } from "antd"

import AnchorLink from "../components/base/AnchorLink"
import PageLink from "../components/home/PageLink"

const menu = <Menu
    items={[
        {
            key: '1',
            label: (
                <PageLink href="/profile" icon="user" testId="navbar-profile-desktop">
                    Meus dados
                </PageLink>
            ),
        },
        {
            key: '2',
            label: (
                <AnchorLink href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop">
                    Sair
                </AnchorLink>
            ),
        },
    ]}
/>

export default menu
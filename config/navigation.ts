export interface NavItem {
    id: string | number,
    title: string,
    href: string,
    description?: string,
    count?: number | string,
    isComminSoon?: boolean,
    isNew?: boolean,
    isLabel?: boolean,
}

export interface NavSection {
    title: string,
    items: NavItem[],
}

export const navigationSections: NavSection[] = [
    {
        title: 'Getting Started',
        items: [
            {
                id: 'intro',
                title: "Installation",
                href: '/docs',
                description: 'Introduction and usage of Ghost UI',
            }
        ]
    },
    {
        title: 'Components',
        items: [            
            {
                id: 1,
                title: 'AI-Input',
                href: '/docs/components/ai-input',
                description: 'Modern ai input component',
                count: 3,
            },
            {
                id: 2,
                title: 'Alert',
                href: '/docs/components/alert',
                description: 'Modern alert component',
                count: 3,
            },
            {
                id: 3,
                title: 'Button',
                href: '/docs/components/button',
                description: 'Modern button component',
                count: 2,
                isNew: true,
            }, 
        ]
    },
]
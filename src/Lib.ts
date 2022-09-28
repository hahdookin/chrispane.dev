export function randBetween(n1: number, n2: number): number {
    const lower = Math.min(n1, n2);
    const upper = Math.max(n1, n2);
    const diff = upper - lower;
    return Math.random() * diff + lower;
}

// Socials data used in LinksView
export const socials = {
    'github': 'https://github.com/hahdookin',
    'linkedin': 'https://www.linkedin.com/in/christopher-pane/',
    'twitter': 'https://twitter.com/chrispane_',
    'youtube': 'https://www.youtube.com/channel/UCkpkIHMJ2c3eTPzlzdC7E3A?app=desktop',
    'tiktok': 'https://www.tiktok.com/@chrispane100000',
};

// Contact data used in ContactView
export const contact = {
    'email': 'ChrisPaneCS@gmail.com',
    'discord': 'Chris pane#9774',
};

// Portfolio entries used in PortfolioView
export interface PortfolioEntry {
    title: string;
    desc: string;
    github: string;
    demo: string | null;
    technologies: string[];
}
const githubURL = 'https://github.com/hahdookin';
const baseURL = 'https://chrispane.dev';
export const portfolio: PortfolioEntry[] = [
    {
        title: 'miniterm.vim',
        desc: 'Vim9 terminal manager with toggle window and multiple terminal support',
        github: `${githubURL}/miniterm.vim`,
        demo: `${githubURL}/miniterm.vim/blob/main/README.md`,
        technologies: ['Vim9script']
    },
    {
        title: 'minifuzzy.vim',
        desc: 'Simple fuzzy-finder wrapper as a Vim9 plugin',
        github: `${githubURL}/minifuzzy.vim`,
        demo: `${githubURL}/minifuzzy.vim/blob/main/README.md`,
        technologies: ['Vim9script']
    },
    {
        title: 'JESS REPL',
        desc: 'Recursive descent parser and feature-rich REPL in the browser',
        github: `${githubURL}/hahdookin.github.io`,
        demo: `${baseURL}/jess`,
        technologies: ['JavaScript', 'HTML', 'CSS']
    },
    {
        title: 'gamesense.vim',
        desc: '(N)Vim plugin for asynchronous SteelSeries GameSense interaction',
        github: `${githubURL}/gamesense.vim`,
        demo: null,
        technologies: ['NodeJS', 'VimL']
    },
    {
        title: 'CG Museum',
        desc: 'First-person interactive computer graphics museum experience',
        github: `${githubURL}/CGMuseum`,
        demo: `${baseURL}/museum`,
        technologies: ['Godot', 'Blender', 'GDShader']
    },
    {
        title: 'chrispane.dev',
        desc: 'Deceptively simple and responsive portfolio SPA website',
        github: `${githubURL}/chirspane.dev`,
        demo: `${baseURL}`,
        technologies: ['Vue3', 'TypeScript', 'SCSS', 'Webpack']
    },
    {
        title: 'Exam Central',
        desc: 'Web app for creating, taking, and grading exams',
        github: `${githubURL}/cs490`,
        demo: 'http://exam-central.surge.sh',
        technologies: ['Vue 3', 'NodeJS', 'Go']
    },
    {
        title: 'Bruhbot',
        desc: 'Discord bot. My first programming project.',
        github: '',
        demo: null,
        technologies: ['Python', 'Discord API']
    },
    {
        title: 'Scrollsay',
        desc: 'Generates an ASCII art scroll with a message in the terminal',
        github: `${githubURL}/Scrollsay`,
        demo: null,
        technologies: ['C++']
    },
];

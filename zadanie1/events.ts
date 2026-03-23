export type Event = {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    category?: string;
    favorite?: boolean;
}

export const events = [
    {
        id: 1,
        title: 'Koncert rockowy',
        description: 'Zapraszamy na niezapomniany koncert rockowy z udziałem najlepszych zespołów!',
        date: '2026-07-15',
        location: 'Stadion Miejski, Warszawa',
        category: 'Muzyka'
    },
    {
        id: 2,
        title: 'Festiwal filmowy',
        description: 'Przyjdź na nasz festiwal filmowy i zobacz najnowsze produkcje z całego świata!',
        date: '2026-08-20',
        location: 'Kino Centrum, Kraków',
        category: 'Film'
    },
    {
        id: 3,
        title: 'Targi książki',
        description: 'Odwiedź nasze targi książki i spotkaj się z ulubionymi autorami!',
        date: '2026-09-10',
        location: 'Hala Expo, Poznań',
        category: 'Książki'
    },
    {
        id: 4,
        title: 'Maraton biegowy',
        description: 'Dołącz do naszego maratonu biegowego i sprawdź swoje siły na trasie!',
        date: '2026-10-05',
        location: 'Park Miejski, Wrocław',
        category: 'Sport'
    },
    {
        id: 5,
        title: 'Wystawa sztuki współczesnej',
        description: 'Zapraszamy na wystawę sztuki współczesnej, gdzie prezentowane będą dzieła najlepszych artystów!',
        date: '2026-11-12',
        location: 'Galeria Sztuki, Gdańsk',
        category: 'Sztuka'
    },
    {
        id: 6,
        title: 'Festiwal muzyki elektronicznej',
        description: 'Przyjdź na nasz festiwal muzyki elektronicznej i tańcz do białego rana!',
        date: '2026-12-01',
        location: 'Klub Muzyczny, Łódź',
        category: 'Muzyka'
    },
    {
        id: 7,
        title: 'Warsztaty kulinarne',
        description: 'Naucz się gotować z najlepszymi szefami kuchni podczas naszych warsztatów kulinarnych!',
        date: '2027-01-15',
        location: 'Szkoła Gotowania, Katowice',
        category: 'Kulinaria'
    },
    {
        id: 8,
        title: 'Konferencja technologiczna',
        description: 'Dołącz do naszej konferencji technologicznej i poznaj najnowsze trendy w branży IT!',
        date: '2027-02-20',
        location: 'Centrum Konferencyjne, Warszawa',
        category: 'Technologia'
    }
] as Event[];
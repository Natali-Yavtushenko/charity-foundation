

export type Project = {
  id: number;
  icon: React.ReactNode;
  title: string;
  number?: string;
  NumberText: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
};

export const projects = [
  {
    id: 1,
    icon: "/icons/Globe.svg",
    title: "Міжнародна інформаційна кампанія",
    number: "133 акцій закордоном вже проведено в понад 45 країнах світу. ",
    
    description:
     "Проєкт Voices of the Captives став голосом родин і самих полонених українців.Голос українських полонених на міжнародній арені. Ми спільно з партнерами проводимо акції в усьому світі, аби нагадувати про українських полонених, порушення Женевських конвенцій та бездіяльність міжнародних структур. Завдяки кампанії Voices of the Captives про кожного бранця дізнаються в дипломатичних колах, ООН, МКЧХ та іноземних медіа.",
    button: "Стати партнером",
  },
  {
    id: 2,
    icon: "/icons/HeartHandshake.svg",
    title: "Гуманітарна допомога",
    number: "166356 кг",
    description:
      "Передача гуманітарної допомоги військовим та цивільним.",
    button: "Передати речі",
  },
  {
    id: 3,
    icon: "/icons/Users.svg",
    title: "Підтримка родин",
    description:
      "Психологічна та юридична допомога родинам полонених та зниклих безвісти.",
    button: "Стати волонтером",
  },
];
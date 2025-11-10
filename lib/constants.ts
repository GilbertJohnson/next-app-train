export type EventItem = {
  title: string;
  slug: string;
  image: string;
  date: string;
  location: string;
  time: string;
};


export const events: EventItem[]= [
  {
    title: 'Next.js Conf',
    slug: 'next-js-conf',
    image: '/images/event1.png',
    date: 'December 10, 2025',
    location: 'San Francisco, CA',
    time: '9:00 AM PST',
  },
  {
    title: 'GraphQL Summit',
    slug: 'graphql-summit',
    image: '/images/event2.png',
    date: 'October 26-27, 2025',
    location: 'San Diego, CA',
    time: '10:00 AM PDT',
  },
  {
    title: 'React Rally',
    slug: 'react-rally',
    image: '/images/event3.png',
    date: 'August 15-16, 2026',
    location: 'Salt Lake City, UT',
    time: '8:30 AM MDT',
  },
  {
    title: 'VueConf US',
    slug: 'vueconf-us',
    image: '/images/event4.png',
    date: 'May 31 - June 2, 2026',
    location: 'Austin, TX',
    time: '9:30 AM CDT',
  },
  {
    title: 'NodeConf EU',
    slug: 'nodeconf-eu',
    image: '/images/event5.png',
    date: 'November 1-4, 2025',
    location: 'Kilkenny, Ireland',
    time: '10:00 AM GMT',
  },
  {
    title: 'DevOpsDays',
    slug: 'devopsdays',
    image: '/images/event6.png',
    date: 'September 18-19, 2025',
    location: 'Amsterdam, Netherlands',
    time: '9:00 AM CEST',
  },
];

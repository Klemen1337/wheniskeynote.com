// Apple’s events usually start at 10 am at Apple’s HQ in California
//  US: at 10am (PST/PDT), 11 am (MST/MDT), noon (CST/CDT), 1 pm (EST/EDT)
//  Canada: as above, and 2 pm (AST/ADT)
//  UK: at 6pm (GMT/BST)
//  Europe: at 7pm (CET/CEST)
//  India: at 10.30pm (IST)
//  Australia: next day at 1am (AWST/AWDT), 2.30am (ACST/ACDT), 3am (AEST/AEDT)
//  New Zealand: next day at 5 am (NZST/NZDT)

// Event details
const eventName = 'WWDC23';
const eventDate = new Date('2023-06-05T17:00:00.000Z'); // 2023.6.5 10:00 PDT
const eventLink = "https://developer.apple.com/wwdc23/";

// Past events
const pastEvents = [
  // 2022: No october event (iPad M2 and Apple TV 4K released)
  // 2022: WWDC June 6-10
  // 2022: Tuesday, March 8 (virtual event)
  { name: "Far out.", date: new Date('2022.9.7 10:00 PDT') },
  { name: "WWDC", date: new Date('2022.6.6 10:00 PDT') },
  { name: "", date: new Date('2022.3.8 10:00 PDT') },
  // 2021: Monday, October 18
  // 2021: WWDC June 7-11
  // 2021: Tuesday, April 20 (virtual event)
  { name: "", date: new Date('2021.9.18 10:00 PDT') },
  { name: "WWDC", date: new Date('2012.6.7 10:00 PDT') },
  { name: "", date: new Date('2021.4.20 10:00 PDT') },
  // 2020: Tuesday, October 12
  // 2020: WWDC June 22-26
  // 2020: No spring event due to COVID-19 lockdown, but iPhone SE launched on April 24
  { name: "", date: new Date('2020.9.12 10:00 PDT') },
  { name: "WWDC", date: new Date('2020.6.22 10:00 PDT') },
  // 2019: No october event
  // 2019: WWDC June 3-7
  // 2019: Monday, March 25
  { name: "WWDC", date: new Date('2019.6.3 10:00 PDT') },
  { name: "", date: new Date('2019.3.25 10:00 PDT') },
  // 2018: Tuesday, October 30
  // 2018: WWDC June 4-8
  // 2018: Tuesday, March 27
  { name: "", date: new Date('2018.9.30 10:00 PDT') },
  { name: "WWDC", date: new Date('2018.6.4 10:00 PDT') },
  { name: "", date: new Date('2018.3.27 10:00 PDT') },
  // 2017: No october event
  // 2017: WWDC June 5-9
  // 2017: No spring event
  { name: "WWDC", date: new Date('2017.6.5 10:00 PDT') },
  // 2016: Thursday, October 27
  // 2016: WWDC June 13-17
  // 2016: Monday, March 21
  { name: "", date: new Date('2016.9.27 10:00 PDT') },
  { name: "WWDC", date: new Date('2016.6.13 10:00 PDT') },
  { name: "", date: new Date('2016.3.21 10:00 PDT') },
  // 2015: No october event
  // 2015: WWDC June 8-12
  // 2015: Monday, March 9
  { name: "WWDC", date: new Date('2015.6.8 10:00 PDT') },
  { name: "", date: new Date('2015.3.9 10:00 PDT') },
  // 2014: Thursday, October 16
  // 2014: WWDC June 2-6
  // 2014: No spring event
  { name: "", date: new Date('2014.9.22 10:00 PDT') },
  { name: "WWDC", date: new Date('2014.6.2 10:00 PDT') },
  // 2013: Tuesday, October 22
  // 2013: WWDC June 10-14
  // 2013: No spring event
  { name: "", date: new Date('2013.9.22 10:00 PDT') },
  { name: "WWDC", date: new Date('2013.6.10 10:00 PDT') },
  // 2012: Tuesday, October 23
  // 2012: WWDC June 11-15
  { name: "", date: new Date('2012.9.23 10:00 PDT') },
  { name: "WWDC", date: new Date('2012.6.11 10:00 PDT') },
  // 2011: Tuesday, October 4
  { name: "", date: new Date('2011.9.4 10:00 PDT') }
];
// Apple’s events usually start at 10 am at Apple’s HQ in California
// US: at 10am (PST/PDT), 11 am (MST/MDT), noon (CST/CDT), 1 pm (EST/EDT)
// Canada: as above, and 2 pm (AST/ADT)
// UK: at 6pm (GMT/BST)
// Europe: at 7pm (CET/CEST)
// India: at 10.30pm (IST)
// Australia: next day at 1am (AWST/AWDT), 2.30am (ACST/ACDT), 3am (AEST/AEDT)
// New Zealand: next day at 5 am (NZST/NZDT)

var events = [
  // 2024
  {
    name: 'WWDC24',
    date: new Date('2024-06-10T17:00:00.000Z'), // 10 June 2024 at 19:00
    link: 'https://www.apple.com/apple-events/',
    class: "type-6",
    video: "animation-6.mp4",
    videoPoster: "animation-6.jpg",
    description: null
  },
  {
    name: 'Let loose',
    date: new Date('2024-05-07T14:00:00.000Z'), // 6 May 2024 at 16:00
    link: 'https://www.apple.com/apple-events/',
    class: "type-5",
    video: "animation-5.mp4",
    videoPoster: "animation-5-poster.jpg",
    description: "Introducing the unbelievably thin and portable iPad Pro with Apple M4 chip, the redesigned iPad Air in two sizes, and the all‑new Apple Pencil Pro."
  },
  // 2023: Apple Event October 30
  // 2023: Apple Event September 12
  // 2023: WWDC23 June 6
  { 
    name: "Apple Event", 
    date: new Date('2023-10-30T17:00:00.000Z'), 
    class: "type-4",
    video: "animation-4.mp4",
    videoPoster: "animation-4-poster.jpg",
    description: "Introducing the new MacBook Pro 14” and 16” and the new iMac. Now supercharged by the M3 family of chips."
  },
  { 
    name: "Wonderlust.", 
    date: new Date('2023-09-12T17:00:00.000Z'), 
    class: "type-3",
    video: "animation-3.mp4",
    videoPoster: "animation-3-poster.jpg",
    description: "Introducing iPhone 15 Pro, iPhone 15, Apple Watch Series 9, Apple Watch Ultra 2, and a major step toward making all our products carbon neutral by 2030."
},
  { 
    name: "WWDC23", 
    date: new Date('2023-06-05T17:00:00.000Z'),
    class: "type-2",
    video: "animation-2.mp4",
    videoPoster: "animation-2-poster.jpg", 
    description: "Introducing Apple Vision Pro and the era of spatial computing. The new 15‑inch MacBook Air with M2, Mac Studio with M2 Max and M2 Ultra, and Mac Pro with M2 Ultra. And previews of iOS 17, iPadOS 17, macOS Sonoma, and watchOS 10."
  },
  // 2022: No october event (iPad M2 and Apple TV 4K released)
  // 2022: WWDC June 6-10
  // 2022: Tuesday, March 8 (virtual event)
  {
    name: "Far out.", 
    date: new Date('2022-09-07T17:00:00.000Z'), 
    class: "type-1",
    video: "animation-1.mp4",
    videoPoster: "animation-1-poster.png",
    description: "Introducing an all-new iPhone lineup, rebuilt AirPods Pro, three new Apple Watch models, and an exciting update to Apple Fitness+."
  },
  { name: "WWDC22", date: new Date('2022-06-06T17:00:00.000Z'), description: "Introducing the new MacBook Air, 13‑inch MacBook Pro, iOS 16, iPadOS 16, macOS Ventura, and watchOS 9." },
  { name: "Apple Event", date: new Date('2022-03-08T17:00:00.000Z'), description: "Introducing the all-new Mac Studio and Studio Display, new iPad Air, new iPhone SE, and iPhone 13 and iPhone 13 Pro in two new shades of green." },
  // 2021: Monday, October 18
  // 2021: WWDC June 7-11
  // 2021: Tuesday, April 20 (virtual event)
  { name: "Apple Event", date: new Date('2021-09-18T17:00:00.000Z'), description: "Introducing the new MacBook Pro with M1 Pro or M1 Max, all-new AirPods, and HomePod mini in five bold colors." },
  { name: "WWDC21", date: new Date('2012-06-07T17:00:00.000Z'), description: "Introducing iOS 15, iPadOS 15, macOS Monterey, and watchOS 8." },
  { name: "Apple Event", date: new Date('2021-04-20T17:00:00.000Z') },
  // 2020: Tuesday, October 12
  // 2020: WWDC June 22-26
  // 2020: No spring event due to COVID-19 lockdown, but iPhone SE launched on April 24
  { name: "", date: new Date('2020-09-12T17:00:00.000Z') },
  { name: "WWDC20", date: new Date('2020-06-22T17:00:00.000Z') },
  // 2019: No october event
  // 2019: WWDC June 3-7
  // 2019: Monday, March 25
  { name: "WWDC19", date: new Date('2019-06-03T17:00:00.000Z') },
  { name: "", date: new Date('2019-03-25T17:00:00.000Z') },
  // 2018: Tuesday, October 30
  // 2018: WWDC June 4-8
  // 2018: Tuesday, March 27
  { name: "", date: new Date('2018-09-30T17:00:00.000Z') },
  { name: "WWDC18", date: new Date('2018-06-04T17:00:00.000Z') },
  { name: "", date: new Date('2018-03-27T17:00:00.000Z') },
  // 2017: No october event
  // 2017: WWDC June 5-9
  // 2017: No spring event
  { name: "WWDC17", date: new Date('2017-06-05T17:00:00.000Z') },
  // 2016: Thursday, October 27
  // 2016: WWDC June 13-17
  // 2016: Monday, March 21
  { name: "", date: new Date('2016-09-27T17:00:00.000Z') },
  { name: "WWDC16", date: new Date('2016-06-13T17:00:00.000Z') },
  { name: "", date: new Date('2016-03-21T17:00:00.000Z') },
  // 2015: No october event
  // 2015: WWDC June 8-12
  // 2015: Monday, March 9
  { name: "WWDC15", date: new Date('2015-06-08T17:00:00.000Z') },
  { name: "", date: new Date('2015-03-09T17:00:00.000Z') },
  // 2014: Thursday, October 16
  // 2014: WWDC June 2-6
  // 2014: No spring event
  { name: "", date: new Date('2014-09-22T17:00:00.000Z') },
  { name: "WWDC14", date: new Date('2014-06-02T17:00:00.000Z') },
  // 2013: Tuesday, October 22
  // 2013: WWDC June 10-14
  // 2013: No spring event
  { name: "", date: new Date('2013-09-22T17:00:00.000Z') },
  { name: "WWDC13", date: new Date('2013-06-10T17:00:00.000Z') },
  // 2012: Tuesday, October 23
  // 2012: WWDC June 11-15
  { name: "", date: new Date('2012-09-23T17:00:00.000Z') },
  { name: "WWDC12", date: new Date('2012-06-11T17:00:00.000Z') },
  // 2011: Tuesday, October 4
  { name: "", date: new Date('2011-09-04T17:00:00.000Z') }
];

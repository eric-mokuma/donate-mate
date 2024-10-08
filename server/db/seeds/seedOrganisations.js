export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('organisations').del()

  // Inserts seed entries
  await knex('organisations').insert([
    {
      id: 1,
      name: 'Hospice Cuba Street',
      contact_email: null,
      contact_number: '(04) 2138382',
      location: '264 Cuba Street, Te Aro, Wellington 6011',
      about: 'Providing essential services to the community.',
      longitude: 174.77358436727152,
      latitude: -41.2962414842559,
      org_types: 'Charity',
      image: '/images/MPHospiceCubaStreet.webp',
      volunteering_needed: true,
      donation_method:
        'Drop off donations in store, or contact for collection of large items',
      website: null,
    },
    {
      id: 2,
      name: 'Salvation Army Miramar',
      contact_email: 'miramar.corps@salvationarmy.org.nz',
      contact_number: '(04) 388 8284',
      location: '63 Miramar Avenue, Wellington',
      about: 'Supporting those in need.',
      longitude: 174.81568922499838,
      latitude: -41.31440487054093,
      org_types: 'Non-Profit',
      image: '/images/salvationArmyMiramar.webp',
      volunteering_needed: false,
      donation_method:
        'Drop into our shop during business hours or by request a pick up by our Family Store truck.',
      website: null,
    },
    {
      id: 3,
      name: 'Whiskers & Wonders',
      contact_email: 'donatemate4@gmail.com',
      contact_number: null,
      location: '2, Dixon street, Te Aro, Wellington',
      about:
        'Whiskers & Wonders is dedicated to improving the lives of pets across the globe with innovative, heartwarming solutions. Our programs focus on delivering high-quality toys, engaging activities, and educational resources to pet owners, ensuring that every furry friend can experience a life full of happiness and adventure.',
      longitude: 174.77817453708752,
      latitude: -41.29198238838735,
      org_types: 'Charity',
      image: '/images/Whiskers-and-Wonders.webp',
      volunteering_needed: true,
      donation_method:
        'Drop off pet food, supplies and toys during business hours. Mon-Fri: 9am -5pm',
      website: null,
    },
    {
      id: 4,
      name: 'St Vincent de Paul Aro Valley',
      contact_email: 'national@svdp.org.nz',
      contact_number: '(04) 3852561',
      location: '109 Aro Street, Aro Valley, Wellington 6021',
      about:
        'Helping people in need through various outreach and charity services.',
      longitude: 174.76602762493664,
      latitude: -41.293969062172415,
      org_types: 'Charity',
      image: '/images/svdpkilbirnie.webp',
      volunteering_needed: true,
      donation_method: 'Email',
      website: 'https://www.svdp.org.nz/',
    },
    {
      id: 5,
      name: 'The Koha Shed Wellington',
      contact_email: 'koha@missionsocialservices.org',
      contact_number: null,
      location:
        'Wellington City Mission Supermarket, 19 Gordon Pl, Newtown, Wellington',
      about:
        'A charitable initiative that collects and distributes goods for people in need.',
      longitude: 174.77953972499654,
      latitude: -41.31336798359798,
      org_types: 'Charity',
      image: '/images/koha.webp',
      volunteering_needed: true,
      donation_method:
        'Koha drop off in person between Tues 10 - 12 and Sunday 1 - 3pm.',
      website: 'https://www.wellingtoncitymission.org.nz/koha-shed',
    },
    {
      id: 6,
      name: 'Dress for Success Wellington',
      contact_email: 'wellington@dressforsuccess.org',
      contact_number: '04 499 4590',
      location: '29 Broderick Rd, Johnsonville, Wellington',
      about:
        'Helping women get back into the workforce by providing professional attire and development tools.',
      longitude: 174.8058243247209,
      latitude: -41.22358375598198,
      org_types: 'Charity',
      image: '/images/dress_for_success.webp',
      volunteering_needed: true,
      donation_method: 'Good quality and clean. Email to discuss.',
      website: 'https://wellington.dressforsuccess.org/',
    },
    {
      id: 7,
      name: 'Wellington SPCA',
      contact_email: null,
      contact_number: '04 389 8044',
      location: '140 Alexandra Rd, Newtown, Wellington',
      about:
        'Helping animals in need and promoting animal welfare in Wellington.',
      longitude: 174.78653153291356,
      latitude: -41.30541151053189,
      org_types: 'Animal Welfare',
      image: '/images/spca.webp',
      volunteering_needed: true,
      donation_method:
        'If you would like to donate any of these items, they can be dropped to your local SPCA Centre.',
      website: 'https://www.spca.nz/centre/wellington-centre',
    },
    {
      id: 8,
      name: 'Salvation Army Wellington',
      contact_email: 'enquiries@salvationarmy.org.nz',
      contact_number: '04 389 0594',
      location: '204 Cuba St, Te Aro, Wellington',
      about:
        'Providing community support and social services for those in need.',
      longitude: 174.7746181249357,
      latitude: -41.293855918566045,
      org_types: 'Charity',
      image: '/images/salvation-army.webp',
      volunteering_needed: true,
      donation_method: 'Email',
      website: 'https://www.salvationarmy.org.nz/centre/wellington-city',
    },
    {
      id: 9,
      name: 'Wellington City Mission',
      contact_email: null,
      contact_number: '04 245 0900',
      location: '19 Gordon Pl, Newtown, Wellington',
      about:
        'Providing assistance to individuals and families in need throughout Wellington.',
      longitude: 174.7796574556822,
      latitude: -41.313274814530494,
      org_types: 'Charity',
      image: '/images/wellington-city-mission.webp',
      volunteering_needed: true,
      donation_method: 'Phone',
      website: 'https://www.wellingtoncitymission.org.nz/',
    },
    {
      id: 10,
      name: 'Vinnies Wellington',
      contact_email: 'vinnies@stvincents.co.nz',
      contact_number: '04 389 7122',
      location: '207 Riddiford St, Newtown, Wellington',
      about:
        'Helping people in need through various outreach and charity services.',
      longitude: 174.78033939430998,
      latitude: -41.31361842348237,
      org_types: 'Charity',
      image: '/images/svdpkilbirnie.webp',
      volunteering_needed: true,
      donation_method: 'Email',
      website: 'https://www.vinnies-wellington.org.nz/',
    },
    {
      id: 11,
      name: "Wellington Women's Refuge",
      contact_email: null,
      contact_number: '04 473 6280',
      location: '44 Wigan Street, Te Aro, Wellington',
      about:
        'Supporting women and children in escaping domestic violence and offering safe housing and services.',
      longitude: 174.77469329425304,
      latitude: -41.29466257724995,
      org_types: 'Charity',
      image: '/images/womens-refuge.webp',
      volunteering_needed: false,
      donation_method: 'Phone',
      website: 'https://womensrefuge.org.nz/',
    },
    {
      id: 12,
      name: 'Newtown Community & Cultural Centre',
      contact_email: 'newtowncentre@paradise.net.nz',
      contact_number: '04 389 4786',
      location: 'Corner of Rintoul and Colombo St, Newtown, Wellington',
      about:
        'Providing community events, workshops, and support services for residents of Newtown.',
      longitude: 174.77848046361746,
      latitude: -41.3108180513813,
      org_types: 'Community Centre',
      image: '/images/newtown_ccc.webp',
      volunteering_needed: true,
      donation_method: 'Email',
      website: 'http://www.newtowncommunity.org.nz/',
    },
    {
      id: 13,
      name: 'Kaibosh Wellington',
      contact_email: 'info@kaibosh.org.nz',
      contact_number: '04 385 0825',
      location: '11 Hopper Street, Mount Cook, Wellington',
      about:
        'Wellington-based food rescue service, redistributing surplus food to people in need.',
      longitude: 174.77445429804712,
      latitude: -41.298422807847686,
      org_types: 'Charity',
      image: '/images/kaiboshNoStorefront.webp',
      volunteering_needed: true,
      donation_method: 'Email',
      website: 'https://www.kaibosh.org.nz/',
    },
    {
      id: 14,
      name: 'The Free Store',
      contact_email: 'freestore@wellington.org.nz',
      contact_number: '04 387 8087',
      location: '211 Willis St, Te Aro, Wellington',
      about:
        'Redistributing surplus food from local cafes and bakeries to people in need in Wellington.',
      longitude: 174.7732926249271,
      latitude: -41.29091358487596,
      org_types: 'Charity',
      image: '/images/thefreestore.webp',
      volunteering_needed: true,
      donation_method: 'Email',
      website: 'https://www.thefreestore.org.nz/',
    },
    {
      id: 15,
      name: 'Wellington Night Shelter',
      contact_email: null,
      contact_number: '04 385 9546',
      location: '304 Taranaki St, Mt Cook, Wellington',
      about:
        'Providing emergency and temporary housing for men in need in Wellington.',
      longitude: 174.773803463581,
      latitude: -41.299261039047,
      org_types: 'Charity',
      image: '/images/wellington-night-shelter.webp',
      volunteering_needed: true,
      donation_method: 'Phone',
      website: 'https://wellingtonnightshelter.org.nz/',
    },
    {
      id: 16,
      name: 'Soup Kitchen Wellington',
      contact_email: 'soupkitchen@compassion.org.nz',
      contact_number: '04 385 9299',
      location: '132 Tory St, Te Aro, Wellington',
      about:
        'Providing meals and support services to vulnerable members of the Wellington community.',
      longitude: 174.77922728631268,
      latitude: -41.29566265248769,
      org_types: 'Charity',
      image: '/images/theSoupKitchen.webp',
      volunteering_needed: true,
      donation_method: 'Email',
      website: 'https://soupkitchen.org.nz/',
    },
    {
      id: 17,
      name: 'Free Coffee for Coders Wellington',
      contact_email: 'donatemate4@gmail.com',
      contact_number: '04 300 500',
      location: '275 Cuba Street, Te Aro, Wellington',
      about:
        'Providing free coffee for hard-working students and facilitators, one cohort at a time',
      longitude: 174.77370483288354,
      latitude: -41.29536337721655,
      org_types: 'Community Centre',
      image: '/images/Coffee.webp',
      volunteering_needed: true,
      donation_method: 'Drop-in between 8.30am and 5pm!',
      website: 'https://devacademy.co.nz/',
    },
  ])
}

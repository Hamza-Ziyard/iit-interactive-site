export const buildings = [
  {
    id: 'library',
    name: 'GP Square',
    address: '10 Trelawney Pl, Colombo 00400',
    description: 'A multi-story library with study rooms and a quiet floor.',
    distanceKm: 1.2,
    tags: ['Computing'],
    lat: 6.89548301284881,
    lng: 79.85570575437366,
    icon: 'gp-square',
    mapIcon:'gp-square-2d',
    sections: [
      {
        key: 'parking',
        title: 'Ground Floor',
        subtitle: 'Basement parking area ',
        items: [
          { icon: 'BuildingIcon', label: 'Staff parking', description: 'Dedicated parking spaces for faculty and staff members with 24/7 access.' },
          { icon: 'BuildingIcon', label: 'Student parking', description: 'Student parking area with security monitoring and easy access to main entrance.' },
          { icon: 'BuildingIcon', label: 'Front Desk & Fingerprint Scanners', description: 'Student parking area with security monitoring and easy access to main entrance.' },
          { icon: 'BuildingIcon', label: 'Cafetaria', description: 'Student parking area with security monitoring and easy access to main entrance.' },
          { icon: 'BuildingIcon', label: 'Common Seating Area', description: 'Student parking area with security monitoring and easy access to main entrance.' },
        ],
      },
      {
        key: 'level1',
        title: 'Level 01',
        subtitle: 'HR, Classrooms, SRU,',
        items: [
          { icon: 'CoffeeIcon', label: 'HR Department', description: 'Modern cafeteria serving breakfast, lunch, and snacks with seating for 200+ students.' },
          { icon: 'UsersIcon', label: 'Student Relations Unit', description: 'Relaxation area with comfortable seating, games, and study spaces for students.' },
          { icon: 'BuildingIcon', label: 'Classrooms (1LA,1LB,1LC,1LD,1LE,1LF)', description: 'Information desk and administrative services for students and visitors.' },
          { icon: 'BuildingIcon', label: 'Manager - Center Operations)', description: 'Information desk and administrative services for students and visitors.' },

        ],
      },
      {
        key: 'level2',
        title: 'Level 02',
        subtitle: 'IT Department, Classrooms, Labs',
        items: [
          { icon: 'BuildingIcon', label: 'IT Department', description: 'Large capacity lecture hall with modern AV equipment and seating for 150 students.' },
          { icon: 'BuildingIcon', label: 'Computer labs', description: 'High-performance computing lab with 50 workstations and specialized software.' },
          { icon: 'BuildingIcon', label: 'Classrooms', description: 'Quiet study area with individual study carrels and group study tables.' },
        ],
      },
      {
        key: 'level3',
        title: 'Level 03',
        subtitle: 'Staff Room, Classrooms',
        items: [
          { icon: 'BuildingIcon', label: 'Staff Room', description: 'Medium capacity lecture hall with interactive whiteboard and flexible seating.' },
          { icon: 'BuildingIcon', label: 'Classrooms', description: 'Specialized lab for software development and programming courses.' },
          { icon: 'BuildingIcon', label: 'Common Seating Area', description: 'Advanced research facility with specialized equipment for faculty research.' },
        ],
      },
      {
        key: 'level4',
        title: 'Level 04',
        subtitle: 'Admin, Classrooms',
        items: [
          { icon: 'BuildingIcon', label: 'Admin Department', description: 'Smaller lecture hall for seminars and discussion-based classes.' },
          { icon: 'BuildingIcon', label: 'Classrooms', description: 'Computer networking laboratory with hands-on equipment and simulation tools.' },
        ],
      },
      {
        key: 'level5',
        title: 'Level 05',
        subtitle: 'Lecture halls, StaffRoom',
        items: [
          { icon: 'BuildingIcon', label: 'Lecture hall ', description: 'Conference-style lecture hall with presentation capabilities.' },
          { icon: 'BuildingIcon', label: 'Staff Room', description: 'Specialized laboratory for database management and data science courses.' },
          { icon: 'BuildingIcon', label: 'Common Seating Area', description: 'Small meeting rooms for group discussions and project work.' },
        ],
      },
      {
        key: 'level6',
        title: 'Level 06',
        subtitle: 'Board Room, Staff Room',
        items: [
          { icon: 'BuildingIcon', label: 'Board Meeting Room', description: 'Advanced lecture hall with cutting-edge technology and flexible layout.' },
          { icon: 'BuildingIcon', label: 'Dean & Associate Deans Office', description: 'State-of-the-art laboratory for artificial intelligence and machine learning research.' },
          { icon: 'BuildingIcon', label: 'Staff Seating Area', description: 'Large conference room for departmental meetings and presentations.' },
        ],
      },
      {
        key: 'level7',
        title: 'Level 07',
        subtitle: 'Lecture hall,',
        items: [
          { icon: 'BuildingIcon', label: 'Main Lecture hall ', description: 'Advanced lecture hall with cutting-edge technology and flexible layout.' },
        ],
      },
    ],
    floorImages: {
      parking: '../src/assets/img/gp-square/inner-parking.png',
      level1: '../src/assets/img/gp-square/inner-level1.png',
      level2: '../src/assets/img/gp-square/inner-level2.png',
      level3: '../src/assets/img/gp-square/inner-level3.png',
      level4: '../src/assets/img/gp-square/inner-level4.png',
      level5: '../src/assets/img/gp-square/inner-level5.png',
      level6: '../src/assets/img/gp-square/inner-level6.png',
      level7: '../src/assets/img/gp-square/inner-level7.png',
    },
    actions: ['Library quiz', 'Support', 'Lecturer list', 'Courses offered']
  },
  {
    id: 'science-hall',
    name: 'Java Building',
    address: '491 Galle Rd, Colombo 00300, Sri Lanka',
    description: 'Labs, lecture halls, and research centers for STEM programs.',
    distanceKm: 3.2,
    tags: ['Computing'],
    lat: 6.89563115660277,
    lng: 79.85683780161922,
    icon: 'java',
    mapIcon:'java-2d',
    sections: [
      {
        key: 'level1',
        title: '01st Floor',
        subtitle: 'Lecture Hall, Tutorial Rooms',
        items: [
          { icon: 'UsersIcon', label: 'Lecture Hall (1LA)', description: 'One-stop center for student registration, academic advising, and support services.' },
          { icon: 'BuildingIcon', label: 'Tutorial Rooms (1LB,1LC,1LD)', description: 'Welcome desk and information center for visitors and students.' },
        ],
      },
      {
        key: 'level2',
        title: '02nd Floor',
        subtitle: 'Lecture Hall, Tutorial Rooms, Academic Staff Room',
        items: [
          { icon: 'BuildingIcon', label: 'Lecture Hall (2LA)', description: 'Modern programming laboratory with 40 workstations and development tools.' },
          { icon: 'BuildingIcon', label: 'Tutorial Rooms (2LB,2LC)', description: 'Specialized lab for software development projects and team collaboration.' },
          { icon: 'BuildingIcon', label: 'Academic Staff Room', description: 'Large lecture hall with multimedia capabilities for computer science courses.' },
        ],
      },
      {
        key: 'level3',
        title: '03rd Floor',
        subtitle: 'Lecture Hall, Tutorial Rooms',
        items: [
            { icon: 'UsersIcon', label: 'Lecture Hall (3LA)', description: 'One-stop center for student registration, academic advising, and support services.' },
            { icon: 'BuildingIcon', label: 'Tutorial Rooms (3LB,3LC,3LD)', description: 'Welcome desk and information center for visitors and students.' },
        ],
      },
      {
        key: 'level4',
        title: '04th Floor',
        subtitle: 'Student Common Area',
        items: [
          { icon: 'BuildingIcon', label: 'AI research lab', description: 'Advanced artificial intelligence laboratory with high-performance computing resources.' },
        ],
      }
    ],
    floorImages: {
      level1: '../src/assets/img/java/inner-level1.png',
      level2: '../src/assets/img/java/inner-level2.png',
      level3: '../src/assets/img/java/inner-level3.png',
      level4: '../src/assets/img/java/inner-level4.png',
    },
    actions: ['Programming quiz', 'Lab support', 'Faculty list', 'CS courses']
  },
  {
    id: 'gymnasium',
    name: 'City Campus',
    address: 'Galle Rd, Colombo 00300, Sri Lanka',
    description: 'Indoor courts, a fitness center, and group classes.',
    distanceKm: 5.7,
    tags: ['Computing'],
    lat: 6.899888767022941,
    lng: 79.85352794017106,
    icon: 'spencer',
    mapIcon:'spencer-2d',
    sections: [
      {
        key: 'parking',
        title: 'Ground Floor',
        subtitle: 'Marketing, Finance, Registry Services, Professional Development Unit (PDU)',
        items: [
          { icon: 'BuildingIcon', label: 'Student parking', description: 'Convenient parking spaces for visitors and students.' },
          { icon: 'BuildingIcon', label: 'Marketing', description: 'Reserved parking for Spencer building staff and maintenance personnel.' },
          { icon: 'BuildingIcon', label: 'Registry', description: 'Reserved parking for Spencer building staff and maintenance personnel.' },
          { icon: 'BuildingIcon', label: 'Professional Development Unit (PDU)', description: 'Reserved parking for Spencer building staff and maintenance personnel.' },
        ],
      },
      {
        key: 'level1',
        title: 'Mezzanine 01 Floor',
        subtitle: 'Staff Room, Discipline Coordinator',
        items: [
          { icon: 'UsersIcon', label: 'Staff Common Area', description: 'Welcome desk and information center for Spencer building visitors.' },
          { icon: 'BuildingIcon', label: 'Senior Discipline Coordinator', description: 'Spacious lobby with seating and information displays about building facilities.' },        ],
      },
      {
        key: 'level2',
        title: 'Mezzanine 02 Floor',
        subtitle: 'Chief Operating Officer (COO), Professor Room 1&2, Boardroom, Academic Staff, Head of PDU',
        items: [
          { icon: 'BuildingIcon', label: 'Chief Operating Officer (COO)', description: 'Modern cardio equipment including treadmills, bikes, and elliptical machines.' },
          { icon: 'BuildingIcon', label: 'Professor Room 1&2', description: 'Comprehensive weight training facility with free weights and machines.' },
          { icon: 'UsersIcon', label: 'Boardroom', description: 'Multi-purpose studio for group fitness classes and personal training sessions.' },
          { icon: 'UsersIcon', label: 'Academic Staff', description: 'Multi-purpose studio for group fitness classes and personal training sessions.' },
          { icon: 'UsersIcon', label: 'Head of PDU', description: 'Multi-purpose studio for group fitness classes and personal training sessions.' },

        ],
      },
      {
        key: 'level3',
        title: 'Level 03',
        subtitle: 'Parking Facilities',
        items: [
          { icon: 'BuildingIcon', label: 'P1 Floor - Parking', description: 'Full-size basketball court with professional flooring and lighting.' },
          { icon: 'BuildingIcon', label: 'P2 Floor - Parking', description: 'Multiple badminton courts with proper netting and court markings.' },
          { icon: 'BuildingIcon', label: 'P3 Floor - Parking', description: 'Table tennis facility with multiple tables and equipment storage.' },
        ],
      },
      {
        key: 'level4',
        title: '01st Floor',
        subtitle: 'Library',
        items: [
          { icon: 'BuildingIcon', label: 'Library', description: 'Large conference room with presentation equipment and seating for 50 people.' },
        ],
      },
      {
        key: 'level5',
        title: '02nd Floor',
        subtitle: 'Examination Hall',
        items: [
          { icon: 'BuildingIcon', label: 'Examination Hall', description: 'Large auditorium with stage and seating for 300+ people for events and presentations.' },
        ],
      },
      {
        key: 'level6',
        title: '03rd Floor',
        subtitle: 'Lecture Halls, Tutorial Rooms, PDU',
        items: [
          { icon: 'BuildingIcon', label: 'Lecture Hall (3LA)', description: 'Large auditorium with stage and seating for 300+ people for events and presentations.' },
          { icon: 'BuildingIcon', label: 'Tutorial Rooms (3LB, 3LC, 3LD)', description: 'Flexible exhibition space for displays, fairs, and special events.' },
          { icon: 'BuildingIcon', label: 'Professional Development Unit (Backend)', description: 'Storage facilities for event equipment and building maintenance supplies.' },
        ],
      },
      {
        key: 'level7',
        title: '04th Floor',
        subtitle: 'Lecture Halls, Tutorial Rooms, SRU',
        items: [
            { icon: 'BuildingIcon', label: 'Lecture Hall (4LA)', description: 'Large auditorium with stage and seating for 300+ people for events and presentations.' },
            { icon: 'BuildingIcon', label: 'Tutorial Rooms (4LB, 4LC, 4LD)', description: 'Flexible exhibition space for displays, fairs, and special events.' },
            { icon: 'BuildingIcon', label: 'Student Relations Unit', description: 'Storage facilities for event equipment and building maintenance supplies.' },
        ],
      },
      {
        key: 'level8',
        title: '05th Floor',
        subtitle: 'IT Department, Manager Center Operations, Lecture Hall, Tutorial Rooms',
        items: [
          { icon: 'BuildingIcon', label: 'IT Department', description: 'Large auditorium with stage and seating for 300+ people for events and presentations.' },
          { icon: 'BuildingIcon', label: 'Lecture Hall (5LA)', description: 'Flexible exhibition space for displays, fairs, and special events.' },
          { icon: 'BuildingIcon', label: 'Tutorial Rooms (5LB, 5LC, 5LD)', description: 'Storage facilities for event equipment and building maintenance supplies.' },
          { icon: 'BuildingIcon', label: 'Manager Center Operations', description: 'Storage facilities for event equipment and building maintenance supplies.' },

        ],
      },
      {
        key: 'level9',
        title: '06th Floor',
        subtitle: 'Lecture Halls, Tutorial Rooms, Registry (Backend)',
        items: [
          { icon: 'BuildingIcon', label: 'Lecture Halls (6LA)', description: 'Large auditorium with stage and seating for 300+ people for events and presentations.' },
          { icon: 'BuildingIcon', label: 'Tutorial Rooms (6LB, 6LC, 6LD)', description: 'Flexible exhibition space for displays, fairs, and special events.' },
          { icon: 'BuildingIcon', label: 'Registry (Backend)', description: 'Storage facilities for event equipment and building maintenance supplies.' },
        ],
      },
      {
        key: 'level10',
        title: '07th Floor',
        subtitle: 'Academy for Teaching & Learning Effectiveness (ATLE)',
        items: [
          { icon: 'BuildingIcon', label: 'Academy for Teaching & Learning Effectiveness (ATLE)', description: 'Large auditorium with stage and seating for 300+ people for events and presentations.' },
          { icon: 'BuildingIcon', label: 'Lecture Hall (7LA)', description: 'Flexible exhibition space for displays, fairs, and special events.' },
          { icon: 'BuildingIcon', label: 'Tutorial Rooms (7LB, 7LC, 7LD)', description: 'Storage facilities for event equipment and building maintenance supplies.' },
        ],
      },
      {
        key: 'level11',
        title: '08th Floor',
        subtitle: 'Cafateria',
        items: [
          { icon: 'BuildingIcon', label: 'Cafateria', description: 'Large auditorium with stage and seating for 300+ people for events and presentations.' },
        ],
      },
    ],
    floorImages: {
      parking: '../src/assets/img/spencer/inner-level1.png',
      level1: '../src/assets/img/spencer/inner-level2.png',
      level2: '../src/assets/img/spencer/inner-level3.png',
      level3: '../src/assets/img/spencer/inner-level4.png',
      level4: '../src/assets/img/spencer/inner-level5.png',
      level5: '../src/assets/img/spencer/inner-level6.png',
      level6: '../src/assets/img/spencer/inner-level7.png',
      level7: '../src/assets/img/spencer/inner-level8.png',
      level8: '../src/assets/img/spencer/inner-level9.png',
      level9: '../src/assets/img/spencer/inner-level10.png',
      level10: '../src/assets/img/spencer/inner-level11.png',
      level11: '../src/assets/img/spencer/inner-level12.png',
    },
    actions: ['Fitness classes', 'Equipment booking', 'Staff contact', 'Event schedule']
  },
  {
    id: 'ramakrishna',
    name: 'Foundation Building',
    address: '57 Ramakrishna Rd, Colombo 00600',
    description: 'Indoor courts, a fitness center, and group classes.',
    distanceKm: 5.7,
    tags: ['Computing'],
    lat: 6.865601702224416,
    lng: 79.8599577850563,
    icon: 'ramakrishna',
    mapIcon:'ramakrishna-2d',
    sections: [
    ],
    floorImages: {
    }
  },
  {
    id: 'dialog',
    name: 'Dialog Building',
    address: '524 R. A. De Mel Mawatha, Colombo',
    description: 'Indoor courts, a fitness center, and group classes.',
    distanceKm: 5.7,
    tags: ['Computing'],
    lat: 6.898307896386885,
    lng: 79.85593226315967,
    icon: 'dialog',
    mapIcon:'dialog-2d',
    sections: [
    ],
    floorImages: {
    }
  },
  {
    id: 'kurunegala',
    name: 'Regional Centre Kurunegala ',
    address: '109 Bauddhaloka Mawatha, Kurunegala',
    description: 'Indoor courts, a fitness center, and group classes.',
    distanceKm: 5.7,
    tags: ['Computing'],
    lat: 7.4837418662152775,
    lng: 80.35548065622528,
    icon: 'kurunegala',
    mapIcon:'kurunegala-2d',
    sections: [
    ],
    floorImages: {
    }
  },
  {
    id: 'galle',
    name: 'Regional Centre Galle',
    address: '36A Colombo Rd, Galle 80000',
    description: 'Indoor courts, a fitness center, and group classes.',
    distanceKm: 5.7,
    tags: ['Computing'],
    lat: 6.034947012135622,
    lng: 80.211647327380,
    icon: 'galle',
    mapIcon:'galle-2d',
    sections: [
    ],
    floorImages: {
    }
  },
  
]
  

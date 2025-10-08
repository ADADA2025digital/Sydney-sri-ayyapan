import Img1 from "../assets/Images/01.png";
import Img2 from "../assets/Images/02.png";
import Img3 from "../assets/Images/03.png";
import Img4 from "../assets/Images/04.png";
import Img5 from "../assets/Images/05.png";
import Img6 from "../assets/Images/06.png";
import Service1 from "../assets/Images/Daily Poojas and Rituals.png";
import Service2 from "../assets/Images/Educational Programs.png";
import Service3 from "../assets/Images/Special Sevas and Offerings.png";

// Pooja Images Array
export const poojaImages = [Img1, Img2, Img3, Img4, Img5, Img6];

// Special Poojas Data
export const poojas = [
  {
    image: Service1,
    title: "Lord Shivalingam",
    schedule: "Every Prathosam",
  },
  {
    image: Service2,
    title: "Nagarajaswamy",
    schedule: "Every Panjamy",
  },
  {
    image: Service3,
    title: "Anjaneyar Swamy",
    schedule: "Every Moolam",
  },
];

// Event Images Array
export const eventImages = [Service1, Service2, Service3];

// Visual Journey Images Array
export const images = [Img1, Img2, Img3, Img4, Img5, Img6];

// Upcoming Events Data
export const events = [
  {
    title: "Pournami",
    subtitle: "Manja Matha",
    date: "April 23rd",
  },
  {
    title: "Sanhadahara Chadurthy",
    subtitle: "Ganapathy",
    date: "April 27th",
  },
  {
    title: "Moolam",
    subtitle: "Anjaneyar",
    date: "April 28th",
  },
  {
    title: "Pradosam",
    subtitle: "Lord Shiva",
    date: "May 06th and 21st",
  },
  {
    title: "Amavasai",
    subtitle: "Karuppanna Swami",
    date: "May 8th",
  },
  {
    title: "Panjami",
    subtitle: "Manja Matha",
    date: "May 12th",
  },
  {
    title: "Sashti",
    subtitle: "Murugan",
    date: "May 18th",
  },
  {
    title: "Thiruvonam",
    subtitle: "Vishnu",
    date: "May 24th",
  },
];

// Temple Services Data
export const servicesData = [
  {
    id: "daily-poojas",
    image: Service1,
    title: "Daily Poojas and Rituals",
    description:
      "Daily schedule of poojas, including morning, afternoon, and evening rituals.",
    pageTitle: "Daily Poojas and Rituals",
    breadcrumb: {
      home: "Home",
      current: "Daily Poojas",
    },
    mainHeading: "Sacred Daily Rituals",
    description1:
      "Our temple maintains a strict schedule of daily poojas and rituals that have been passed down through generations. These sacred ceremonies are performed with utmost devotion and precision to maintain the spiritual energy of the temple and provide devotees with opportunities for daily worship and spiritual connection.",
    description2:
      "Each ritual is conducted according to ancient Vedic traditions, ensuring that the divine presence remains strong within our temple walls. Our experienced priests perform these ceremonies with deep devotion, creating an atmosphere of peace and spiritual elevation for all who visit.",
    scheduleTitle: "Daily Pooja Schedule",
    morning: {
      title: "MORNING RITUALS",
      time: "5:30 AM - 11:00 AM",
      activities:
        "Since our establishment, the Sydney Sri Ayyappa Swami Centre has been dedicated to preserving and promoting the ancient spiritual traditions of India while adapting them to the modern Australian context. Our temple serves as a bridge between cultures, bringing together people from diverse backgrounds in the shared pursuit of spiritual growth and divine connection.a",
    },
    afternoon: {
      title: "AFTERNOON RITUALS",
      time: "12:00 PM - 2:00 PM",
      activities:
        "We believe that spirituality transcends all boundaries and that the divine presence can be felt by anyone who approaches with an open heart and sincere devotion. Our daily rituals, special ceremonies, and community events are designed to create an environment where spiritual seekers can find solace, guidance, and inspiration on their journey toward enlightenment.",
    },
    evening: {
      title: "EVENING RITUALS",
      time: "5:30 PM - 8:00 PM",
      activities:
        "We believe that spirituality transcends all boundaries and that the divine presence can be felt by anyone who approaches with an open heart and sincere devotion. Our daily rituals, special ceremonies, and community events are designed to create an environment where spiritual seekers can find solace, guidance, and inspiration on their journey toward enlightenment.",
    },
  },
  {
    id: "educational-programs",
    image: Service2,
    title: "Educational Programs",
    description:
      "Information about spiritual workshops, yoga classes, meditation sessions.",
    pageTitle: "Educational Programs",
    breadcrumb: {
      home: "Home",
      current: "Educational Programs",
    },
    mainHeading: "Spiritual Learning and Growth",
    description1:
      "Our temple offers comprehensive educational programs designed to help devotees deepen their spiritual understanding and practice. These programs combine traditional Vedic knowledge with modern teaching methods to make ancient wisdom accessible to everyone, regardless of their background or experience level.",
    description2:
      "Through structured courses, workshops, and regular sessions, participants learn about Hindu philosophy, sacred texts, meditation techniques, and practical spiritual practices. Our experienced teachers and spiritual guides ensure that each program is both informative and transformative.",
    scheduleTitle: "Program Schedule",
    workshops: {
      title: "SPIRITUAL WORKSHOPS",
      time: "Every Saturday",
      activities:
        "We believe that spirituality transcends all boundaries and that the divine presence can be felt by anyone who approaches with an open heart and sincere devotion. Our daily rituals, special ceremonies, and community events are designed to create an environment where spiritual seekers can find solace, guidance, and inspiration on their journey toward enlightenment.",
    },
    yoga: {
      title: "YOGA & MEDITATION",
      time: "Every Sunday",
      activities:
        "We believe that spirituality transcends all boundaries and that the divine presence can be felt by anyone who approaches with an open heart and sincere devotion. Our daily rituals, special ceremonies, and community events are designed to create an environment where spiritual seekers can find solace, guidance, and inspiration on their journey toward enlightenment.",
    },
    study: {
      title: "STUDY GROUPS",
      time: "Weekday Evenings",
      activities:
        "We believe that spirituality transcends all boundaries and that the divine presence can be felt by anyone who approaches with an open heart and sincere devotion. Our daily rituals, special ceremonies, and community events are designed to create an environment where spiritual seekers can find solace, guidance, and inspiration on their journey toward enlightenment.",
    },
  },
  {
    id: "special-sevas",
    image: Service3,
    title: "Special Sevas and Offerings",
    description:
      "A list of special sevas that devotees can perform, such as Abhishekam, Archana, and Annadanam.",
    pageTitle: "Special Sevas and Offerings",
    breadcrumb: {
      home: "Home",
      current: "Special Sevas",
    },
    mainHeading: "Divine Sevas for Spiritual Fulfillment",
    description1:
      "Special sevas are sacred ceremonies that devotees can perform to seek divine blessings, fulfill their wishes, or express gratitude to the divine. These powerful rituals create a direct connection between the devotee and the deity, allowing for deep spiritual experiences and the fulfillment of sincere prayers.",
    description2:
      "Each seva is performed with specific mantras, offerings, and procedures that have been preserved through centuries. Our temple priests are highly trained in performing these ceremonies with the utmost devotion and precision, ensuring that devotees receive the maximum spiritual benefit from their participation.",
    scheduleTitle: "Available Sevas",
    abhishekam: {
      title: "ABHISHEKAM",
      time: "Daily at Sunrise",
      activities:
        "We believe that spirituality transcends all boundaries and that the divine presence can be felt by anyone who approaches with an open heart and sincere devotion. Our daily rituals, special ceremonies, and community events are designed to create an environment where spiritual seekers can find solace, guidance, and inspiration on their journey toward enlightenment.",
    },
    archana: {
      title: "ARCHANA",
      time: "Throughout the Day",
      activities:
        "We believe that spirituality transcends all boundaries and that the divine presence can be felt by anyone who approaches with an open heart and sincere devotion. Our daily rituals, special ceremonies, and community events are designed to create an environment where spiritual seekers can find solace, guidance, and inspiration on their journey toward enlightenment.",
    },
    annadanam: {
      title: "ANNADANAM",
      time: "Daily Afternoon",
      activities: "Food Offering to Deity, Distribution to Devotees",
    },
  },
];

// Hero Section Content
export const heroContent = {
  title: "Swami Saranam Ayyappa",
  description:
    "Swamiye Saranam Ayyappa. Priest doing beautiful poojai. Every Saturday evening Ayyappa bhajan. November 16th Ayyappa Viradha Kalam starting.",
};

// About Section Content
export const aboutContent = {
  title: "ABOUT US",
  heading: "Sydney Sri Ayyappa Swami Centre",
  description:
    "Swamiye Saranam Ayyappa. Priest doing beautiful poojai. Every Saturday evening Ayyappa bhajan. November 16th Ayyappa Viradha Kalam starting. All welcome to our Ayyappa temple and get blessings.",
  scheduleTitle: "Operating Hours",
  weekdays: {
    title: "WEEK DAYS",
    morning: "7:30 AM - 11:00 AM",
    evening: "5:30 PM - 8:00 PM",
  },
  weekends: {
    title: "WEEKENDS",
    morning: "8:00 AM - 12:00 PM",
    evening: "4:00 PM - 7:00 PM",
  },
};

// Special Poojas Section Content
export const specialPoojasContent = {
  subtitle: "Special Poojas",
  title: "Sacred Poojas for Divine Grace",
  description1:
    "Special poojas are conducted at the Ayyappan Temple to honor the divine and seek blessings for various aspects of life.",
  description2:
    "These rituals are designed to invoke positive energies, promote spiritual growth, and provide devotees with a deeper connection to Lord Ayyappan. Here are some of the special poojas offered.",
};

// Upcoming Events Section Content
export const upcomingEventsContent = {
  subtitle: "Upcoming Events",
  title: "Discover Upcoming Temple Events Today",
};

// Visual Journey Section Content
export const visualJourneyContent = {
  subtitle: "Visual Journey",
  title: "Ayyappan Swamy Temple Experiences",
};

// Default Carousel Settings
export const carouselSettings = {
  defaultInterval: 3000,
  carouselSpeed: 2000,
};

// Event Page Data
export const eventPageData = {
  pageTitle: "Events",
  breadcrumb: {
    home: "Home",
    current: "Events",
  },
  mainHeading: "Discover Upcomming Events",
  details: {
    eventHeading: "Temple Anniversary Celebration",
    venue: "Sydney Sri Ayyappa Swami Centre, NSW",
    time: "6:00 PM",
    date: "Nov 16, 2025",
  },
  content: {
    paragraph1:
      "The Sydney Sri Ayyappa Swami Centre stands as a beacon of spiritual light in the heart of Australia. Founded with the divine blessings of Lord Ayyappa, our temple serves as a sacred space where devotees",
    paragraph2:
      "Our temple community is built on the principles of love, compassion, and service. We welcome devotees from all walks of life, offering them a sanctuary where they can participate in daily prayers,",
  },
};

// AboutUs Page Data
export const aboutUsPageData = {
  pageTitle: "About Us",
  breadcrumb: {
    home: "Home",
    current: "About Us",
  },
  mainHeading: "Our Sacred Journey",
  description1:
    "The Sydney Sri Ayyappa Swami Centre stands as a beacon of spiritual light in the heart of Australia. Founded with the divine blessings of Lord Ayyappa, our temple serves as a sacred space where devotees can connect with the divine and experience the profound peace that comes from spiritual devotion.",
  description2:
    "Our temple community is built on the principles of love, compassion, and service. We welcome devotees from all walks of life, offering them a sanctuary where they can participate in daily prayers, special ceremonies, and spiritual practices that nurture the soul and strengthen the connection with the divine.",
  legacyTitle: "A Legacy of Spiritual Excellence",
  legacyParagraph1:
    "Since our establishment, the Sydney Sri Ayyappa Swami Centre has been dedicated to preserving and promoting the ancient spiritual traditions of India while adapting them to the modern Australian context. Our temple serves as a bridge between cultures, bringing together people from diverse backgrounds in the shared pursuit of spiritual growth and divine connection.",
  legacyParagraph2:
    "We believe that spirituality transcends all boundaries and that the divine presence can be felt by anyone who approaches with an open heart and sincere devotion. Our daily rituals, special ceremonies, and community events are designed to create an environment where spiritual seekers can find solace, guidance, and inspiration on their journey toward enlightenment.",
  legacyParagraph3:
    "As we continue to grow and serve our community, we remain committed to the core values that have guided us from the beginning: devotion to Lord Ayyappa, service to humanity, and the promotion of peace, harmony, and spiritual well-being for all. We invite you to join us in this sacred journey and experience the transformative power of divine grace.",
};

// Deities Images Array
export const deitiesImages = [Service1, Service2, Service3];

// Deities Data
export const deities = [
  {
    title: "Lord Ayyappa",
    subtitle: "Main Deity",
    date: "Daily Worship",
    description:
      "Lord Ayyappa, also known as Dharmasasta, is the presiding deity of our temple. He is the son of Lord Shiva and Lord Vishnu (in the form of Mohini). Lord Ayyappa represents the perfect balance of dharma (righteousness) and represents the ideal of celibacy and spiritual discipline.",
    description2:
      "Devotees worship him for spiritual growth, protection, and fulfillment of righteous desires. His teachings emphasize the importance of self-discipline, meditation, and leading a righteous life. The temple serves as a sacred space where devotees can connect with his divine energy and seek blessings for their spiritual journey.",
  },
  {
    title: "Lord Shiva",
    subtitle: "Shivalingam",
    date: "Every Prathosam",
    description:
      "Lord Shiva, the destroyer and transformer in the Hindu trinity, is worshipped in the form of Shivalingam. He represents the cosmic energy and consciousness. Worshipping Lord Shiva on Prathosam (13th day of lunar fortnight) is considered highly auspicious.",
    description2:
      "This sacred day helps in removing obstacles, purifying the mind, and attaining spiritual enlightenment. Lord Shiva's presence in our temple brings peace and tranquility to all devotees. His blessings help in overcoming life's challenges and finding inner strength during difficult times.",
  },
  {
    title: "Nagarajaswamy",
    subtitle: "Snake God",
    date: "Every Panjamy",
    description:
      "Nagarajaswamy, the king of serpents, is a powerful deity who protects devotees from snake-related fears and negative energies. Worshipping on Panjami (5th day) helps in overcoming fears, gaining wisdom, and receiving protection from various dangers.",
    description2:
      "He is also believed to bestow knowledge and spiritual awakening. His presence in our temple creates a protective shield against negative forces. Devotees who worship him regularly experience increased mental clarity and protection from harm in their daily lives.",
  },
  {
    title: "Anjaneyar Swamy",
    subtitle: "Hanuman",
    date: "Every Moolam",
    description:
      "Anjaneyar Swamy, the divine monkey god and ardent devotee of Lord Rama, symbolizes devotion, strength, and service. Worshipping on Moolam helps in gaining physical and mental strength, removing obstacles, and developing unwavering devotion.",
    description2:
      "He is also known for granting courage and protection from evil forces. His blessings help devotees develop strong willpower and overcome life's challenges. Regular worship of Anjaneyar Swamy brings stability and success in all endeavors.",
  },
  {
    title: "Lord Ganesha",
    subtitle: "Ganapathy",
    date: "Every Chaturthi",
    description:
      "Lord Ganesha, the remover of obstacles and god of wisdom, is worshipped on Chaturthi (4th day of lunar fortnight). He is the first deity to be worshipped before any auspicious work. Worshipping Lord Ganesha helps in removing obstacles.",
    description2:
      "His divine presence ensures success in all endeavors and brings wisdom to devotees. Lord Ganesha's blessings are essential for starting new projects and overcoming challenges. He is known for his compassionate nature and quick response to sincere prayers.",
  },
  {
    title: "Lord Murugan",
    subtitle: "Karthikeya",
    date: "Every Sashti",
    description:
      "Lord Murugan, the commander-in-chief of the divine army, represents courage, wisdom, and victory. Worshipping on Sashti (6th day) helps in gaining victory over enemies, developing leadership qualities, and attaining knowledge.",
    description2:
      "He is also known as the god of war and protector of dharma. His blessings help devotees develop courage and face life's challenges with confidence. Lord Murugan's presence brings victory in all aspects of life and protection from negative influences.",
  },
  {
    title: "Lord Vishnu",
    subtitle: "Narayana",
    date: "Every Thiruvonam",
    description:
      "Lord Vishnu, the preserver of the universe, maintains cosmic order and dharma. Worshipping on Thiruvonam helps in attaining peace, prosperity, and spiritual harmony. He is also known for his ten avatars.",
    description2:
      "His divine qualities of compassion, protection, and divine grace bring balance to devotees' lives. Lord Vishnu's presence ensures stability and harmony in all aspects of life. Regular worship brings peace of mind and spiritual fulfillment.",
  },
  {
    title: "Karuppanna Swami",
    subtitle: "Guardian Deity",
    date: "Every Amavasai",
    description:
      "Karuppanna Swami is a powerful guardian deity who protects the temple and its devotees from negative energies and evil forces. Worshipping on Amavasai (new moon day) helps in removing black magic, gaining protection, and ensuring safety.",
    description2:
      "He is known for his fierce protective nature and swift action against evil. His presence creates a powerful protective shield around the temple and all devotees. Regular worship ensures complete protection from all forms of negative energies and brings peace to the family.",
  },
];

// Deities Page Data
export const deitiesPageData = {
  pageTitle: "Deities",
  breadcrumb: {
    home: "Home",
    current: "Deities",
  },
  mainHeading: "Sacred Deities of Our Temple",
  details: {
    deityHeading: "Divine Presence",
    venue: "Sydney Sri Ayyappa Swami Centre, NSW",
    time: "All Day",
    date: "Daily Worship",
  },
  content: {
    paragraph1:
      "The Sydney Sri Ayyappa Swami Centre is home to many sacred deities, each representing different aspects of the divine and offering unique blessings to devotees. Our temple serves as a sacred space where devotees",
    paragraph2:
      "Each deity in our temple has a special significance and is worshipped according to traditional rituals and customs. Devotees can offer prayers, perform special poojas, and seek blessings from these divine beings for various aspects of life including health, prosperity, knowledge, and spiritual growth.",
  },
};

// Contact Page Data
export const contactPageData = {
  pageTitle: "Contact Us",
  breadcrumb: {
    home: "Home",
    current: "Contact Us",
  },
  mainHeading: "Get in Touch with Us",
  details: {
    contactHeading: "Visit Our Temple",
    venue: "Sydney Sri Ayyappa Swami Centre, NSW",
    time: "All Day",
    date: "Daily Worship",
  },
  content: {
    paragraph1:
      "We welcome you to visit our temple and experience the divine presence. Our temple is open daily for devotees to offer prayers and seek blessings.",
    paragraph2:
      "For any inquiries about temple services, special ceremonies, or general information, please feel free to contact us. We are here to assist you in your spiritual journey.",
  },
};

// Donation Page Data
export const donationPageData = {
  pageTitle: "Donations",
  breadcrumb: {
    home: "Home",
    current: "Donations",
  },
  mainHeading: "Support Our Temple",
  details: {
    donationHeading: "Contribute to Our Mission",
    venue: "Sydney Sri Ayyappa Swami Centre, NSW",
    time: "All Day",
    date: "Daily Worship",
  },
  content: {
    paragraph1:
      "Your generous donations help us maintain our temple, conduct daily rituals, and serve our community. Every contribution, no matter the size, helps us continue our sacred mission.",
    paragraph2:
      "We offer various ways to contribute, including general donations, specific seva sponsorships, and temple maintenance funds. Your support ensures the preservation of our spiritual traditions.",
  },
};

// Services Page Data
export const servicesPageData = {
  pageTitle: "Services",
  breadcrumb: {
    home: "Home",
    current: "Services",
  },
  mainHeading: "Temple Services",
  details: {
    servicesHeading: "Spiritual Services",
    venue: "Sydney Sri Ayyappa Swami Centre, NSW",
    time: "All Day",
    date: "Daily Worship",
  },
  content: {
    paragraph1:
      "Our temple offers a comprehensive range of spiritual services designed to help devotees connect with the divine and fulfill their spiritual needs.",
    paragraph2:
      "From daily poojas to special ceremonies, educational programs to community events, we provide various opportunities for spiritual growth and community engagement.",
  },
};

// Service Details Page Data
export const serviceDetailsPageData = {
  pageTitle: "Service Details",
  breadcrumb: {
    home: "Home",
    current: "Service Details",
  },
  mainHeading: "Detailed Service Information",
  details: {
    serviceDetailsHeading: "Comprehensive Service Guide",
    venue: "Sydney Sri Ayyappa Swami Centre, NSW",
    time: "All Day",
    date: "Daily Worship",
  },
  content: {
    paragraph1:
      "Learn more about our temple services, including detailed schedules, procedures, and how to participate in various spiritual activities.",
    paragraph2:
      "Our comprehensive service guide provides all the information you need to make the most of your temple visits and spiritual practices.",
  },
};

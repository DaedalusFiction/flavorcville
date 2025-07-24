// 1. Meta

const siteName = "Flavor Exceptional Catering";

const hero = {
  imageOne: {
    url: "/images/flourish2.svg",
    alt: "decorative flourish",
  },
  imageTwo: {
    url: "/images/flourish3.svg",
    alt: "decorative flourish",
  },
};
const menus = {
  imageOne: {
    url: "/images/flourish4.svg",
    alt: "decorative flourish",
  },
  imageTwo: {
    url: "/images/flourish3.svg",
    alt: "decorative flourish",
  },
  imageThree: {
    url: "/images/menusHeader.webp",
    alt: "two bowls of oatmeal and fruit",
  },
  imageFour: { url: "/images/lunch.webp", alt: "stock image" },
  imageFive: { url: "/images/Dinner_Photo_Header.webp", alt: "stock image" }, //dinner photo header
  imageSix: { url: "/images/cocktail.webp", alt: "stock image" },
};
const greek = {
  imageOne: { url: "/images/dinner.webp", alt: "chicken salad" },
  imageFour: { url: "/images/stock4.webp", alt: "stock image" },
  imageFive: { url: "/images/stock3.webp", alt: "stock image" },
  imageSix: { url: "/images/stock6.webp", alt: "stock image" },
};
const about = {
  imageTwo: { url: "/images/sandy2025.webp", alt: "Chef Sandy" },
  imageThree: { url: "/images/flavor97.jpeg", alt: "Chefs" },
  carouselImages: [
    { image: { url: "/images/flavor4.webp", alt: "tacos" } },
    { image: { url: "/images/flavor16.webp", alt: "tacos" } },
    { image: { url: "/images/flavor72.webp", alt: "tacos" } },
    { image: { url: "/images/flavor35.webp", alt: "tacos" } },
    { image: { url: "/images/flavor47.webp", alt: "tacos" } },
    { image: { url: "/images/flavor49.webp", alt: "tacos" } },
  ],
};
const header = {
  image: {
    url: "/images/logoHeader.webp",
    alt: "Flavor Exceptional Catering",
    attribution: "Flavor Cville",
  },
};

const homePage = {
  image: {
    url: "/images/flavor20home.webp",
    alt: "Chefs Danny and Sandy",
  },
  image2: { url: "/images/stock2.webp", alt: "stock image" },
  image3: { url: "/images/breakfastHeader.webp", alt: "Breakfast Spread" },
  image4: { url: "/images/lunchHeader.webp", alt: "Lunch Spread" },
  image5: { url: "/images/dinnerHeader.webp", alt: "Dinner spread" },
  image6: { url: "/images/cocktailHeader.webp", alt: "cocktails" },
  image7: { url: "/images/carousel2.webp", alt: "tacos" },
  image8: {
    url: "/images/carousel5.webp",
    alt: "danny and sandy preparing oysters",
  },
  image9: { url: "/images/carousel3.webp", alt: "dinner table setting" },
  image10: { url: "/images/carousel7.webp", alt: "bruschetta appetizers" },
  image11: { url: "/images/carousel4.webp", alt: "buffet line at UVA" },
  image12: { url: "/images/carousel6.webp", alt: "stock image" },
  image13: { url: "/images/carousel1.webp", alt: "stock image" },
  image14: { url: "/images/carousel8.webp", alt: "stock image" },
  carouselImages: [
    { image: { url: "/images/carousel2.webp", alt: "tacos" } },
    { image: { url: "/images/carouselGuac.webp", alt: "Guacamole spread" } },

    {
      image: {
        url: "/images/carousel3.webp",
        alt: "dinner table setting",
      },
    },
    { image: { url: "/images/carousel9.webp", alt: "stock image" } },

    {
      image: {
        url: "/images/carousel7.webp",
        alt: "bruschetta appetizers",
      },
    },

    { image: { url: "/images/carousel10.webp", alt: "stock image" } },
    { image: { url: "/images/carousel6.webp", alt: "stock image" } },
    { image: { url: "/images/carousel11.webp", alt: "stock image" } },
    { image: { url: "/images/carousel1.webp", alt: "stock image" } },
    { image: { url: "/images/caro1.webp", alt: "tacos" } },
    { image: { url: "/images/caro3.webp", alt: "tacos" } },
    { image: { url: "/images/caro2.webp", alt: "tacos" } },
  ],
};

const contactConfig = {
  website: "Flavor Website Contact Form",
  category: "contact",
  fields: [
    { name: "Name", type: "text", value: "" },
    { name: "Email", type: "text", value: "" },
    { name: "Phone", type: "text", value: "" },
    { name: "Comment", type: "text", value: "", multiline: true, rows: 4 },
  ],
};

// 2. Layout

export { hero, greek, about, menus, siteName, header, homePage, contactConfig };

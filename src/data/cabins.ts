export type Cabin = {
  slug: string;
  name: string;
  image: string;
  images?: string[];
  summary: string;
  description: string;
  details: {
    sleeps: string;
    bedrooms: number;
    bathrooms: number;
    bed: string;
  };
  features: string[];
};

export const cabins: Cabin[] = [
  {
    slug: "love",
    name: "Love Cabin",
    image: "/images/cabins/love.jpg",
    images: [
      "/images/cabins/love.jpg",
      "/images/cabins/love-2.jpg",
      "/images/cabins/love-3.jpg",
      "/images/cabins/love-4.jpg",
    ],
    summary:
      "Cozy creekside cabin with a queen bedroom, sleeper sofa, and fully equipped kitchen.",
    description:
      "The Love Cabin is a quiet one-bedroom, one-bath retreat tucked along Collier Creek. It features a queen bedroom, a comfortable living room with a sleeper sofa and seating, and a fully equipped kitchen with everything needed for meals. Enjoy a peaceful stay surrounded by the natural beauty of the Ouachita Mountains.",
    details: {
      sleeps: "Up to 4 guests",
      bedrooms: 1,
      bathrooms: 1,
      bed: "Queen bed + sleeper sofa",
    },
    features: [
      "Fully equipped kitchen",
      "Microwave and coffee maker",
      "Living room seating",
      "TV in living room and bedroom",
      "Full bathroom with shower",
      "Creekside setting",
    ],
  },

  {
    slug: "hope",
    name: "Hope Cabin",
    image: "/images/cabins/hope.jpg",
    images: [
      "/images/cabins/hope.jpg",
      "/images/cabins/hope-2.jpg",
      "/images/cabins/hope-3.jpg",
      "/images/cabins/hope-4.jpg",
    ],
    summary:
      "Secluded one-bedroom cabin with creek views and all the essentials for a relaxing stay.",
    description:
      "Hope Cabin offers a peaceful one-bedroom, one-bath layout with a queen bed and sleeper sofa in the living room. The space includes a fully equipped kitchen, dining area, and comfortable seating, making it perfect for a quiet getaway near the Caddo River.",
    details: {
      sleeps: "Up to 4 guests",
      bedrooms: 1,
      bathrooms: 1,
      bed: "Queen bed + sleeper sofa",
    },
    features: [
      "Fully equipped kitchen",
      "Dining table and seating",
      "TV in living room and bedroom",
      "Full bathroom with shower",
      "Quiet creekside location",
    ],
  },

  {
    slug: "peace",
    name: "Peace Cabin",
    image: "/images/cabins/peace.jpg",
    images: [
      "/images/cabins/peace.jpg",
      "/images/cabins/peace-2.jpg",
      "/images/cabins/peace-3.jpg",
      "/images/cabins/peace-4.jpg",
    ],
    summary:
      "Relaxing cabin along the creek with a simple, comfortable layout and full amenities.",
    description:
      "Peace Cabin is designed for a simple and relaxing stay, with a queen bedroom, sleeper sofa, and a fully equipped kitchen. The cabin includes a dining area, comfortable seating, and a full bathroom, all set in a quiet natural setting.",
    details: {
      sleeps: "Up to 4 guests",
      bedrooms: 1,
      bathrooms: 1,
      bed: "Queen bed + sleeper sofa",
    },
    features: [
      "Full kitchen setup",
      "Living room seating",
      "TV in living room and bedroom",
      "Full bathroom with shower",
      "Secluded natural setting",
    ],
  },

  {
    slug: "faith",
    name: "Faith Cabin",
    image: "/images/cabins/faith.jpg",
    images: [
      "/images/cabins/faith.jpg",
      "/images/cabins/faith-2.jpg",
      "/images/cabins/faith-3.jpg",
      "/images/cabins/faith-4.jpg",
    ],
    summary:
      "Comfortable one-bedroom cabin with full kitchen and space to unwind by the creek.",
    description:
      "Faith Cabin features a one-bedroom, one-bath layout with a queen bed and sleeper sofa. The cabin includes a fully equipped kitchen, dining space, and comfortable seating, making it a great option for a relaxing stay in the Ouachita Mountains.",
    details: {
      sleeps: "Up to 4 guests",
      bedrooms: 1,
      bathrooms: 1,
      bed: "Queen bed + sleeper sofa",
    },
    features: [
      "Fully equipped kitchen",
      "Dining table and seating",
      "TV in living room and bedroom",
      "Full bathroom with shower",
      "Peaceful creekside location",
    ],
  },
];
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
    image: "/images/cabins/LoveScenic1.jpg",
    images: [
      "/images/cabins/LoveScenic1.jpg",
      "/images/cabins/LoveScenic2.jpg",
      "/images/cabins/LoveScenic3.jpg",
      "/images/cabins/LoveScenic4.jpg",
      "/images/cabins/LoveScenic5.jpg",
      "/images/cabins/LoveScenic6.jpg",
      "/images/cabins/LoveScenic7.jpg",
      "/images/cabins/LoveScenic8.jpg",
      "/images/cabins/LoveScenic9.jpg",
      "/images/cabins/LoveBathroom.jpg",
      "/images/cabins/LoveBed.jpg",
      "/images/cabins/LoveBed2.jpg",
      "/images/cabins/LoveBed3.jpg",
      "/images/cabins/LoveBridge.jpg",
      "/images/cabins/LoveBridge2.jpg",
      "/images/cabins/LoveFire.jpg",
      "/images/cabins/LoveKitchen.jpg",
      "/images/cabins/LovePorch.jpg",
      "/images/cabins/LovePorch2.jpg",
      "/images/cabins/LovePorch3.jpg",
      "/images/cabins/LovePorch4.jpg",
      "/images/cabins/LoveRoom2.jpg",
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
    image: "/images/cabins/HopeView3.jpg",
    images: [
      "/images/cabins/HopeView.jpg",
      "/images/cabins/HopeView2.jpg",
      "/images/cabins/HopeView3.jpg",
      "/images/cabins/HopeBathroom.jpg",
      "/images/cabins/HopeBedroom.jpg",
      "/images/cabins/HopeBridge.jpg",
      "/images/cabins/HopeGrill.jpg",
      "/images/cabins/HopeKitchen.jpg",
      "/images/cabins/HopeLivingroom.jpg",
      "/images/cabins/HopeLivingroom2.jpg",
      "/images/cabins/HopePorch.jpg",
      "/images/cabins/HopePorch2.jpg",
      "/images/cabins/HopeSign.jpg",
      "/images/cabins/HopeTable.jpg",
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
    image: "/images/cabins/PeaceView2.jpg",
    images: [
      "/images/cabins/PeaceView1.jpg",
      "/images/cabins/PeaceView2.jpg",
      "/images/cabins/PeaceView3.jpg",
      "/images/cabins/PeaceBathroom2.jpg",
      "/images/cabins/PeaceBathroom3.jpg",
      "/images/cabins/PeaceBedroom.jpg",
      "/images/cabins/PeaceBedroom2.jpg",
      "/images/cabins/PeaceLivingroom.jpg",
      "/images/cabins/PeaceLivingroom2.jpg",
      "/images/cabins/PeacePorch.jpg",
      "/images/cabins/PeacePorch1.jpg",
      "/images/cabins/PeacePorch2.jpg",
      "/images/cabins/PeacePorch3.jpg",
      "/images/cabins/PeacePorch4.jpg",
      "/images/cabins/PeacePorch5.jpg",
      "/images/cabins/PeacePorchFull.jpg",
      "/images/cabins/PeacePorchRiver.jpg",
      "/images/cabins/PeacePorchRiver2.jpg",
      "/images/cabins/PeacePorchRiver3.jpg",
      "/images/cabins/PeacePorchSign.jpg",
      "/images/cabins/PeacePorchSign2.jpg",
      "/images/cabins/PeacePorchStair.jpg",
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
    image: "/images/cabins/FaithPorch1.jpg",
    images: [
      "/images/cabins/FaithScenic.jpg",
      "/images/cabins/FaithScenic2.jpg",
      "/images/cabins/FaithScenic3.jpg",
      "/images/cabins/FaithBack.jpg",
      "/images/cabins/FaithBack2.jpg",
      "/images/cabins/FaithGrill1.jpg",
      "/images/cabins/FaithGrill2.jpg",
      "/images/cabins/FaithPorch1.jpg",
      "/images/cabins/FaithPorch2.jpg",
      "/images/cabins/FaithPorch3.jpg",
      "/images/cabins/FaithPorch4.jpg",
      "/images/cabins/FaithRiverView.jpg",
      "/images/cabins/FaithStair.jpg",
      "/images/cabins/FaithStair2.jpg",
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
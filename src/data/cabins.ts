export type Cabin = {
  slug: string;
  name: string;
  image: string;
  images?: string[];
  ownerRezWidgetUrl?: string;
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
    ownerRezWidgetUrl:
      "https://app.ownerrez.com/widgets/a9785f1219f14c70b20fb20298e09e03?view=form&propertyKey=0a6a0c1e301d4097b8eccac514e7eb0a",
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
  "/images/cabins/fire-pit-chair1.jpeg",
  "/images/cabins/fire-pit-chair2.jpeg",
  "/images/cabins/fire-pit-chair3.jpeg",
  "/images/cabins/creek-people1.jpeg",
  "/images/cabins/creek-people2.jpeg",
  "/images/cabins/creek-green.jpeg",
  "/images/cabins/creek-green-cabin.jpeg",

    ],
    summary:
      "Cozy creekside cabin with a queen bedroom, pull-out sleeper sofa, and fully equipped kitchen.",
    description:
      "The Love Cabin is a quiet one-bedroom, one-bath retreat tucked along Collier Creek. It features a queen bedroom, a comfortable living room with a pull-out sleeper sofa, and a fully equipped kitchen with everything needed for meals. Love Cabin sleeps up to 4 guests and gives you a peaceful place to settle in surrounded by the natural beauty of the Ouachita Mountains.",
    details: {
      sleeps: "Up to 4 guests",
      bedrooms: 1,
      bathrooms: 1,
      bed: "Queen bed + pull-out sleeper sofa",
    },
    features: [
      "Sleeps up to 4 guests",
      "Queen bed",
      "Pull-out sleeper sofa",
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
    ownerRezWidgetUrl:
      "https://app.ownerrez.com/widgets/5fb98c3942f64220ab3f247621748664?view=form&propertyKey=a9fcb8069a214057bfde3bbb1124f889",
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
  "/images/cabins/HopeSign2.jpg",
  "/images/cabins/HopeTable.jpg",
  "/images/cabins/fire-pit-chair1.jpeg",
  "/images/cabins/fire-pit-chair2.jpeg",
  "/images/cabins/fire-pit-chair3.jpeg",
  "/images/cabins/creek-people1.jpeg",
  "/images/cabins/creek-people2.jpeg",
  "/images/cabins/creek-green.jpeg",
],
    summary:
      "Secluded one-bedroom cabin with creek views, a queen bed, sleeper sofa, and all the essentials for a relaxing stay.",
    description:
      "Hope Cabin offers a peaceful one-bedroom, one-bath layout with a queen bed and a pull-out sleeper sofa in the living room. The space includes a fully equipped kitchen, dining area, and comfortable seating, making it a good fit for up to 4 guests looking for a quiet getaway near the Caddo River.",
    details: {
      sleeps: "Up to 4 guests",
      bedrooms: 1,
      bathrooms: 1,
      bed: "Queen bed + pull-out sleeper sofa",
    },
    features: [
      "Sleeps up to 4 guests",
      "Queen bed",
      "Pull-out sleeper sofa",
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
    ownerRezWidgetUrl:
      "https://app.ownerrez.com/widgets/cb072657b1ee47e49ae9d7992aca458f?view=form&propertyKey=89114ca5f27a40f1b5b32b25ebe54f5d",
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
  "/images/cabins/fire-pit-chair1.jpeg",
  "/images/cabins/fire-pit-chair2.jpeg",
  "/images/cabins/fire-pit-chair3.jpeg",
  "/images/cabins/creek-people1.jpeg",
  "/images/cabins/creek-people2.jpeg",
  "/images/cabins/creek-green.jpeg",
],
    summary:
      "Relaxing creekside cabin with a queen bed, queen daybed, full amenities, and a wheelchair ramp.",
    description:
      "Peace Cabin is designed for a simple and relaxing stay, with a queen bed, queen daybed, and space for up to 4 guests. The cabin includes a fully equipped kitchen, dining area, comfortable seating, and a full bathroom, all set in a quiet natural setting. Peace Cabin is also the cabin with a wheelchair ramp, making it a helpful option for guests who need easier entry.",
    details: {
      sleeps: "Up to 4 guests",
      bedrooms: 1,
      bathrooms: 1,
      bed: "Queen bed + queen daybed",
    },
    features: [
      "Sleeps up to 4 guests",
      "Queen bed",
      "Queen daybed",
      "Wheelchair ramp",
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
    ownerRezWidgetUrl:
      "https://app.ownerrez.com/widgets/1d94f6effef84558a5d6a2f75fc06e44?view=form&propertyKey=80cf2336821c4f3c81c58ae89220ec51",
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
  "/images/cabins/faith-porch-chair.jpeg",
  "/images/cabins/FaithRiverView.jpg",
  "/images/cabins/FaithStair.jpg",
  "/images/cabins/FaithStair2.jpg",
  "/images/cabins/faith-interior.jpeg",
  "/images/cabins/faith-interior1.jpeg",
  "/images/cabins/faith-interior2.jpeg",
  "/images/cabins/faith-interior3.jpeg",
  "/images/cabins/faith-interior4.jpeg",
  "/images/cabins/faith-interior5.jpeg",
  "/images/cabins/faith-interior6.jpeg",
  "/images/cabins/faith-interior7.jpeg",
  "/images/cabins/faith-interior8.jpeg",
  "/images/cabins/faith-interior9.jpeg",
  "/images/cabins/faith-interior10.jpeg",
  "/images/cabins/faith-interior11.jpeg",
  "/images/cabins/faith-interior12.jpeg",
  "/images/cabins/faith-interior13.jpeg",
  "/images/cabins/AreaView1.jpg",
  "/images/cabins/AreaView2.jpg",
  "/images/cabins/AreaView3.jpg",
  "/images/cabins/AreaView4.jpg",
  "/images/cabins/fire-pit-chair1.jpeg",
  "/images/cabins/fire-pit-chair2.jpeg",
  "/images/cabins/fire-pit-chair3.jpeg",
  "/images/cabins/creek-people1.jpeg",
  "/images/cabins/creek-people2.jpeg",
  "/images/cabins/creek-green.jpeg",
  "/images/cabins/creek-green-cabin.jpeg",
],
    summary:
      "Comfortable one-bedroom cabin with a queen bed, sleeper sofa, full kitchen, and space to unwind by the creek.",
    description:
      "Just steps from Faith Cabin, you can relax in the cool, clear waters of Collier Creek and enjoy the quiet beauty of the property. Inside, Faith has a queen bed, a pull-out sleeper sofa, a full kitchen, and space for up to 4 guests. Spend the evening cooking your favorite barbecue on the grill or gathering around the open fire pit while listening to the sounds of nature. Take a walk around the property, wander along the creek, or visit the animals for a peaceful country touch. The porch at Faith Cabin is the perfect place to enjoy your morning coffee, slow down, and take in the beautiful setting.",
    details: {
      sleeps: "Up to 4 guests",
      bedrooms: 1,
      bathrooms: 1,
      bed: "Queen bed + pull-out sleeper sofa",
    },
    features: [
      "Sleeps up to 4 guests",
      "Queen bed",
      "Pull-out sleeper sofa",
      "Fully equipped kitchen",
      "Dining table and seating",
      "TV in living room and bedroom",
      "Full bathroom with shower",
      "Peaceful creekside location",
    ],
  },
];
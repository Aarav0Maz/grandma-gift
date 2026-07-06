export type ChapterTheme =
  | 'sunset'
  | 'bloom'
  | 'wedding'
  | 'nurture'
  | 'colors'
  | 'travel'
  | 'kitchen'
  | 'family'
  | 'city'
  | 'confetti'
  | 'nature'
  | 'lantern'
  | 'elegance'
  | 'blossom'
  | 'garden'
  | 'faith'
  | 'dream'
  | 'legacy'

export type Memory = {
  id: number
  image: string
  alt: string
  title: {
    en: string
    bn: string
  }
  caption: {
    en: string
    bn: string
  }
  subline: {
    en: string
    bn: string
  }
  /** Optional message revealed on interaction */
  reveal?: {
    en: string
    bn: string
  }
  theme: ChapterTheme
}

export const memories: Memory[] = [
  {
    id: 1,
    image: '/memories/28.jpg',
    alt: 'Standing on a sandy beach at golden sunset by the sea',
    title: {
      en: 'You Feel Like Home',
      bn: 'তুমি আমার ঘর',
    },
    caption: {
      en: 'Maa, your presence has always felt like peace to me, like the soft kind of love that makes everything calmer.',
      bn: 'মা, তোমার উপস্থিতি আমার কাছে সবসময় শান্তির মতো লাগে, এমন এক কোমল ভালোবাসা যা সবকিছু শান্ত করে দেয়।',
    },
    subline: {
      en: 'When I think of comfort, my heart always goes back to you first.',
      bn: 'স্বস্তির কথা ভাবলেই আমার মন সবার আগে তোমার কাছেই ফিরে যায়।',
    },
    reveal: {
      en: 'You are my peace, my warmth, my home.',
      bn: 'তুমিই আমার শান্তি, আমার উষ্ণতা, আমার ঘর।',
    },
    theme: 'sunset',
  },
  {
    id: 2,
    image: '/memories/1.jpg',
    alt: 'A young woman in a white and green saree standing among blooming flowers',
    title: {
      en: 'Your Beautiful Beginning',
      bn: 'তোমার সুন্দর শুরু',
    },
    caption: {
      en: 'Before you became the center of so many lives, you were already carrying so much beauty, grace, and quiet strength.',
      bn: 'এত মানুষের জীবনের কেন্দ্র হওয়ার আগেই তোমার ভেতরে ছিল অগাধ সৌন্দর্য, মাধুর্য আর নীরব শক্তি।',
    },
    subline: {
      en: 'I look at this and see how lovely you have always been, inside and out.',
      bn: 'এই ছবিতে আমি দেখি তুমি সবসময় কতটা সুন্দর ছিলে, ভেতরেও আর বাইরেও।',
    },
    reveal: {
      en: 'Your beauty was never just in your smile.',
      bn: 'তোমার সৌন্দর্য শুধু তোমার হাসিতে ছিল না।',
    },
    theme: 'bloom',
  },
  {
    id: 3,
    image: '/memories/2.jpg',
    alt: 'A wedding celebration with family gathered and blessings being given',
    title: {
      en: 'Love You Built',
      bn: 'তোমার গড়া ভালোবাসা',
    },
    caption: {
      en: 'You stepped into a new chapter and turned it into a life full of love, care, and togetherness for everyone around you.',
      bn: 'তুমি জীবনের নতুন অধ্যায়ে পা রেখে চারপাশের সবার জন্য সেই জীবনকে ভালোবাসা, যত্ন আর একসাথে থাকার বন্ধনে ভরিয়ে দিয়েছ।',
    },
    subline: {
      en: 'You did not just become part of a family, Maa. You became its heart.',
      bn: 'মা, তুমি শুধু একটি পরিবারের অংশ হওনি, তুমি তার হৃদয় হয়ে উঠেছ।',
    },
    reveal: {
      en: 'So much of our family was held together by your love.',
      bn: 'আমাদের পরিবারের অনেক বন্ধন তোমার ভালোবাসাতেই টিকে আছে।',
    },
    theme: 'wedding',
  },
  {
    id: 4,
    image: '/memories/3.jpg',
    alt: 'Holding a smiling baby dressed in red, close and loving',
    title: {
      en: 'Your Loving Arms',
      bn: 'তোমার স্নেহভরা কোলে',
    },
    caption: {
      en: 'In your arms, love always felt easy, safe, and real. You hold people in a way that heals them.',
      bn: 'তোমার কোলে ভালোবাসা সবসময় সহজ, নিরাপদ আর সত্যি বলে মনে হয়েছে। তুমি মানুষকে এমনভাবে আগলে রাখো, যা মনকে সারিয়ে তোলে।',
    },
    subline: {
      en: 'Your hands have comforted, protected, and loved all of us so deeply.',
      bn: 'তোমার হাত আমাদের সবার মাঝে সান্ত্বনা, নিরাপত্তা আর গভীর ভালোবাসা এনে দিয়েছে।',
    },
    reveal: {
      en: 'Your love has always felt like the safest place.',
      bn: 'তোমার ভালোবাসাই সবসময় আমার সবচেয়ে নিরাপদ আশ্রয়।',
    },
    theme: 'nurture',
  },
  {
    id: 5,
    image: '/memories/7.jpg',
    alt: 'A joyful Holi selfie, faces covered in bright festival colours',
    title: {
      en: 'You Bring the Colour',
      bn: 'রঙ এনে দাও তুমি',
    },
    caption: {
      en: 'You taught me that life becomes more beautiful when it is full of laughter, love, and bright little moments shared together.',
      bn: 'তুমি আমাকে শিখিয়েছ জীবন আরও সুন্দর হয় যখন তা হাসি, ভালোবাসা আর একসাথে ভাগ করা ছোট ছোট উজ্জ্বল মুহূর্তে ভরে থাকে।',
    },
    subline: {
      en: 'Every celebration feels happier when you are in it, Maa.',
      bn: 'মা, তুমি থাকলে প্রতিটি উৎসব আরও আনন্দের হয়ে ওঠে।',
    },
    reveal: {
      en: 'You make every happy moment even brighter.',
      bn: 'তুমি প্রতিটি খুশির মুহূর্তকে আরও উজ্জ্বল করে দাও।',
    },
    theme: 'colors',
  },
  {
    id: 6,
    image: '/memories/8.jpg',
    alt: 'Sitting with two young boys in front of the Taj Mahal',
    title: {
      en: 'Memories With You',
      bn: 'তোমার সাথে স্মৃতি',
    },
    caption: {
      en: 'Being with you has always made every place feel warmer, happier, and more special to remember.',
      bn: 'তোমার সাথে থাকলে প্রতিটি জায়গাই আরও উষ্ণ, আনন্দময় আর মনে রাখার মতো বিশেষ হয়ে ওঠে।',
    },
    subline: {
      en: 'You gave me memories that I know I will carry forever.',
      bn: 'তুমি আমাকে এমন স্মৃতি দিয়েছ যা আমি চিরদিন বয়ে নিয়ে যাব।',
    },
    reveal: {
      en: 'Every journey becomes sweeter with you beside me.',
      bn: 'তুমি পাশে থাকলে প্রতিটি পথচলা আরও মধুর লাগে।',
    },
    theme: 'travel',
  },
  {
    id: 7,
    image: '/memories/12.jpg',
    alt: 'In the kitchen wearing an apron, cooking with two boys beside her',
    title: {
      en: 'Love From Your Kitchen',
      bn: 'তোমার রান্নাঘরের ভালোবাসা',
    },
    caption: {
      en: 'Your kitchen was never just about food to me. It was one of the purest places where I felt your love.',
      bn: 'তোমার রান্নাঘর আমার কাছে কখনও শুধু খাবারের জায়গা ছিল না। সেখানে আমি তোমার ভালোবাসাকে সবচেয়ে নির্মলভাবে অনুভব করেছি।',
    },
    subline: {
      en: 'Every meal you made carried patience, warmth, and a little magic that only you have.',
      bn: 'তোমার বানানো প্রতিটি খাবারে ছিল ধৈর্য, উষ্ণতা আর তোমার নিজের সেই ছোট্ট জাদু।',
    },
    reveal: {
      en: "Secret ingredient: Maa's love.",
      bn: 'গোপন উপাদান: মায়ের ভালোবাসা।',
    },
    theme: 'kitchen',
  },
  {
    id: 8,
    image: '/memories/13.jpg',
    alt: 'Smiling while holding a baby indoors near a wall clock',
    title: {
      en: 'Your Heart Keeps Growing',
      bn: 'তোমার হৃদয় আরও বড় হয়',
    },
    caption: {
      en: 'No matter how much the family grew, your heart somehow always found more love to give.',
      bn: 'পরিবার যতই বড় হোক না কেন, তোমার হৃদয়ে সবসময় আরও বেশি ভালোবাসার জায়গা তৈরি হয়েছে।',
    },
    subline: {
      en: 'Every generation gets to feel the same softness and warmth from you.',
      bn: 'প্রতিটি প্রজন্মই তোমার একই কোমলতা আর উষ্ণতা অনুভব করতে পারে।',
    },
    reveal: {
      en: 'Your heart makes room for everyone.',
      bn: 'তোমার হৃদয়ে সবার জন্য জায়গা আছে।',
    },
    theme: 'family',
  },
  {
    id: 9,
    image: '/memories/14.jpg',
    alt: 'Standing by the water with a glittering city skyline at dusk',
    title: {
      en: 'Grace Everywhere',
      bn: 'সবখানে তোমার মাধুর্য',
    },
    caption: {
      en: 'No matter where life takes you, you carry the same strength, beauty, and grace with you.',
      bn: 'জীবন তোমাকে যেখানেই নিয়ে যাক, তুমি তোমার একই শক্তি, সৌন্দর্য আর মাধুর্য সঙ্গে নিয়ে চল।',
    },
    subline: {
      en: 'Different places, same lovely Maa.',
      bn: 'জায়গা বদলায়, আমার সুন্দর মা বদলায় না।',
    },
    reveal: {
      en: 'Every place looks prettier with you in it.',
      bn: 'তুমি থাকলে প্রতিটি জায়গাই আরও সুন্দর লাগে।',
    },
    theme: 'city',
  },
  {
    id: 10,
    image: '/memories/16.jpg',
    alt: 'Sitting on the bright red steps of Times Square with family',
    title: {
      en: 'Still My Favourite Person',
      bn: 'এখনও আমার সবচেয়ে প্রিয় মানুষ',
    },
    caption: {
      en: 'Even in the busiest, loudest places, what I remember most is being there with you.',
      bn: 'সবচেয়ে ব্যস্ত আর কোলাহলপূর্ণ জায়গাতেও আমার সবচেয়ে মনে থাকে যে আমি সেখানে তোমার সাথে ছিলাম।',
    },
    subline: {
      en: 'No city lights can outshine the love in this memory.',
      bn: 'এই স্মৃতির ভালোবাসাকে শহরের কোনো আলোই হারাতে পারে না।',
    },
    reveal: {
      en: 'I will always hold this memory close.',
      bn: 'আমি এই স্মৃতিটাকে সবসময় হৃদয়ে ধরে রাখব।',
    },
    theme: 'confetti',
  },
  {
    id: 11,
    image: '/memories/17.jpg',
    alt: 'Standing on a wooden forest boardwalk surrounded by green trees',
    title: {
      en: 'Walking Beside You',
      bn: 'তোমার পাশে হাঁটা',
    },
    caption: {
      en: 'Life feels less scary and more beautiful when I know you are walking beside me with your love and blessings.',
      bn: 'যখন জানি তোমার ভালোবাসা আর আশীর্বাদ নিয়ে তুমি আমার পাশে হাঁটছ, তখন জীবন কম ভয়ংকর আর আরও সুন্দর লাগে।',
    },
    subline: {
      en: 'So many paths in my life feel lighter because of you.',
      bn: 'আমার জীবনের অনেক পথই তোমার জন্য হালকা আর সহজ মনে হয়।',
    },
    reveal: {
      en: 'With you, every path feels gentler.',
      bn: 'তুমি পাশে থাকলে প্রতিটি পথই কোমল লাগে।',
    },
    theme: 'nature',
  },
  {
    id: 12,
    image: '/memories/18.jpg',
    alt: 'Family gathered inside a tent lit warmly by lanterns at night',
    title: {
      en: 'You Are Our Light',
      bn: 'তুমি আমাদের আলো',
    },
    caption: {
      en: 'You have always been one of the brightest lights in our family, the one who brings warmth even in quiet or difficult times.',
      bn: 'তুমি সবসময় আমাদের পরিবারের সবচেয়ে উজ্জ্বল আলোগুলোর একটি, যে নীরব কিংবা কঠিন সময়েও উষ্ণতা এনে দেয়।',
    },
    subline: {
      en: 'Some of the best memories are simply the ones where we are all close to you.',
      bn: 'আমাদের সেরা কিছু স্মৃতি শুধু সেইগুলোই, যেখানে আমরা সবাই তোমার কাছে আছি।',
    },
    reveal: {
      en: 'Love. Warmth. Family. You.',
      bn: 'ভালোবাসা। উষ্ণতা। পরিবার। তুমি।',
    },
    theme: 'lantern',
  },
  {
    id: 13,
    image: '/memories/20.jpg',
    alt: 'An elegant portrait in a teal saree with jasmine flowers in her hair',
    title: {
      en: 'So Beautiful, Maa',
      bn: 'কত সুন্দর তুমি, মা',
    },
    caption: {
      en: 'You carry yourself with such elegance and sweetness. There is something timeless and gentle about the way you shine.',
      bn: 'তোমার চলাফেরা আর উপস্থিতিতে এমন এক মাধুর্য আর কোমলতা আছে, যা কখনও পুরোনো হয় না।',
    },
    subline: {
      en: 'I always see beauty, dignity, and love when I look at you.',
      bn: 'তোমার দিকে তাকালে আমি সবসময় সৌন্দর্য, মর্যাদা আর ভালোবাসা দেখি।',
    },
    reveal: {
      en: 'Your grace never fades.',
      bn: 'তোমার মাধুর্য কখনও ফিকে হয় না।',
    },
    theme: 'elegance',
  },
  {
    id: 14,
    image: '/memories/22.jpg',
    alt: 'Standing beside a tree full of bright pink spring blossoms',
    title: {
      en: 'You Bloom Everywhere',
      bn: 'তুমি চারপাশে ফুল ফোটাও',
    },
    caption: {
      en: 'You remind me of flowers in spring, because you bring softness, hope, and beauty wherever you go.',
      bn: 'তুমি আমাকে বসন্তের ফুলের কথা মনে করিয়ে দাও, কারণ তুমি যেখানেই যাও সেখানেই কোমলতা, আশা আর সৌন্দর্য নিয়ে যাও।',
    },
    subline: {
      en: 'The world feels more alive when your warmth is in it.',
      bn: 'তোমার উষ্ণতা থাকলে পৃথিবীকে আরও প্রাণবন্ত লাগে।',
    },
    reveal: {
      en: 'You make everything around you bloom.',
      bn: 'তুমি চারপাশের সবকিছুকে ফুটিয়ে তোলো।',
    },
    theme: 'blossom',
  },
  {
    id: 15,
    image: '/memories/23.jpg',
    alt: 'In a backyard garden beside tall vines with growing bottle gourds',
    title: {
      en: 'Everything You Touch Grows',
      bn: 'তোমার ছোঁয়ায় সব বেড়ে ওঠে',
    },
    caption: {
      en: 'You have such a beautiful gift for nurturing things. Plants grow, families grow, and love grows wherever your care reaches.',
      bn: 'তোমার মধ্যে জিনিসকে লালন করার এক অপূর্ব ক্ষমতা আছে। গাছ বড় হয়, পরিবার বড় হয়, আর তোমার যত্ন যেখানে পৌঁছায় সেখানে ভালোবাসা বাড়ে।',
    },
    subline: {
      en: 'Your patience turns simple things into something full of life.',
      bn: 'তোমার ধৈর্য সাধারণ জিনিসকেও প্রাণভরে সুন্দর করে তোলে।',
    },
    reveal: {
      en: 'Your care helps everything bloom.',
      bn: 'তোমার যত্নে সবকিছুই ফুটে ওঠে।',
    },
    theme: 'garden',
  },
  {
    id: 16,
    image: '/memories/24.jpg',
    alt: 'Standing on a path before a hillside reading Jai Shree Krishna',
    title: {
      en: 'Your Faith, Your Strength',
      bn: 'তোমার বিশ্বাস, তোমার শক্তি',
    },
    caption: {
      en: 'Your faith has always been beautiful to watch. It gives you strength, and that strength becomes a blessing for all of us.',
      bn: 'তোমার বিশ্বাস সবসময় দেখার মতো সুন্দর। এটি তোমাকে শক্তি দেয়, আর সেই শক্তি আমাদের সবার জন্য আশীর্বাদ হয়ে ওঠে।',
    },
    subline: {
      en: 'You carry devotion, courage, and grace so quietly and so powerfully.',
      bn: 'তুমি ভক্তি, সাহস আর মাধুর্যকে এত নীরবে অথচ এত শক্তভাবে ধারণ করে চল।',
    },
    reveal: {
      en: 'I pray your life is always filled with peace and blessings.',
      bn: 'আমি প্রার্থনা করি তোমার জীবন সবসময় শান্তি আর আশীর্বাদে ভরে থাকুক।',
    },
    theme: 'faith',
  },
  {
    id: 17,
    image: '/memories/25.jpg',
    alt: 'By the Washington Monument with a child raising his arms high',
    title: {
      en: 'Because You Believed In Me',
      bn: 'কারণ তুমি আমায় বিশ্বাস করেছিলে',
    },
    caption: {
      en: 'So much of my confidence comes from the love and belief you poured into me from the very beginning.',
      bn: 'আমার আত্মবিশ্বাসের অনেকটাই এসেছে সেই ভালোবাসা আর বিশ্বাস থেকে, যা তুমি শুরু থেকেই আমার মধ্যে ঢেলে দিয়েছ।',
    },
    subline: {
      en: 'Behind so many of my dreams, there is your support.',
      bn: 'আমার অনেক স্বপ্নের পেছনেই তোমার সমর্থন আছে।',
    },
    reveal: {
      en: 'I still feel you cheering for me.',
      bn: 'আমি এখনও অনুভব করি তুমি আমার জন্য হাততালি দিচ্ছ।',
    },
    theme: 'dream',
  },
  {
    id: 18,
    image: '/memories/26.jpg',
    alt: 'The whole family together in front of the Lincoln Memorial',
    title: {
      en: 'The Love That Holds Us',
      bn: 'যে ভালোবাসা আমাদের ধরে রাখে',
    },
    caption: {
      en: 'We may all be different, but your love connects us in such a special way.',
      bn: 'আমরা সবাই আলাদা হতে পারি, কিন্তু তোমার ভালোবাসা আমাদের এক বিশেষ বন্ধনে বেঁধে রাখে।',
    },
    subline: {
      en: 'In every family memory, I can feel how much of the love started with you.',
      bn: 'পরিবারের প্রতিটি স্মৃতিতে আমি অনুভব করি কতটা ভালোবাসা তোমার থেকেই শুরু হয়েছে।',
    },
    reveal: {
      en: 'You are one of the biggest reasons we feel like family.',
      bn: 'আমরা পরিবার বলে যে অনুভব করি, তার বড় কারণগুলোর একটি তুমি।',
    },
    theme: 'family',
  },
  {
    id: 19,
    image: '/memories/27.jpg',
    alt: 'A festive photograph in traditional dress with her two grandsons',
    title: {
      en: 'My Lovely Maa',
      bn: 'আমার প্রিয় মা',
    },
    caption: {
      en: 'Maa, your love is behind so many of my happiest memories, and I will always be grateful for everything you do for us.',
      bn: 'মা, আমার সবচেয়ে সুখের অনেক স্মৃতির পেছনেই আছে তোমার ভালোবাসা, আর তুমি আমাদের জন্য যা করো তার জন্য আমি সবসময় কৃতজ্ঞ থাকব।',
    },
    subline: {
      en: 'Thank you for your love, your care, your prayers, your sweetness, and the beautiful way you hold this family together.',
      bn: 'তোমার ভালোবাসা, যত্ন, দোয়া, মাধুর্য আর এই পরিবারকে একসাথে ধরে রাখার সুন্দর ক্ষমতার জন্য তোমায় ধন্যবাদ।',
    },
    reveal: {
      en: 'I love you more than words can say.',
      bn: 'আমি তোমাকে কথার চেয়েও বেশি ভালোবাসি।',
    },
    theme: 'legacy',
  },
]

/** Total hearts hidden across the chapters (one per chapter). */
export const totalHearts = memories.length

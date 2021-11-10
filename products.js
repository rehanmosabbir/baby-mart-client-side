const products = [
  {
    productName: "Kodomo Baby Lotion Powder 180ml",
    img: "https://i.ibb.co/ZdTnW66/kodomo-lotion-powder-180ml.png",
    description:
      "Looking for a baby powder that also doubles as a lotion? Kodomo Baby Lotion Powder is just what you’re looking for! This unique two-in-one product applies like a lotion first and then dries down to a powdery finish. It is a no-dust formula best suited for babies without the dusty mess. The smooth, velvety formula provides adequate hydration, and the powder keeps your baby’s skin free from the formation of rashes. Kodomo Baby Lotion Powder is hence a unique product that offers the benefit of baby powder in a lotion form. Choose only the best quality product for your baby!",
    price: 420,
  },
  {
    productName: "Kodomo Bottle And Accessories Cleanser 750ml",
    img: "https://i.ibb.co/6mD50BP/Kodomo-bottle-and-accessories-cleanser-750ml.jpg",
    description:
      "Kodomo Bottle and Accessories Cleanser is an effective, multitasking product that will eliminate all your baby hygiene worries. This Bottle and Accessories Cleanser is effective in removing milk stains, odour and bacteria in baby’s milk bottles, toys, nipples and other accessories for infants. This high quality product will help you maintain the highest degree of cleanliness that your baby deserves. It has been formulated using natural ingredients that are gentle and mild to skin, making it the safest choice for babies. Moreover, this product can also be used on vegetables and fruits. This is the best for cleanliness.",
    price: 540,
  },
  {
    productName: "Farlin Comb & Brush Set",
    img: "https://i.ibb.co/3rhCS55/baby-hair-brush.jpg",
    description:
      "Babies with their little heads and delicate scalps can be harmed by the use of hard, rough or harsh brushes or combs. To protect their sensitive scalps yet keep their hair fine and brushed use these combs and brushes from this baby comb set. This comb is made from safe soft plastic with gentle bristles to subtly brush your child’s hair without causing irritation. The brush comes with soft nylon bristles to prevent any itching but will gently rub away at the scalp. Available in a compact size that fits your child’s small head, and is also travel friendly.",
    price: 380,
  },
  {
    productName: "Johnson's Baby Petroleum Jelly- 50ml",
    img: "https://i.ibb.co/bRzw0Fm/johnson-s-baby-petroleum-jelly-lightly-fragranced-50-ml.png",
    description:
      "Soft, spreads easily and protects baby's skin.Forms an effective barrier against wetness.Lightly fragranced with that unmistakable baby smell and suitable for baby skin.It provides moisture protection and is also ideal for mom to use on dry skin on her heels, elbows and lips",
    price: 500,
  },
  {
    productName: "Carebeau Body Massage Oil- 450ml",
    img: "https://i.ibb.co/y0ZgBF1/asdf-420.png",
    description:
      "Babies with their little heads and delicate scalps can be harmed by the use of hard, rough or harsh brushes or combs. To protect their sensitive scalps yet keep their hair fine and brushed use these combs and brushes from this baby comb set. This comb is made from safe soft plastic with gentle bristles to subtly brush your child’s hair without causing irritation. The brush comes with soft nylon bristles to prevent any itching but will gently rub away at the scalp. Available in a compact size that fits your child’s small head, and is also travel friendly.",
    price: 590,
  },
  {
    productName: "Pigeon Baby Nasal Aspirator",
    img: "https://i.ibb.co/rMm74mY/56.png",
    description:
      "Babies with their little heads and delicate scalps can be harmed by the use of hard, rough or harsh brushes or combs. To protect their sensitive scalps yet keep their hair fine and brushed use these combs and brushes from this baby comb set. This comb is made from safe soft plastic with gentle bristles to subtly brush your child’s hair without causing irritation. The brush comes with soft nylon bristles to prevent any itching but will gently rub away at the scalp. Available in a compact size that fits your child’s small head, and is also travel friendly.",
    price: 380,
  },
  {
    productName: "Pampers Baby-Dry Pants Size-6 (52 Nappies) Weight: 15+Kg",
    img: "https://i.ibb.co/HGMfRbm/pampers-6-52pcs.png",
    description:
      "Babies with their little heads and delicate scalps can be harmed by the use of hard, rough or harsh brushes or combs. To protect their sensitive scalps yet keep their hair fine and brushed use these combs and brushes from this baby comb set. This comb is made from safe soft plastic with gentle bristles to subtly brush your child’s hair without causing irritation. The brush comes with soft nylon bristles to prevent any itching but will gently rub away at the scalp. Available in a compact size that fits your child’s small head, and is also travel friendly.",
    price: 2390,
  },
  {
    productName: "Tesco Fred & Flo Fragrance Free Nappy Cream- 150ml",
    img: "https://i.ibb.co/1TRjYHX/tesco-nappy-cream-1.png",
    description:
      "Perfect for Newborns. Paediatrician Approved.Hypoallergenic.  Helps Prevent the causes of nappy rash",
    price: 620,
  },
  {
    productName: "Philips Avent Bendy Straw Cup 9M+ - 200ml",
    img: "https://i.ibb.co/qJXwzvR/avent-mumpot-9m.png",
    description:
      "Babies with their little heads and delicate scalps can be harmed by the use of hard, rough or harsh brushes or combs. To protect their sensitive scalps yet keep their hair fine and brushed use these combs and brushes from this baby comb set. This comb is made from safe soft plastic with gentle bristles to subtly brush your child’s hair without causing irritation. The brush comes with soft nylon bristles to prevent any itching but will gently rub away at the scalp. Available in a compact size that fits your child’s small head, and is also travel friendly.",
    price: 790,
  },
  {
    productName: "Nestle Cerelac Gandum Madu & Kurma Wheat Honey & Dates 250g",
    img: "https://i.ibb.co/JkmJVsJ/nestle-cerelac-cereal-gandum-madu-kurma-wheat-honey-dates.png",
    description:
      "Babies with their little heads and delicate scalps can be harmed by the use of hard, rough or harsh brushes or combs. To protect their sensitive scalps yet keep their hair fine and brushed use these combs and brushes from this baby comb set. This comb is made from safe soft plastic with gentle bristles to subtly brush your child’s hair without causing irritation. The brush comes with soft nylon bristles to prevent any itching but will gently rub away at the scalp. Available in a compact size that fits your child’s small head, and is also travel friendly.",
    price: 480,
  },
  {
    productName: "Horlicks Hunior Vanilla Flavour 1-6 Years- 500g",
    img: "https://i.ibb.co/vdFrXLx/440.png",
    description:
      "Babies with their little heads and delicate scalps can be harmed by the use of hard, rough or harsh brushes or combs. To protect their sensitive scalps yet keep their hair fine and brushed use these combs and brushes from this baby comb set. This comb is made from safe soft plastic with gentle bristles to subtly brush your child’s hair without causing irritation. The brush comes with soft nylon bristles to prevent any itching but will gently rub away at the scalp. Available in a compact size that fits your child’s small head, and is also travel friendly.",
    price: 620,
  },
  {
    productName: "Ibaby Infant To Toddler Rocker For Baby",
    img: "https://i.ibb.co/sW8FGh2/ibaby-infant-to-toddler-rocker-for-baby3.png",
    description:
      "Use from infant to toddler—up to 18 kg.Fold-out kickstand and reclining seat for feeding or napping.Soft toy bar with three fun, spinning toys.Deep cradle seat with calming vibrations for younger babies.Easily-removable toy bar for older babies to sit & play.Soothing vibrations and a machine washable pad.Requires 1 D battery (battery not included).",
    price: 3600,
  },
];

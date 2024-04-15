var home=new Vue({ 
	el: '#main',
	data: {
    allProducts: [
        {
          name: "Nike V2K Run",
          description:
            "Fast forward. Rewind. Doesn't matter—this shoe takes retro into the future. The V2K remasters everything you love about the Vomero in a look pulled straight from an early '00s running catalogue. Layer up in a mixture of flashy metallics, referential plastic details and a midsole with a perfectly vintage aesthetic. And the chunky heel makes sure wherever you go, it's in comfort.",
          benefit: [
            "Mesh upper feels light and airy.",
            "Dual-density foam midsole creates a comfortable ride.",
            "Translucent plastic accents reference the classic Nike Vomero 5.",
            "Rubber outsole gives you durable traction.",
          ],
          size: [
            "35.5",
            "36",
            "36.5",
            "37.5",
            "38",
            "38.5",
            "39",
            "40",
            "40.5",
            "41",
            "42",
          ],
          price: "1,909,000",
          priceDiscount: "1,550,000",
          imageProducts: "assets/images/product/product-1.jpg"
        },
        {
          name: "Nike Air More Uptempo '96",
          description:
            "TAll about the A-I-R. The Air More Uptempo '96 refreshes an original that has reigned supreme for more than 20 years. With a design inspired by high-flying basketball style and '90s graffiti art, these kicks can't help but turn heads off court. Plus, Air units in the heel, forefoot and midfoot provide comfortable cushioning, so you feel as good as you look.",
          benefit: [
            "Real and synthetic leather create a layered look built to last.",
            "Oversized, graffiti-inspired branding celebrates the streets you walk and the Air you walk on.",
            "Originally designed for performance hoops, Max Air units add lightweight cushioning.",
            "Rubber outsole provides traction and durability.",
          ],
          size: [
            "35.5",
            "36",
            "36.5",
            "37.5",
            "38",
            "38.5",
            "39",
            "40",
            "40.5",
            "41",
            "42",
          ],
          price: "2,849,000",
          priceDiscount: "2,500,000",
          imageProducts: "assets/images/product/product-2.jpg"
        },
        {
          name: "Nike P-6000",
          description:
            "The Nike P-6000 draws on the 2006 Nike Air Pegasus, bringing you a mash-up of iconic style that's breathable, comfortable and evocative of that early-2000s vibe.",
          benefit: [
            "Tongue webbing with Bowerman Series branding",
            "A full rubber outsole gives you durable traction.",
            "Foam midsole provides lightweight cushioning for a plush underfoot feel.",
            "Colour Shown: White/Metallic Silver/Black/Dusty Cactus",
            "Style: CD6404-103",
            "Country/Region of Origin: Vietnam",
          ],
          size: [
            "35.5",
            "36",
            "36.5",
            "37.5",
            "38",
            "38.5",
            "39",
            "40",
            "40.5",
            "41",
            "42",
          ],
          price: "1,429,000",
          priceDiscount: "1,000,000",
          imageProducts: "assets/images/product/product-3.jpg"
        },
        {
          name: "Nike Dunk Low Twist",
          description:
          "The 80s b-ball icon returns with classic details and throwback hoops flair. Channelling vintage style back onto the streets, its padded collar and extra-puffy silhouette let you take your game anywhere—in comfort.",
          benefit: [
            "Leather in the upper softens and gains vintage character with wear.",
            "Foam midsole offers lightweight, responsive cushioning.",
            "A rubber outsole with hoops pivot circle adds durable traction.",
            "Padded, low-cut collar looks sleek and feels great.",
            "Colour Shown: Light Silver/White/Sail",
            "Style: DZ2794-004",
            "Country/Region of Origin: Indonesia",
          ],
          size: [
            "35.5",
            "36",
            "36.5",
            "37.5",
            "38",
            "38.5",
            "39",
            "40",
            "40.5",
            "41",
            "42",
          ],
          price: "1,729,000",
          priceDiscount: "1,250,000",
          imageProducts : "assets/images/product/product-4.jpg"
        },
        {
          name: "Nike Air Force 1 '07 LV8",
          description:
            "Comfortable, durable and timeless—it's number 1 for a reason. The classic '80s construction is paired with premium details for style that tracks whether you're on court or on the go.",
          benefit: [
            "Leather upper softens and gains vintage character with wear.",
            "Originally designed for performance hoops, the Nike Air cushioning adds lightweight, all-day comfort.",
            "Padded, low-cut collar looks sleek and feels great.",
          ],
          size: [
            "35.5",
            "36",
            "36.5",
            "37.5",
            "38",
            "38.5",
            "39",
            "40",
            "40.5",
            "41",
            "42",
          ],
          price: "1,909,000",
          priceDiscount: null,
          imageProducts: "assets/images/product/product-5.jpg"
        },
        {
          name: "Nike Full Force Low",
          description:
            "A new shoe with old-school appeal—your retro dreams just came true. This pared-back design references the classic AF-1, then leans into '80s style with stitched overlays and varsity-inspired colours. Not everything has to be a throwback, though—modern comfort and durability make them easy to wear any time, anywhere. Time to throw them on and go full force.",
          benefit: [
            "The upper mixes leather and suede for a layered look built to last.",
            "Rubber outsole provides durable traction.",
          ],
          size: [
            "35.5",
            "36",
            "36.5",
            "37.5",
            "38",
            "38.5",
            "39",
            "40",
            "40.5",
            "41",
            "42",
          ],
          price: "1,549,000",
          priceDiscount: null,
          imageProducts: "assets/images/product/product-6.jpg"
        },
        {
          name: "Nike Journey Run",
          description:
            "Enjoy every step, route and jaunt in the Nike Journey Run. It'll have you striding and smiling on punishing pavements, thanks to extra-high foam stacks and super-soft cushioning. It's so comfy that you'll already be looking forward to lacing 'em up again.",
          benefit: [
            "Engineered mesh helps your feet feel secure.",
            "Extra cushioning in the heel and soft touch points in the tongue and collar add comfort.",
            "The rubber outsole provides traction for your miles.",
          ],
          size: [
            "35.5",
            "36",
            "36.5",
            "37.5",
            "38",
            "38.5",
            "39",
            "40",
            "40.5",
            "41",
            "42",
          ],
          price: "1,399,000",
          priceDiscount: "1,000,000",
          imageProducts: "assets/images/product/product-7.jpg"
        },
        {
          name: "Nike Journey Run",
          description:
            "Enjoy every step, route and jaunt in the Nike Journey Run. It'll have you striding and smiling on punishing pavements, thanks to extra-high foam stacks and super-soft cushioning. It's so comfy that you'll already be looking forward to lacing 'em up again.",
          benefit: [
            "Engineered mesh helps your feet feel secure.",
            "Extra cushioning in the heel and soft touch points in the tongue and collar add comfort.",
            "The rubber outsole provides traction for your miles.",
          ],
          size: [
            "35.5",
            "36",
            "36.5",
            "37.5",
            "38",
            "38.5",
            "39",
            "40",
            "40.5",
            "41",
            "42",
          ],
          price: "1,399,000",
          priceDiscount: "1,000,000",
          imageProducts: "assets/images/product/product-8.jpg"
        },
      ],
  }
})
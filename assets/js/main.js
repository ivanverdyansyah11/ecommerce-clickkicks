var home=new Vue({ 
	el: '#main',
	data: {
    allProducts: [
        {
          id: 1,
          name: "Nike V2K Run",
          description: "Fast forward. Rewind. Doesn't matter—this shoe takes retro into the future. The V2K remasters everything you love about the Vomero in a look pulled straight from an early '00s running catalogue. Layer up in a mixture of flashy metallics, referential plastic details and a midsole with a perfectly vintage aesthetic. And the chunky heel makes sure wherever you go, it's in comfort.",
          benefit: ["Mesh upper feels light and airy.", "Dual-density foam midsole creates a comfortable ride.", "Translucent plastic accents reference the classic Nike Vomero 5.", "Rubber outsole gives you durable traction.", "Colour Shown: White/Platinum Tint/Pure Platinum/Metallic Silver", "Style: FD0736-104", "Country/Region of Origin: Vietnam"],
          size: ["35.5", "36", "36.5", "37.5", "38", "38.5", "39", "40", "40.5", "41", "42"],
          price: "1,909,000",
          priceDiscount: "1,550,000",
          imageProducts: "assets/images/product/product-1.jpg"
        },
        {
          id: 2,
          name: "Nike Air More Uptempo '96",
          description: "Tall about the A-I-R. The Air More Uptempo '96 refreshes an original that has reigned supreme for more than 20 years. With a design inspired by high-flying basketball style and '90s graffiti art, these kicks can't help but turn heads off court. Plus, Air units in the heel, forefoot and midfoot provide comfortable cushioning, so you feel as good as you look.",
          benefit: ["Real and synthetic leather create a layered look built to last.", "Oversized, graffiti-inspired branding celebrates the streets you walk and the Air you walk on.", "Originally designed for performance hoops, Max Air units add lightweight cushioning.", "Rubber outsole provides traction and durability.", "Colour Shown: White/Vintage Green/Summit White/Sea Glass", "Style: FN6249-100", "Country/Region of Origin: Vietnam"],
          size: ["35.5", "36", "36.5", "37.5", "38", "38.5", "39", "40", "40.5", "41", "42"],
          price: "2,849,000",
          priceDiscount: "2,500,000",
          imageProducts: "assets/images/product/product-2.jpg"
        },
        {
          id: 3,
          name: "Nike P-6000",
          description: "The Nike P-6000 draws on the 2006 Nike Air Pegasus, bringing you a mash-up of iconic style that's breathable, comfortable and evocative of that early-2000s vibe.",
          benefit: ["Tongue webbing with Bowerman Series branding", "A full rubber outsole gives you durable traction.", "Foam midsole provides lightweight cushioning for a plush underfoot feel.", "Colour Shown: White/Metallic Silver/Black/Dusty Cactus", "Style: CD6404-103", "Country/Region of Origin: Vietnam" ],
          size: ["35.5", "36", "36.5", "37.5", "38", "38.5", "39", "40", "40.5", "41", "42"],
          price: "1,429,000",
          priceDiscount: "1,000,000",
          imageProducts: "assets/images/product/product-3.jpg"
        },
        {
          id: 4,
          name: "Nike Dunk Low Twist",
          description: "The 80s b-ball icon returns with classic details and throwback hoops flair. Channelling vintage style back onto the streets, its padded collar and extra-puffy silhouette let you take your game anywhere—in comfort.",
          benefit: ["Leather in the upper softens and gains vintage character with wear.", "Foam midsole offers lightweight, responsive cushioning.", "A rubber outsole with hoops pivot circle adds durable traction.", "Padded, low-cut collar looks sleek and feels great.", "Colour Shown: Light Silver/White/Sail", "Style: DZ2794-004", "Country/Region of Origin: Indonesia"],
          size: ["35.5", "36", "36.5", "37.5", "38", "38.5", "39", "40", "40.5", "41", "42"],
          price: "1,729,000",
          priceDiscount: "1,250,000",
          imageProducts : "assets/images/product/product-4.jpg"
        },
        {
          id: 5,
          name: "Nike Air Force 1 '07 LV8",
          description: "Comfortable, durable and timeless—it's number 1 for a reason. The classic '80s construction is paired with premium details for style that tracks whether you're on court or on the go.",
          benefit: ["Leather upper softens and gains vintage character with wear.", "Originally designed for performance hoops, the Nike Air cushioning adds lightweight, all-day comfort.", "Padded, low-cut collar looks sleek and feels great.", "Colour Shown: White/Vintage Green/Summit White/Sea Glass", "Style: HF1939-100", "Country/Region of Origin: Vietnam"],
          size: ["35.5", "36", "36.5", "37.5", "38", "38.5", "39", "40", "40.5", "41", "42"],
          price: "1,909,000",
          priceDiscount: null,
          imageProducts: "assets/images/product/product-5.jpg"
        },
        {
          id: 6,
          name: "Nike Full Force Low",
          description: "A new shoe with old-school appeal—your retro dreams just came true. This pared-back design references the classic AF-1, then leans into '80s style with stitched overlays and varsity-inspired colours. Not everything has to be a throwback, though—modern comfort and durability make them easy to wear any time, anywhere. Time to throw them on and go full force.",
          benefit: ["The upper mixes leather and suede for a layered look built to last.", "Rubber outsole provides durable traction.", "Colour Shown: White/Sea Glass/Cosmic Clay/Vintage Green", "Style: HF1739-100", "Country/Region of Origin: Vietnam"],
          size: ["35.5", "36", "36.5", "37.5", "38", "38.5", "39", "40", "40.5", "41", "42"],
          price: "1,549,000",
          priceDiscount: null,
          imageProducts: "assets/images/product/product-6.jpg"
        },
        {
          id: 7,
          name: "Nike Journey Run",
          description: "Enjoy every step, route and jaunt in the Nike Journey Run. It'll have you striding and smiling on punishing pavements, thanks to extra-high foam stacks and super-soft cushioning. It's so comfy that you'll already be looking forward to lacing 'em up again.",
          benefit: ["Engineered mesh helps your feet feel secure.", "Extra cushioning in the heel and soft touch points in the tongue and collar add comfort.", "The rubber outsole provides traction for your miles.", "Colour Shown: White/Fire Red/Cement Grey/Black", "Style: FN0228-103", "Country/Region of Origin: Vietnam"],
          size: ["35.5", "36", "36.5", "37.5", "38", "38.5", "39", "40", "40.5", "41", "42"],
          price: "1,399,000",
          priceDiscount: "1,000,000",
          imageProducts: "assets/images/product/product-7.jpg"
        },
        {
          id: 8,
          name: "Nike Journey Run",
          description: "Enjoy every step, route and jaunt in the Nike Journey Run. It'll have you striding and smiling on punishing pavements, thanks to extra-high foam stacks and super-soft cushioning. It's so comfy that you'll already be looking forward to lacing 'em up again.",
          benefit: ["Engineered mesh helps your feet feel secure.","Extra cushioning in the heel and soft touch points in the tongue and collar add comfort.","The rubber outsole provides traction for your miles.","Colour Shown: Summit White/Glacier Blue/Barely Volt/Bright Crimson","Style: FJ7765-101","Country/Region of Origin: Vietnam"],
          size: ["35.5","36","36.5","37.5","38","38.5","39","40","40.5","41","42"],
          price: "1,399,000",
          priceDiscount: "1,000,000",
          imageProducts: "assets/images/product/product-8.jpg"
        },
      ],
    dataDetail: {
      id: "",
      name: "",
      description: "",
      benefit: [],
      size: [],
      price: "",
      priceDiscount: "",
      imageProducts: ""
    },
    directory: {
      selectedSize: "",
      selectedQuantity: 0,
      inputNote: "",
      selectedPackaging: "",
    },
    carts: [],
    totalPriceCart: 0,
  },
  methods: {
    seeProduct(index) {
      this.dataDetail.id = this.allProducts[index].id - 1
      this.dataDetail.name = this.allProducts[index].name
      this.dataDetail.description = this.allProducts[index].description
      this.dataDetail.benefit = this.allProducts[index].benefit
      this.dataDetail.size = this.allProducts[index].size
      this.dataDetail.price = this.allProducts[index].price
      this.dataDetail.priceDiscount = this.allProducts[index].priceDiscount
      this.dataDetail.imageProducts = this.allProducts[index].imageProducts
      
      this.directory.selectedSize = ""
      this.directory.selectedQuantity = 0
      this.directory.inputNote = ""
      this.directory.selectedPackaging = ""

      console.log(this.carts.length);
    },

    selectSizeProduct() {
      if (this.directory.selectedSize == "") {
        alert('Select size correctly!')
      }
    },

    addCartProduct() {
      if (this.directory.selectedSize == "") {
        alert('Select size first!')
      } else if(this.directory.selectedQuantity == 0) {
        alert('Select quantity first!')
      } else if(this.directory.selectedPackaging == 0) {
        alert('Select packaging first!')
      } else {
        let cart_id = 0;
        if (this.carts.length > 0) {
          const lastCartId = this.carts[this.carts.length - 1].id;
          cart_id = lastCartId + 1;
        }
        let priceProduct = 0
        if (this.allProducts[this.dataDetail.id].priceDiscount != null) {
          priceProduct = this.allProducts[this.dataDetail.id].priceDiscount
        } else {
          priceProduct = this.allProducts[this.dataDetail.id].price
        }
        priceProduct = parseInt(priceProduct.replace(/,/g, ''))
        this.totalPriceCart += priceProduct * this.directory.selectedQuantity
        this.carts.push({
          id: cart_id,
          product_id: this.dataDetail.id,
          size: this.directory.selectedSize,
          quantity: this.directory.selectedQuantity,
          note: this.directory.inputNote,
          packaging: this.directory.selectedPackaging,
        })
        alert('Successfully add product to cart!')
      }
    },

    buyNowProduct() {
      if (this.directory.selectedSize == "") {
        alert('Select size first!')
      } else if(this.directory.selectedQuantity == 0) {
        alert('Select quantity first!')
      } else if(this.directory.selectedPackaging == 0) {
        alert('Select packaging first!')
      } else {
        if (this.directory.inputNote == "") {
          this.directory.inputNote = "-"
        }

        window.location.href = "https://wa.me/6281238484005?text=Hallo,%20Saya%20ingin%20memesan%20%0AProduk: %20" + this.allProducts[this.dataDetail.id].name + "%20%0AUkuran: %20" + this.directory.selectedSize + " UK %20%0AJumlah: %20" + this.directory.selectedQuantity + " Pasang %20%0AKemasan: %20" + this.directory.selectedPackaging + "%20%0APermintaan Spesial: %20" + this.directory.inputNote + "%20%0A%20%0ATerimakasih"
      }
    },

    deleteProductFromCart(cartId) {
      const index = this.carts.findIndex(item => item.id === cartId);
      if (index !== -1) {
        this.carts.splice(index, 1);
        alert('Successfully delete product from cart!')
      } else {
        alert('Failed to delete product from cart!')
      }
    },

    buyAllProducts() {
      let message = "Hallo,%20Saya%20ingin%20memesan%20seluruh%20produk%20di%20keranjang%20%0A"
      for (const cartItem of this.carts) {
        const product = this.allProducts.find(item => item.id === cartItem.product_id)
        message += "%20%0AProduk: " + product.name
        message += "%20%0AJumlah: " + cartItem.quantity + " Pasang"
        message += "%20%0AUkuran: " + cartItem.size + " UK"
        message += "%20%0AKemasan: " + cartItem.packaging
        message += "%20%0APermintaan Spesial: " + (cartItem.note !== '' ? cartItem.note : '-')
        message += "%20%0A"
      }
      message += "%20%0ATerimakasih"
      window.location.href = "https://wa.me/6281238484005?text=" + message
      this.carts = []
      this.totalPriceCart = 0
    }
  }
})
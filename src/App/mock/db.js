import sn1 from '../assets/a1rmaniere.png'
import sn2 from '../assets/nb550.png'
import sn3 from '../assets/prods/3/forum.png'
import sn4 from '../assets/retro4.png'
import sn5 from '../assets/prods/1/barely-green.png'
import sn6 from '../assets/prods/2/purple.png'
import sn7 from '../assets/prods/3/se-indigo.png'
import sn8 from '../assets/prods/5/green2.png'
import sn9 from '../assets/prods/6/blazer.png'
import sn10 from '../assets/prods/7/apricot-orange.png'
import sn11 from '../assets/prods/canyon-rust.png'
import sn12 from '../assets/prods/yeezy-inertia.png'


const dbProducts = [
  {
    name:'Air Jordan 1 maniere',
    price: 310,
    img: sn1,
    des:'The Air Jordan 1 A Ma Maniére features a premium cracked leather upper with burgundy reptilian-textural leather collars and Swooshes. Silky quilted lining and custom woven tongue and insole labels add a sense of luxury. At the base, a yellowed sole provides a vintage feel to complete the design.',
    size: '8.5 US',
    stock: 15,
    id: 1
  },
  {
    name:'New Balance 550 x Aime',
    price: 130,
    img: sn2,
    des:'White leather dominates the upper, all the better to show off all the Mocha accents, like the “550” branding on the lateral forefoot, the panel near the collar, the heel clip, the bit of mesh on the toe box and the tongue lining. The candy bar-looking raised “N” logos on both sides of the shoe have the added dimension of a cracked leather finish. A vintage-looking cream midsole and a solid Mocha rubber outsole cap off the shoe’s design.',
    size: '9 US',
    stock: 81,
    id: 2
  },
  {
    name:'Adidas Forum pink Easter Egg',
    price: 520,
    img: sn3,
    des:'The Bad Bunny x adidas Forum Buckle Low Easter Egg represents the pastel continuation of the duos inaugural collaboration (First Cafe), which preceded this holiday-themed release by less than a month. The retro hoops shoe from adidas is updated with a leather and suede structure, in subtle shades of pink and coral and updated with modern details. They include an adjustable ankle strap and fold over tabs, both featuring Bad Bunnys third eye logo. A durable rubber outsole with semi-translucent sidewalls anchors the low top.',
    size: '12.5 US',
    stock: 10,
    id: 3
  },
  {
    name:'Air Jordan 4 retro blue University',
    price: 200,
    img: sn4,
    des:'The Air Jordan 4 Retro University Blue updates the classic silhouette with a suede upper in a familiar hue inspired by Michael Jordans UNC alma mater. The bright blue palette is contrasted by a speckled grey finish on the sneakers supportive wings and back heel, featuring a raised Jumpman icon in black. Secondary Jumpman branding adorns the woven tongue tag, designed to mimic a jock tag that typically appears on the bottom hem of Jordan jerseys.',
    size: '8 US',
    stock: 66,
    id: 4
  },
  {
    name:'Air Jordan 1 Low Barely Green',
    price:245,
    img:sn5,
    des:'Air Jordan 1 Low Barely Green is highlighted by its pastel green. It adds a pink corset to the silhouette and gives it a unique look.',
    size:'9.5 US',
    stock:19,
    id:5,
  },
  {
    name:'Air Jordan 1 Low Purple',
    price:199,
    img:sn6,
    des:'The Air Jordan 1 Low Court Purple comes with color-blocking similar to the Jordan 1 High Court Purple White. The Court Purple features distinct purple overlays and a white leather base that gives it a timeless appearance. Extra details that enhance its look include a black nylon tongue, black laces, and a black leather Swoosh on the medial panels. The condensed Air-Sole element offers lightweight cushioning while its grooved outsole improves surface traction',
    size:'7.5 US',
    stock:49,
    id:6
  },
  {
    name:'Air Force 1 Low Indigo',
    price:160,
    img:sn7,
    des:'The Womens Nike Air Force 1 Low “Indigo” is a clean look for the popular lifestyle shoe that draws design inspiration from plants and nature. The “Indigo” is one of several womens exclusive, botanical-inspired colorways of the Air Force 1 Low that comprise Nikes Summer 2021 collection. Here, the models white canvas upper takes the place of the Air Force 1s traditional leather construction for a vibe that plays into the shoes earthy theme.',
    size:'7 US',
    stock:66,
    id:7
  },
  {
    name:'Air Jordan 1 Low St Patricks',
    price: 575,
    img:sn8,
    des:'The Nike Air Force 1 St. Patricks Day features a Mean Green, Pine Green, and white leather upper. Four-leaf clovers are imprinted on the ankle wrap as a tribute to the Irish holiday. Gold lace dubraes, a green woven tongue label, and a white with green Air sole complete this St. Paddys Day-themed release.',
    size: '9 US',
    stock: 10,
    id: 8,
  },
  {
    name:'Nike Blazer 77 Low',
    price: 100,
    img: sn9,
    des: 'Low-top grained leather sneakers in white. Textile logo patch and raw edge at padded canvas tongue. Logo printed at heel counter. Buffed leather Swoosh appliqué at sides.',
    size: '10.5 US',
    stock: 33,
    id:9
  },
  {
    name:'Air Jordan 1 Mid Apricot Orange',
    price: 280,
    img: sn10,
    des:'The Air Jordan 1 Mid Apricot Orange has a grey leather base with orange leather inserts. Several pink accents on the suede overlays and the side Swoosh make for a summery look. A white Jordan Wings logo and an orange Jumpman on the tongue complete the look.',
    size: '13 US',
    stock: 52,
    id: 10
  },
  {
    name: 'Air Jordan 1 Low Canyon Rust',
    price: 215,
    img:sn11,
    des:'The Women’s Air Jordan 1 Low "Canyon Rust" is a women’s version of Michael Jordan’s first signature shoe in a unique mix of tones. Yet another vibrant look for the popular low-top Jordan 1, the "Canyon Rust" features synthetic nubuck panels in Canyon Rust on the perforated toe and on the mid-panel and on the nylon tongue. Beige overlays appear on the forefoot, lower eyelets, collar, and heel. Elsewhere, buttery Purple Smoke suede detailing can be found on the toe cap and upper eyelets and the same shade of dusty purple is used on the laces. A black Swoosh with glitter speckling appears on either side and a black "Wings" logo is embroidered on the heel.',
    size: '7.5 US',
    stock: 39,
    id: 11
  },
  {
    name:'Adidas Yeezy 700 Inertia',
    price: 544,
    img:sn12,
    des:'The adidas Yeezy Boost 700 ‘Inertia’ is part of the Yeezy Season 8 lineup that launched March 2019. The ‘Inertia’ colorway showcases the original 700 upper, with a heavily paneled construction made with premium suede, mesh and smooth leather sections. Cast primarily in cool grey tones, the sneaker includes hits of Tangerine for contrast. The shoe’s signature chunky midsole is equipped with full-length Boost cushioning for responsive comfort.',
    size: 11,
    stock: 33,
    id:12
  }
]


export default dbProducts
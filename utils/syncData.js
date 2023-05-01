const db = require("./database");
const Product = require("../models/products");
const User = require("../models/Users");
const Cart = require("../models/Cart");
const CartItem = require("../models/CartItems");
const Order = require("../models/Order");
const OrderItem = require("../models/OrderItems");
const bcrypt = require("bcrypt");

User.hasOne(Cart);
User.hasMany(Product);
User.hasMany(Order);
Cart.belongsTo(User);
Cart.hasMany(CartItem);
// CartItems has a cartId and ProductId
Cart.belongsToMany(Product, { through: CartItem, unique: false });
Product.belongsToMany(Cart, { through: CartItem, unique: false });
Product.belongsToMany(Order, { through: OrderItem, unique: false });
Order.belongsTo(User);
// Order has a userId
Order.belongsToMany(Product, { through: OrderItem, unique: false });
// OrderItems has a productId and orderId

const setupDB = async () => {
  await db.sync({ force: true });
  // Hashing the password before saving to DB tables, 10 salt rounds
  User.addHook("beforeSave", async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
  });
  const [user1, user2] = await Promise.all([
    User.create({
      username: "chris",
      password: "123",
      email: "freshbaos@gmail.com",
      isAdmin: true,
    }),
    User.create({
      username: "test",
      email: "test2@gmail.com",
      password: "123",
    }),
  ]);
  const [
    cdp,
    rummynose,
    peapuffer,
    dwarfEmeraldRasbora,
    emberTetra,
    neonTetra,
    chilliRasbora,
    clownKilli,
    koiBetta,
    scarletBadis,
  ] = await Promise.all([
    Product.create({
      name: "Galaxy Rasboras",
      price: 4.99,
      description:
        "The Galaxy Rasbora is a tropical fish that has remained a favorite amongst aquarists since its discovery in 2006. This fish is one of the latest additions to the aquarium trade that caused a great hit with fish keepers worldwide. The fish has got a fantastic coloration on its body, the reason why it is one of the most sought tropical fish for aquariums.",
      img: "https://theaquariumguide.com/wp-content/uploads/2018/08/Galaxy-Rasbora.jpg",
      userId: 1,
    }),
    Product.create({
      name: "Rummynose Tetra",
      price: 2.99,
      description:
        "The rummy-nose tetra is a species of tropical freshwater characin fish originating in South America, popular among fishkeepers as a tropical aquarium fish. One of many small tetras belonging to the same genus, it is on average 5 cm long when fully grown.",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Brilliant_rummy_nose_-_Petitella_bleheri.jpg",
    }),
    Product.create({
      name: "Pea Puffer",
      price: 4.5,
      description:
        "The dwarf pufferfish, also known as the Malabar pufferfish, pygmy pufferfish, or pea pufferfish, is a small freshwater pufferfish endemic to Kerala and southern Karnataka in Southwest India. They are popular in aquaria for their bright colours and small size.",
      img: "https://www.garnelio.de/media/image/07/b1/b8/shutterstock-1935073154-2_600x600.jpg",
    }),
    Product.create({
      name: "Emerald Dwarf Rasbora",
      price: 4.99,
      description:
        "Danio erythromicron, often known as emerald dwarf danio and emerald dwarf rasbora, is a species of cyprinid fish which is endemic to Inle Lake in Myanmar. ",
      img: "https://i0.wp.com/plantedaquaria.ca/wp-content/uploads/2021/08/EmeralDwarfRasbora_1200x1200-e1629494083260.jpg?fit=1080%2C732&ssl=1",
    }),
    Product.create({
      name: "Ember Tetra",
      price: 1.99,
      description:
        "The ember tetra is a freshwater fish of the characin family of order Characiformes. It is native to the Araguaia River basin of Brazil and was discovered in 1987 and named in honor of the fish explorer Heiko Bleher's mother.",
      img: "https://cdn.shopify.com/s/files/1/2982/1930/products/ember_tetra_grande.jpg?v=1551035535",
    }),
    Product.create({
      name: "Neon Tetra",
      price: 1.99,
      description:
        "The neon tetra is a Freshwater fish of the characin family of order Characiformes. The type species of its genus, it is native to blackwater and clearwater streams in the Amazon basin of South America.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Neonsalmler_Paracheirodon_innesi.jpg/800px-Neonsalmler_Paracheirodon_innesi.jpg",
    }),
    Product.create({
      name: "Chilli Rasbora",
      price: 2.99,
      description:
        "Boraras brigittae is a species of ray-finned fish in the genus Boraras, also known as chili rasboras or mosquito rasboras, are a very small species of fishes native to the swamps of South West Borneo, Indonesia. ",
      img: "https://www.aquariadise.com/wp-content/uploads/2020/06/chili-ras.jpg",
    }),
    Product.create({
      name: "Clown killifish",
      price: 5.99,
      description:
        "The clown killi or banded panchax, is a species of fish in the family Nothobranchiidae, an African rivuline, native to fresh water habitats in Guinea, Liberia and Sierra Leone in West Africa.",
      img: "https://azgardens.com/wp-content/uploads/2017/06/Clown-Killifish-2.jpg",
    }),
    Product.create({
      name: "Assorted Koi Betta",
      price: 19.99,
      description:
        "If you have seen the koi betta, otherwise called the marbled betta, you can see how they got their name. These bettas have the same erratically spotted patterns as Japanese koi fish. If you have ever owned a betta fish before, you’re already up for the challenge. But, if you haven’t, we will discuss primary care and requirements to keep this fish happy and healthy throughout its lifetime.",
      img: "https://fishlab.com/wp-content/uploads/2022/04/male-galaxy-koi-betta.jpg",
    }),
    Product.create({
      name: "Scarlet Badis",
      price: 6.99,
      description:
        "The scarlet badis is a tropical freshwater fish and one of the smallest known percoid fish species. It is a micropredator, feeding on small aquatic crustaceans, worms, insect larvae and other zooplankton. It is sold under a variety of names in the aquarium trade.",
      img: "https://www.aquariadise.com/wp-content/uploads/2020/06/scarlet-badis.jpg",
    }),
  ]);
};

module.exports = setupDB;

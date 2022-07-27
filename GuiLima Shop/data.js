class Skate {

    constructor(
        id,
        marca,
        desc,
        price,
        imgUrl,
    ) {

        this.id = id;
        this.marca = marca;
        this.desc = desc;
        this.price = price;
        this.imageUrl = imgUrl;
        this.priceDiscount = Math.round((price * 0.4), 2);
        this.currency = '€';
        this.discount = '- 40%';
    }
}

let skateboard = [
    {
        id: 0,
        marca: 'ELEMENT BRAND',
        desc: "Element Brand Trip Out Street Skate",
        price: '110,00 €',
        priceDiscount: '66,00 €',
        imageUrl: '/Media/products/skateboards/1.png',
        href: '#',
        discount: '- 40%',
        currency: '€'

    },
    {
        id: 1,
        marca: 'GLOBE BRAND',
        desc: "Globe Brand G2 On the Brink Shelter",
        price: '129,95 €',
        priceDiscount: '77,97 €',
        imageUrl: '/Media/products/skateboards/2.png',
        href: '#',
        discount: '- 40%',
        currency: '€'

    },
    {
        id: 2,
        marca: 'GLOBE BRAND',
        desc: "Globe Brand G1 Ablaze Tie Dye",
        price: '109,95 €',
        priceDiscount: '87,96 €',
        imageUrl: '/Media/products/skateboards/3.png',
        href: '#',
        discount: '- 20%',
        currency: '€'
    },
    {
        id: 3,
        marca: 'CREATURE BRAND',
        desc: "Creature Skateboards Ripped Logo Micro",
        price: '99,99 €',
        priceDiscount: '89,99 €',
        imageUrl: '/Media/products/skateboards/4.png',
        href: '#',
        discount: '- 10%',
        currency: '€'
    },
];


let shoes = [
    {
        id: 0,
        marca: 'VANS',
        desc: "Skate Half Cab 92",
        price: '45,00 €',
        priceDiscount: '40,50 €',
        imageUrl: '/Media/products/shoes/1.png',
        href: '#',
        discount: '- 10%',

    },
    {
        id: 1,
        id: 0,
        marca: 'NIKE',
        desc: "Air Force Limited Edition 92",
        price: '89,99 €',
        priceDiscount: '53,99 €',
        imageUrl: '/Media/products/shoes/2.png',
        href: '#',
        discount: '- 40%'

    },
    {
        id: 2,
        id: 0,
        marca: 'NIKE',
        desc: "Air Jordan Signed 85",
        price: '259,00 €',
        priceDiscount: '207,2 €',
        imageUrl: '/Media/products/shoes/3.png',
        href: '#',
        discount: '- 20%'
    },
    {
        id: 3,
        id: 0,
        marca: 'NIKE',
        desc: "Original AirMax",
        price: '99,99 €',
        priceDiscount: '89,99 €',
        imageUrl: '/Media/products/shoes/2.png',
        href: '#',
        discount: '- 10%'
    },
];


let bmxs = [
    {
        id: 0,
        marca: 'SUNDAY BLUEPRINT',
        desc: "Sunday Blueprint 16 bmx bike 2022",
        price: '45,00 €',
        priceDiscount: '40,50 €',
        imageUrl: '/Media/products/bmx/1.png',
        href: '#',
        discount: '- 10%',

    },
    {
        id: 1,
        id: 0,
        marca: 'WETHEPEOPLE',
        desc: "Wethepeople Nova 2021 bmx bike",
        price: '89,99 €',
        priceDiscount: '53,99 €',
        imageUrl: '/Media/products/bmx/2.png',
        href: '#',
        discount: '- 40%'

    },
    {
        id: 2,
        id: 0,
        marca: 'SUBROSA',
        desc: "Altus 16 BMX BIKE 2022",
        price: '259,00 €',
        priceDiscount: '207,2 €',
        imageUrl: '/Media/products/bmx/3.png',
        href: '#',
        discount: '- 20%'
    },
    {
        id: 3,
        id: 0,
        marca: 'SUNDAY PRIMER',
        desc: "SUNDAY PRIMER 16 BMX BIKE 2022",
        price: '99,99 €',
        priceDiscount: '89,99 €',
        imageUrl: '/Media/products/bmx/4.png',
        href: '#',
        discount: '- 10%'
    },
];

let trucks = [
    {
        id: 0,
        marca: 'SUNDAY BLUEPRINT',
        desc: "Sunday Blueprint 16 bmx bike 2022",
        price: '45,00 €',
        priceDiscount: '40,50 €',
        imageUrl: '/Media/products/trucks/1.png',
        href: '#',
        discount: '- 10%',

    },
    {
        id: 1,
        id: 0,
        marca: 'WETHEPEOPLE',
        desc: "Wethepeople Nova 2021 bmx bike",
        price: '89,99 €',
        priceDiscount: '53,99 €',
        imageUrl: '/Media/products/trucks/2.png',
        href: '#',
        discount: '- 40%'

    },
    {
        id: 2,
        id: 0,
        marca: 'SUBROSA',
        desc: "Altus 16 BMX BIKE 2022",
        price: '259,00 €',
        priceDiscount: '207,2 €',
        imageUrl: '/Media/products/trucks/3.png',
        href: '#',
        discount: '- 20%'
    },
    {
        id: 3,
        id: 0,
        marca: 'SUNDAY PRIMER',
        desc: "SUNDAY PRIMER 16 BMX BIKE 2022",
        price: '99,99 €',
        priceDiscount: '89,99 €',
        imageUrl: '/Media/products/trucks/4.png',
        href: '#',
        discount: '- 10%'
    },
];
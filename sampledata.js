const farmerListings = [
  {
    farmerName: "Ramesh Gowda",
    wastetype: "Sugarcane Bagasse",
    quantity: 1800,
    location: "Mandya, Karnataka",
    contactPhone: "9876543210",
    image: "https://media.istockphoto.com/photos/bagasse-picture-id465653234?k=20&m=465653234&s=612x612&w=0&h=KPJqFgzyfzcPPeq007iLnX6Rcdwzy81N57jG4V1MKbo="
  },
  {
    farmerName: "Mahesh Patel",
    wastetype: "Cotton Plant Residue",
    quantity: 2200,
    location: "Ahmedabad, Gujarat",
    contactPhone: "9823124578",
    image: "https://images.indianexpress.com/2023/01/banana-stalk_1200_getty.jpg"
  },
  {
    farmerName: "Suresh Naik",
    wastetype: "Banana Stem Waste",
    quantity: 950,
    location: "Udupi, Karnataka",
    contactPhone: "9901122334",
    image: "https://tse1.mm.bing.net/th/id/OIP.XFt6rTiRIJNdAueAqlhs1AHaDw?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    farmerName: "Arjun Sharma",
    wastetype: "Wheat Husk",
    quantity: 3000,
    location: "Jaipur, Rajasthan",
    contactPhone: "9988776655",
    image: "https://image.shutterstock.com/z/stock-photo-yellow-rice-chaff-rice-husk-rice-hull-background-texture-close-up-2052212027.jpg"
  },
  {
    farmerName: "Kamal Singh",
    wastetype: "Rice Straw",
    quantity: 4500,
    location: "Ludhiana, Punjab",
    contactPhone: "9877012345",
    image: "https://thumbs.dreamstime.com/b/rice-straw-field-35632357.jpg"
  },
  {
    farmerName: "Lokesh Reddy",
    wastetype: "Groundnut Shells",
    quantity: 850,
    location: "Anantapur, Andhra Pradesh",
    contactPhone: "9845612345",
    image: "https://tse2.mm.bing.net/th/id/OIP.MDVgyaOfF-J7r-T9daPNcgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    farmerName: "Vinay Kulkarni",
    wastetype: "Turmeric Plant Waste",
    quantity: 600,
    location: "Kolhapur, Maharashtra",
    contactPhone: "9765432180",
    image: "https://www.researchgate.net/publication/372247638/figure/fig1/AS:11431281173797680@1689042149619/After-drying-a-Gloriosa-superba-wastes-and-b-turmeric-leaves-waste.png"
  },
  {
    farmerName: "Harish Yadav",
    wastetype: "Maize Stalk",
    quantity: 3200,
    location: "Indore, Madhya Pradesh",
    contactPhone: "9988772211",
    image: "https://tse1.mm.bing.net/th/id/OIP.4HT3GTwkXQn52q54OHcXbQHaFb?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    farmerName: "Manoj Verma",
    wastetype: "Coconut Husk",
    quantity: 1500,
    location: "Cochin, Kerala",
    contactPhone: "9911223344",
    image: "https://tse2.mm.bing.net/th/id/OIP.9RXaAVtrcFncxI6OW-POPwHaFS?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    farmerName: "Praveen Shetty",
    wastetype: "Areca Leaf Waste",
    quantity: 700,
    location: "Shimoga, Karnataka",
    contactPhone: "9645123789",
    image: "https://i.ytimg.com/vi/rpl1nwes4y8/maxresdefault.jpg"
  },
  {
    farmerName: "Rajeev Kumar",
    wastetype: "Potato Peelings",
    quantity: 500,
    location: "Patna, Bihar",
    contactPhone: "9123456789",
    image: "https://media.istockphoto.com/id/666977074/photo/potato-peelings.jpg?s=612x612&w=0&k=20&c=EGpC2Ov5Im8nMduM9rO9v6Je5E8_M2pnT4jzj2z788E="
  },
  {
    farmerName: "Deepak Pandey",
    wastetype: "Dry Corn Cobs",
    quantity: 1800,
    location: "Varanasi, UP",
    contactPhone: "9988112233",
    image: "https://static.vecteezy.com/system/resources/previews/050/628/604/non_2x/dried-corn-husks-and-cobs-on-the-ground-highlight-agricultural-waste-and-environmental-concerns-in-rural-farming-regions-during-harvest-season-photo.jpg"
  },
  {
    farmerName: "Siddharth Rao",
    wastetype: "Paddy Husk",
    quantity: 3500,
    location: "Nellore, Andhra Pradesh",
    contactPhone: "9845221133",
    image: "https://thumbs.dreamstime.com/b/sustainable-energy-paddy-husk-renewable-biomass-fuel-source-greener-future-harnessing-power-agricultural-waste-374606190.jpg?w=992"
  },
  {
    farmerName: "Ganesh Hegde",
    wastetype: "Cashew Nut Shell Waste",
    quantity: 900,
    location: "Karwar, Karnataka",
    contactPhone: "9632587410",
    image: "https://tse1.mm.bing.net/th/id/OIP.96wA3CBec5bsqi-aAij2qAHaHP?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    farmerName: "Ravi Prakash",
    wastetype: "Tomato Plant Residue",
    quantity: 750,
    location: "Nashik, Maharashtra",
    contactPhone: "9087654321",
    image: "https://tse3.mm.bing.net/th/id/OIP.p8g1WKTYXoTdyf9HsgzJ_wHaE6?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    farmerName: "Harikrishna",
    wastetype: "Green Chili Plant Waste",
    quantity: 600,
    location: "Hubli, Karnataka",
    contactPhone: "9823456712",
    image: "https://i.ytimg.com/vi/A20LDuS12iY/maxresdefault.jpg"
  },
  {
    farmerName: "Santosh Poojary",
    wastetype: "Jackfruit Waste",
    quantity: 400,
    location: "Mangalore, Karnataka",
    contactPhone: "9945332288",
    image: "https://wtop.com/wp-content/uploads/2019/11/jackfruit-getty.jpg"
  },
  {
    farmerName: "Narayan Swamy",
    wastetype: "Sugarcane Leaves",
    quantity: 2600,
    location: "Chitradurga, Karnataka",
    contactPhone: "9833124578",
    image: "https://tse1.mm.bing.net/th/id/OIP.Z72-5uAfd03pECuWdcaACgHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    farmerName: "Kiran Patil",
    wastetype: "Soybean Residue",
    quantity: 1400,
    location: "Nagpur, Maharashtra",
    contactPhone: "9753126480",
    image: "https://cdn.pixabay.com/photo/2016/11/17/14/24/soy-1831703_640.jpg"
  },
  {
    farmerName: "Anil Desai",
    wastetype: "Onion Dry Peel Waste",
    quantity: 550,
    location: "Belgaum, Karnataka",
    contactPhone: "9911664488",
    image: "https://th.bing.com/th/id/OIP.ZXHQH0HG14I2hMZtt-OSrQHaG9?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  }
];

module.exports = farmerListings;

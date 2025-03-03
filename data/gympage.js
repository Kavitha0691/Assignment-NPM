class GymFeature {
    constructor(name, description, benefits = [], price = "N/A", category = "General", slug= null) {
        this.name = name;
        this.slug = slug || name.trim().toLowerCase().replace(/\s+/g, '-'); 
        this.description = description;
        this.benefits = benefits;
        this.price = price;
        this.category = category;  
    }
}

// Gym Features
const gym= [
    new GymFeature(
        "Cardio",
        "Cardio (Cardiovascular Exercise) refers to physical activities that raise your heart rate and improve the efficiency of your heart and lungs. It's a crucial aspect of any fitness regimen aimed at improving endurance and overall heart health. Cardio workouts typically include activities like running, cycling, rowing, and swimming, which are designed to increase your heart rate and improve your cardiovascular endurance. These exercises are highly effective in burning fat, improving stamina, and enhancing overall fitness",
        ["Improves Stamina: Increases endurance levels, helping you to do more strenuous activities without getting tired quickly.Burns Calories: An excellent way to burn fat and lose weight, especially when combined with a healthy diet.Enhances Heart Health: Strengthens the heart and improves circulation, reducing the risk of cardiovascular diseases.Increases Metabolism: Helps you burn more calories even at rest, making it easier to maintain a healthy weight."],
        "Included in membershipTypically included in membership fees.",
        "Gym",  
    ),
    new GymFeature(
        "Weight Lift",
        "Weight Lifting (also known as Strength Training) involves lifting weights or using resistance machines to increase muscle strength, size, and endurance. This is a great way to build muscle mass, strengthen bones, and improve functional fitness. Weight lifting typically involves performing exercises that target specific muscle groups. These exercises can range from lifting dumbbells and barbells to using weight machines and kettlebells. Strength training is effective for toning muscles, increasing strength, and boosting metabolism.",
        ["Builds Muscle: Helps in increasing lean muscle mass, which not only improves strength but also enhances the body’s metabolic rate. Increases Bone Density: Weight-bearing exercises are excellent for increasing bone strength and preventing osteoporosis. Enhances Strength: Improves overall body strength, making everyday tasks easier. Boosts Metabolism: The more muscle you have, the more calories you burn at rest, aiding in fat loss."],
        "Typically varies depending on session or package (e.g., personal training sessions).",
        "Gym",
        
    ),
    new GymFeature(
        "Yoga",
        "Yoga is a physical and mental discipline that combines breath control, meditation, and specific body postures to promote physical flexibility, mental calmness, and emotional well-being. It’s often used to balance the body and mind and reduce stress. Yoga practices consist of different types of poses (asanas), breathing techniques (pranayama), and mindfulness exercises. It has various styles, such as Vinyasa, Hatha, Ashtanga, and Restorative, each offering different levels of intensity and focus. Yoga is perfect for improving flexibility, balance, and mental focus.",
        ["Improves Flexibility: Enhances range of motion in the joints and muscles, reducing stiffness and improving overall mobility. Reduces Stress: Helps in lowering stress levels through deep breathing and mindfulness, promoting relaxation. Boosts Mental Clarity: Encourages concentration and mental focus, aiding in stress relief and overall mental well-being. Enhances Posture: Regular yoga practice can lead to improved posture, helping with back and neck pain."],
        "10o kr per session (or as per membership terms)",
        "Gym",
    )
];

// Facilities
const facility = [
    new GymFeature(
        "Solarium",
        "The Solarium is a relaxation area where gym members can unwind and soak up some sun, either to promote relaxation or improve skin health. The solarium is a dedicated sunroom or area where individuals can enjoy the therapeutic effects of sunlight. Regular sun exposure can have various health benefits, including boosting vitamin D levels and improving mood. This is ideal for post-workout recovery, helping to relax your muscles after a session.",
        ["Vitamin D Boost: Sunlight exposure in the solarium helps your body produce vitamin D, essential for bone health and immune system function. Relaxation: Ideal for winding down after an intense workout, the solarium offers a calming environment for recovery and stress reduction. Skin Health: Sun exposure can promote better skin, reducing conditions like acne and improving complexion."],
        "50kr per session (or as per membership terms).",
        "Facility"
    ),
    new GymFeature(
        "Cafe Area",
        "The Cafe Area is a space where gym members can enjoy healthy snacks and beverages to refuel and recharge after their workouts. The cafe area offers a variety of nutritious options, such as fresh juices, protein shakes, healthy snacks, and light meals. This area provides a social and relaxing space where gym members can meet, chat, and recover while enjoying a refreshing beverage or snack.",
        ["Fresh Juices: Packed with vitamins and minerals, freshly squeezed juices provide an excellent post-workout boost. Protein Shakes: Ideal for muscle recovery, protein shakes help replenish nutrients after weight training or intense cardio. Comfortable Seating: The cafe area is designed to provide a relaxing environment for socializing and recovering from workouts. Nutritious Snacks: Healthy snack options like granola bars, nuts, and fruit help fuel the body and promote recovery."],
        "Varies depending on the item (e.g., 30kr for a juice, 50kr for a protein shake).",
        "Facility"
    ),
    new GymFeature( 
        "Shop",
        "The Shop offers gym members the opportunity to purchase premium gym gear, workout apparel, supplements, and other fitness essentials. The gym shop provides a curated selection of high-quality workout gear, apparel, and supplements designed to enhance the fitness experience. You’ll find everything from athletic wear, yoga mats, and dumbbells to protein powders, water bottles, and gym accessories..",
        ["Protein Shakes: Stocked with top-quality supplements for post-workout recovery and muscle growth. Gym Water Bottles: Stay hydrated with durable, eco-friendly water bottles designed for fitness enthusiasts. Workout Apparel: Shop for comfortable, stylish clothing designed for various types of workouts, including activewear, yoga pants, and shoes."],
        "Varies by product",
        "Facility"
    )
];

const booking = [
    new GymFeature(
        "Book a Pass",
        "The Book a Pass option offers one-day access to all gym facilities, making it a great choice for those who want to try out the gym for a day without committing to a membership. A one-day gym pass allows you to access all the gym's facilities and services for a single day. This includes everything from cardio equipment and strength training areas to classes, locker rooms, and even the sauna. Its the perfect option for first-time visitors or those who are in town for a short period.",
        ["Full Access: Enjoy access to all gym equipment, classes, and facilities. Locker Usage: Secure your personal belongings while you work out. Sauna Included: Unwind with a relaxing sauna session after your workout."],
        "$15 per pass",
        "Booking",
        "book-a-pass" 
    ),
    new GymFeature(
        "Book Yearly Pass",
        "The Yearly Pass offers unlimited gym access for an entire year at a discounted rate. This is the most cost-effective option for individuals who are committed to working out regularly. A yearly pass provides you with unrestricted access to all gym facilities, group classes, and special events for an entire year. The pass also includes additional benefits such as discounts on personal training and priority booking for popular classes.",
        ["24/7 Access: Get unlimited access to the gym whenever it fits your schedule. Discounts on Personal Training: Save on personal training sessions throughout the year. Free Group Classes: Participate in group fitness classes (such as yoga, circuit training, etc.) without additional cost."],
        "5000 kr per year",
        "Booking",
        "book-yearly-pass" 
    ),
    new GymFeature(
        "Become a Member",
        "Becoming a Member means you will have access to exclusive perks, priority booking, discounts on personal training, and invitations to special events hosted by the gym. Membership gives you full access to all gym facilities, priority booking for classes, and a range of special benefits. As a member, you’ll also receive discounted rates on personal training sessions and exclusive invites to member-only events and promotions..",
        ["Priority Booking: Get priority access to popular classes and equipment during peak hours.Discounted Personal Training: Enjoy reduced rates on personal training sessions, helping you reach your fitness goals faster.Special Events: Access exclusive member-only events, fitness challenges, and promotions."],
        "Membership fee applies (varies based on membership tier).",
        "Booking",
        "become-a-member" 
    )
];

const allFeatures = [...gym, ...facility, ...booking];
export { gym, facility, booking, allFeatures };

class gymPage {
    constructor() {
        this.mainSection = {
            title: "Proud Gym",
            description: "Discover the power of group training with our energy-filled workouts!",
            imageUrl: "/images/maingym.jpg",  
        };

        this.strongMamaSection = {
            title: "STRONG MAMA",
            subtitle: "– Training for Moms",
            description: "Get started with exercise in a safe and inspiring environment!",
            details: {
                courseInfo: [
                    { label: `\u{1F4C5}  Start Date`, value: "March 17 – April 14" },
                    { label: `\u{1F552}  Time`, value: "Mondays at 10:00 AM" },
                    { label: `\u{1F476}  Children`, value: "Children up to 1.5 years old are welcome" },
                    { label: `\u{1F465}  Participants`, value: "Max 8 participants – limited spots available!" }
                ],
            },
            imageUrl: "/images/strong-mamma.jpeg", 
        };

        this.popularClasses = [
            { name: "🏋️‍♂️ Circuit Training" },
            { name: "💃 Zumba & Dance" },
            { name: "🧓 Senior Training" },
            { name: "🏋️ Upper/Lower Body" },
            { name: "🥊 Boxing" },
            { name: "🧘 Yoga" },
            { name: "🏋️‍♀️ Core" },
            { name: "🏃 Run & Lift" }
        ];

        this.popularClassesImages = [
            "/images/workout1.jpg",
            "/images/workout2.jpg",
            "/images/workout3.jpg",
            "/images/workout4.jpg",
            "/images/workout5.jpg",
            "/images/workout6.jpg",
            "/images/workout7.jpg",
            "/images/workout8.jpeg",
            "/images/workout9.jpg",
            "/images/workout10.jpg"
        ];

        this.trainers = [
            { name: "Marco", image: "/images/trainer1.jpg" },
            { name: "Lucas", image: "/images/trainer2.jpg" },
            { name: "Elton", image: "/images/trainer3.jpg" }
        ];

        this.allFeatures = [
            { name: "Main Section", data: this.mainSection },
            { name: "Strong Mama Section", data: this.strongMamaSection },
            { name: "Popular Classes", data: this.popularClasses },
            { name: "Popular Classes Images", data: this.popularClassesImages },
            { name: "Trainers", data: this.trainers },
        ];
    }

    getTrainers() {
        return this.trainers;
    }

    getAllFeatures() {
        return this.allFeatures;
    }
}

export default gymPage;
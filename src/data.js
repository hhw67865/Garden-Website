const plants = [
    {
     "id": 1,
     "vegetable": "asparagus",
     "maturity": "2nd year",
     "cultivars": "Jersey Giant, Jersey Knight, Mary Washington, Purple Passion",
     "plantingDates": "Jan. 15 – Mar. 15, Nov. &amp; Dec.",
     "spacing": "36” x 18-24”",
     "depth": "6”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 2,
     "vegetable": "beans, bush",
     "maturity": "50-60",
     "cultivars": "Bronco, Blue Lake 274, Half-Runners (State, White, Volunteer), Kentucky Runner, Roma",
     "plantingDates": "Mar. 15 – May 1, Jul. 5 – Aug. 10",
     "spacing": "36” x 2-4”",
     "depth": "1”-11.5”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
     
    },
    {
     "id": 3,
     "vegetable": "beans, pole",
     "maturity": "65-75",
     "cultivars": "Blue Lake, Dade, Kentucky Blue, Moccasin",
     "plantingDates": "Mar. 15 – May 10, Jul. 1 – Aug. 1",
     "spacing": "36” x 4-12”",
     "depth": "1”-1.5”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 4,
     "vegetable": "beans, lima",
     "maturity": "65-75",
     "cultivars": "Henderson’s Bush Fordhook 242, Jackson Wonder (Speckled)",
     "plantingDates": "Mar. 15 – Jun. 1, Jul. 1 – Aug. 1",
     "spacing": "36” x 3-4”",
     "depth": "1”-1.5”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 5,
     "vegetable": "beans, pole lima",
     "maturity": "80-85",
     "cultivars": "Sieva, Florida Speckled",
     "plantingDates": "Mar. 15 – Jun. 1, Jul. 1 – Aug. 1",
     "spacing": "36” x 6-8”",
     "depth": "1”-1.5”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 6,
     "vegetable": "beets",
     "maturity": "55-65",
     "cultivars": "Detroit Dark Red, Red Ace, Ruby Queen",
     "plantingDates": "Feb. 15 – Apr. 1, Aug. 1 – Sep. 20",
     "spacing": "18-36” x 2”",
     "depth": "0.5”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 7,
     "vegetable": "broccoli",
     "maturity": "60-80",
     "cultivars": "Marathon, Packman, Patriot, Premium Crop, Bravo, Decathion",
     "plantingDates": "Feb. 15 – Mar. 15, Aug. 1 – Sep. 1",
     "spacing": "36” x 12”",
     "depth": "–––",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 8,
     "vegetable": "butterpea",
     "maturity": 70,
     "cultivars": "Dixie",
     "plantingDates": "Apr. 1 – May 1, Jul. 1 – Aug. 1",
     "spacing": "36” x 3-4”",
     "depth": "1”-1.5”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 9,
     "vegetable": "cabbage",
     "maturity": "70-120",
     "cultivars": "A&amp;C No. 5+, Blue Dynasty, Bravo, Early Round Dutch, Rio Verde, Green Jewel",
     "plantingDates": "Jan. 15 – Mar. 15, Aug. 1 – Oct. 1",
     "spacing": "36” x 12”",
     "depth": "–––",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 10,
     "vegetable": "cantaloupe",
     "maturity": "80-90",
     "cultivars": "Ambrosia, Athena, Saticoy Early, Sweet",
     "plantingDates": "Mar. 20 – Jun. 20, ",
     "spacing": "60” x 36”",
     "depth": "1”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 11,
     "vegetable": "carrot",
     "maturity": "70-95",
     "cultivars": "Chantenay, Scarlet Nantes, Sweetbites, Sweet Delight, Thumbelina (small)",
     "plantingDates": "Jan. 15 – Mar. 20, Aug. 20 – Sep. 15",
     "spacing": "18-36” x 2-3”",
     "depth": "0.25”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 12,
     "vegetable": "cauliflower",
     "maturity": "60-75",
     "cultivars": "Absolute, Early Snowball, Graffiti (purple color), White Magic, Symphony",
     "plantingDates": "Mar. 1 – Apr. 1, Jul. 15 – Aug. 15",
     "spacing": "36” x 12”",
     "depth": "–––",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 13,
     "vegetable": "collards",
     "maturity": "55-85",
     "cultivars": "Blue Max, Georgia Southern, Hevi-Crop",
     "plantingDates": "Feb. 1 – Mar. 15, Aug. 1 – Sep. 1",
     "spacing": "36” x 8-16”",
     "depth": "0.5”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 14,
     "vegetable": "corn, yellow",
     "maturity": "65-90",
     "cultivars": "Bodacious, Golden Queen, Honey Select, Mirai 131, Seneca",
     "plantingDates": "Mar. 15 – Jun. 1, ",
     "spacing": "36” x 12-18”",
     "depth": "1”-1.5”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 15,
     "vegetable": "corn, white",
     "maturity": "65-90",
     "cultivars": "Avalon, How Sweet It Is, Seneca Sensation, Silver King, Silver Princess, Silver Queen",
     "plantingDates": "Mar. 15 – Jun. 1, ",
     "spacing": "36” x 12-18”",
     "depth": "1”-1.5”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 16,
     "vegetable": "corn, bi-color",
     "maturity": "65-90",
     "cultivars": "Ambrosia, Butter &amp; Sugar, Honey ‘n Pearl, Mirai 301, Peaches &amp; Cream, Serendipity, Sweet Breed Chorus",
     "plantingDates": "Mar. 15 – Jun. 1, ",
     "spacing": "36” x 12-18”",
     "depth": "1”-1.5”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 17,
     "vegetable": "cucumber, slicing",
     "maturity": "50-65",
     "cultivars": "Bush – Salad Bush Hybrid, Bush Crop, Fanfare\nVine – Burpless Hybrid, Diva, Marketmore, Straight Eight, Sweet Slice, Sweet Success",
     "plantingDates": "Apr. 1 – May 15, Jul. 15 – Aug. 15",
     "spacing": "60” x 12”",
     "depth": "0.5”-0.75”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 18,
     "vegetable": "cucumber, pickling",
     "maturity": "50-65",
     "cultivars": "Bush Pickle, Calypso, County Fair",
     "plantingDates": "Apr. 1 – May 15, Jul. 15 – Aug. 15",
     "spacing": "60” x 12”",
     "depth": "0.5”-0.75”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 19,
     "vegetable": "cucumber, gynoecious",
     "maturity": "50-65",
     "cultivars": "Calypso, General Lee",
     "plantingDates": "Apr. 1 – May 15, Jul. 15 – Aug. 15",
     "spacing": "60” x 12”",
     "depth": "0.5”-0.75”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 20,
     "vegetable": "eggplant",
     "maturity": "75-90",
     "cultivars": "Black Beauty, Classic, Dusky, Ghost Buster’s (white), Calliope",
     "plantingDates": "Apr. 1 – May 15, Jul. 10 – Jul. 30",
     "spacing": "36” x 24”",
     "depth": "–––",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 21,
     "vegetable": "kale",
     "maturity": "50-70",
     "cultivars": "Vates, Dwarf Siberian, Blue Armor, Blue Knight",
     "plantingDates": "Feb. 1 – Mar. 10, Aug. 1 – Sep. 1",
     "spacing": "36” x 8-16”",
     "depth": "0.5”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 22,
     "vegetable": "lettuce",
     "maturity": "60-85",
     "cultivars": "Butterhead, Romaine, Buttercrunch",
     "plantingDates": "Jan. 15 – Mar. 1, Sep. 1 – Oct. 1",
     "spacing": "18-36” x 8-12”",
     "depth": "1\/8”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 23,
     "vegetable": "mustard",
     "maturity": "40-50",
     "cultivars": "Florida Broadleaf, Southern Giant Curled, Red Giant, Savannah",
     "plantingDates": "Jan. 15 – Apr. 1, Aug. 15 – Sep. 15",
     "spacing": "18-36” x 2”",
     "depth": "0.5”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 24,
     "vegetable": "okra",
     "maturity": "55-65",
     "cultivars": "Annie Oakley II, Burgundy, Cajun Delight, Clemson Spineless",
     "plantingDates": "Apr. 1 – Jun. 1, Jun. 15 – Jul. 10",
     "spacing": "36” x 12”",
     "depth": "1”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 25,
     "vegetable": "onion, green",
     "maturity": "60-90",
     "cultivars": "White Portugal",
     "plantingDates": "Jan. 1 – Mar. 15, Sep. 1 – Dec. 31",
     "spacing": "18-36” x 3”",
     "depth": "–––",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 26,
     "vegetable": "onion, dry bulb",
     "maturity": "100-120",
     "cultivars": "Burgundy, Excel, Grano, Red Creole, Savannah Sweet",
     "plantingDates": "Jan. 1 – Mar. 15, Oct. 10 – Nov. 10",
     "spacing": "18-36” x 3-4”",
     "depth": "–––",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 27,
     "vegetable": "peas, garden (English)",
     "maturity": "60-70",
     "cultivars": "Lincoln, Jackson Wonder, Wando, Little Marvel, Green Arrow, Maestro",
     "plantingDates": "Jan. 15 – Feb. 15, ",
     "spacing": "36” x 2”",
     "depth": "1”-2”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 28,
     "vegetable": "peas, edible pod",
     "maturity": "60-70",
     "cultivars": "Sugar Daddy, Snow Pea, Sugar Snap",
     "plantingDates": "Jan. 15 – Feb. 15, ",
     "spacing": "36” x 2”",
     "depth": "1”-2”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 29,
     "vegetable": "peas, Southern",
     "maturity": "60-70",
     "cultivars": "Blackeyed – California #5 Pinkeyed – Purple Hull FVR Cream Pea – Texas Crėme\nCrowder Pea – Mississippi Silver, Zipper Cream",
     "plantingDates": "Apr. 1 – Aug. 10, ",
     "spacing": "36” x 3-4”",
     "depth": "1”-2”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 30,
     "vegetable": "pepper, bell",
     "maturity": "65-80",
     "cultivars": "Big Bertha, Camelot x3a, Colossal, Karma",
     "plantingDates": "Apr. 1 – Jun. 1, Jul. 25 – Aug. 10",
     "spacing": "36” x 24”",
     "depth": "–––",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 31,
     "vegetable": "pepper, hot",
     "maturity": "65-95",
     "cultivars": "Habeñero, Jalepeño, Tula, Marbles",
     "plantingDates": "Apr. 1 – Jun. 1, ",
     "spacing": "36” x 24”",
     "depth": "–––",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 32,
     "vegetable": "pepper, hot-sweet",
     "maturity": "65-95",
     "cultivars": "Banana Supreme, Kuberille, Sweet Banana",
     "plantingDates": "Apr. 1 – Jun. 1, ",
     "spacing": "36” x 24”",
     "depth": "–––",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 33,
     "vegetable": "potatoes, Irish",
     "maturity": "70-90",
     "cultivars": "Red (Pontiac), White (Kennebac, Atlantic, Yukon Gold)",
     "plantingDates": "Jan. 15 – Mar. 1, ",
     "spacing": "36” x 12”",
     "depth": "4”-5”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 34,
     "vegetable": "potatoes, sweet",
     "maturity": "90-120",
     "cultivars": "Centennial, Georgia Red, Giant Jet, Hernandes, Red Jewel",
     "plantingDates": "April 15 – Jun. 15, ",
     "spacing": "36” x 12”",
     "depth": "–––",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 35,
     "vegetable": "pumpkin, tiny",
     "maturity": "85-120",
     "cultivars": "Little Ironsides",
     "plantingDates": "May 15 – Jul. 1 (depending on maturity date), ",
     "spacing": "72” x 48”",
     "depth": "1”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 36,
     "vegetable": "pumpkin, pie type",
     "maturity": "85-120",
     "cultivars": "Small Sugar, Sugar Baby, Touch of Autumn",
     "plantingDates": ", ",
     "spacing": "72” x 48”",
     "depth": "1”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 37,
     "vegetable": "pumpkin, small",
     "maturity": "85-120",
     "cultivars": "Autumn Gold, Jack O Lantern, Jack of All Trades",
     "plantingDates": ", ",
     "spacing": "72” x 48”",
     "depth": "1”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 38,
     "vegetable": "pumpkin, large",
     "maturity": "85-120",
     "cultivars": "Aladdin, Gold Rush, Major Lantern, Merlin",
     "plantingDates": ", ",
     "spacing": "72” x 48”",
     "depth": "1”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 39,
     "vegetable": "pumpkin, giant",
     "maturity": "85-120",
     "cultivars": "Dill’s Atlantic, Giant, Prize Winner",
     "plantingDates": ", ",
     "spacing": "72” x 48”",
     "depth": "1”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 40,
     "vegetable": "radish",
     "maturity": "25-30",
     "cultivars": "Cherry Bell, Scarlet Globe, Champion",
     "plantingDates": "Jan. 15 – Apr. 1, Sep. 1 – Oct. 15",
     "spacing": "24” x 1”",
     "depth": "0.5”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 41,
     "vegetable": "spinach",
     "maturity": "40-45",
     "cultivars": "Melody, Winter Bloomsdale, Hybrid #7",
     "plantingDates": "Jan. 15 – Mar. 15, Sep. 1 – Oct. 15",
     "spacing": "18-36” x 2”",
     "depth": "0.5”-0.75”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 42,
     "vegetable": "squash, summer (zucchini)",
     "maturity": "40-55",
     "cultivars": "Any yellow or green—all are good and easy to grow. Use compact varieties for limited-space gardens.",
     "plantingDates": "Apr. 1 – May 15, Aug. 1 – Aug. 25",
     "spacing": "36” x 24”",
     "depth": "1”-2”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 43,
     "vegetable": "squash, winter",
     "maturity": "85-120",
     "cultivars": "Acorn, Buttercup Bonbon, Butternut",
     "plantingDates": "Apr. 1 – Jul. 1, ",
     "spacing": "60” x 36”",
     "depth": "1”-2”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 44,
     "vegetable": "tomato, determinate",
     "maturity": "70-90",
     "cultivars": "Bush – Celebrity, Early Girl\nBHN 444, BHN 640, Celebrity, Mountain Fresh, Mountain Spring, Rutgers, Amelia, Mountain Pride",
     "plantingDates": "Mar. 25 – May 1, Jun. 15 – Jul. 15",
     "spacing": "48” x 24”",
     "depth": "–––",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 45,
     "vegetable": "tomato, indeterminate",
     "maturity": "70-90",
     "cultivars": "Early Girl, Better Boy, Big Beef, Big Boy, Beefmaster",
     "plantingDates": "Mar. 25 – May 1, Jun. 15 – Jul. 15",
     "spacing": "48” x 24”",
     "depth": "–––",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 46,
     "vegetable": "tomato, cherry",
     "maturity": "70-90",
     "cultivars": "Jolly, Sweet Baby Girl, Super Sweet 100",
     "plantingDates": "Mar. 25 – May 1, Jun. 15 – Jul. 15",
     "spacing": "48” x 24”",
     "depth": "–––",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 47,
     "vegetable": "tomato, grape",
     "maturity": "70-90",
     "cultivars": "Grape, Juliet",
     "plantingDates": "Mar. 25 – May 1, Jun. 15 – Jul. 15",
     "spacing": "48” x 24”",
     "depth": "–––",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 48,
     "vegetable": "turnip",
     "maturity": "40-60",
     "cultivars": "Purple Top, Royal Crown",
     "plantingDates": "Jan. 15 – Apr. 1, Aug. 10 – Sep. 15",
     "spacing": "18-36” x 2”",
     "depth": "0.5”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 49,
     "vegetable": "watermelon – large",
     "maturity": "80-90",
     "cultivars": "Mardi Gras, Royal Majesty, Sangria",
     "plantingDates": "Mar. 20 – May 1, ",
     "spacing": "72” x 36-48",
     "depth": "1”-2”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 50,
     "vegetable": "watermelon – round",
     "maturity": "80-90",
     "cultivars": "Baby Doll, Crimson Sweet, Ice Box, Imagination, Jade Star",
     "plantingDates": "Mar. 20 – May 1, ",
     "spacing": "72” x 36-48",
     "depth": "1”-2”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    },
    {
     "id": 51,
     "vegetable": "watermelon – small",
     "maturity": "80-90",
     "cultivars": "Palm Melon, Solitaire",
     "plantingDates": "Mar. 20 – May 1, ",
     "spacing": "72” x 36-48”",
     "depth": "1”-2”",
     img: "https://blog.jungseed.com/wp-content/uploads/2021/03/Growing-Asparagus-1024x683.jpg"
    }
   ]


export default plants
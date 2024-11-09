import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 3 - Make the styling show up.
//Hint 1: CSS files are static files!
//Hint 2: The header and footer are partials.
//Hint 3: Add the CSS link in header.ejs
app.use(express.static("public"));

//Step 4 - Add a dynamic year to the footer.
//Hint: Google to find out how to get the current year using JS.

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //Step 1 - Make the get route work and render the index.ejs file
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  //Step 2 - Make the generate name functionality work
  //Hint: When the "Generate Name" button in index.ejs is clicked, it should hit up this route.
  //Then:
  //1. You should randomly pick an adjective from the const "adj" and a noun from const "noun",
  //scroll down to see the two arrays.
  //2. Send the index.ejs as a response and add the adjective and noun to the res.render
  //3. Test to make sure that the random words display in the h1 element in index.ejs

  const randBoy = indianBoyNames[Math.floor(Math.random() * indianBoyNames.length)];
  const randGirl = indianGirlNames[Math.floor(Math.random() * indianGirlNames.length)];

  res.render("index.ejs", { Boy: randBoy, Girl: randGirl });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const indianBoyNames = [
  "Aarav", "Vivaan", "Aditya", "Krishna", "Ishaan", "Sai", "Shahil", "Hamdan","Vipplove", "Arnim","Reyan", "Karan", "Arjun", "Ayaan",
  "Shaan", "Rishaan", "Ira", "Anay", "Aadhir", "Ranveer", "Dev", "Veer", "Avi", "Arush",
  "Dhruv", "Vihan", "Vihaan", "Aarush", "Nivaan", "Kiaan", "Pranav", "Divit", "Shivansh", "Aarav",
  "Rudra", "Ved", "Yash", "Vivaan", "Atharv", "Ayaan", "Advik", "Om", "Shaurya", "Raghav",
  "Shiv", "Aryan", "Ansh", "Krish", "Harsh", "Parth", "Kush", "Anay", "Ish", "Viraj",
  "Raaghav", "Arnav", "Nirvaan", "Ronit", "Anshul", "Arin", "Arman", "Pratham", "Kabir", "Hrithik",
  "Eshaan", "Lakshya", "Nishant", "Rehaan", "Virat", "Yuvaan", "Arhaan", "Advaith", "Arush", "Darsh",
  "Manav", "Tanay", "Dhyaan", "Tanish", "Reyansh", "Aryaveer", "Riaan", "Advay", "Atharva", "Rajveer",
  "Darsh", "Tejas", "Krishiv", "Shaurya", "Arnav", "Kunal", "Shrey", "Atharv", "Yug", "Bhavin",
  "Deven", "Yashwanth", "Zaid", "Prithvi", "Niranjan", "Hiten", "Harish", "Shreyansh", "Akarsh", "Eshaan",
  "Arun", "Ishan", "Pranith", "Jeevan", "Rihan", "Shray", "Veer", "Parikshit", "Arin", "Aayush",
  "Navin", "Amit", "Jay", "Ajay", "Raj", "Surya", "Prateek", "Siddharth", "Vinay", "Ankit",
  "Keshav", "Vikram", "Mukund", "Armaan", "Chirag", "Hemant", "Shankar", "Vishal", "Piyush", "Arvind",
  "Rajesh", "Nakul", "Tarun", "Madhav", "Rohit", "Sagar", "Sarvesh", "Devraj", "Sandeep", "Kiran",
  "Dinesh", "Yatin", "Bhavesh", "Bharath", "Anshuman", "Himanshu", "Lokesh", "Shivendra", "Devesh", "Shivam",
  "Sarthak", "Gaurav", "Rajiv", "Ajinkya", "Ritesh", "Nayan", "Balram", "Vasant", "Nilesh", "Anup",
  "Ravi", "Avinash", "Punit", "Vaibhav", "Parthiv", "Sameer", "Pravin", "Hemang", "Jayesh", "Shravan",
  "Omkar", "Shaan", "Ramesh", "Yug", "Shashank", "Jatin", "Shlok", "Ashwin", "Darshan", "Jagadish",
  "Deepak", "Rajat", "Rishi", "Vinit", "Mudit", "Virendra", "Gagan", "Akhil", "Divyansh", "Varun",
  "Naveen", "Aniket", "Manoj", "Milan", "Harshal", "Santhosh", "Jignesh", "Jayant", "Lakshman", "Rupesh",
  "Kalpesh", "Brijesh", "Bikash", "Ashish", "Kaushik", "Tej", "Dheeraj", "Sujay", "Sudeep", "Krishna",
  "Ayaan", "Ram", "Sumit", "Anand", "Bobby", "Sunil", "Umesh", "Sumant", "Shyamal", "Vinod",
  "Pushkar", "Nandu", "Sameer", "Mohan", "Jitesh", "Dhanraj", "Omprakash", "Nitin", "Upendra", "Bhushan",
  "Ranbir", "Ravindra", "Vijay", "Narendra", "Maan", "Pradeep", "Shyam", "Bhagwan", "Kamal", "Kumar",
  "Jatin", "Indrajit", "Devendra", "Rajiv", "Ratan", "Chandresh", "Prakash", "Samir", "Vikrant", "Alok",
  "Bhanu", "Hemendra", "Irfan", "Vijendra", "Narayan", "Sanjay", "Hiren", "Amitesh", "Chetan", "Mahesh",
  "Uday", "Milind", "Ajith", "Rajiv", "Mahendra", "Harendra", "Ajay", "Gopi", "Tushar", "Devendra",
  "Kalyan", "Ramesh", "Satyajit", "Rajnish", "Sajan", "Surendra", "Basava", "Bhargav", "Yogesh", "Tejas",
  "Nikhil", "Vijayan", "Abhishek", "Anil", "Rajesh", "Karthik", "Sandeep", "Ganesh", "Prem", "Manish",
  "Santosh", "Rajkumar", "Ravi", "Ujjwal", "Kundan", "Gopesh", "Balaji", "Akshay", "Naveen", "Raghavendra",
  "Dilip", "Narayan", "Murali", "Akbar", "Kishore", "Santosh", "Ajeet", "Ajay", "Shamim", "Vignesh",
  "Surendra", "Ashok", "Vinayak", "Vinay", "Ashraf", "Aman", "Ajmal", "Yashwant", "Naman", "Prakash",
  "Arjun", "Alok", "Ranveer", "Arnav", "Amarnath", "Ashutosh", "Javed", "Praveen", "Karan", "Sikandar",
  "Vineet", "Aslam", "Shahbaz", "Rupak", "Atul", "Lakshya", "Sarfraz", "Vikash", "Aftab", "Jai",
  "Shrikanth", "Sunil", "Dev", "Sajid", "Arun", "Deependra", "Bhavani", "Sudheer", "Balu", "Aswin",
  "Uttam", "Dharma", "Asad", "Animesh", "Ashfaq", "Altaf", "Pratik", "Arhaan", "Vishwakarma", "Dhiraj",
  "Jamshed", "Prateek", "Jai", "Ajit", "Mahender", "Chintan", "Shekhar", "Ramcharan", "Shrikant", "Udhay",
  "Mohammad", "Ramzan", "Piyush", "Madan", "Mehul", "Shravan", "Harshvardhan", "Arnav", "Sanjay", "Shree",
  "Vikas", "Satyendra", "Ravikant", "Amrit", "Narendra", "Sunil", "Aarav", "Sarath", "Jivan", "Hitesh",
  "Harjeet", "Sachin", "Inderjit", "Arvind", "Gaurav", "Jaswant", "Mukesh", "Murtaza", "Amjad", "Arindam",
  "Salman", "Bipin", "Basudev", "Hardik", "Gurdeep", "Anwar", "Nizam", "Saddam", "Basant", "Chanchal",
  "Keshav", "Govind", "Jayendra", "Mukesh", "Kuldeep", "Balram", "Pravin", "Bhagat", "Sukhdev", "Tarachand",
  "Shailesh", "Shankar", "Balaji", "Aneesh", "Ashwin", "Pratap", "Indranil", "Shahrukh", "Jayprakash", "Yashpal",
  "Sushant", "Daya", "Pravin", "Akshay", "Nagesh", "Ajit", "Sanju", "Kumud", "Pankaj", "Suresh",
  "Zahir", "Shamshad", "Gurcharan", "Rajendra", "Jayaprakash", "Paresh", "Nitin", "Suryakant", "Jagdish", "Anand",
  "Virat", "Nafees", "Ayushman", "Surjit", "Lalit", "Ranjeet", "Vikram", "Subhash", "Devender", "Apoorv",
  "Subodh", "Raghav", "Parveen", "Firoz", "Mohan", "Sunil", "Vinay", "Chandan", "Puneet", "Indrajeet",
  "Arpan", "Varinder", "Dipankar", "Sanjit", "Baldev", "Raghav", "Iqbal", "Jaspal", "Farooq", "Ramanuj",
  "Sharif", "Jagmohan", "Vikrant", "Santhosh", "Sanjog", "Ranjan", "Suhail", "Saquib", "Yuvraj", "Sanjit",
  "Sambhu", "Ankur", "Saurabh", "Piyush", "Samarth", "Dhruva", "Rohit", "Harshvardhan", "Ashfaq", "Saud",
  "Manpreet", "Saket", "Soham", "Sohail", "Sourav", "Prabhat", "Subhas", "Durgesh", "Ravindra", "Vaibhav",
  "Arun", "Gulshan", "Faisal", "Zameer", "Samir", "Basheer", "Mukhtar", "Shafiq", "Ravi", "Nawab",
  "Raghunandan", "Shrish", "Pranav", "Ranjit", "Narayan", "Ameer", "Satyendra", "Lalit", "Gopinath", "Aniket",
  "Arshad", "Sidharth", "Prem", "Anil", "Alok", "Rakesh", "Anand", "Sanjay", "Pawan", "Vignesh",
  "Sohan", "Ram", "Ranjit", "Ranjith", "Yatin", "Bhavesh", "Mahesh", "Vineet", "Ranbir", "Karan",
  "Ranganath", "Naresh", "Kailash", "Shankar", "Rahul", "Satyam", "Abhijeet", "Shrinivas", "Irfan", "Aditya",
  "Sidharth", "Naresh", "Ratan", "Vasant", "Mansoor", "Zahir", "Jitendra", "Jayaram", "Pankaj", "Samiullah",
  "Ravishankar", "Devesh", "Rasik", "Shubham", "Parshva", "Omar", "Pradeep", "Niranjan", "Ram", "Rakesh",
  "Ravi", "Prashant", "Anand", "Rohan", "Manish", "Sudhakar", "Fahad", "Vinay", "Ashok", "Amin"
];


const indianGirlNames = [
  "Aaradhya", "Vivika", "Ananya", "Vani", "Avni", "Sai", "Reva", "Kavya", "Ishita", "Suhani",
  "Athira", "Riya", "Aisha", "Anvi", "Aadhira", "Kiara", "Oviya", "Lavanya", "Pari", "Myra",
  "Shivani", "Radhika", "Vedika", "Anshika", "Prisha", "Devanshi", "Kriti", "Yashika", "Ritika", "Anaya",
  "Daksha", "Hridya", "Jiya", "Ira", "Siddhi", "Ranjana", "Aadya", "Tanvi", "Manya", "Meher",
  "Samaira", "Divya", "Aarohi", "Aastha", "Disha", "Vaishnavi", "Rani", "Mahika", "Nitya", "Shreya",
  "Tara", "Nisha", "Nandini", "Aarya", "Pranavi", "Shloka", "Bhavika", "Charvi", "Damini", "Esha",
  "Gayatri", "Himani", "Indira", "Jhanvi", "Kanchan", "Leela", "Mala", "Neha", "Ojasvi", "Prachi",
  "Rajeshwari", "Shalini", "Tulika", "Urvi", "Vibha", "Zoya", "Alisha", "Binita", "Chandni", "Dipika",
  "Ekta", "Farah", "Gargi", "Heena", "Ila", "Jasmin", "Kajal", "Lalita", "Manvi", "Nalini",
  "Omkari", "Pratibha", "Radha", "Sakshi", "Tanu", "Uma", "Vandana", "Yamuna", "Ankita", "Bhavna",
  "Chetna", "Deepti", "Ekisha", "Falguni", "Geetika", "Harini", "Indu", "Janaki", "Kiran", "Lakshmi",
  "Megha", "Neelam", "Ovi", "Preeti", "Rajni", "Sanjana", "Tanya", "Vaidehi", "Yashasvi", "Anupama",
  "Bharti", "Charul", "Diksha", "Esha", "Fariha", "Gunjan", "Hemangi", "Ikshita", "Jyoti", "Kashish",
  "Lavina", "Mitali", "Namrata", "Ojaswini", "Pallavi", "Rupali", "Sneha", "Trisha", "Vasudha", "Yesha",
  "Aaliyah", "Bhavya", "Chhaya", "Dhyana", "Ela", "Farzana", "Gudiya", "Hina", "Indira", "Jiya",
  "Kanika", "Lata", "Manya", "Niharika", "Pooja", "Ramya", "Simran", "Tanuja", "Vaishali", "Yamika",
  "Akansha", "Basanti", "Chitra", "Damini", "Elina", "Fatima", "Geet", "Hiral", "Ipsita", "Kalpana",
  "Lajja", "Mayuri", "Nikita", "Pranali", "Rajni", "Sarita", "Tanisha", "Vaani", "Zainab", "Anusha",
  "Chandrika", "Dimple", "Ekisha", "Fariha", "Gayathri", "Hina", "Inaya", "Juhi", "Kaira", "Liya",
  "Madhavi", "Nidhi", "Pavitra", "Raina", "Sejal", "Tanushree", "Varsha", "Aasmi", "Barkha", "Chavi",
  "Dhara", "Esita", "Falak", "Gautami", "Hemali", "Ishika", "Jaya", "Kashvi", "Leena", "Mridula",
  "Nayana", "Piya", "Ritika", "Soniya", "Tisha", "Uma", "Veena", "Aarti", "Binita", "Charita",
  "Devyani", "Enakshi", "Fiza", "Gulnaz", "Harsha", "Ila", "Kaveri", "Laksha", "Malini", "Niyati",
  "Palak", "Riya", "Snehal", "Tejal", "Urmila", "Vibha", "Zara", "Alka", "Bhargavi", "Chandana",
  "Devika", "Ekisha", "Faryal", "Gauri", "Hema", "Ishani", "Kanmani", "Latika", "Nandita", "Paridhi",
  "Rama", "Saira", "Toral", "Vandita", "Zoya", "Amrita", "Bhawna", "Dhriti", "Era", "Falguni",
  "Gopika", "Indira", "Kalindi", "Lina", "Medha", "Neelima", "Poorvi", "Samira", "Tara", "Unnati",
  "Vanshika", "Yashika", "Anjana", "Bina", "Chaitali", "Diya", "Elina", "Geeta", "Himani", "Ipshita",
  "Kaavya", "Lekha", "Monika", "Nalini", "Poonam", "Ritu", "Shweta", "Tripti", "Vineeta", "Aahana",
  "Bhakti", "Chinmayi", "Deepa", "Eshwari", "Ganga", "Harita", "Iniya", "Kanisha", "Lakshita", "Mamta",
  "Naina", "Prerna", "Shanaya", "Tulsi", "Vaidehi", "Yamini", "Aditi", "Beena", "Charu", "Dipali",
  "Esha", "Gitanjali", "Isha", "Jigyasa", "Karuna", "Leher", "Manisha", "Nisha", "Pooja", "Rajni",
  "Sneha", "Tina", "Vasundhara", "Zehra", "Ambika", "Bhavika", "Diksha", "Eva", "Farzana", "Garima",
  "Ilaa", "Jivika", "Kashika", "Lata", "Mohini", "Nivedita", "Pavani", "Saloni", "Tripti", "Urvashi",
  "Vidhi", "Akriti", "Brinda", "Chayya", "Disha", "Elisha", "Gayatri", "Inayat", "Kalyani", "Lina",
  "Madhura", "Neetu", "Priya", "Renuka", "Sonika", "Tisha", "Vrinda", "Arpita", "Bhagya", "Chanchal",
  "Devina", "Gulab", "Hemlata", "Ishani", "Jasleen", "Khushi", "Mala", "Nivya", "Palvi", "Rupali",
  "Sheetal", "Tanika", "Vasanti", "Zareen", "Aayushi", "Ashwika", "Ankita", "Bhavya", "Daksha", "Disha",
  "Eesha", "Faiza", "Gargi", "Heena", "Ira", "Janani", "Kamini", "Leena", "Madhavi", "Nandana",
  "Ojas", "Pallavi", "Ravina", "Supriya", "Tiya", "Mehak", "Keerthi", "Ujala", "Veena", "Yashvi", "Aarna", "Bhavna",
  "Charisma", "Deepali", "Ekisha", "Falak", "Gargi", "Nyasa", "Hamsika", "Indira", "Kaveri", "Lalita", "Meenal",
  "Naina", "Prakriti", "Saloni", "Tanika", "Urvashi", "Vaishnavi", "Yamika", "Aanchal", "Anvika", "Bhairavi",
  "Chaitra", "Dhriti", "Enakshi", "Gauri", "Hema", "Ishani", "Kanika", "Latika", "Mahika", "Nikita",
  "Omisha", "Paridhi", "Rekha", "Saniya", "Tina", "Ujjwala", "Vidya", "Yasmin", "Anamika", "Aparna",
  "Bhavika", "Chaitanya", "Divya", "Fathima", "Gulnaz", "Harshita", "Ilina", "Jyoti", "Khushboo", "Lina",
  "Madhulika", "Nayana", "Pratyusha", "Sunaina", "Tanmayi", "Yashodhara", "Aarushi", "Anaya", "Chetna", "Deepika",
  "Farzana", "Gomati", "Ishitha", "Jaya", "Kaveri", "Leher", "Madhu", "Nidhi", "Padma", "Rani",
  "Shivangi", "Tejaswini", "Uma", "Vasudha", "Yamini", "Aditi", "Anushka", "Bina", "Charulata", "Diya",
  "Elina", "Gitanjali", "Hiral", "Ikshita", "Kalpana", "Lakshmi", "Manjusha", "Neelima", "Pranjali", "Ruchi",
  "Simran", "Tanushree", "Unnati", "Vaidehi", "Zarina", "Aaliya", "Barkha", "Chhaya", "Deepti", "Fariha",
  "Gaurika", "Hemani", "Indu", "Jhanvi", "Lajja", "Nitya", "Prerna", "Ridhima", "Surabhi", "Tripti",
  "Vaishnavi", "Yukti", "Alankrita", "Binal", "Chandni","Lagnika", "Elisha", "Gayatri", "Hina", "Ishaani", "Juhi",
  "Kamakshi", "Leela", "Mallika", "Nalini", "Pragya", "Ridhima", "Shanvi", "Tanika", "Usha", "Vaishali",
  "Zara", "Aastha", "Bhavna", "Chitra", "Daisy", "Fariha", "Heeral", "Ila", "Jeevika", "Komal",
  "Lisha", "Nandita", "Prisha", "Reeva", "Sangeeta", "Snehal", "Trishna", "Vidhya", "Anisha", "Anvita",
  "Bhavya", "Deeksha", "Gargi", "Isha", "Kajal", "Kashvi", "Meera", "Neena", "Preet", "Samiksha",
  "Sonali", "Trisha", "Vini", "Yamini", "Avni", "Aarya", "Chandini", "Diksha", "Esha", "Falak",
  "Harini", "Jasleen", "Kanisha", "Laxmi", "Mitali", "Nishita", "Ojasvi", "Parineeta", "Radhika", "Sanya",
  "Tarika", "Varsha", "Arpita", "Alisha", "Divyanshi", "Hetvi", "Hemangi", "Kavya", "Lina", "Pihu",
  "Vanya", "Zainab","Sonam"
];

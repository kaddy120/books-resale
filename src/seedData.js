
export default function SeedBooks(firebase)
{
    let numberOfBooks = 0;
    const BookId = () => numberOfBooks++;
    
    firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "How to save money",
        Categoriy:"Science & Methamatics",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "350",
        Image: ["image1.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "How to save money",
        Categoriy:"Science & Methamatics",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "430",
        Image: ["image2.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "Fundamentals of cost and management accounting",
        Categoriy:"Business & Finance",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "600",
        Image: ["img8.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "A student's approach to income Tax",
        Categoriy:"Business & Finance",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "350",
        Image: ["image4.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "The ultimate advance guide to master c# programming",
        Categoriy: "Computer Scince",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "1200",
        Image: ["img.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "Software Engineering",
        Categoriy:"Computer Scince",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "350",
        Image: ["img1.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "Clean Code",
        Categoriy:"Computer Science",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "400",
        Image: ["img5.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "Node.js",
        Categoriy:"Computer Science",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "470",
        Image: ["img6.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "Principles of Foundation Engineering",
        Categoriy:"Engineering",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "650",
        Image: ["img9.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "Introduction to computer science",
        Categoriy:"Computer Science",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "100",
        Image: ["img13.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "Discoving computer science",
        Categoriy:"Computer Science",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "300",
        Image: ["img14.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "Javascript & JQuery",
        Categoriy:"Computer Science",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "400",
        Image: ["img15.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "How to save money",
        Categoriy:"Engineering",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "760",
        Image: ["image1.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "A history of inequality in South Africa",
        Categoriy:"Humanites",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "800",
        Image: ["img16.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "Cultural Studies",
        Categoriy:"Humanites",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "1300",
        Image: ["img17.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "The digital arts and humanities",
        Categoriy:"Humanites",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "900",
        Image: ["img18.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "Game theory of humanities",
        Categoriy:"Humanites",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "440",
        Image: ["img19.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "Pure Mathematics 1",
        Categoriy:"Science & Mathematics",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "200",
        Image: ["img20.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "How to save money",
        Categoriy:"Social Science",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "350",
        Image: ["image3.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "Practical statics for data scientists",
        Categoriy:"Science & Mathematics",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "1000",
        Image: ["img10.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "The law of contract",
        Categoriy:"Law",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "1200",
        Image: ["img12.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "Numerical Analysis",
        Categoriy:"Science & Mathematics",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "320",
        Image: ["img20.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "How to save money",
        Categoriy:"Medicine & Health",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "390",
        Image: ["image.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });
      firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "How to save money",
        Categoriy:"Medicine & Health",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
        minPrice: "300",
        Image: ["image.png"],
        State: "",
        User_id: "FuWYurz0XQMcPq12cFre2PE7Zbr2",
      });


    //   "Business & Finance",
    //   "Communication and Jonalism",
    //   "Computer Scince",
    //   "Education",
    //   "Engineering",
    //   "Humanites",
    //   "Law",
    //   "Medicine & Health",
    //   "Science & Methamatics",
    //   "Social Science"
        //   "Books" : {
        //     "Category" : "Mathematics",
        //     "DatePosted" : "2021-01-02",
        //     "Description" : "Very Good",
        //     "MinPrice" : 1200,
        //     "Name" : "Calculas",
        //     "State" : "Available",
        //     "User_id" : 1,
        //     "id" : 1
        //   },
    

}

// {
//   "Books" : {
//     "Category" : "Mathematics",
//     "DatePosted" : "2021-01-02",
//     "Description" : "Very Good",
//     "MinPrice" : 1200,
//     "Name" : "Calculas",
//     "State" : "Available",
//     "User_id" : 1,
//     "id" : 1
//   },
//   "Offers" : {
//     "Book_id" : 1,
//     "Price" : 14000,
//     "User_id" : 1,
//     "id" : 1
//   },
//   "Orders" : {
//     "Book_id" : 1,
//     "Status" : "Delivered",
//     "UsrOrd" : 1,
//     "UsrSold" : 2,
//     "id" : 1
//   },
//   "University" : {
//     "Location" : "27.88984349,67.453423",

export default function SeedBooks(firebase)
{
    let numberOfBooks = 0;
    const BookId = () => numberOfBooks++;
    
    firebase.database().ref('Books').set({
        BookId: BookId(),
        Title: "How to save money",
        Categoriy:"Business & Finance",
        DatePosted: "2021-01-02",
        Description:  "this data is for testing seeding",
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
const { Post } = require('../models');

const postdata = [
  {
    title: 'How is my JavaScript looking? Still getting used to the language.',
    post_body: `
    let customers = [
      { id: 0, name: 'paul' },
      { id: 1, name: 'jeff' },
      { id: 2, name: 'mary' }
    ];
    let customer = customers.find(cust => cust.name === 'jeff');
    console.log(customer);
    --> { id: 1, name: 'jeff' }`,
    vote_count: 40,
    user_id: 1,
    tag_genre: 'Advice',
    tag_language: 'Javascript'
  },
  {
    title: 'Lol, funny Java. Slacking off at the office, just thought I should share.',
    post_body: `
    String a = String.valueOf(2);   //integer to numeric string
    int i = Integer.parseInt(a); //numeric string to an int`,
    vote_count: 0,
    user_id: 2,
    tag_genre: 'Funny',
    tag_language: 'Java'
  },
  {
    title: 'Is this the proper way to style a checkbox? I feel I could be doing something better.',
    post_body: `
    .checkbox-container {
        box-sizing: border-box;
        background: #ffffff;
        color: #222;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
    }
    `,
    vote_count: 27,
    user_id: 3,
    tag_genre: 'Advice',
    tag_language: 'CSS'
  },
  {
    title: 'Literally an arrow. Not even an => just ->',
    post_body: `
    public static int[] filterNonUnique(int[] elements) {
      return Arrays.stream(elements)
          .filter(el -> indexOf(elements, el) == lastIndexOf(elements, el))
          .toArray();
    }
    `,
    vote_count: 300,
    user_id: 4,
    tag_genre: 'Funny',
    tag_language: 'Java'
  },
  {
    title: 'I come from a Java background, new to C# so I want to know if there is a better way of doing this :)',
    post_body: `
    // Enter "vmethod2 [Tab]", then...  
    public virtual void MyMethod(object arg1, object arg2)  {
        throw new NotImplementedException();
    }

    // Enter "vmethod3 [Tab]", then...  
    public virtual void MyMethod(object arg1, object arg2, object arg3)  {
        throw new NotImplementedException();
    }
    `,
    vote_count: 420,
    user_id: 5,
    tag_genre: 'Advice',
    tag_language: 'C#'
  },
  {
    title: 'C++ pls...',
    post_body: `
    Cout width example

    //illustrates setting cout width 
    #include <iostream.h>
    #include <stdlib.h>
    #include <iomanip.h>
    
    int main()
    {
    
      cout<<setw(20)<<"setw(20)"<<endl;
      cout<<setw(10)<<"setw(10)"<<endl;
      cout<<setw(15)<<"setw(15)"<<endl;
      
      return 0;
    }
    `,
    vote_count: 69,
    user_id: 6,
    tag_genre: 'Funny',
    tag_language: 'C++'
  },
  {
    title: 'Alright, so the CTO is forcing us to change from Python to a PHP backend and I have no idea what I am doing... Any advice for this?',
    post_body: `
    $result = $mysqli->query('SELECT * FROM students');
    while ($row = $result->fetch_assoc()) {
      echo $row['name'] . '<br>';
    }`,
    vote_count: 99,
    user_id: 7,
    tag_genre: 'Advice',
    tag_language: 'PHP'
  },
  {
    title: 'What is the meaning of int here? I feel like this syntax is a bit funny.',
    post_body: `
    ## Taking Two Integers as input
    a, b = map(int,input().split())
    print("a:",a)
    print("b:",b)
    
    ## Taking a List as input
    arr = list(map(int,input().split()))
    print("Input List:",arr)`,
    vote_count: 19,
    user_id: 8,
    tag_genre: 'Funny',
    tag_language: 'Python'
  },
  {
    title: 'Storing an array of objects, but it feels wrong for actual customer data. Should I be doing something different?',
    post_body: `
    let customers = [
      { id: 0, name: 'paul' },
      { id: 1, name: 'jeff' },
      { id: 2, name: 'mary' }
    ];
    let customer = customers.find(cust => cust.name === 'jeff');
    console.log(customer);
    --> { id: 1, name: 'jeff' }`,
    vote_count: 12,
    user_id: 9,
    tag_genre: 'Advice',
    tag_language: 'Javascript'
  },
  {
    title: 'Commas... :^)',
    post_body: `<input type="file" name="my_image" accept="image/gif,image/jpeg,image/jpg,image/png">`,
    vote_count: 7,
    user_id: 10,
    tag_genre: 'Funny',
    tag_language: 'HTML'
  },
  {
    title: 'With the .checkbox span:first-child, we are getting the first-child as the class right? Just want some clarification',
    post_body: `
    .checkbox span:first-child {
        position: relative;
        flex: 0 0 18px;
        width: 18px;
        height: 18px;
        border-radius: 4px;
        transform: scale(1);
        border: 1px solid #cccfdb;
        transition: all 0.3s ease;
    }`,
    vote_count: 3,
    user_id: 10,
    tag_genre: 'Advice',
    tag_language: 'CSS'
  },
  {
    title: 'Funny date formating in Java.',
    post_body: `java.util.Date = java.text.DateFormat.getDateInstance().parse(date String);`,
    vote_count: 5,
    user_id: 9,
    tag_genre: 'Funny',
    tag_language: 'Java'
  },
  {
    title: 'By making the methods public, that means that they can be accessed globally across the entire file structure, right? Or am I missing something...',
    post_body: `
    // Enter "method [Tab]", then...  
    public void MyMethod()  {
        throw new NotImplementedException();
    }
    
    // Enter "method1 [Tab]", then...  
    public void MyMethod(object arg)  {
        throw new NotImplementedException();
    }`,
    vote_count: 32,
    user_id: 8,
    tag_genre: 'Advice',
    tag_language: 'C#'
  },
  {
    title: 'Today is the first day I tried to use C++. Today is also the last :)',
    post_body: `
    Average

    #include <iostream.h>
    #include <math.h> 
    int main()
    {
      int number1,number2,number3;
      double average;
      
      cout<<"Enter three integers and I will display the average"<<endl;
      cin>>number1>>number2>>number3;
      average = (number1 + number2 + number3) / 3.0;
      cout<<"The average is "<<average<<endl;
      
      return 0;
    }`,
    vote_count: 8,
    user_id: 7,
    tag_genre: 'Funny',
    tag_language: 'C++'
  },
  {
    title: 'Changing around some code, but I am not sure if this is correct in PHP. Not getting any errors, but the while loop is not working. Whats wrong?',
    post_body: `
    $result = $mysqli->query('SELECT * FROM students');
    while ($row = $result->fetch_assoc()) 
      echo $row['name'] . '<br>';
    }`,
    vote_count: 45,
    user_id: 6,
    tag_genre: 'Advice',
    tag_language: 'PHP'
  },
  {
    title: 'So, map takes in two integers but it literally is using the same syntax as javascript would use on a string.',
    post_body: `
    ## Taking Two Integers as input
    a, b = map(int,input().split())
    print("a:",a)
    print("b:",b)
    
    ## Taking a List as input
    arr = list(map(int,input().split()))
    print("Input List:",arr)`,
    vote_count: 5,
    user_id: 5,
    tag_genre: 'Funny',
    tag_language: 'Python'
  },
  {
    title: 'Would the keys hewre be the name before the semicolon?',
    post_body: `
    let myObject = { one: 1, two: 2, three: 3 };
    Object.keys(myObject).forEach((key, value) => {
      //...do something
      console.log(key, value);
    });`,
    vote_count: 23,
    user_id: 4,
    tag_genre: 'Advice',
    tag_language: 'Javascript'
  },
  {
    title: 'What is this weird string in pattern??? lol',
    post_body: `<input type="text" title="email_address" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />`,
    vote_count: 1,
    user_id: 3,
    tag_genre: 'Funny',
    tag_language: 'HTML'
  },
  {
    title: 'What is the difference between :: and : ? It looks like you can use :: stand alone maybe?',
    post_body: `
    ::selection {
      background: aquamarine;
      color: black;
    }
    
    .custom-text-selection::selection {
      background: deeppink;
      color: white;
    }`,
    vote_count: 320,
    user_id: 2,
    tag_genre: 'Advice',
    tag_language: 'CSS'
  },
  {
    title: 'Why does the MM upper case but dd and yyyy are lowercase? Kinda funny.',
    post_body:  `
    SimpleDateFormat format = new SimpleDateFormat( "dd.MM.yyyy" );
    Date date = format.parse( myString );
    `,
    vote_count: 148,
    user_id: 1,
    tag_genre: 'Funny',
    tag_language: 'Java'
  },
  {
    title: 'Advice for a C++ developer trying to get into C#? Not used to this syntax at all and would like some advice.',
    post_body: `
    // Enter "imethod [Tab]", then...  
    public void MyMethod();
    
    // Enter "imethod1 [Tab]", then...  
    public void MyMethod(object arg);`,
    vote_count: 2,
    user_id: 2,
    tag_genre: 'Advice',
    tag_language: 'C#'
  },
  {
    title: 'Funny >> << lol',
    post_body: `
    Area of rectangle

    #include <iostream> 
    using namespace std; 
    
    const double pi = 3.14159; 
    
    int main() 
    { 
      float length, width, area; 
      
      cout << "Enter The Length Of The Rectangle: "; 
      cin >> length; 
      cout << "Enter The Width Of Rectangle: "; 
      cin >> width; 
      area = length*width; 
      
      cout <<"The area of the rectangle is : "<< area << endl;
      
      return 0; 
    }
    `,
    vote_count: 15,
    user_id: 3,
    tag_genre: 'Funny',
    tag_language: 'C++'
  },
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

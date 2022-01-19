const { Post } = require('../models');

const postdata = [
  {
    title: 'Title 1',
    post_body: `let customers = [
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
    title: 'Title 2',
    post_body: `String a = String.valueOf(2);   //integer to numeric string
    int i = Integer.parseInt(a); //numeric string to an int`,
    vote_count: 0,
    user_id: 2,
    tag_genre: 'Funny',
    tag_language: 'Java'
  },
  {
    title: 'Title 3',
    post_body: `.checkbox-symbol {
      position: absolute;
      width: 0;
      height: 0;
      pointer-events: none;
      user-select: none;
    }
    
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
    title: 'Title 4',
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
    title: 'Title 5',
    post_body: `
    // Enter "vmethod [Tab]", then...  
public virtual void MyMethod()  {
    throw new NotImplementedException();
}

// Enter "vmethod1 [Tab]", then...  
public virtual void MyMethod(object arg)  {
    throw new NotImplementedException();
}

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
    title: 'Title 6',
    post_body: `Cout width example

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
    title: 'Title 7',
    post_body: `$result = $mysqli->query('SELECT * FROM students');
    while ($row = $result->fetch_assoc()) {
      echo $row['name'] . '<br>';
    }`,
    vote_count: 99,
    user_id: 7,
    tag_genre: 'Advice',
    tag_language: 'PHP'
  },
  {
    title: 'Title 8',
    post_body: `## Taking Two Integers as input
    a,b = map(int,input().split())
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
    title: 'Title 9',
    post_body: `let customers = [
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
    title: 'Title 10',
    post_body: `<input type="file" name="my_image" accept="image/gif,image/jpeg,image/jpg,image/png">`,
    vote_count: 7,
    user_id: 10,
    tag_genre: 'Funny',
    tag_language: 'HTML'
  },
  {
    title: 'Title 11',
    post_body: `.checkbox span:first-child {
      position: relative;
      flex: 0 0 18px;
      width: 18px;
      height: 18px;
      border-radius: 4px;
      transform: scale(1);
      border: 1px solid #cccfdb;
      transition: all 0.3s ease;
    }
    
    .checkbox span:first-child svg {
      position: absolute;
      top: 3px;
      left: 2px;
      fill: none;
      stroke: #fff;
      stroke-dasharray: 16px;
      stroke-dashoffset: 16px;
      transition: all 0.3s ease;
      transform: translate3d(0, 0, 0);
    }`,
    vote_count: 3,
    user_id: 10,
    tag_genre: 'Advice',
    tag_language: 'CSS'
  },
  {
    title: 'Title 12',
    post_body: `java.util.Date = java.text.DateFormat.getDateInstance().parse(date String);`,
    vote_count: 5,
    user_id: 9,
    tag_genre: 'Funny',
    tag_language: 'Java'
  },
  {
    title: 'Title 13',
    post_body: `// Enter "method [Tab]", then...  
    public void MyMethod()  {
        throw new NotImplementedException();
    }
    
    // Enter "method1 [Tab]", then...  
    public void MyMethod(object arg)  {
        throw new NotImplementedException();
    }
    
    // Enter "method2 [Tab]", then...  
    public void MyMethod(object arg1, object arg2)  {
        throw new NotImplementedException();
    }
    
    // Enter "method3 [Tab]", then...  
    public void MyMethod(object arg1, object arg2, object arg3)  {
        throw new NotImplementedException();
    }`,
    vote_count: 32,
    user_id: 8,
    tag_genre: 'Advice',
    tag_language: 'C#'
  },
  {
    title: 'Title 14',
    post_body: `Average

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
    title: 'Title 15',
    post_body: `$result = $mysqli->query('SELECT * FROM students');
    while ($row = $result->fetch_assoc()) {
      echo $row['name'] . '<br>';
    }`,
    vote_count: 45,
    user_id: 6,
    tag_genre: 'Advice',
    tag_language: 'PHP'
  },
  {
    title: 'Title 16',
    post_body: `## Taking Two Integers as input
    a,b = map(int,input().split())
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
    title: 'Title 17',
    post_body: `let myObject = { one: 1, two: 2, three: 3 };
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
    title: 'Title 18',
    post_body: `<input type="text" title="email_address" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />`,
    vote_count: 1,
    user_id: 3,
    tag_genre: 'Funny',
    tag_language: 'HTML'
  },
  {
    title: 'Title 19',
    post_body: `::selection {
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
    title: 'Title 20',
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
    title: 'Title 21',
    post_body: `// Enter "imethod [Tab]", then...  
    public void MyMethod();
    
    // Enter "imethod1 [Tab]", then...  
    public void MyMethod(object arg);
    
    // Enter "imethod2 [Tab]", then...  
    public void MyMethod(object arg1, object arg2);
    
    // Enter "imethod3 [Tab]", then...  
    public void MyMethod(object arg1, object arg2, object arg3);`,
    vote_count: 2,
    user_id: 2,
    tag_genre: 'Advice',
    tag_language: 'C#'
  },
  {
    title: 'Title 22',
    post_body: `Area of rectangle

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

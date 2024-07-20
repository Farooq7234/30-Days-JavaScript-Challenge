// Day 4: Loops

// Activity 1:

// Task 1: Write a program to print the numbers from 1 to 100 using a for loop.

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop 📚

let tableFive = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`5 X ${i} is ${tableFive * i}`);
}

// Activity 2: While loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop ➕➖

let sum = 0;
let num = 1;

while (num <= 10) {
    sum += num;
    num++;
}

console.log(`The sum of numbers from 1 to 10 is ${sum}`);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop 🔄

let num1 = 10;

while (num1 >= 1) {
    console.log(num1);
    num1--;
}

// Activity 3: DO...While loop

// Task 5: Write a program to print numbers from 1 to 5 using a do... while loop 🔢

let num2 = 1;
console.log("Printing numbers from 1 to 5 using do... while loop:");
do {
    console.log(num2);
    num2++;
} while (num2 <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do... while loop 🔄

let n = 5;
let fact = 1;

do {
    fact *= n;
    n--;
} while (n > 0);

console.log(`The factorial of 5 is: ${fact}`);

// Activity 4: Nested Loop

// Task 7: Write a program to print a pattern using nested for loops 🎨

let counter = 4;

for (let i = 1; i <= counter; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

// Activity 5: Loop control statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement 🚫

let num3 = 10;

console.log('Printing the numbers from 1 to 10 but skipping 5 only:');
for (let i = 1; i <= num3; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using break statement 🛑

let num4 = 10;

console.log('The program will stop when number 7 comes:');
for (let i = 1; i <= num4; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}




// Overall output:


/*
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
5 X 1 is 5
5 X 2 is 10
5 X 3 is 15
5 X 4 is 20
5 X 5 is 25
5 X 6 is 30
5 X 7 is 35
5 X 8 is 40
5 X 9 is 45
5 X 10 is 50
The sum of numbers from 1 to 10 is 55
10
9
8
7
6
5
4
3
2
1
Printing numbers from 1 to 5 using do... while loop:
1
2
3
4
5
The factorial of 5 is: 120
*
**
***
****
Printing the numbers from 1 to 10 but skipping 5 only:
1
2
3
4
6
7
8
9
10
The program will stop when number 7 comes:
1
2
3
4
5
6


*/
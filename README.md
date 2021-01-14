# Nick-s_Password_Generator

# This repository is for my third homework assignment for the University of Washington Full-Stack Coding Bootcamp!

### The goal of this assignment is to utilize JavaScript to create a password generator that creates a password that matches criteria that is set by the user.

## The Acceptance Criteria:

-GIVEN I need a new, secure password

-WHEN I click the button to generate a password

-THEN I am presented with a series of prompts for password criteria

-WHEN prompted for password criteria

-THEN I select which criteria to include in the password

-WHEN prompted for the length of the password

-THEN I choose a length of at least 8 characters and no more than 128 characters

-WHEN prompted for character types to include in the password

-THEN I choose lowercase, uppercase, numeric, and/or special characters

-WHEN I answer each prompt

-THEN my input should be validated and at least one character type should be selected

-WHEN all prompts are answered

-THEN a password is generated that matches the selected criteria

-WHEN the password is generated

-THEN the password is either displayed in an alert or written to the page

## What was done:

-I stored all the possible characters that could go into a password in four separate variable arrays.

-Next I created a large function that included prompts, alerts, conditionals, and an object to gather and store the user inputs. Some of the conditionals verify that the user is giving the correct type of information.

-Next I created a small, but complex function designed to collect a random character from an array.

-After this I created another large function designed to collect the random characters (of the types requested by the user) and combine them into the final password. In this function I defined variables, used conditionals and a couple of iterations.

-Finally another small function took the password rendered it on the webpage.

## Possible improvements:

-If I had more time, I would probably either eliminate some of the alerts that I used to confirm the user's password criteria as it is requested in order to reduce the number of clicks before the password is displayed and to simplify the code. If removing them isn't a good idea because of the assignment requirements, I could also find a way to put them all into a function of some kind.

## Primary Lessons Learned:

-Carefully naming variables and functions can save a ton of confusion...I struggled with this at first, but after borrowing ideas from the instructor, TA's, LA's, students, and W3 Schools, I think I have a pretty good idea of naming from now on.

-Functions were and still are a challenge for me. Stepping back and looking at them as if they are separate components with different purposes help in understanding them, how they work, and how they contribute to the whole.

### Note: No photos are included in this README. I did not change any styles so the webpage looks just like the assignment screenshot.

### Once again, this was a very fun assignment! I am not yet a pro with JavaScript, but after completing this assignment, I feel that I can accomplish almost anything with it!

### This website is live! The URL is: https://rnick1.github.io/Nick-s_Password_Generator/
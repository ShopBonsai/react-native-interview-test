Author and Designer: William Bi

Welcome to my first mobile application!

Implemented: Navigation, detail viewing and details expansion.

Thoughts on mobile application development and React Native:

    React Native is definitely a powerful tool as it can support IOS and Android features without having to
drastically change the code or to generate two completely varying implementations. The flow of the program
is different from the Model-Controller-View design pattern I was used to in Ember and Ruby, although
their foundations are the same, powered by HTML, CSS, and javascript, but the way objects and files intereact
with each other seemed more integrated, as there is no longer a definitive architecture that the designer has to 
conform to when implenmenting an application. As a first time designer in React Native, the syntax and the ES6
were the two biggest adjustment I had to make as they really felt like an alien language compared to Python and C++
that I have been heavily using in school.

How I implented the application and my learning process starting with zero knowledge about React Native:

    1. Learned what components are and that they are the building blocks that make up the application. Noted that I
to need to implement the components in .js files and render them to display features.
-HomePage.js is the front page to the application
-FeedPage.js is the info page to the application that satisfies the requirements
-image_def.js consists of the images declaration that I will source from to my components

    2. Figured out how to incorporate CSS and HTML within the render function of a component to display features
on the IOS and android emulatora.

    3. Import is identical to #include from C++, where libraries functions are imported and trying to figure
out how to navigate from one page to another using CreateStackNavigator library.

    4. After successfully building the naivgation feature, learned how to fetch data from API and how to store
and use the data for future uses. The data structure that I am using is a Flatlist.

    5. After being able to view the data as a plain list, I digged into how use scroll view and expand more data.
I learned that I need to use learn to use ES6 style to implment functions. Implemented a footer function that can
load more data from the API rather having an endless list of information.

    6. Edit each piece of data from API and render each piece of data as an individual item where I made further modifications
how the way each item is displayed and implmented expansion feature for each item.  

    7. Carefully viewed the data and noticed that there are many null data, so I have made a check to neglect them. 
I have used substrings to format the data based off a pattern that I concluded from oberserving the 100 records, but a 
better approach would be to use regular expressions. Many images were null and I had to specify a condition for them to render even if the link is not valid.

Concluding remarks:
    Overall, it was a very fun experience exploring how mobile applications are implemented for the very first time. I learned a great deal and 
it ignited my interest in mobile front-end application development even more now that I got something working. I look forward to this 
opportunity to explore and learn even more from good mentorship in front-end mobile application testing and development. 

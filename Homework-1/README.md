# Assignment 1
### Develop a simple project with any ml5.js models covered in class 

## Intro:
I always use webcam as a mirror or a photobooth. I know I am the one who is showing on the screen. However, does machine think the same thing as I do? In the era of machine learning, machine can use webcam to distinguish different items. One of the tools is the image classifier. So I am wondering what will machine think of who I am? Thus, I create a simple sketch to let machine expose my identity. 

## Process:
I started the assignment from exploring the image classifier first. I was trying to figure out the output it provides, then limiting the range of the result. Then I used text function to print out the name of result. However, it turned out not good as I thought. The text blinked too fast on the screen to read for the user. Then Moon told me to create a class for all the texts and push it all. I limited the texts length default to 20. So when it reaches to 20 texts on the screen, it splice the first index from the array. 
After the basic function, I started to smooth the data from the result. The first filter is the undefined (which will be shown before the model get loaded), then I created another filter to filter out the repetitive and consistent name (using a varible to store the previous frame's name). After that, the data got clearer. 
I added the graphic layer on top of the canvas so that it won't be overlapped with the webcam frames. I also added the gui to control the texts length and a function to make the webcam stop at the frame that you like.

## Implements
Since this the first assignment, I just explored the basic stuff with one function. For the next step, I want to use Google image api to push the image that relates to the text and lay it next to the webcam frame. Also the text position is kinda weird right now (not totally random). So I want to change that. 

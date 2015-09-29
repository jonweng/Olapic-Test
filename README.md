# Olapic-Test

Javascript/Jquery process

The first step in my rpoject was to figure out how to pull the photos into my project. 

I looked through the photorankapi and decided to use all media to pull out the photos and simply have them sorted by most recent

I dedcided to use jQuery's $.ajax function to do call the data with the token and customer ID.

I used https://photorankapi-a.akamaihd.net/?auth_token=XXXX&version=v2.2 from the photorank to aquire the customer ID.

After receiving the data, I appended all the data to view class with a thumbnail after seeing that the normal would be too big. 

Made all images float left

Next I needed to make all the photos fit in a line so I calculated the required width of the view I injected the data into

To do this, I requested the length of the resulting data set and multiplied it by the thumbnail size, 150px x 150px and added it to my planned amrgins between each image(5px)

I assigned this value to the width of the class view which allowed all the images to fit in the view without going to the next line.

I created the css to only display 6 images and center everything out

Next I needed to add functionality to the right and left arrows and create a functioning carousel.

I decided to make the left arrow show the next image on the left and vice versa for the arrow on the right.

For the left move I needed to put the last image in the class to the front and for the right move I needed to put the first image into the back.

For the left move I needed to add the last photo to the front before animating. 

For right I needed to animate first and then move the image to the back otherwise the image would vanish from the front of the carousel and then move.

To animate, I set a default variable as a reference point. If moving left, move from -160 to 0. To move right I would move from 0 to -160. After the right movement, the left position needed to be reset to 0.




After the carousel worked, I implemented the lightbox using this code.
http://webdesign.tutsplus.com/articles/super-simple-lightbox-with-css-and-jquery--webdesign-3528

I went back to my original append code to add an additional class with a hyperlink to the normal image.

I resolved versioning issues in the code due to alive function being deprecated in jquery 1.10.

I added a fade in and fade out to the code.

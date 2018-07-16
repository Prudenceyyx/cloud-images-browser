# cloud-images-browser
A web demo showing photos grabbed from my cloud

### A bit intro
[Cloudinary](https://cloudinary.com/) is a cloud-based image and video management tool that provides a set of API for access and manipulation. You can register free and have about 10GB space.

This demo graps all images stored in my cloudinary account and renders them in a simple web page. An extra step is that for each iamge, there is also a qr code to the image url beside it. 

The basic steps are:
1. Set configuration using Cloudinary Javascript protocol
2. Use Cloudinary API to list all the files you require
3. Pass them to Pug(a view enginee in express.js) and render them the way you like


### Pre-Install
Make sure you have [node.js](https://nodejs.org/en/) and [express.js](https://expressjs.com/) installed.

In the folder of myapp
```
npm install cloudinary
npm install cloudinary-core
npm install qrcode-generator
```


### Run
in terminal open the folder
```
cd myapp/
```
and then
```
DEBUG=myapp:* npm start
```


#### How and Why did I build it?
It inherits from my last [Shooting-for-magazine](https://github.com/Prudenceyyx/Shooting-for-magazine) repository. But this time, instead of rendering images stored locally, the web displays cloud-based images, which is more dynamic and easier for management.

After installing express.js framework, I created a new app and tweaked following files:
view/index.pug
route/index.js
public/style/style.css

Hope it is of at least a little use to you. Or it's a note to myself ;)

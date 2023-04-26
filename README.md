# Ecart-Fronend-Microservice

The portal should have a registration page for customers. Once registered, the customer needs to login with user id and password. Once logged in, the customer should see a list of products by default (any products – these can be retrieved from DB) where user can add selected products to the cart. The cart should be persisted. Admin or seller can add or remove new items and update the quantity, when new items arrival.
 
 -	User can add max 5 products to cart at a time
 -  User can remove product from cart
 -  The cart can be persisted for his next login.
 -  If all the products are removed, cart should not be displayed
 -  User validation should be done as user tries to login. User should be unique.
 -  User can add review to the product

### Used Technologies

|  Name of the Technologies |
| ------------- |
| Front End : ReactJs, Redux, HTML, CSS |
| Backend  : NodeJS/ Spring Boot Framework |
| API : REST API, Axios |
| DB: MongoDB/MySQL |

### Micro Service Internal Pages

- ### Login Page

![image](https://user-images.githubusercontent.com/130539763/231431625-772d1be9-e441-4d08-affd-a75603892afb.png)

Steps to Run The Microservice :

- Open Command Prompt in Root Folder and Run the following command
```
> npm install
```
- After the installing the Packages we need to build the application
```
> npm run build
```
- After successfull build completion, we need to start the server
```
> npm run start
```




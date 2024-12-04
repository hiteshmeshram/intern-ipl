#### for backend- node js  / express js / ts 
  npx prisma db seed  -run this command so that dummy data will be seed into your db
  cd backend   and then run npm run dev which will start the node js server 

#### for frontend  - react + ts
  cd frontend
  npm run dev   - this command will start your frontend locally


  ###### features
  for authentication and aurhorization and role based access  
    -  i have implemented jwt token so that while accessing a particular route it will go through middleware and based on that if its admin then only he is able to add products and make changes into then 
       if its a user then he can only view and put them into the cart 
    - for storing password i have user bcrypt for storing hashed password of user 
    - also implemented zod for validations 
    - based on user color preference i have assigned them the ipl team and the ui/ux will be based on the user allocated team
  

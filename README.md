# Step 1: Project Setup 
- After Clone 
- npm install 
- npm run dev 
   
# HTTP Method Dropdown 
- GET
- POST


# you can Check Api on Get Method 
https://dummyjson.com/posts
https://dummyjson.com/products

# you can Check Api on Post Method  
https://dummyjson.com/auth/login

json Body Data :- 
```jsx
{
  "username": "emilys",
  "password": "emilyspass",
  "expiresInMins": 30
}
```

# Request Section 
Create tabs for: 
• Params 
• Headers 
• Body 
Users are able to switch between tabs.

# Query Params 
• Add/remove key-value pairs only one add and delete one time..
• Convert params into query string before sending 

# Body 
Accept JSON only 
• Show validation error if invalid JSON (such as border red in my project)
• Only enable for POST/PUT

# Environment Variables
- You can add environment variable only one at a time 
- You can delete environment variable using same key value pair 
- set last time environment variable only 
- check in search bar {{environment.key}}

#  Send Request
• Show loading spinner 
• Disable button if , input url is null 
• Measure response time using performance.now().
• Handle errors properly 
• Data fetch i use fetch method  

# Response Viewer
• Status Code 
• Status Text 
• Response Time 
• Response Headers 
• Response Body 

## Tab 
- Body 
- Header (Not Complete).

# Pretty JSON Viewer
Response body must be formatted 
Indented properly 
Syntax highlighted (if possible) 
Collapsible JSON (bonus) 

- use React JSON viewer library

# Request History 
• Store last 5 requests 
• Click history item → auto fill request fields 

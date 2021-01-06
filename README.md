https://www.youtube.com/watch?v=Fdf5aTYRW0E&t=232s
 Brad
 


{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AddPerm",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::todobrad/*"
            ]
        }
    ]
}

# Angular Crash Course (TodoList)

This is the code for the crash course on YouTube

## Quick Start

```bash
# Install dependencies
npm install

# Serve on localhost:4200
ng serve

# Build for production
ng build
```

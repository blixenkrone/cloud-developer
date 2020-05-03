# Projects

All code and screenshots are under the each project{num}. F.ex project1/screenshots

## Notes:

### Project 1 web app

See screenshots

### Project 2 "fullstack apps on aws"

 has a setTimeout() func, because it's a syncronous function. I modified it to accept a single file instead of an array, because the task didn't specify, that you could send an entire array as headers. Otherwise I would suggest a POST req. with a body containing an array of URL's to be parsed. Code is working, but is not suitable for production :-)

### endpoint is: http://development.eba-p3mjry2z.eu-north-1.elasticbeanstalk.com/

remember to set image_url query parameter.

### Project 3 Monolith to Microservices
- create and fill a .env file with the same variables as your set_env.sh, then you can try the project with docker-compose.

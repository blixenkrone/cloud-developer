# Projects

All code and screenshots are under the each project{num}. F.ex project1/screenshots

## Notes:

### Project 1 web app

See screenshots

### Project 2 "fullstack apps on aws"

 has a setTimeout() func, because it's a syncronous function. I modified it to accept a single file instead of an array, because the task didn't specify, that you could send an entire array as headers. Otherwise I would suggest a POST req. with a body containing an array of URL's to be parsed. Code is working, but is not suitable for production :-)

endpoint is: http://development.eba-p3mjry2z.eu-north-1.elasticbeanstalk.com/

remember to set image_url query parameter.

### Project 3 Monolith to Microservices
- create an `.env` file and fill with the same variables as your set_env.sh (KEY:VAL), then you can try the project with $ make docker_up or $ docker-compose up.

OBS:

1. CI/CD is created with github actions instead of travis  as permitted by this thread https://knowledge.udacity.com/questions/154496. You can see the files in the .github folder, and see in screenshots for the build pipe.

2. The reverse proxy is build in the same Dockerfile as the frontend is. It's a multistage build running a nginx image and uses the nginx server for the ionic app instead of node.

4. Open "screenshots" folder for project requirements.

TODO: create github actions

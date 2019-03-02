const { HelloRequest } = require('./helloworld_pb.js');
const { GreeterClient } = require('./helloworld_grpc_web_pb.js');

// if you on mac, change this ip address to your docker-machine ip.
// $ docker-machine ip
// 192.168.99.100 (your machine could be different).
//
// Mine is 192.168.99.100, again, replace it with yours.
const client = new GreeterClient('http://192.168.99.100:8080');

const request = new HelloRequest();
request.setName('World');

client.sayHello(request, {}, (err, response) => {
  console.log(response.getMessage());
});

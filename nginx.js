
module.exports = require("./config")({
  volumes: [ "config" ],
  services: {
    nginx: {
      image: "nginx:latest",
      ports: [ "8080:80" ],
      volumes: [ "config:/etc/nginx/conf.d" ],
    },
  },
})

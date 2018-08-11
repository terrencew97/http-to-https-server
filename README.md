# HTTP-to-HTTPS Reverse Proxy Server

## Overview

This is a simple reverse proxy server built by Node.js. It is a simple server that redirects all the HTTP requests to HTTPS.

It is useful when you want to force all the connections to be secured, while you don't want to install a big server like nginx.

## Getting Started

### Prerequisites

- Node.js

### How to run it

1. Clone the repository

2. Redirect all your HTTP connection to port 8080

   **Example**: If your default HTTP port is 80 and you are using LINUX distribution, you can use this command:

   `sudo iptables -t nat -D PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080 `

3. Go to the project directory

4. `npm start`

5. Done!

## License

This project is licensed under the MIT License - see the LICENSE file for details


# 🎉 New Festival Town 🎮

## 📜 Description

New Festival Town is a revolutionary virtual console designed to bring your digital assets to life through the nostalgic charm of retro gaming. Developed by [Ashara Studios](https://asharastudios.com/), our platform leverages the power of NFTs to give players true ownership of their in-game assets. Players can engage with various mini-games, decorate their virtual spaces, and explore a dynamic, ever-evolving world. Our goal is to create meaningful, engaging experiences that merge the magic of classic gaming with the innovative potential of blockchain technology. Join us in New Festival Town and be part of the future of gaming! 🚀

## Usage

### Requirements

The only requirement is to have an HTTP server available. A static HTTP server like [`httpserver`](https://github.com/bahamas10/node-httpserver) is enough, which is available through [npm](https://www.npmjs.com/package/httpserver) or [yarn](https://yarnpkg.com/package?q=httpserver&name=httpserver).:

```sh
# To install httpserver, please run ONCE and ONLY ONE OF the following:

# If you prefer npm:
npm i -g httpserver

# If you prefer yarn:
yarn global add httpserver
```

### Run

To run, serve the contents of [public](public) folder:

```sh
cd public
httpserver
```

Then just go to http://localhost:8080/. The default port is `8080`, you can change it adding `-p PORT` at the end.

### Quit

To stop the demo served through httpserver with the abovementioned steps, just press <kbd>Ctrl</kbd> + <kbd>C</kbd>.

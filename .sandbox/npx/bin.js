#! /usr/bin/env node

const { homedir } = require("os")
const { join } = require("path")
const { existsSync, mkdirSync } = require("fs")

const configs = {
  nginx: require("./nginx"),
}

if(process.argv.length < 3) {
  console.log("Usage: npx bosquet <name>")
  displayConfigs()
  process.exit(1)
}

const name = process.argv[2]

if(!configs[name]) {
  console.log(`Unknown config ${name}`)
  displayConfigs()
  process.exit(1)
}

const root = join(homedir(), ".bosquet")
if(existsSync(root)) {
  console.log("Using root directory: " + root)
} else {
  console.log("Creating root directory: " + root)
  mkdirSync(root)
}

const dir = join(root, name)
if(existsSync(dir)) {
  console.log("Using config directory: " + dir)
} else {
  console.log("Creating config directory: " + dir)
  mkdirSync(dir)
}

configs[name](dir)

function displayConfigs() {
  console.log("Available configs: "
    + Object.keys(configs).sort().join(", ")
  )
}

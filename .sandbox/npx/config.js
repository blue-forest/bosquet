const { join } = require("path")
const { writeFileSync } = require("fs")
const { spawnSync } = require("child_process")

module.exports = function (config) {
  return function (cwd) {
    let output = `version: "3.7"\n`
    if(config.volumes) {
      output += `volumes:\n`
      for(const volume of config.volumes) {
        output += `  ${volume}:\n`
      }
    }
    output += `services:\n`
    for(const [name, service] of Object.entries(config.services)) {
      output += `  ${name}:\n`
      output += `    image: ${service.image}\n`
      if(service.ports) {
        output += `    ports:\n`
        for(const port of service.ports) {
          output += `    - ${port}\n`
        }
      }
      if(service.volumes) {
        output += `    volumes:\n`
        for(const volume of service.volumes) {
          output += `    - ${volume}\n`
        }
      }
    }
    writeFileSync(join(cwd, "docker-compose.yml"), output)

    let execute = true
    try {
      execSync("docker --version")
    } catch (e) {
      console.log("Docker is not installed, skipping execution")
      execute = false
    }

    if(execute) {
      spawnSync("docker", ["compose", "up"], {
        cwd,
        env: { FORCE_COLOR: "1" },
        stdio: [ process.stdin, process.stdout, process.stderr ],
      })
    }
  }
}

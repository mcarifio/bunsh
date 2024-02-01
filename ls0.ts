#!/usr/bin/env -S bun run

const manifest = {
    author: "Mike Carifio",
    email: "mike@carif.io",
    version: "0.0.1",
    vcs: "https://github.com/mcarifio/bunsh/src/start.template.cli.bun.js",
};


import { parseArgs } from "util";
import "process";

const shared_options = {
    /* --verbose */ verbose: { type: 'boolean', },
    /* --version */ version: { type: 'boolean', },
};
const specific_options = { };

const { values, positionals } = parseArgs({args: Bun.argv, options: { ...shared_options, ...specific_options, }, strict: true, allowPositionals: true, });

if (values.version ?? false) {
    console.log("version");
    process.exit(0);
}

// console.log(values);
// console.log(positionals);


import { $ } from "bun";

// to stdout:
await $`ls *.ts`;

// to string:
// const text = await $`ls *.ts`.text();


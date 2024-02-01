#!/usr/bin/env -S bun run
// usage: cp start.template.cli.bun.js your-bun-script.cli.bun.js // then hack

// TODO mike@carif.io: generate missing portions?
const myself = {
    manifest: {
        author: "Mike Carifio",
    	email: "mike@carif.io",
    	version: "0.0.1",
    	vcs: {
	     protocol: "https",
	     user: null,
	     host: "github.com",
	     owner: "mcarifio",
	     project: "bunsh",
	     folder: "src/",
	     name: "start.template.cli.bun.js",
	     hash: null, // TODO mike@carif.io: need this?
	     // myself.manifest.vcs.url()
	     url: function(hash:string = null /* override manifest's hash */) {
	         let result = `${this.protocol}//${this.host}/${this.owner}/${this.project}/${this.folder}${this.name}`;
		 if (hash) result +=  "#" + hash;
		 else if (this.hash) result += "#" + this.hash;
		 return result;
	     },
	},
    },
};

// parse the cli
import { parseArgs } from "util";
import "process";


// most cli's have these flags
const shared_options = {
    /* --verbose */ verbose: { type: 'boolean', },
    /* --version */ version: { type: 'boolean', },
};

// your cli adds these places (count is just an example)
const specific_options = {
    /* --count=10 */ count: { type: 'string', },
};



// parse the invocation
const { values, positionals } = parseArgs({args: Bun.argv, options: { ...shared_options, ...specific_options, }, strict: true, allowPositionals: true, });

if (values.version ?? false) {
    console.log(`${myself.manifest.version} (vcs ${myself.manifest.vcs.url()})`);
    process.exit(0);
}

console.log(values);
console.log(positionals);



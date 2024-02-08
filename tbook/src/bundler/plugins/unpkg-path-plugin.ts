import * as esbuild from "esbuild-wasm";

export const unpkgPathPlugin = () => {
  return {
    name: "unpkg-path-plugin", 
    setup(build: esbuild.PluginBuild) {

      // handle root entry file index.js
      build.onResolve({filter: /(^index\.js$)/}, ()=>{
        return {path: 'index.js', namespace: "a"}
      })

      // handle relative files
      build.onResolve({filter: /^\.+\//}, (args: any)=>{
        return {
          namespace: "a",
          path: new URL(
            args.path,
            "https://unpkg.com" + args.resolveDir + "/"
          ).href,
        };
      })

      // for main file 
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        console.log("onResole", args);

        return {
          namespace: "a",
          path: `https://unpkg.com/${args.path}`, 
        };
      });


    },
  };
};
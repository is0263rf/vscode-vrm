# vscode-vrm
Viewer for .vrm file.

## What is VRM?
See [official website](https://vrm.dev/en/vrm/vrm_about/). But this repository is not affiliated with the official website.

## Install
1. Go to [Release](https://github.com/is0263rf/vscode-vrm/releases) and download .vsix file.
1. Open VSCode and select `Install from VSIX`.

## Build from source
You can create vsix file from source. 
1. Install vsce.
```
npm install -g @vscode/vsce
```

2. Open repository directory.
```
cd <path/to/repository>
```

3. Running the following command will create a .vsix file.
```
vsce package
```

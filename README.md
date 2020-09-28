# 'React Starter'

This is a basic react starter repo

## Usage

```zsh
git clone https://github.com/mohammadid52/react-starter.git foldername
```

then change the directory to that folder and run `npm i`

That's it

## Shortcut Method

This is a shortcut trick to directly clone the repository and install all the dependencies and automatically open editor of that folder

1. First step

   - Go to home directory `cd ~`

2. Second step

   - open zsh config file `open ~/.zshconfig`

3. Third step
   - add aliases at the bottom(_or wherever you want_)
     like this

```zsh
alias starter = cloner(){git clone https://github.com/mohammadid52/react-starter.git $1; cd $1; code .; npm i; }; cloner
```

4. Fourth step
   - type `source ~/.zshrc` //recommended or restart the terminal
5. Fifth step
   - type `alias` to check the alias
6. Final step
   - type `starter {appname}`
     _name your app_ and it will do all things for you

<!--


Type "git clone https://github.com/mohammadid52/react-starter.git" in your terminal

### `Shortcut Method`

Add alias to your zsh config file
 -->

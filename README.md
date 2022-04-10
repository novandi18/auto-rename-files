# Auto Rename Files v1.0.3
Feel tired when renaming multiple files one by one? calm down, this tool can help your day become easier and quickly!

## Table of Contents
- [Features](#features)
- [Style Case](#style-case)
- [Installation](#installation)
- [How to use](#how-to-use)
- [Arguments](#arguments)
- [Style Case Arguments](#style-case-arguments)
- [Examples](#example)
  - [Linux](#linux)
  - [Windows](#windows)

## Style Case
- Camel Case
- Dot Case
- Kebab Case
- Lower Case
- Pascal Case
- Snake Case
- Upper Case

## Installation
<pre><code>npm i -g auto-rename-files</code></pre>

## How to use
<pre><code>autorename 'path' -case</code></pre>

## Arguments
| Name | Description | Default |
|------|-------------|---------|
| 'path' | Your files path directory | './' |
| -case  |      Your style case      | null |

## Style Case Arguments
| Name | Syntax |
|------|--------|
| Camel Case | -cc |
| Dot Case | -dt |
| Kebab Case | -kc |
| Lower Case | -lc |
| Pascal Case | -pc |
| Snake Case | -sc |
| Upper Case | -uc |


## Examples
#### Linux
<pre><code>autorename '/path/to/your/directory/' -case</code></pre>
#### Windows
<pre><code>autorename 'C:/path/to/your/directory/' -case</code></pre>
=======
# Auto Rename Files v1.0.2
Feel tired when renaming multiple files one by one? calm down, this tool can help your day become easier and quickly!

## Table of Contents
- [Features](#features)
- [Style Case](#style-case)
- [Installation](#installation)
- [How to use](#how-to-use)
- [Arguments](#arguments)
- [Example](#example)
  - [Linux](#linux)
  - [Windows](#windows)

## Style Case
- Camel Case
- Dot Case
- Kebab Case
- Lower Case
- Pascal Case
- Snake Case
- Upper Case

## Installation
`npm i -g auto-rename-files`

## How to use
`autorename <path>`

## Arguments
| Name | Type | Description | Default |
|------|------|-------------|---------|
| Path | String | Your files path directory | './' |

## Examples
#### Linux
`autorename '/path/to/your/directory/'`
#### Windows
`autorename 'C:/path/to/your/directory/'`

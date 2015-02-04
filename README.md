# generator-nglib-seeds

> Seed templates for generating [boilerplate-nglib](https://github.com/cork-labs/boilerplate-nglib) with [generator-nglib](https://github.com/cork-labs/generator-nglib).

## How To

The following will generate a AngularJS library project using Cork Labs defaults.

```
npm install -g yo generator-nglib
mkdir cx.foobar
cd cx.foobar
yo nglib --config https://raw.githubusercontent.com/ef-ctx/generator-nglib-seeds/master/cork-labs-nglib/.yo-rc.json --tpl git@github.com:ef-ctx/generator-nglib-seeds.git --tpl-path cork-labs-nglib/templates --tpl-branch v0.0.1
```

To generate from a local seed and/or local template:

```
yo nglib --config ~/.yo-rc.json --tpl ~/templates/
```

To skip existing cache of the template repo (if you are not using proper tags, of course) add `--tpl-refresh`.

Further documentation can be found at:
- [boilerplate-nglib](https://github.com/cork-labs/boilerplate-nglib)
- [generator-nglib](https://github.com/cork-labs/generator-nglib)


## [MIT License](LICENSE-MIT)

[Copyright (c) 2015 Cork Labs](http://cork-labs.mit-license.org/2015)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

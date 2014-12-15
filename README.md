smtp2sendgrid
====

A command line server to create and listen as a smtp server. The every mail send to the server will transfer to sendgrid account to delivery to receiver.

# Installation

```
npm install smtp2sendgrid -g
```

# Usage

You can use -h to see the help page:
```
$ smtp2sendgrid -h

  Usage: smtp2sendgrid [options]

  Options:

    -h, --help                           output usage information
    -V, --version                        output the version number
    -u, --username <sendgrid user name>  Specific the sendgrid username for login
    -p, --password <sendgrid password>   Specific the sendgrid password for login
    -t, --tmp <tmp file location>        We will save the content to file in the tmp path
```

Sample command:

```
sudo smtp2sendgrid -u [sendgrid-username] -p [sendgrid-password] -t [tmp-file-folder]
```

# Others

Thank for use, report bug : simonsu.mail@gmail.com

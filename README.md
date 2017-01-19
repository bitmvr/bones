# Bones

Bones is a lightweight CLI utility that helps you get up and running quickly by providing default files based on some of the most popular scripting and programming languages. Bones was created to remove the annoyance of creating a file, providing a shebang, header or top comment as well as making the script executable.


## Give it a try

After you've installed bones, you simply just navigate to a directory and execute:

```bones hello_world.sh```

Once that has executed, perform a directory listing and you should see your new file. Open it up in your most favorite text editor and you should see the following.

```
#!/usr/bin/env bash

echo "Hello World!"
```

## How does it work?

Bones inspects the file you provided and determines what extension it has. It then looks for skeletons in it's closet that match that file extension. If bones finds a skeleton, it copes that skeleon over, renames it to your requested file and then makes it executable.

Most skeletons have `Hello World!` samples inside of them and can easily be deleted. Others simply have comments at the top of the page.

That's it. Hopefully you enjoy bones and find some use from it.

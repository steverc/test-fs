test-fs
=======

Test of webinos fs used to emulate a db.
The test alternates a insert and a find on the emulated db (see file js/dbemul.js).
When it stops it means that some error has occured (it should continue endlessly).
If I run the test opening the console of the chrome browser (that is slowing down execution) all work better, that is the number of failures is far less.

Prerequisites:
1. create a file service with name or path containing '__test_fs'
2. This dir should contain an empty file called 'data'

Run the test:
1. Copy (or link) this dir in pzp web_root
2. Start pzp
3. Load in browser (I used chrome) page localhost:8080/test_fs/


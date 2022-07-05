from cgitb import text
from tkinter import *
import os
import js2py
from temp import *
import subprocess as sub




root = Tk()
def blick():
    os.system("node app.js")
mylabel = Button(root, text = "Validate License Key", command=blick, fg="blue")


mylabel.pack()

root.mainloop()
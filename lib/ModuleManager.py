import glob
import os
from lib.Module import Module

class ModuleManager:
    def __init__(self):
        self.list = {}
        self.update()

    def update(self):
        path = "input//"
        for filepath in glob.glob(path+"*.cmu"):
            with open(os.path.join(os.getcwd(),filepath),'r') as file:
                filename = filepath[6:-4]
                self.list[filename] = Module(filename, file)

    def getModules(self):
        return self.list